"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Filter, Grid, List, X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Phone, Eye } from "lucide-react";
import Navbar from "src/components/Navbar";
import Footer from "src/components/Footer";
import WhatsAppButton from "src/components/WhatsAppButton";
import { projects, Project } from "src/data/projects";

type CategoryFilter = 'Todos' | 'Cocinas' | 'Closets' | 'Baños' | 'Oficinas' | 'Dormitorios' | 'Comercial';
type MaterialFilter = 'Todos' | 'Cuarzo' | 'Granito' | 'Mármol' | 'Piedra Sinterizada' | 'Melamina';

function ShowroomContent() {
  const searchParams = useSearchParams();
  
  // Estados de Filtros
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('Todos');
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialFilter>('Todos');
  const [viewMode, setViewMode] = useState<'grid' | 'expanded'>('grid');
  
  // Estado de Lightbox
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [showBefore, setShowBefore] = useState<boolean>(false);

  // Cargar proyecto específico desde URL si se pasa por parámetro (?id=proyecto-1)
  useEffect(() => {
    const id = searchParams.get("id");
    if (id) {
      const found = projects.find((p) => p.id === id);
      if (found) {
        setActiveProject(found);
      }
    }
  }, [searchParams]);

  // Filtrar proyectos
  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === 'Todos' || project.category === selectedCategory;
    const matchesMaterial = selectedMaterial === 'Todos' || project.materialType === selectedMaterial;
    return matchesCategory && matchesMaterial;
  });

  // Navegación dentro del Lightbox
  const handlePrevProject = () => {
    if (!activeProject) return;
    const currentIndex = filteredProjects.findIndex((p) => p.id === activeProject.id);
    if (currentIndex > 0) {
      setActiveProject(filteredProjects[currentIndex - 1]);
      setZoomLevel(1);
      setShowBefore(false);
    } else {
      setActiveProject(filteredProjects[filteredProjects.length - 1]);
      setZoomLevel(1);
      setShowBefore(false);
    }
  };

  const handleNextProject = () => {
    if (!activeProject) return;
    const currentIndex = filteredProjects.findIndex((p) => p.id === activeProject.id);
    if (currentIndex < filteredProjects.length - 1) {
      setActiveProject(filteredProjects[currentIndex + 1]);
      setZoomLevel(1);
      setShowBefore(false);
    } else {
      setActiveProject(filteredProjects[0]);
      setZoomLevel(1);
      setShowBefore(false);
    }
  };

  const getWhatsAppMessage = (project: Project) => {
    const text = `Hola Endeservis, vi su Showroom y me interesa cotizar un proyecto similar al de "${project.title}" (${project.category} con ${project.materialType}).`;
    return `https://wa.me/51981498496?text=${encodeURIComponent(text)}`;
  };

  const categories: CategoryFilter[] = ['Todos', 'Cocinas', 'Closets', 'Baños', 'Oficinas', 'Dormitorios', 'Comercial'];
  const materialsList: MaterialFilter[] = ['Todos', 'Cuarzo', 'Granito', 'Mármol', 'Piedra Sinterizada', 'Melamina'];

  return (
    <>
      <Navbar />

      <main className="min-h-screen py-16 bg-brand-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-brand-gold">Exposición Virtual</span>
            <h1 className="font-serif text-4xl sm:text-5xl font-light text-brand-text mt-3">
              Showroom de <span className="font-normal italic">Diseños Realizados</span>
            </h1>
            <p className="mt-4 text-sm text-brand-text/70">
              Explora nuestra galería de trabajos terminados. Filtra por tipo de ambiente o material de acabado para encontrar la inspiración exacta que necesitas.
            </p>
            <div className="h-[1px] w-20 bg-brand-gold mx-auto mt-6" />
          </div>

          {/* Panel de Filtros */}
          <div className="bg-[#fdfbf7] border border-brand-primary/5 rounded-sm p-6 mb-12 shadow-sm">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              
              {/* Filtros de Categorías */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-text/40 mr-2 flex items-center gap-1">
                  <Filter className="h-3.5 w-3.5" /> Ambientes:
                </span>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`rounded-sm px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider transition-all duration-200 ${
                      selectedCategory === cat
                        ? "bg-brand-primary text-brand-bg font-semibold shadow-sm"
                        : "bg-brand-bg text-brand-text/80 hover:bg-brand-primary/5 border border-brand-primary/10"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Filtros de Materiales */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-text/40 mr-2">
                  Materiales:
                </span>
                {materialsList.map((mat) => (
                  <button
                    key={mat}
                    onClick={() => setSelectedMaterial(mat)}
                    className={`rounded-sm px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider transition-all duration-200 ${
                      selectedMaterial === mat
                        ? "bg-brand-accent text-white font-semibold shadow-sm"
                        : "bg-brand-bg text-brand-text/80 hover:bg-brand-accent/5 border border-brand-accent/10"
                    }`}
                  >
                    {mat}
                  </button>
                ))}
              </div>

              {/* Modo de Vista */}
              <div className="flex items-center border-t lg:border-t-0 pt-4 lg:pt-0 border-brand-primary/10 shrink-0 gap-1 self-end lg:self-auto">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-sm transition-colors ${
                    viewMode === 'grid' ? "bg-brand-gold/10 text-brand-primary" : "text-brand-text/50 hover:text-brand-text"
                  }`}
                  title="Vista en Cuadrícula"
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('expanded')}
                  className={`p-2 rounded-sm transition-colors ${
                    viewMode === 'expanded' ? "bg-brand-gold/10 text-brand-primary" : "text-brand-text/50 hover:text-brand-text"
                  }`}
                  title="Vista Expandida"
                >
                  <List className="h-4 w-4" />
                </button>
              </div>

            </div>
          </div>

          {/* Mensaje de no resultados */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-24 bg-[#fdfbf7] border border-dashed border-brand-primary/20 rounded-sm">
              <p className="text-sm text-brand-text/60 italic">No se encontraron proyectos con los filtros seleccionados.</p>
              <button
                onClick={() => { setSelectedCategory('Todos'); setSelectedMaterial('Todos'); }}
                className="mt-4 inline-flex text-xs font-bold uppercase tracking-wider text-brand-primary border-b border-brand-primary pb-0.5"
              >
                Restablecer filtros
              </button>
            </div>
          )}

          {/* Grilla Masonry / Lista de Proyectos */}
          {viewMode === 'grid' ? (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => setActiveProject(project)}
                  className="break-inside-avoid bg-[#fdfbf7] border border-brand-primary/5 rounded-sm overflow-hidden shadow-sm hover:shadow-md hover:border-brand-primary/20 cursor-pointer group transition-all duration-300 flex flex-col"
                >
                  {/* Imagen y Hover overlay */}
                  <div className="relative overflow-hidden w-full h-auto">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-102"
                    />
                    {/* Botón de inspeccionar que aparece en hover */}
                    <div className="absolute inset-0 bg-brand-text/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                      <div className="rounded-full bg-brand-bg px-4 py-2 flex items-center gap-2 shadow-lg scale-90 group-hover:scale-100 transition-transform duration-300">
                        <Eye className="h-4 w-4 text-brand-primary" />
                        <span className="text-[10px] font-bold uppercase tracking-wider text-brand-text">Detalle Completo</span>
                      </div>
                    </div>
                    {/* Etiqueta de Categoría */}
                    <div className="absolute top-4 left-4 bg-brand-text/80 text-brand-bg text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-sm">
                      {project.category}
                    </div>
                  </div>

                  {/* Cuerpo de Tarjeta */}
                  <div className="p-6">
                    <span className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">
                      {project.materialType}
                    </span>
                    <h3 className="font-serif text-lg font-semibold text-brand-text mt-1">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-xs text-brand-text/70 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between text-[10px] text-brand-text/50 border-t border-brand-primary/5 pt-4">
                      <span>{project.clientType}</span>
                      <span>{project.executionDate}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Vista Expandida (Fichas grandes) */
            <div className="space-y-12">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-[#fdfbf7] border border-brand-primary/5 rounded-sm overflow-hidden shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                >
                  <div className="relative aspect-video md:aspect-square lg:aspect-video w-full overflow-hidden self-stretch">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-brand-text/80 text-brand-bg text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm">
                      {project.category}
                    </div>
                  </div>
                  <div className="p-8">
                    <span className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">
                      {project.materialType}
                    </span>
                    <h2 className="font-serif text-2xl font-semibold text-brand-text mt-2">
                      {project.title}
                    </h2>
                    <p className="mt-4 text-xs sm:text-sm text-brand-text/75 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <h4 className="font-semibold text-brand-text text-xs uppercase tracking-wider mt-6 mb-2">Detalles Técnicos e Instalación:</h4>
                    <ul className="space-y-1.5 text-xs text-brand-text/70">
                      {project.details.map((detail, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-brand-gold font-bold">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 flex flex-wrap gap-4 items-center justify-between border-t border-brand-primary/5 pt-6">
                      <div className="flex gap-4 text-[10px] text-brand-text/50 uppercase font-medium">
                        <div>Cliente: <span className="text-brand-text font-semibold">{project.clientType}</span></div>
                        <div>Fecha: <span className="text-brand-text font-semibold">{project.executionDate}</span></div>
                      </div>
                      <button
                        onClick={() => setActiveProject(project)}
                        className="inline-flex items-center gap-1.5 rounded-sm bg-brand-primary px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-brand-bg hover:bg-brand-accent hover:text-white transition-colors"
                      >
                        Inspeccionar Galería
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* 5. Lightbox Avanzada de Pantalla Completa */}
      {activeProject && (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-brand-text/95 p-4 md:p-10 transition-opacity duration-300">
          
          {/* Botón de Cerrar */}
          <button
            onClick={() => { setActiveProject(null); setZoomLevel(1); setShowBefore(false); }}
            className="absolute top-6 right-6 z-100 rounded-full bg-brand-bg/10 p-2.5 text-brand-bg hover:bg-brand-gold hover:text-brand-text transition-colors"
            title="Cerrar (Esc)"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Contenedor Principal de la Modal */}
          <div className="relative flex flex-col lg:flex-row bg-brand-bg w-full max-w-6xl h-full lg:h-[80vh] rounded-sm overflow-hidden shadow-2xl">
            
            {/* Sección Izquierda: Visualizador de Imagen */}
            <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden border-b lg:border-b-0 lg:border-r border-brand-primary/5">
              
              {/* Navegación Izquierda */}
              <button
                onClick={handlePrevProject}
                className="absolute left-4 z-10 rounded-full bg-black/40 p-2 text-white hover:bg-brand-gold hover:text-brand-text transition-colors"
                title="Proyecto Anterior"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              {/* Imagen (Normal o Antes si está disponible) */}
              <div 
                className="relative max-h-full max-w-full overflow-hidden transition-transform duration-300"
                style={{ transform: `scale(${zoomLevel})` }}
              >
                <img
                  src={showBefore && activeProject.beforeImage ? activeProject.beforeImage : activeProject.image}
                  alt={activeProject.title}
                  className="max-h-[50vh] lg:max-h-[75vh] w-auto object-contain select-none transition-smooth"
                />
              </div>

              {/* Navegación Derecha */}
              <button
                onClick={handleNextProject}
                className="absolute right-4 z-10 rounded-full bg-black/40 p-2 text-white hover:bg-brand-gold hover:text-brand-text transition-colors"
                title="Siguiente Proyecto"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Controles flotantes en la imagen (Zoom, Antes/Después) */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 bg-black/60 rounded-full px-4 py-1.5 backdrop-blur-sm">
                
                {/* Zoom In */}
                <button
                  onClick={() => setZoomLevel(prev => Math.min(prev + 0.25, 2))}
                  className="p-1 text-white hover:text-brand-gold"
                  title="Acercar"
                >
                  <ZoomIn className="h-4 w-4" />
                </button>
                <span className="text-[10px] text-white/50 px-1 font-mono">{zoomLevel}x</span>
                {/* Zoom Out */}
                <button
                  onClick={() => setZoomLevel(prev => Math.max(prev - 0.25, 1))}
                  className="p-1 text-white hover:text-brand-gold mr-2"
                  title="Alejar"
                >
                  <ZoomOut className="h-4 w-4" />
                </button>

                {/* Switch Antes/Después */}
                {activeProject.beforeImage && (
                  <button
                    onClick={() => setShowBefore(!showBefore)}
                    className={`rounded-full px-3 py-0.5 text-[9px] font-bold uppercase tracking-wider transition-colors ${
                      showBefore ? "bg-brand-gold text-brand-text" : "bg-white/10 text-white hover:bg-white/20"
                    }`}
                  >
                    {showBefore ? "Ver Terminado" : "Ver Antes"}
                  </button>
                )}

              </div>
            </div>

            {/* Sección Derecha: Información Detallada */}
            <div className="w-full lg:w-[400px] p-8 flex flex-col justify-between overflow-y-auto max-h-[40vh] lg:max-h-full">
              <div>
                <span className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">
                  {activeProject.materialType} • {activeProject.category}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-brand-text mt-2 leading-tight">
                  {activeProject.title}
                </h2>
                
                <p className="mt-4 text-xs text-brand-text/75 leading-relaxed">
                  {activeProject.description}
                </p>

                <h3 className="font-semibold text-brand-text text-[11px] uppercase tracking-wider mt-6 mb-3">Detalles de Instalación:</h3>
                <ul className="space-y-2 text-xs text-brand-text/70">
                  {activeProject.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-brand-gold font-bold">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 border-t border-brand-primary/5 pt-4 flex flex-col gap-2 text-[10px] text-brand-text/50 uppercase font-medium">
                  <div>Cliente: <span className="text-brand-text font-semibold">{activeProject.clientType}</span></div>
                  <div>Fecha de ejecución: <span className="text-brand-text font-semibold">{activeProject.executionDate}</span></div>
                </div>
              </div>

              {/* Botón CTA de WhatsApp para Cotizar este proyecto específico */}
              <div className="mt-8 border-t border-brand-primary/5 pt-6">
                <a
                  href={getWhatsAppMessage(activeProject)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-sm bg-[#25D366] py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#20ba5a] transition-all shadow-md"
                >
                  <Phone className="h-4 w-4" />
                  Preguntar por este Proyecto
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

      <WhatsAppButton />
      <Footer />
    </>
  );
}

export default function Showroom() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-brand-bg flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-gold mx-auto mb-4"></div>
          <p className="text-xs font-bold uppercase tracking-wider text-brand-text/60">Cargando Showroom...</p>
        </div>
      </div>
    }>
      <ShowroomContent />
    </Suspense>
  );
}
