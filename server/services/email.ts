import { notifyOwner } from "../_core/notification";

export interface GiftCardEmailParams {
  recipientEmail: string;
  recipientName: string;
  recipientLastName: string;
  code: string;
  amount: number;
  message?: string;
  buyerName: string;
  purchaseDate?: Date;
}

export async function sendGiftCardEmail(params: GiftCardEmailParams): Promise<void> {
  const {
    recipientEmail,
    recipientName,
    recipientLastName,
    code,
    amount,
    message,
    buyerName,
    purchaseDate = new Date(),
  } = params;

  // Format amount in euros
  const formattedAmount = (amount / 100).toFixed(2);

  // Calculate expiration date (6 months from purchase)
  const expirationDate = new Date(purchaseDate);
  expirationDate.setMonth(expirationDate.getMonth() + 6);
  const formattedExpirationDate = expirationDate.toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Create email content
  const fullName = `${recipientName} ${recipientLastName}`;
  const emailContent = `
Bonjour ${recipientName},

Vous avez reçu une carte cadeau MESDAMES d'une valeur de ${formattedAmount}€ de la part de ${buyerName} 🎁

**Votre code de carte cadeau :** ${code}

${message ? `**Message personnel :** ${message}\n` : ""}

**Comment utiliser votre carte cadeau :**
1. Appelez-nous au 06 72 06 37 83
2. Mentionnez votre code : ${code}
3. Choisissez le soin qui vous correspond

**Validité :** Valable jusqu'au ${formattedExpirationDate}

Nous sommes impatientes de vous accueillir chez MESDAMES pour un moment de bien-être inoubliable ! 🌸

Avec bienveillance,
L'équipe MESDAMES
Institut de Bien-Être Holistique Féminin
2 avenue bis Alfred Sauvy, 66600 Rivesaltes
06 72 06 37 83
  `.trim();

  // Send notification to owner (for now, we use this as a workaround)
  try {
    await notifyOwner({
      title: `📧 Carte Cadeau Envoyée - ${recipientName} ${recipientLastName}`,
      content: `Une carte cadeau de ${formattedAmount}€ a été envoyée à ${fullName} (${recipientEmail})\n\nCode: ${code}\n\nVeuillez vérifier que l'email a bien été reçu.`,
    });

    console.log(`[Email] Gift card notification sent to owner`);
  } catch (error) {
    console.error("[Email] Failed to notify owner:", error);
  }

  // TODO: Integrate with email service (SendGrid, Mailgun, etc.)
  // For now, we're using the notification system as a workaround
  console.log(`[Email] Gift card email would be sent to ${recipientEmail}`);
  console.log(`[Email] Content:\n${emailContent}`);
}
