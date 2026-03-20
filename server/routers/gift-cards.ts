import { z } from "zod";
import { protectedProcedure, publicProcedure, router } from "../_core/trpc";
import { getDb } from "../db";
import { giftCards } from "../../drizzle/schema";
import { eq } from "drizzle-orm";
import Stripe from "stripe";
import { nanoid } from "nanoid";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");

export const giftCardsRouter = router({
  // Create a checkout session for a gift card
  createCheckoutSession: publicProcedure
    .input(
      z.object({
        amount: z.number().min(5000).max(20000),
        recipientEmail: z.string().email(),
        recipientName: z.string().min(1),
        message: z.string().optional(),
        buyerEmail: z.string().email(),
        origin: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      try {
        const session = await stripe.checkout.sessions.create({
          payment_method_types: ["card"],
          line_items: [
            {
              price_data: {
                currency: "eur",
                product_data: {
                  name: `Carte Cadeau MESDAMES - ${(input.amount / 100).toFixed(2)}€`,
                  description: `Carte cadeau pour ${input.recipientName}`,
                },
                unit_amount: input.amount,
              },
              quantity: 1,
            },
          ],
          mode: "payment",
          success_url: `${input.origin}/cartes-cadeaux?success=true`,
          cancel_url: `${input.origin}/cartes-cadeaux?cancelled=true`,
          customer_email: input.buyerEmail,
          metadata: {
            recipientEmail: input.recipientEmail,
            recipientName: input.recipientName,
            message: input.message || "",
            buyerEmail: input.buyerEmail,
            amount: input.amount.toString(),
          },
        });

        return {
          sessionId: session.id,
          url: session.url,
        };
      } catch (error) {
        console.error("Stripe checkout error:", error);
        throw error;
      }
    }),

  // Get gift cards for a user
  getMyGiftCards: protectedProcedure.query(async ({ ctx }) => {
    const db = await getDb();
    if (!db) return [];

    const cards = await db
      .select()
      .from(giftCards)
      .where(eq(giftCards.buyerId, ctx.user.id));

    return cards;
  }),

  // Get all gift cards (admin only)
  getAllGiftCards: protectedProcedure.query(async ({ ctx }) => {
    if (ctx.user.role !== "admin") {
      throw new Error("Unauthorized");
    }

    const db = await getDb();
    if (!db) return [];

    return await db.select().from(giftCards);
  }),

  // Redeem a gift card
  redeemGiftCard: publicProcedure
    .input(z.object({ code: z.string() }))
    .mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new Error("Database not available");

      const card = await db
        .select()
        .from(giftCards)
        .where(eq(giftCards.code, input.code))
        .limit(1);

      if (card.length === 0) {
        throw new Error("Carte cadeau non trouvée");
      }

      const giftCard = card[0];

      if (giftCard.status === "redeemed") {
        throw new Error("Cette carte cadeau a déjà été utilisée");
      }

      if (giftCard.status !== "sent" && giftCard.status !== "paid") {
        throw new Error("Cette carte cadeau n'est pas valide");
      }

      // Update the gift card status
      await db
        .update(giftCards)
        .set({
          status: "redeemed",
          redeemedAt: new Date(),
        })
        .where(eq(giftCards.id, giftCard.id));

      return {
        amount: giftCard.amount,
        message: giftCard.message,
      };
    }),
});
