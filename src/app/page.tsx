import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Award, Users, CheckCircle2, Sparkles, PhoneCall } from "lucide-react";
import Navbar from "src/components/Navbar";
import Footer from "src/components/Footer";
import WhatsAppButton from "src/components/WhatsAppButton";
import { projects, materials, testimonials } from "src/data/projects";

export default function Home() {
  // Tomamos los primeros 3 proyectos para el teaser de la galería
  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      <Navbar />
      
      {/* 1. Hero Section (Alto impacto visual) */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with elegant overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80"
            alt="Cocina de lujo con encimera de cuarzo y muebles a medida"
            className="h-full w-full object-cover object-center filter brightness-[0.45] scale-105 transition-transform duration-[10s]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-text via-transparent to-transparent opacity-80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-5xl px-4 py-32 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold/40 bg-brand-text/40 px-4 py-1.5 mb-8 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-brand-gold" />
            <span className="text-xs font-semibold tracking-[0.2em] text-brand-gold uppercase">
              Lujo Accesible & Artesanía Peruana
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light tracking-wide text-brand-bg leading-tight">
            Muebles a Medida y <br />
            <span className="font-normal text-brand-gold italic">Superficies de Piedra</span>
          </h1>
          
          <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-brand-bg/80 leading-relaxed font-light">
            Diseñamos y fabricamos cocinas, closets y encimeras en cuarzo, granito, mármol y piedra sinterizada. Más de 20 años convirtiendo hogares en Lima.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/showroom"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-sm bg-brand-gold px-8 py-4 text-xs font-bold uppercase tracking-wider text-brand-text transition-all duration-300 hover:bg-brand-bg hover:text-brand-text shadow-lg hover:shadow-brand-gold/10"
            >
              Ver Showroom Virtual
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contacto"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-sm border border-brand-bg/40 bg-white/5 px-8 py-4 text-xs font-bold uppercase tracking-wider text-brand-bg backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-brand-bg"
            >
              <PhoneCall className="h-4 w-4 text-brand-gold" />
              Solicitar Presupuesto
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Stats Section (Generador de Confianza) */}
      <section className="bg-brand-text py-16 text-brand-bg relative z-10 border-y border-brand-gold/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
            <div className="flex flex-col items-center">
              <span className="font-serif text-5xl font-light text-brand-gold">20+</span>
              <span className="mt-2 text-xs uppercase tracking-[0.15em] text-brand-bg/60">Años de Trayectoria</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-serif text-5xl font-light text-brand-gold">1,000+</span>
              <span className="mt-2 text-xs uppercase tracking-[0.15em] text-brand-bg/60">Proyectos Entregados</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-serif text-5xl font-light text-brand-gold">100%</span>
              <span className="mt-2 text-xs uppercase tracking-[0.15em] text-brand-bg/60">Diseño a Medida</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-serif text-5xl font-light text-brand-gold">5/5</span>
              <span className="mt-2 text-xs uppercase tracking-[0.15em] text-brand-bg/60">Satisfacción Cliente</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Propuesta de Valor / Por Qué Elegirnos */}
      <section className="py-24 bg-brand-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-brand-gold">Nuestras Ventajas</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-brand-text mt-3">
              ¿Por qué elegir a <span className="font-normal italic">Endeservis</span>?
            </h2>
            <div className="h-[1px] w-20 bg-brand-gold mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {/* Tarjeta 1 */}
            <div className="flex flex-col items-center text-center p-8 bg-[#fdfbf7] rounded-sm border border-brand-primary/5 shadow-sm hover:shadow-md transition-shadow">
              <div className="rounded-full bg-brand-primary/5 p-4 text-brand-primary mb-6">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-brand-text mb-4">Experiencia Premium</h3>
              <p className="text-sm text-brand-text/75 leading-relaxed">
                Nuestros técnicos marmolistas y carpinteros dominan el arte del corte, pulido e instalación a inglete, cuidando cada veta de piedra y canto de melamina.
              </p>
            </div>
            {/* Tarjeta 2 */}
            <div className="flex flex-col items-center text-center p-8 bg-[#fdfbf7] rounded-sm border border-brand-primary/5 shadow-sm hover:shadow-md transition-shadow">
              <div className="rounded-full bg-brand-primary/5 p-4 text-brand-primary mb-6">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-brand-text mb-4">Garantía Certificada</h3>
              <p className="text-sm text-brand-text/75 leading-relaxed">
                Utilizamos piedras de marcas aliadas reconocidas y melamina RH (Resistente a la Humedad) de 18mm con herrajes importados de alta duración.
              </p>
            </div>
            {/* Tarjeta 3 */}
            <div className="flex flex-col items-center text-center p-8 bg-[#fdfbf7] rounded-sm border border-brand-primary/5 shadow-sm hover:shadow-md transition-shadow">
              <div className="rounded-full bg-brand-primary/5 p-4 text-brand-primary mb-6">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-brand-text mb-4">Atención Personalizada</h3>
              <p className="text-sm text-brand-text/75 leading-relaxed">
                Te asesoramos desde el diseño 3D inicial hasta la elección del bloque de piedra perfecto para que el resultado final sea exactamente el que soñaste.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Resumen de Líneas de Producto */}
      <section className="py-24 bg-[#fbf9f4] border-t border-brand-gold/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-brand-gold">Nuestras Líneas</span>
              <h2 className="font-serif text-3xl sm:text-5xl font-light text-brand-text mt-3">
                Materiales de <span className="font-normal italic">Alta Calidad</span> para tus Espacios
              </h2>
              <p className="mt-6 text-sm text-brand-text/75 leading-relaxed">
                Trabajamos con los mejores estándares para que tu cocina, baño u oficina sea un espacio funcional, resistente y de alto valor estético.
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-brand-text text-sm">Superficies de Piedra Natural & Tecnológica</h4>
                    <p className="text-xs text-brand-text/70 mt-1">Cuarzos no porosos, granito resistente al calor, mármoles elegantes y piedras sinterizadas de última generación.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-brand-text text-sm">Mobiliario de Melamina RH a Medida</h4>
                    <p className="text-xs text-brand-text/70 mt-1">Carpintería de alta precisión con tapacantos de PVC de 2mm y sistemas de rieles y bisagras con amortiguación integrada.</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <Link
                  href="/productos"
                  className="inline-flex items-center gap-2 border-b-2 border-brand-primary pb-1 text-xs font-bold uppercase tracking-wider text-brand-primary hover:text-brand-gold hover:border-brand-gold transition-colors"
                >
                  Conocer características técnicas
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Grid de Imágenes Decorativas */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=400&q=80"
                  alt="Instalación de Granito Natural"
                  className="rounded-sm object-cover w-full h-60 shadow-sm"
                />
                <img
                  src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=400&q=80"
                  alt="Detalle de Closet a Medida"
                  className="rounded-sm object-cover w-full h-44 shadow-sm"
                />
              </div>
              <div className="pt-8 space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=400&q=80"
                  alt="Tablero de Mármol en Baño"
                  className="rounded-sm object-cover w-full h-44 shadow-sm"
                />
                <img
                  src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=400&q=80"
                  alt="Cocina Premium Isla"
                  className="rounded-sm object-cover w-full h-60 shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Showroom Teaser (Acceso Rápido a Galería) */}
      <section className="py-24 bg-brand-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-brand-gold">Nuestros Trabajos</span>
              <h2 className="font-serif text-3xl sm:text-5xl font-light text-brand-text mt-3">
                Showroom de <span className="font-normal italic">Proyectos Recientes</span>
              </h2>
            </div>
            <Link
              href="/showroom"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 rounded-sm bg-brand-primary px-6 py-3 text-xs font-semibold uppercase tracking-wider text-brand-bg hover:bg-brand-accent transition-colors"
            >
              Ver Showroom Completo
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                href={`/showroom?id=${project.id}`}
                className="group flex flex-col overflow-hidden bg-[#fdfbf7] border border-brand-primary/5 rounded-sm shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="relative aspect-video w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-brand-text/85 text-brand-bg text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-sm backdrop-blur-xs">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">
                    {project.materialType}
                  </span>
                  <h3 className="font-serif text-lg font-semibold text-brand-text mt-1 group-hover:text-brand-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs text-brand-text/70 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between text-[11px] text-brand-text/50 font-medium">
                    <span>{project.clientType}</span>
                    <span>{project.executionDate}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Testimonial Section */}
      <section className="py-24 bg-brand-text text-brand-bg relative z-10 border-t border-brand-gold/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-brand-gold">Opiniones</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-brand-bg mt-3">
              Lo que dicen <span className="font-normal italic">Nuestros Clientes</span>
            </h2>
            <div className="h-[1px] w-20 bg-brand-gold mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((test) => (
              <div
                key={test.id}
                className="flex flex-col justify-between p-8 bg-[#f8f4ee]/5 border border-brand-gold/10 rounded-sm hover:border-brand-gold/30 transition-colors"
              >
                <div>
                  {/* Estrellas */}
                  <div className="flex gap-1 text-brand-gold mb-6">
                    {Array.from({ length: test.rating }).map((_, i) => (
                      <span key={i} className="text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-sm text-brand-bg/80 leading-relaxed font-light italic">
                    "{test.text}"
                  </p>
                </div>
                
                <div className="flex items-center gap-4 mt-8 pt-6 border-t border-brand-gold/10">
                  <img
                    src={test.projectImage}
                    alt={test.name}
                    className="h-10 w-10 rounded-full object-cover shrink-0 border border-brand-gold/20"
                  />
                  <div>
                    <h4 className="font-serif text-sm font-semibold text-brand-gold">{test.name}</h4>
                    <span className="text-[10px] text-brand-bg/50 uppercase tracking-wider">{test.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Call To Action (Cotizar) */}
      <section className="py-24 bg-brand-bg relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          {/* Un patrón abstracto elegante */}
          <div className="absolute inset-0 bg-[radial-gradient(#7c5c2e_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8 relative z-10">
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-brand-text">
            ¿Listo para remodelar tu <span className="font-normal italic">hogar o negocio</span>?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm sm:text-base text-brand-text/75 leading-relaxed">
            Escríbenos para agendar una visita técnica a tu domicilio en Lima. Realizamos mediciones, diseños previos y te brindamos una cotización formal sin compromiso.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/51981498496?text=Hola%20Endeservis,%20quisiera%20solicitar%20una%20visita%20t%C3%A9cnica%20de%20cotizaci%C3%B3n."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-sm bg-[#25D366] px-8 py-4 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#20ba5a] transition-all duration-300 shadow-md"
            >
              Contactar por WhatsApp
            </a>
            <Link
              href="/contacto"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-sm bg-brand-primary px-8 py-4 text-xs font-bold uppercase tracking-wider text-brand-bg hover:bg-brand-accent hover:text-white transition-all duration-300 shadow-md"
            >
              Usar Formulario Web
            </Link>
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </>
  );
}
