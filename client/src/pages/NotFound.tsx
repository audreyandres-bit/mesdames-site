import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-serif font-bold mb-4">404</h1>
        <p className="text-2xl font-semibold mb-4">Page non trouvée</p>
        <p className="text-muted-foreground mb-8">
          Désolée, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Link href="/">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            Retour à l'accueil
          </Button>
        </Link>
      </div>
    </div>
  );
}
