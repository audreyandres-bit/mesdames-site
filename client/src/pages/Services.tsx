import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { SERVICES_DATA } from "@shared/services";
import { Link } from "wouter";

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Object.entries(SERVICES_DATA).map(([key, value]) => ({
    key,
    name: value.name,
    description: value.description,
  }));

  const displayedServices = selectedCategory
    ? SERVICES_DATA[selectedCategory as keyof typeof SERVICES_DATA]?.services || []
    : [];

  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4">
      <div className="container max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Nos Prestations
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez notre gamme complète de soins holistiques conçus pour votre bien-être féminin.
          </p>
        </div>

        {/* Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setSelectedCategory(category.key)}
              className={`p-4 rounded-lg border-2 transition-all text-center cursor-pointer ${
                selectedCategory === category.key
                  ? "border-accent bg-accent/10"
                  : "border-border hover:border-accent/50"
              }`}
            >
              <h3 className="font-semibold text-sm md:text-base">{category.name}</h3>
              <p className="text-xs text-muted-foreground mt-2 line-clamp-2">
                {category.description}
              </p>
            </button>
          ))}
        </div>

        {/* Services Grid */}
        {selectedCategory && displayedServices.length > 0 && (
          <div>
            <h2 className="text-2xl font-serif font-bold mb-8">
              {SERVICES_DATA[selectedCategory as keyof typeof SERVICES_DATA].name}
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {displayedServices.map((service: any) => (
                <Card key={service.id} className="p-6 border-border/50 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                      <p className="text-sm text-accent font-medium">
                        {service.duration} min • {(service.price / 100).toFixed(0)}€
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <a
                    href="https://www.planity.com/mesdames-66600-rivesaltes"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                      Réserver
                    </Button>
                  </a>
                </Card>
              ))}
            </div>
          </div>
        )}

        {!selectedCategory && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground mb-6">
              Sélectionnez une catégorie pour voir nos prestations détaillées.
            </p>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-card p-8 rounded-lg text-center mt-12">
          <h2 className="text-2xl font-serif font-bold mb-4">
            Vous cherchez une idée cadeau ?
          </h2>
          <p className="text-muted-foreground mb-6">
            Offrez une carte cadeau MESDAMES à vos proches.
          </p>
          <Link href="/cartes-cadeaux">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Acheter une carte cadeau
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
