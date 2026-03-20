import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { GIFT_CARD_AMOUNTS } from "@shared/services";
import { Gift, Check } from "lucide-react";

export default function GiftCards() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [purchaserName, setPurchaserName] = useState("");
  const [purchaserEmail, setPurchaserEmail] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedAmount || !purchaserEmail) return;

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setSelectedAmount(null);
        setPurchaserName("");
        setPurchaserEmail("");
        setRecipientName("");
        setRecipientEmail("");
        setMessage("");
      }, 3000);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4">
      <div className="container max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Gift className="w-12 h-12 mx-auto mb-4 text-accent" />
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Cartes Cadeaux MESDAMES
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Offrez à vos proches un moment de bien-être inoubliable avec une carte cadeau MESDAMES.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Info */}
          <div>
            <Card className="p-8 bg-card border-border/50 h-full">
              <h2 className="text-2xl font-serif font-bold mb-6">Pourquoi une carte cadeau ?</h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Flexible",
                    description: "À utiliser pour n'importe quel soin de votre choix",
                  },
                  {
                    title: "Valide 1 an",
                    description: "Temps pour choisir le moment parfait",
                  },
                  {
                    title: "Envoi par email",
                    description: "Reçue instantanément avec un code unique",
                  },
                  {
                    title: "Message personnalisé",
                    description: "Ajoutez vos vœux à la carte",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Column - Form */}
          <div>
            <Card className="p-8 bg-card border-border/50">
              <h2 className="text-2xl font-serif font-bold mb-6">Commander</h2>

              {success ? (
                <div className="text-center py-8">
                  <Check className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Commande confirmée !</h3>
                  <p className="text-muted-foreground">
                    La carte cadeau a été envoyée par email.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Amount Selection */}
                  <div>
                    <Label className="block mb-3 font-semibold">Montant de la carte</Label>
                    <div className="grid grid-cols-2 gap-3">
                      {GIFT_CARD_AMOUNTS.map((option) => (
                        <button
                          key={option.amount}
                          type="button"
                          onClick={() => setSelectedAmount(option.amount)}
                          className={`p-3 rounded-lg border-2 transition-all font-semibold ${
                            selectedAmount === option.amount
                              ? "border-accent bg-accent/10"
                              : "border-border hover:border-accent/50"
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Purchaser Info */}
                  <div className="space-y-3">
                    <Label className="block font-semibold">Vos informations</Label>
                    <Input
                      placeholder="Votre nom"
                      value={purchaserName}
                      onChange={(e) => setPurchaserName(e.target.value)}
                      className="bg-background border-border"
                    />
                    <Input
                      type="email"
                      placeholder="Votre email"
                      value={purchaserEmail}
                      onChange={(e) => setPurchaserEmail(e.target.value)}
                      required
                      className="bg-background border-border"
                    />
                  </div>

                  {/* Recipient Info */}
                  <div className="space-y-3">
                    <Label className="block font-semibold">Destinataire (optionnel)</Label>
                    <Input
                      placeholder="Nom du destinataire"
                      value={recipientName}
                      onChange={(e) => setRecipientName(e.target.value)}
                      className="bg-background border-border"
                    />
                    <Input
                      type="email"
                      placeholder="Email du destinataire"
                      value={recipientEmail}
                      onChange={(e) => setRecipientEmail(e.target.value)}
                      className="bg-background border-border"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <Label className="block mb-2 font-semibold">Message personnel</Label>
                    <Textarea
                      placeholder="Ajoutez un message personnel..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="bg-background border-border resize-none"
                      rows={3}
                    />
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    disabled={!selectedAmount || !purchaserEmail || isSubmitting}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground disabled:opacity-50"
                    size="lg"
                  >
                    {isSubmitting ? "Traitement..." : "Procéder au paiement"}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Paiement sécurisé par Stripe
                  </p>
                </form>
              )}
            </Card>
          </div>
        </div>

        {/* How it works */}
        <div className="mt-12">
          <h2 className="text-2xl font-serif font-bold text-center mb-8">Comment ça marche ?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Choisissez", description: "Sélectionnez le montant" },
              { step: "2", title: "Remplissez", description: "Vos informations et message" },
              { step: "3", title: "Payez", description: "En toute sécurité" },
              { step: "4", title: "Envoyez", description: "Reçue par email instantanément" },
            ].map((item, idx) => (
              <Card key={idx} className="p-6 text-center border-border/50">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-accent">{item.step}</span>
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
