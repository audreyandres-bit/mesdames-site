import { Link } from "wouter";
import { Instagram, Phone, MapPin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border/50 mt-16">
      <div className="container max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-serif font-bold text-accent mb-4">MESDAMES</h3>
            <p className="text-sm text-muted-foreground">
              Institut de bien-être holistique féminin dédié à votre transformation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/">
                  <a className="text-muted-foreground hover:text-accent transition-colors">
                    Accueil
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/prestations">
                  <a className="text-muted-foreground hover:text-accent transition-colors">
                    Prestations
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/reset">
                  <a className="text-muted-foreground hover:text-accent transition-colors">
                    Programme RESET
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/cartes-cadeaux">
                  <a className="text-muted-foreground hover:text-accent transition-colors">
                    Cartes Cadeaux
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  2 avenue bis Alfred Sauvy<br />
                  66600 Rivesaltes
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <a href="tel:0672063783" className="text-muted-foreground hover:text-accent transition-colors">
                  06 72 06 37 83
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <a href="mailto:contact@mesdames.fr" className="text-muted-foreground hover:text-accent transition-colors">
                  contact@mesdames.fr
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Suivez-nous</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/mesdames_linstitut/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              @mesdames_l'institut
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <p>&copy; {currentYear} MESDAMES. Tous droits réservés.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition-colors">
                Mentions légales
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Conditions d'utilisation
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
