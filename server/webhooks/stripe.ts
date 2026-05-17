import { Request, Response } from "express";
import Stripe from "stripe";
import { getDb } from "../db";
import { giftCards } from "../../drizzle/schema";
import { eq } from "drizzle-orm";
import { nanoid } from "nanoid";
import { sendGiftCardEmail } from "../services/email";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || "";

export async function handleStripeWebhook(req: Request, res: Response) {
  const sig = req.headers["stripe-signature"];

  if (!sig) {
    console.error("[Webhook] Missing stripe-signature header");
    return res.status(400).json({ error: "Missing signature" });
  }

  if (!webhookSecret) {
    console.error("[Webhook] STRIPE_WEBHOOK_SECRET not configured");
    return res.status(500).json({ error: "Webhook secret not configured" });
  }

  let event: Stripe.Event;

  try {
    // Construct the event from the raw body and signature
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      webhookSecret
    );
  } catch (err) {
    console.error("[Webhook] Signature verification failed:", err);
    return res.status(400).json({ error: "Invalid signature" });
  }

  console.log(`[Webhook] Received event: ${event.type}`);

  try {
    switch (event.type) {
      case "checkout.session.completed":
        await handleCheckoutSessionCompleted(event.data.object as Stripe.Checkout.Session);
        break;

      case "payment_intent.succeeded":
        console.log("[Webhook] Payment intent succeeded");
        break;

      default:
        console.log(`[Webhook] Unhandled event type: ${event.type}`);
    }

    res.json({ received: true });
  } catch (error) {
    console.error("[Webhook] Error processing event:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function handleCheckoutSessionCompleted(session: Stripe.Checkout.Session) {
  console.log("[Webhook] Processing checkout.session.completed");

  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  const metadata = session.metadata;
  if (!metadata) {
    throw new Error("Missing metadata in checkout session");
  }

  const {
    recipientEmail,
    recipientName,
    message,
    buyerEmail,
    amount,
  } = metadata;

  if (!recipientEmail || !recipientName || !buyerEmail || !amount) {
    throw new Error("Missing required metadata fields");
  }

  // Generate unique gift card code
  const code = `MESDAMES-${nanoid(12).toUpperCase()}`;

  // Get buyer ID (use 1 as default for now, should be linked to user)
  const buyerId = 1;

  // Store gift card in database
  await db.insert(giftCards).values({
    code,
    amount: parseInt(amount),
    buyerId,
    buyerEmail,
    recipientEmail,
    recipientName,
    message: message || null,
    status: "paid",
    stripePaymentIntentId: session.payment_intent as string,
  });

  console.log(`[Webhook] Gift card created: ${code}`);

  // Send email to recipient
  try {
    await sendGiftCardEmail({
      recipientEmail,
      recipientName,
      code,
      amount: parseInt(amount),
      message: message || undefined,
      buyerName: buyerEmail.split("@")[0], // Extract name from email
    });

    console.log(`[Webhook] Email sent to ${recipientEmail}`);

    // Update status to sent
    await db
      .update(giftCards)
      .set({ status: "sent", sentAt: new Date() })
      .where(eq(giftCards.code, code));
  } catch (emailError) {
    console.error("[Webhook] Failed to send email:", emailError);
    // Don't fail the webhook - the card is still valid
  }
}
