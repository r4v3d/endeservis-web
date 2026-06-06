"use client";

import { MessageSquare } from "lucide-react";
import { usePathname } from "next/navigation";

export default function WhatsAppButton() {
  const pathname = usePathname();
  const phoneNumber = "51981498496";

  const getCustomMessage = () => {
    let text = "Hola Endeservis, me gustaría solicitar una cotización.";
    if (pathname.includes("showroom")) {
      text = "Hola Endeservis, vi su Showroom Virtual y me gustaría consultar sobre algunos proyectos y piedras.";
    } else if (pathname.includes("productos")) {
      text = "Hola Endeservis, me interesa consultar por sus tableros de piedra y acabados a medida.";
    } else if (pathname.includes("portafolio")) {
      text = "Hola Endeservis, vi su portafolio de proyectos terminados y quisiera cotizar una remodelación.";
    } else if (pathname.includes("contacto")) {
      text = "Hola Endeservis, estoy en su sección de contacto y me gustaría agendar una cotización.";
    }
    return encodeURIComponent(text);
  };

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${getCustomMessage()}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Tooltip text */}
      <span className="mr-3 scale-0 group-hover:scale-100 transition-all duration-300 origin-right bg-brand-text text-brand-bg text-[11px] font-semibold uppercase tracking-wider px-3.5 py-2 rounded-sm shadow-md whitespace-nowrap">
        ¿Consultas? Escríbenos
      </span>

      {/* Button with pulse effect */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#20ba5a] hover:scale-105 transition-all duration-300 active:scale-95"
        aria-label="Contactar por WhatsApp"
      >
        {/* Pulsing rings */}
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-35"></span>
        <span className="absolute inline-flex h-full w-full animate-pulse rounded-full bg-[#25D366] opacity-20"></span>
        
        {/* Icon */}
        <MessageSquare className="h-6 w-6 relative z-10 fill-current" />
      </a>
    </div>
  );
}
