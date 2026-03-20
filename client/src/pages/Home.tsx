import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Leaf, Sparkles, Wind } from "lucide-react";
import { Link } from "wouter";
import { RESET_PROGRAM } from "@shared/services";
import { useAuth } from "@/_core/hooks/useAuth";

export default function Home() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Banner with Image */}
      <section className="relative h-96 md:h-96 overflow-hidden">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663402053513/c3FUuaizWc2ULGVuVwSy6o/ShineCreativeMedia83_7e9b7c63.jpg"
          alt="MESDAMES Institut de Bien-Être"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </section>

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
                description: "Nous prenons soin de vous dans votre globalité",
              },
              {
                icon: Leaf,
                title: "Naturel",
                description: "Des soins respectueux de votre peau et de l'environnement",
              },
              {
                icon: Sparkles,
                title: "Transformateur",
                description: "Une expérience qui change votre bien-être",
              },
              {
                icon: Wind,
                title: "Énergisant",
                description: "Retrouvez votre équilibre et votre énergie",
              },
            ].map((value, idx) => (
              <Card key={idx} className="p-6 text-center border-border/50">
                <value.icon className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h3 className="font-semibold mb-2 text-lg">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 px-4">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
            Nos Prestations Phares
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Head Spa */}
            <Card className="overflow-hidden border-border/50 hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden bg-muted">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663402053513/c3FUuaizWc2ULGVuVwSy6o/headspa_0d9aa9be.jpg"
                  alt="Head Spa"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Head Spa</h3>
                <p className="text-muted-foreground mb-4">
                  Libérez vos tensions mentales avec notre rituel Head Spa apaisant et régénérant.
                </p>
                <Link href="/prestations">
                  <Button variant="outline" size="sm">
                    En savoir plus
                  </Button>
                </Link>
              </div>
            </Card>

            {/* Reflexologie */}
            <Card className="overflow-hidden border-border/50 hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden bg-muted">
                <img
                  src="https://images.unsplash.com/photo-1544161515-81aae3ff8d23?w=500&h=400&fit=crop"
                  alt="Réflexologie"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Réflexologie</h3>
                <p className="text-muted-foreground mb-4">
                  Harmonisez votre corps et votre esprit grâce à la réflexologie plantaire thérapeutique.
                </p>
                <Link href="/prestations">
                  <Button variant="outline" size="sm">
                    En savoir plus
                  </Button>
                </Link>
              </div>
            </Card>

            {/* Di Nina */}
            <Card className="overflow-hidden border-border/50 hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden bg-muted">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663402053513/c3FUuaizWc2ULGVuVwSy6o/dinina_compressed_cfd5bb30.jpg"
                  alt="Soins Di Nina"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Soins Di Nina</h3>
                <p className="text-muted-foreground mb-4">
                  Réveillez la beauté naturelle de votre peau avec nos soins Di Nina premium.
                </p>
                <Link href="/prestations">
                  <Button variant="outline" size="sm">
                    En savoir plus
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* RESET Program */}
      <section className="py-20 px-4 bg-card">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
            Programme RESET
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Un programme sur 4 semaines pour te remettre au centre. Chaque semaine, on travaille une dimension différente pour un bien-être profond.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {RESET_PROGRAM.weeks.map((week: any, idx: number) => (
              <Card key={idx} className="p-6 border-border/50">
                <h3 className="text-lg font-semibold mb-2 text-accent">Semaine {week.week}</h3>
                <h4 className="text-xl font-bold mb-3">{week.title}</h4>
                <p className="text-muted-foreground mb-4">{week.description}</p>
                <ul className="space-y-2 text-sm">
                  {week.benefits.map((detail: any, i: number) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-accent">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
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

      {/* Gift Cards CTA */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Offrez une Expérience
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Offrez à vos proches une carte cadeau MESDAMES et laissez-les découvrir notre univers de bien-être.
          </p>
          <Link href="/cartes-cadeaux">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Acheter une Carte Cadeau
            </Button>
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-card">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">
            Nous Contacter
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div>
              <h3 className="font-semibold mb-2">Adresse</h3>
              <p className="text-muted-foreground">
                2 avenue bis Alfred Sauvy<br />
                66600 Rivesaltes
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Téléphone</h3>
              <a href="tel:0672063783" className="text-accent hover:underline">
                06 72 06 37 83
              </a>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Réserver</h3>
              <a
                href="https://www.planity.com/esthetique-equilibre-66600-rivesaltes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Via Planity
              </a>
            </div>
          </div>
          <a
            href="https://www.instagram.com/mesdames_linstitut/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Suivez-nous sur Instagram
          </a>
        </div>
      </section>
    </div>
  );
}
