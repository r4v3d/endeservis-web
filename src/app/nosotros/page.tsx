import { FileText, Compass, Hammer, ShieldCheck, CheckCircle2, Award, Heart, Shield } from "lucide-react";
import Navbar from "src/components/Navbar";
import Footer from "src/components/Footer";
import WhatsAppButton from "src/components/WhatsAppButton";

export default function Nosotros() {
  const processSteps = [
    {
      num: "01",
      title: "Cotización & Medición",
      description: "Agendamos una visita técnica a tu domicilio en Lima para tomar medidas exactas del espacio y asesorarte en la selección de materiales y acabados.",
      icon: FileText
    },
    {
      num: "02",
      title: "Modelado y Diseño",
      description: "Elaboramos los planos técnicos y renders tridimensionales para que visualices la distribución de tu cocina, closet o baño antes de cortar.",
      icon: Compass
    },
    {
      num: "03",
      title: "Fabricación",
      description: "Cortamos y pulimos la piedra en nuestro taller especializado. Estructuramos tus muebles en melamina RH de 18mm con tapacantos de PVC herméticos.",
      icon: Hammer
    },
    {
      num: "04",
      title: "Instalación",
      description: "Nuestros instaladores trasladan e instalan el mobiliario en tu domicilio, realizando el anclaje, sellado y pulido de juntas al milímetro.",
      icon: ShieldCheck
    }
  ];

  const values = [
    {
      title: "Calidad sin Concesiones",
      description: "No ahorramos en herrajes ni espesores. Utilizamos melamina de 18mm RH y piedras de marcas con garantía certificada.",
      icon: Award
    },
    {
      title: "Puntualidad en la Entrega",
      description: "Respetamos los plazos acordados en el contrato. Sabemos que una remodelación altera tu rutina y nos esforzamos por agilizar tiempos.",
      icon: CheckCircle2
    },
    {
      title: "Honestidad Profesional",
      description: "Si un material no es adecuado para el uso que planeas darle (ej. mármol en cocina), te lo advertiremos transparentemente.",
      icon: Shield
    }
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-brand-bg py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-brand-gold">Nuestra Trayectoria</span>
            <h1 className="font-serif text-4xl sm:text-5xl font-light text-brand-text mt-3">
              Sobre <span className="font-normal italic">Nosotros</span>
            </h1>
            <p className="mt-4 text-sm text-brand-text/70">
              Conoce la historia detrás de Endeservis, nuestra visión y el proceso riguroso que aplicamos para garantizar acabados impecables en cada obra.
            </p>
            <div className="h-[1px] w-20 bg-brand-gold mx-auto mt-6" />
          </div>

          {/* 1. Historia / Presentación */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
            <div className="lg:col-span-6">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-brand-gold">20+ Años de Experiencia</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-light text-brand-text mt-3 mb-6">
                Artesanos de la madera y de la <span className="font-normal italic">piedra natural</span>
              </h2>
              <div className="space-y-4 text-sm text-brand-text/75 leading-relaxed font-light">
                <p>
                  Fundada en Lima hace más de dos décadas, **Endeservis** nació con el firme propósito de llenar el vacío en la calidad de acabados interiores. Lo que comenzó como un pequeño taller de carpintería a medida se transformó, con esfuerzo e inversión técnica, en un centro de corte y ensamblaje de melaminas y superficies de piedra natural de alta ingeniería.
                </p>
                <p>
                  A lo largo de estos años, hemos aprendido que una cocina, un closet o un baño no son solo elementos decorativos; son espacios de uso intensivo y cotidiano que deben soportar humedad, calor y desgaste físico. Por eso, integramos la precisión de la maquinaria con la meticulosidad del trabajo manual artesanal.
                </p>
                <p>
                  Hoy en día, nuestro equipo está integrado por diseñadores técnicos, maestros carpinteros y experimentados marmolistas comprometidos con entregar una experiencia premium a cada cliente.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-6 relative aspect-video w-full rounded-sm overflow-hidden shadow-md border border-brand-primary/5">
              <img
                src="https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=1200&q=80"
                alt="Taller de marmolería y fabricación de Endeservis"
                className="h-full w-full object-cover"
              />
            </div>
          </section>

          {/* 2. Misión, Visión y Valores */}
          <section className="bg-[#fcf9f3] border border-brand-gold/15 rounded-sm p-8 sm:p-12 mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 border-b border-brand-gold/10 pb-12">
              <div>
                <h3 className="font-serif text-xl font-semibold text-brand-primary mb-3">Nuestra Misión</h3>
                <p className="text-xs sm:text-sm text-brand-text/75 leading-relaxed font-light">
                  Fabricar mobiliario de melamina y tableros de piedra a medida con la más alta durabilidad del mercado limeño, combinando asesoría honesta, herrajes de gama alta y un proceso de instalación limpio y preciso que supere las expectativas del cliente.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-brand-primary mb-3">Nuestra Visión</h3>
                <p className="text-xs sm:text-sm text-brand-text/75 leading-relaxed font-light">
                  Posicionarnos para el 2030 como la empresa líder de carpintería fina y marmolería de Lima, siendo reconocidos por constructores y diseñadores de interiores como el socio estratégico definitivo para proyectos de alta gama y remodelaciones premium.
                </p>
              </div>
            </div>

            {/* Valores */}
            <div>
              <h3 className="text-center font-serif text-xl font-semibold text-brand-text mb-8">Nuestros Valores Fundamentales</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {values.map((v, idx) => {
                  const Icon = v.icon;
                  return (
                    <div key={idx} className="flex flex-col items-center text-center p-6 bg-brand-bg rounded-sm border border-brand-primary/5">
                      <div className="rounded-full bg-brand-primary/5 p-3 text-brand-primary mb-4">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h4 className="font-serif text-base font-semibold text-brand-text mb-2">{v.title}</h4>
                      <p className="text-xs text-brand-text/70 leading-relaxed font-light">{v.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* 3. Proceso de Trabajo (Los 4 pasos) */}
          <section className="mb-24">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-brand-gold">Cómo lo Hacemos</span>
              <h2 className="font-serif text-3xl font-light text-brand-text mt-3">
                Nuestro <span className="font-normal italic">Proceso de Trabajo</span>
              </h2>
              <p className="mt-2 text-xs text-brand-text/60">
                Garantizamos la excelencia a través de una metodología clara y secuencial de principio a fin.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div
                    key={idx}
                    className="relative bg-[#fdfbf7] border border-brand-primary/5 rounded-sm p-6 shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex justify-between items-center mb-6">
                        <div className="rounded-sm bg-brand-primary/5 p-3.5 text-brand-primary group-hover:bg-brand-primary group-hover:text-brand-bg transition-colors duration-300">
                          <Icon className="h-6 w-6" />
                        </div>
                        <span className="font-serif text-2xl font-light text-brand-gold">{step.num}</span>
                      </div>
                      <h3 className="font-serif text-lg font-semibold text-brand-text mb-3">{step.title}</h3>
                      <p className="text-xs text-brand-text/70 leading-relaxed font-light">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* 4. Marcas Aliadas y Proveedores */}
          <section className="bg-brand-text text-brand-bg rounded-sm p-8 sm:p-12 text-center border border-brand-gold/15">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold">Socios Estratégicos</span>
            <h3 className="font-serif text-xl sm:text-2xl font-light text-brand-bg mt-2 mb-4">
              Solo trabajamos con <span className="font-normal text-brand-gold italic">Materiales Certificados</span>
            </h3>
            <p className="max-w-2xl mx-auto text-xs text-brand-bg/70 leading-relaxed mb-8">
              Para garantizar que los tableros de cocina, baño y encimeras duren toda la vida, importamos y trabajamos con los fabricantes líderes de piedras naturales y tecnológicas del mundo.
            </p>
            
            {/* Listado de marcas en texto estilizado */}
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 text-sm sm:text-base font-serif tracking-widest text-brand-bg/50">
              <span className="hover:text-brand-gold transition-colors font-semibold">SILESTONE®</span>
              <span className="hover:text-brand-gold transition-colors font-semibold">DEKTON®</span>
              <span className="hover:text-brand-gold transition-colors font-semibold">NEOLITH®</span>
              <span className="hover:text-brand-gold transition-colors font-semibold">PELÍKANO®</span>
              <span className="hover:text-brand-gold transition-colors font-semibold">MASISA®</span>
            </div>
          </section>

        </div>
      </main>

      <WhatsAppButton />
      <Footer />
    </>
  );
}
