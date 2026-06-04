import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { Gift, Heart } from "lucide-react";
import { GIFT_CARD_AMOUNTS } from "@shared/services";

export default function GiftCards() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [recipientEmail, setRecipientEmail] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [recipientLastName, setRecipientLastName] = useState("");
  const [buyerEmail, setBuyerEmail] = useState("");
  const [message, setMessage] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [discountAmount, setDiscountAmount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [promoError, setPromoError] = useState("");

  const createCheckoutMutation = trpc.giftCards.createCheckoutSession.useMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedAmount) {
      toast.error("Veuillez sélectionner un montant");
      return;
    }

    if (!recipientEmail || !recipientName || !recipientLastName || !buyerEmail) {
      toast.error("Veuillez remplir tous les champs obligatoires");
      return;
    }

    setIsLoading(true);

    try {
      const result = await createCheckoutMutation.mutateAsync({
        amount: selectedAmount - discountAmount,
        recipientEmail,
        recipientName,
        recipientLastName,
        message,
        buyerEmail,
        promoCode,
        origin: window.location.origin,
      });

      if (result.url) {
        toast.success("Redirection vers le paiement...");
        window.open(result.url, "_blank");
      }
    } catch (error) {
      toast.error("Erreur lors de la création de la carte cadeau");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4">
      <div className="container max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Gift className="w-12 h-12 text-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Cartes Cadeaux
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Offrez une expérience de bien-être inoubliable à vos proches. Choisissez le montant et nous enverrons une carte cadeau directement à votre destinataire.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Gift Card Selection */}
          <div>
            <Card className="p-8 border-border/50">
              <h2 className="text-2xl font-semibold mb-6">Choisir un montant</h2>
              <div className="space-y-3">
                {GIFT_CARD_AMOUNTS.map((option) => (
                  <button
                    key={option.amount}
                    onClick={() => setSelectedAmount(option.amount)}
                    className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                      selectedAmount === option.amount
                        ? "border-accent bg-accent/10"
                        : "border-border hover:border-accent/50"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">{option.label}</span>
                      <Heart
                        className={`w-5 h-5 ${
                          selectedAmount === option.amount
                            ? "fill-accent text-accent"
                            : "text-muted-foreground"
                        }`}
                      />
                    </div>
                  </button>
                ))}
              </div>
            </Card>

            {/* Info Box */}
            <Card className="p-6 border-border/50 mt-6 bg-card">
              <h3 className="font-semibold mb-3">Comment ça marche ?</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-accent font-bold">1.</span>
                  <span>Sélectionnez le montant</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">2.</span>
                  <span>Remplissez les informations</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">3.</span>
                  <span>Effectuez le paiement sécurisé</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">4.</span>
                  <span>La carte cadeau est envoyée par email</span>
                </li>
              </ul>
            </Card>
          </div>

          {/* Form */}
          <div>
            <Card className="p-8 border-border/50">
              <h2 className="text-2xl font-semibold mb-6">Détails de la carte cadeau</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Recipient Info */}
                <div>
                  <Label htmlFor="recipientName" className="text-base font-medium">
                    Prénom du destinataire *
                  </Label>
                  <Input
                    id="recipientName"
                    placeholder="Ex: Marie"
                    value={recipientName}
                    onChange={(e) => setRecipientName(e.target.value)}
                    className="mt-2"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="recipientLastName" className="text-base font-medium">
                    Nom de famille du destinataire *
                  </Label>
                  <Input
                    id="recipientLastName"
                    placeholder="Ex: Dupont"
                    value={recipientLastName}
                    onChange={(e) => setRecipientLastName(e.target.value)}
                    className="mt-2"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="recipientEmail" className="text-base font-medium">
                    Email du destinataire *
                  </Label>
                  <Input
                    id="recipientEmail"
                    type="email"
                    placeholder="marie@example.com"
                    value={recipientEmail}
                    onChange={(e) => setRecipientEmail(e.target.value)}
                    className="mt-2"
                    required
                  />
                </div>

                {/* Buyer Info */}
                <div>
                  <Label htmlFor="buyerEmail" className="text-base font-medium">
                    Votre email *
                  </Label>
                  <Input
                    id="buyerEmail"
                    type="email"
                    placeholder="vous@example.com"
                    value={buyerEmail}
                    onChange={(e) => setBuyerEmail(e.target.value)}
                    className="mt-2"
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <Label htmlFor="message" className="text-base font-medium">
                    Message personnalisé (optionnel)
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Écrivez un message personnel pour le destinataire..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="mt-2 resize-none"
                    rows={4}
                  />
                </div>

                {/* Promo Code */}
                <div>
                  <Label htmlFor="promoCode" className="text-base font-medium">
                    Code promo (optionnel)
                  </Label>
                  <div className="flex gap-2 mt-2">
                    <Input
                      id="promoCode"
                      placeholder="Ex: TEST"
                      value={promoCode}
                      onChange={(e) => {
                        setPromoCode(e.target.value.toUpperCase());
                        setPromoError("");
                      }}
                      className="mt-0"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={async () => {
                        if (!promoCode) {
                          setPromoError("Veuillez entrer un code promo");
                          return;
                        }
                        // Simulate promo code validation
                        if (promoCode === "TEST") {
                          setDiscountAmount(selectedAmount || 0);
                          setPromoError("");
                          toast.success("Code promo appliqué !");
                        } else {
                          setPromoError("Code promo invalide");
                          toast.error("Code promo invalide");
                        }
                      }}
                      className="mt-2"
                    >
                      Appliquer
                    </Button>
                  </div>
                  {promoError && <p className="text-red-500 text-sm mt-1">{promoError}</p>}
                  {discountAmount > 0 && (
                    <p className="text-green-600 text-sm mt-2">✓ Réduction de {(discountAmount / 100).toFixed(2)}€ appliquée</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="bg-accent/10 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Montant à payer :</span>
                    <span className="text-xl font-bold text-accent">
                      {selectedAmount ? ((selectedAmount - discountAmount) / 100).toFixed(2) : "0"}€
                    </span>
                  </div>
                  {discountAmount > 0 && (
                    <div className="flex justify-between items-center text-green-600 text-sm mt-2">
                      <span>Réduction appliquée :</span>
                      <span>-{(discountAmount / 100).toFixed(2)}€</span>
                    </div>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                  disabled={isLoading || !selectedAmount || (selectedAmount - discountAmount) <= 0}
                >
                  {isLoading
                    ? "Traitement en cours..."
                    : `Payer ${selectedAmount ? ((selectedAmount - discountAmount) / 100).toFixed(2) : "0"}€`}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Paiement sécurisé par Stripe. Aucune donnée bancaire ne sera stockée.
                </p>
              </form>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">
            Questions Fréquentes
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: "Combien de temps pour recevoir la carte cadeau ?",
                a: "La carte cadeau est envoyée par email immédiatement après le paiement.",
              },
              {
                q: "La carte cadeau a-t-elle une date d'expiration ?",
                a: "Oui, la carte cadeau est valable 6 mois à partir de la date d'achat. La date exacte d'expiration sera indiquée dans l'email reçu par le destinataire.",
              },
              {
                q: "Puis-je modifier le montant après achat ?",
                a: "Non, mais vous pouvez acheter une autre carte cadeau avec un montant différent.",
              },
              {
                q: "Comment utiliser la carte cadeau ?",
                a: "Le destinataire recevra un code unique qu'il pourra utiliser lors de sa réservation.",
              },
            ].map((faq, idx) => (
              <Card key={idx} className="p-6 border-border/50">
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
