import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "Accueil" },
    { href: "/prestations", label: "Prestations" },
    { href: "/reset", label: "Programme RESET" },
    { href: "/cartes-cadeaux", label: "Cartes Cadeaux" },
  ];

  const isActive = (href: string) => location === href;

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border/50">
      <div className="container max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <a className="text-2xl font-serif font-bold text-accent hover:text-accent/90 transition-colors">
              MESDAMES
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className={`transition-colors ${
                    isActive(item.href)
                      ? "text-accent font-semibold"
                      : "text-foreground hover:text-accent"
                  }`}
                >
                  {item.label}
                </a>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="tel:0672063783">
              <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Nous appeler
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className={`block py-2 transition-colors ${
                    isActive(item.href)
                      ? "text-accent font-semibold"
                      : "text-foreground hover:text-accent"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </Link>
            ))}
            <a href="tel:0672063783" className="block pt-2">
              <Button size="sm" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                Nous appeler
              </Button>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
