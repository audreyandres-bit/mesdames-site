import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Leaf, Sparkles, Wind } from "lucide-react";
import { Link } from "wouter";
import { RESET_PROGRAM } from "@shared/services";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:py-32">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-foreground">
            MESDAMES
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
            Institut de Bien-Être Holistique Féminin
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Un univers dédié à votre bien-être, où l'esthétique et l'énergie se rencontrent pour vous offrir une expérience de transformation profonde.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/prestations">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Découvrir nos prestations
              </Button>
            </Link>
            <Link href="/reset">
              <Button size="lg" variant="outline">
                Programme RESET
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-card">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
            Notre Philosophie
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: Heart,
                title: "Holistique",
                description: "Nous soignons la femme dans sa totalité",
              },
              {
                icon: Leaf,
                title: "Naturel",
                description: "Produits et techniques respectueux de votre peau",
              },
              {
                icon: Sparkles,
                title: "Transformation",
                description: "Un voyage vers votre meilleure version",
              },
              {
                icon: Wind,
                title: "Énergie",
                description: "Harmoniser corps, esprit et âme",
              },
            ].map((value, idx) => (
              <Card key={idx} className="p-6 text-center border-border/50">
                <value.icon className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* RESET Program Preview */}
      <section className="py-16 px-4">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              {RESET_PROGRAM.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {RESET_PROGRAM.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {RESET_PROGRAM.weeks.map((week) => (
              <Card key={week.week} className="p-6 border-border/50 hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-accent">S{week.week}</span>
                  </div>
                  <h3 className="font-semibold mb-2">{week.title}</h3>
                  <p className="text-sm text-accent font-medium mb-3">{week.soin}</p>
                  <p className="text-xs text-muted-foreground">{week.description}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/reset">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Découvrir le programme complet
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 px-4 bg-card">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
            Nos Prestations
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                title: "Head Spa",
                description: "Rituels holistiques pour libérer les tensions",
                icon: "🧠",
              },
              {
                title: "Rituels Corps",
                description: "Soins profonds qui libèrent les énergies",
                icon: "💫",
              },
              {
                title: "Réflexologie",
                description: "Voyage vers l'équilibre profond",
                icon: "🌿",
              },
            ].map((service, idx) => (
              <Card key={idx} className="p-6 border-border/50 text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Link href="/prestations">
              <Button size="lg" variant="outline">
                Voir toutes nos prestations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Gift Cards CTA */}
      <section className="py-16 px-4">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Offrez une Expérience
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Offrez à vos proches une carte cadeau MESDAMES pour un moment de bien-être inoubliable.
          </p>
          <Link href="/cartes-cadeaux">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Acheter une carte cadeau
            </Button>
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-card">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">
            Nous Contacter
          </h2>
          <div className="space-y-4">
            <p>
              <span className="font-semibold">Adresse:</span> 2 avenue bis Alfred Sauvy, 66600 Rivesaltes
            </p>
            <p>
              <span className="font-semibold">Téléphone:</span>{" "}
              <a href="tel:0672063783" className="text-accent hover:underline">
                06 72 06 37 83
              </a>
            </p>
            <p>
              <span className="font-semibold">Instagram:</span>{" "}
              <a
                href="https://www.instagram.com/mesdames_linstitut/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                @mesdames_l'institut
              </a>
            </p>
          </div>
          <div className="mt-8">
            <a
              href="https://www.planity.com/mesdames-66600-rivesaltes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Prendre rendez-vous sur Planity
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
