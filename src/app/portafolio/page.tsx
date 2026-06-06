"use client";

import { useState } from "react";
import { Download, Calendar, User, Hammer, Sparkles, FileText, ChevronRight } from "lucide-react";
import Navbar from "src/components/Navbar";
import Footer from "src/components/Footer";
import WhatsAppButton from "src/components/WhatsAppButton";
import { projects, Project } from "src/data/projects";

// Componente Interno: Deslizador Antes/Después de Alta Fidelidad
function BeforeAfterSlider({ before, after, title }: { before: string; after: string; title: string }) {
  const [sliderPosition, setSliderPosition] = useState<number>(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-sm border border-brand-primary/10 shadow-md select-none group">
      {/* Imagen del Después (Fondo) */}
      <img
        src={after}
        alt={`${title} - Después`}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute right-4 bottom-4 z-10 bg-brand-primary text-brand-bg text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm shadow-md">
        Después
      </div>

      {/* Imagen del Antes (Recortada dinámicamente) */}
      <div
        className="absolute inset-0 h-full overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={before}
          alt={`${title} - Antes`}
          className="absolute inset-0 h-full object-cover w-full"
          style={{ width: "100%", maxWidth: "none" }}
        />
        <div className="absolute left-4 bottom-4 z-10 bg-brand-text text-brand-bg text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm shadow-md whitespace-nowrap">
          Antes
        </div>
      </div>

      {/* Barra divisoria y Tirador visual */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-brand-gold cursor-ew-resize pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-10 w-10 rounded-full border border-brand-gold bg-brand-text text-brand-gold flex items-center justify-center shadow-lg">
          <span className="text-xs font-bold font-mono">↔</span>
        </div>
      </div>

      {/* Input invisible que cubre toda la imagen para arrastrar */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={handleSliderChange}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
      />
    </div>
  );
}

export default function Portafolio() {
  const [filter, setFilter] = useState<'Todos' | 'Residencial' | 'Comercial'>('Todos');

  const filteredProjects = projects.filter((p) => {
    if (filter === 'Todos') return true;
    return p.clientType === filter;
  });

  const catalogs = [
    {
      title: "Catálogo de Cocinas Integrales",
      description: "Brochure de diseños de reposteros, optimización de espacios de almacenaje y selección de cuarzos.",
      fileSize: "4.8 MB",
      link: "#"
    },
    {
      title: "Guía de Tableros de Piedras Premium",
      description: "Detalle de vetas de cuarzo, granitos naturales, mármoles y piedras sinterizadas exclusivas.",
      fileSize: "6.2 MB",
      link: "#"
    },
    {
      title: "Catálogo de Closets y Armarios",
      description: "Maquetación de closets de melamina RH a medida, perfiles de aluminio y organización interna.",
      fileSize: "3.5 MB",
      link: "#"
    }
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen py-16 bg-brand-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-brand-gold">Casos de Éxito</span>
            <h1 className="font-serif text-4xl sm:text-5xl font-light text-brand-text mt-3">
              Portafolio de <span className="font-normal italic">Proyectos Reales</span>
            </h1>
            <p className="mt-4 text-sm text-brand-text/70">
              Conoce el alcance de nuestros trabajos de remodelación y fabricación. Transformamos espacios comerciales y residenciales con acabados limpios y profesionales.
            </p>
            <div className="h-[1px] w-20 bg-brand-gold mx-auto mt-6" />
          </div>

          {/* Filtros de Portafolio */}
          <div className="flex justify-center gap-3 mb-16">
            {(['Todos', 'Residencial', 'Comercial'] as const).map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`rounded-sm px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                  filter === type
                    ? "bg-brand-primary text-brand-bg shadow-sm"
                    : "bg-[#fdfbf7] text-brand-text/80 hover:bg-brand-primary/5 border border-brand-primary/10"
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Listado de Casos de Estudio */}
          <div className="space-y-24">
            {filteredProjects.map((project, index) => {
              const isEven = index % 2 === 0;
              return (
                <section
                  key={project.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pb-24 ${
                    index !== filteredProjects.length - 1 ? "border-b border-brand-primary/5" : ""
                  }`}
                >
                  
                  {/* Imagen del Proyecto (Deslizador antes/después o Imagen normal) */}
                  <div className={`lg:col-span-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    {project.beforeImage ? (
                      <BeforeAfterSlider
                        before={project.beforeImage}
                        after={project.image}
                        title={project.title}
                      />
                    ) : (
                      <div className="overflow-hidden rounded-sm border border-brand-primary/10 shadow-md">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="aspect-video w-full object-cover"
                        />
                      </div>
                    )}
                    {project.beforeImage && (
                      <p className="text-center text-[10px] text-brand-text/40 italic mt-3">
                        * Arrastra el divisor central para comparar el Antes y el Después.
                      </p>
                    )}
                  </div>

                  {/* Ficha descriptiva */}
                  <div className={`lg:col-span-6 flex flex-col justify-center ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-[10px] font-bold text-brand-gold uppercase tracking-widest bg-brand-gold/10 px-2.5 py-1 rounded-sm">
                        {project.clientType}
                      </span>
                      <span className="text-[10px] font-semibold text-brand-text/50 uppercase tracking-widest flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5 text-brand-gold" /> {project.executionDate}
                      </span>
                    </div>

                    <h2 className="font-serif text-3xl font-light text-brand-text mb-4">
                      {project.title}
                    </h2>
                    
                    <p className="text-xs sm:text-sm text-brand-text/75 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <div className="bg-[#fdfbf7] rounded-sm border border-brand-primary/5 p-6 mb-6">
                      <h4 className="flex items-center gap-2 font-semibold text-brand-text text-[11px] uppercase tracking-wider mb-4">
                        <Hammer className="h-4 w-4 text-brand-gold" /> Trabajo Realizado
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-brand-text/70">
                        {project.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-brand-gold font-bold">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-4 items-center justify-between border-t border-brand-primary/5 pt-6">
                      <div className="text-xs text-brand-text/60">
                        Material principal: <span className="font-bold text-brand-primary">{project.materialType}</span>
                      </div>
                      <a
                        href={`https://wa.me/51981498496?text=Hola%20Endeservis,%20quisiera%20consultar%20por%20un%20proyecto%20similar%20a%20"${encodeURIComponent(project.title)}"`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-sm bg-brand-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-brand-bg hover:bg-brand-accent hover:text-white transition-colors"
                      >
                        Cotizar este Diseño
                      </a>
                    </div>
                  </div>

                </section>
              );
            })}
          </div>

          {/* 3. Zona de Descarga de Catálogos */}
          <div className="mt-24 bg-[#fcf9f3] border border-brand-gold/20 rounded-sm p-8 sm:p-12 shadow-sm">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-gold/10 px-3 py-1 mb-3">
                <FileText className="h-3.5 w-3.5 text-brand-gold" />
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-brand-gold">Recursos Descargables</span>
              </div>
              <h2 className="font-serif text-3xl font-light text-brand-text">
                Catálogos <span className="font-normal italic">Digitales PDF</span>
              </h2>
              <p className="mt-2 text-xs text-brand-text/60">
                Descarga nuestras colecciones de proyectos y fichas de materiales para revisar sin conexión.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {catalogs.map((catalog, idx) => (
                <div
                  key={idx}
                  className="bg-brand-bg rounded-sm border border-brand-primary/10 p-6 flex flex-col justify-between hover:shadow-md transition-shadow group"
                >
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-brand-gold bg-brand-gold/10 px-2 py-0.5 rounded-sm">
                      Colección {new Date().getFullYear()}
                    </span>
                    <h3 className="font-serif text-lg font-semibold text-brand-text mt-3 group-hover:text-brand-primary transition-colors">
                      {catalog.title}
                    </h3>
                    <p className="mt-2 text-xs text-brand-text/70 leading-relaxed">
                      {catalog.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-brand-primary/5 flex items-center justify-between">
                    <span className="text-[10px] text-brand-text/40 font-mono">{catalog.fileSize} (PDF)</span>
                    <button
                      onClick={() => alert(`Simulando la descarga del archivo: ${catalog.title}. En un entorno real de producción, esto descargará el archivo PDF almacenado en Cloudinary.`)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-primary hover:text-brand-gold border-b border-transparent hover:border-brand-gold pb-0.5 transition-all"
                    >
                      <Download className="h-3.5 w-3.5" />
                      Descargar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      <WhatsAppButton />
      <Footer />
    </>
  );
}
