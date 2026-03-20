import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RESET_PROGRAM } from "@shared/services";
import { Link } from "wouter";
import { CheckCircle2 } from "lucide-react";

export default function Reset() {
  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4">
      <div className="container max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            {RESET_PROGRAM.title}
          </h1>
          <p className="text-xl text-accent font-semibold mb-4">
            {RESET_PROGRAM.subtitle}
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {RESET_PROGRAM.description}
          </p>
        </div>

        {/* Overview */}
        <Card className="p-8 bg-card border-border/50 mb-12">
          <h2 className="text-2xl font-serif font-bold mb-6">Un engagement envers vous-même</h2>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Le programme RESET est bien plus qu'une série de soins. C'est un véritable voyage de transformation sur 4 semaines, conçu pour les femmes en surcharge mentale qui souhaitent se recentrer.
            </p>
            <p className="text-muted-foreground">
              Chaque semaine, nous travaillons une dimension différente de votre bien-être :
            </p>
          </div>
        </Card>

        {/* 4 Weeks */}
        <div className="space-y-8 mb-12">
          {RESET_PROGRAM.weeks.map((week) => (
            <Card key={week.week} className="p-8 border-border/50 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-3xl font-bold text-accent">S{week.week}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold">{week.title}</h3>
                      <p className="text-accent font-medium">{week.soin}</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-muted-foreground mb-6">{week.description}</p>
                  <div className="space-y-3">
                    <p className="font-semibold text-sm">Bénéfices :</p>
                    {week.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Included */}
        <Card className="p-8 bg-card border-border/50 mb-12">
          <h2 className="text-2xl font-serif font-bold mb-6">Ce qui est inclus</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "4 séances de soins holistiques (une par semaine)",
              "Carnet d'exercices doux et progressifs",
              "Techniques de cohérence cardiaque",
              "Playlists de relaxation personnalisées",
              "Suivi et accompagnement personnalisé",
              "Ressources pour prolonger le travail à la maison",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* CTA */}
        <div className="text-center bg-card p-8 rounded-lg">
          <h2 className="text-2xl font-serif font-bold mb-4">
            Prête à vous remettre au centre ?
          </h2>
          <p className="text-muted-foreground mb-8">
            Contactez-nous pour débuter votre programme RESET dès maintenant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0672063783">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Nous appeler
              </Button>
            </a>
            <a
              href="https://www.planity.com/mesdames-66600-rivesaltes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline">
                Réserver sur Planity
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
