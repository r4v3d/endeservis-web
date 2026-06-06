import Link from "next/link";
import { Phone, MapPin, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-text text-brand-bg/90 mt-auto border-t border-brand-gold/20">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:gap-8">
          {/* Columna 1: Info Empresa */}
          <div className="flex flex-col space-y-4">
            <div>
              <span className="font-serif text-3xl font-bold tracking-wider text-brand-gold">
                ENDESERVIS
              </span>
              <p className="text-[10px] tracking-[0.25em] text-brand-bg/50 uppercase font-semibold mt-1">
                Melaminas & Piedras
              </p>
            </div>
            <p className="text-sm text-brand-bg/75 leading-relaxed">
              Más de 20 años de experiencia transformando espacios en Lima con mobiliario a medida de melamina y superficies de piedras naturales exclusivas.
            </p>
            {/* Redes Sociales */}
            <div className="flex space-x-4 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-brand-bg/10 p-2 text-brand-gold hover:bg-brand-gold hover:text-brand-text transition-colors"
                aria-label="Instagram"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-brand-bg/10 p-2 text-brand-gold hover:bg-brand-gold hover:text-brand-text transition-colors"
                aria-label="Facebook"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Columna 2: Líneas de Producto */}
          <div>
            <h3 className="font-serif text-lg font-semibold tracking-wide text-brand-gold mb-6">
              Nuestros Productos
            </h3>
            <ul className="space-y-3 text-sm text-brand-bg/85">
              <li>
                <Link href="/productos#cuarzo" className="hover:text-brand-gold transition-colors">
                  Encimeras de Cuarzo
                </Link>
              </li>
              <li>
                <Link href="/productos#granito" className="hover:text-brand-gold transition-colors">
                  Tableros de Granito Natural
                </Link>
              </li>
              <li>
                <Link href="/productos#marmol" className="hover:text-brand-gold transition-colors">
                  Mármol para Baños y Revestimientos
                </Link>
              </li>
              <li>
                <Link href="/productos#piedrasinterizada" className="hover:text-brand-gold transition-colors">
                  Piedra Sinterizada Premium
                </Link>
              </li>
              <li>
                <Link href="/productos#melamina" className="hover:text-brand-gold transition-colors">
                  Muebles de Cocina y Melamina RH
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Información de Contacto */}
          <div>
            <h3 className="font-serif text-lg font-semibold tracking-wide text-brand-gold mb-6">
              Contacto
            </h3>
            <ul className="space-y-4 text-sm text-brand-bg/85">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-brand-gold shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-[11px] text-brand-bg/50 uppercase tracking-wider font-semibold">Llámanos o escríbenos</span>
                  <a href="https://wa.me/51981498496" className="hover:text-brand-gold font-medium transition-colors">
                    +51 981 498 496
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-brand-gold shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-[11px] text-brand-bg/50 uppercase tracking-wider font-semibold">Ubicación</span>
                  <span>Lima, Perú (Atención a toda la provincia)</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-brand-gold shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-[11px] text-brand-bg/50 uppercase tracking-wider font-semibold">Correo Electrónico</span>
                  <a href="mailto:info@endeservis.pe" className="hover:text-brand-gold transition-colors">
                    contacto@endeservis.pe
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Columna 4: Horarios */}
          <div>
            <h3 className="font-serif text-lg font-semibold tracking-wide text-brand-gold mb-6">
              Horario de Atención
            </h3>
            <ul className="space-y-4 text-sm text-brand-bg/85">
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-brand-gold shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="font-medium text-brand-gold">Lunes a Sábado</span>
                  <span className="text-xs text-brand-bg/70 mt-0.5">8:00 AM - 6:00 PM</span>
                </div>
              </li>
              <li className="text-xs text-brand-bg/60 leading-relaxed italic">
                * Las visitas a nuestro taller de fabricación se realizan previa cita coordinada por WhatsApp.
              </li>
            </ul>
          </div>
        </div>

        {/* Separador y Derechos Reservados */}
        <div className="mt-12 border-t border-brand-gold/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-brand-bg/60">
          <p>© {new Date().getFullYear()} ENDESERVIS. Todos los derechos reservados.</p>
          <p className="mt-4 md:mt-0 font-serif tracking-wider">
            Diseñado con calidad y elegancia.
          </p>
        </div>
      </div>
    </footer>
  );
}
