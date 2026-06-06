"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Showroom", href: "/showroom" },
    { name: "Productos", href: "/productos" },
    { name: "Portafolio", href: "/portafolio" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Contacto", href: "/contacto" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && pathname !== "/") return false;
    return pathname.startsWith(href);
  };

  return (
    <nav className="glassmorphism sticky top-0 z-50 w-full transition-smooth">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-wider text-brand-primary">
                ENDESERVIS
              </span>
              <span className="text-[10px] tracking-[0.25em] text-brand-gold uppercase font-semibold -mt-1">
                Melaminas & Piedras
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-brand-primary ${
                  isActive(item.href)
                    ? "text-brand-primary font-semibold border-b-2 border-brand-gold pb-1"
                    : "text-brand-text/80"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 rounded-sm bg-brand-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-brand-bg transition-colors duration-300 hover:bg-brand-accent hover:text-white"
            >
              <Phone className="h-3.5 w-3.5" />
              Solicitar Cotización
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-brand-primary focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menú principal</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-bg border-t border-brand-primary/10 shadow-lg" id="mobile-menu">
          <div className="space-y-1 px-2 pb-4 pt-3 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block rounded-md px-3 py-3 text-base font-medium transition-colors ${
                  isActive(item.href)
                    ? "bg-brand-primary/10 text-brand-primary font-semibold"
                    : "text-brand-text/80 hover:bg-brand-primary/5 hover:text-brand-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 px-3">
              <Link
                href="/contacto"
                onClick={() => setIsOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-sm bg-brand-primary py-3 text-sm font-semibold uppercase tracking-wider text-brand-bg transition-colors hover:bg-brand-accent hover:text-white"
              >
                <Phone className="h-4 w-4" />
                Solicitar Cotización
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
