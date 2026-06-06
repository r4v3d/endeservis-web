"use client";

import { useState } from "react";
import { Phone, MapPin, Mail, Clock, Send, Upload, CheckCircle2 } from "lucide-react";
import Navbar from "src/components/Navbar";
import Footer from "src/components/Footer";
import WhatsAppButton from "src/components/WhatsAppButton";

export default function Contacto() {
  // Estados de Formulario
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("Cocina");
  const [materialType, setMaterialType] = useState("Cuarzo");
  const [message, setMessage] = useState("");
  const [fileName, setFileName] = useState<string | null>(null);

  // Estados de control
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulamos el envío del lead al backend / correo por 1.5 segundos
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      
      // Restablecer campos
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
      setFileName(null);
    }, 1500);
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-brand-bg py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-brand-gold">Hablemos</span>
            <h1 className="font-serif text-4xl sm:text-5xl font-light text-brand-text mt-3">
              Contacto y <span className="font-normal italic">Cotizaciones</span>
            </h1>
            <p className="mt-4 text-sm text-brand-text/70">
              ¿Tienes un proyecto en mente? Solicita una visita técnica o llena nuestro formulario de cotización y te responderemos en un plazo máximo de 24 horas hábiles.
            </p>
            <div className="h-[1px] w-20 bg-brand-gold mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Columna 1: Información Corporativa y Mapa */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Bloque de Información */}
              <div className="bg-[#fdfbf7] border border-brand-primary/5 rounded-sm p-8 shadow-sm">
                <h3 className="font-serif text-2xl font-semibold text-brand-text mb-6">Información de Contacto</h3>
                
                <ul className="space-y-6 text-sm text-brand-text/80">
                  <li className="flex gap-4">
                    <Phone className="h-6 w-6 text-brand-gold shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-brand-text">WhatsApp Comercial</h4>
                      <p className="mt-1 font-medium text-brand-primary">
                        <a href="https://wa.me/51981498496" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">
                          +51 981 498 496
                        </a>
                      </p>
                      <p className="text-xs text-brand-text/50 mt-1">Escríbenos para una atención ágil.</p>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <MapPin className="h-6 w-6 text-brand-gold shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-brand-text">Cobertura de Servicio</h4>
                      <p className="mt-1 text-brand-text/75 leading-relaxed">
                        Toda la provincia de Lima y Callao. Visitas técnicas y envíos de materiales.
                      </p>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <Mail className="h-6 w-6 text-brand-gold shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-brand-text">Correo Electrónico</h4>
                      <p className="mt-1 font-medium text-brand-primary">
                        <a href="mailto:contacto@endeservis.pe" className="hover:text-brand-gold transition-colors">
                          contacto@endeservis.pe
                        </a>
                      </p>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <Clock className="h-6 w-6 text-brand-gold shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-brand-text">Horario de Oficina</h4>
                      <p className="mt-1">Lunes a Sábado: 8:00 AM - 6:00 PM</p>
                      <p className="text-xs text-brand-text/50 mt-1">Los domingos no abrimos taller, pero respondemos cotizaciones programadas.</p>
                    </div>
                  </li>
                </ul>

                {/* Redes Sociales */}
                <div className="flex space-x-4 pt-6 border-t border-brand-primary/5 mt-6 justify-center">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-brand-primary/5 p-2.5 text-brand-primary hover:bg-brand-primary hover:text-brand-bg transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-brand-primary/5 p-2.5 text-brand-primary hover:bg-brand-primary hover:text-brand-bg transition-colors"
                    aria-label="Facebook"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Bloque de Mapa Embebido de Lima */}
              <div className="bg-[#fdfbf7] border border-brand-primary/5 rounded-sm p-4 shadow-sm overflow-hidden h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m13!1m4!1m3!1d3901.6508933230485!2d-77.0321285240409!3d-12.091396888148817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c86f030248a3%3A0x867e0e7a2b970d4e!2sSan%20Isidro%2C%20Lima!5e0!3m2!1ses!2spe!4v1717387340000!5m2!1ses!2spe"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación comercial de Endeservis en Lima"
                  className="rounded-sm"
                />
              </div>

            </div>

            {/* Columna 2: Formulario de Cotización */}
            <div className="lg:col-span-7">
              <div className="bg-[#fdfbf7] border border-brand-primary/5 rounded-sm p-8 sm:p-10 shadow-sm min-h-[500px] flex flex-col justify-center">
                
                {isSubmitted ? (
                  /* Pantalla de éxito */
                  <div className="text-center py-12 space-y-6">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-accent/10 text-brand-accent">
                      <CheckCircle2 className="h-10 w-10" />
                    </div>
                    <h2 className="font-serif text-3xl font-semibold text-brand-text">
                      ¡Cotización Recibida!
                    </h2>
                    <p className="text-sm text-brand-text/70 max-w-md mx-auto leading-relaxed">
                      Muchas gracias por contactar a **Endeservis**. Hemos registrado tus datos con éxito. Uno de nuestros asesores técnicos revisará los detalles y te contactará por WhatsApp o correo electrónico en las próximas horas.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="inline-flex items-center gap-2 rounded-sm bg-brand-primary px-6 py-3 text-xs font-semibold uppercase tracking-wider text-brand-bg hover:bg-brand-accent hover:text-white transition-colors"
                    >
                      Volver a enviar
                    </button>
                  </div>
                ) : (
                  /* Formulario de entrada */
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold bg-brand-gold/10 px-2.5 py-1 rounded-sm">
                        Calculador de Presupuesto
                      </span>
                      <h2 className="font-serif text-2xl font-semibold text-brand-text mt-3">Solicitar Presupuesto</h2>
                      <p className="text-xs text-brand-text/50 mt-1">Completa los campos para enviarnos las especificaciones de tu remodelación.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Nombre */}
                      <div className="flex flex-col">
                        <label className="text-[10px] font-bold uppercase text-brand-text/60 tracking-wider mb-2">Nombre Completo *</label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Ej. Roberto Pérez"
                          className="bg-brand-bg border border-brand-primary/20 rounded-sm p-3 text-xs text-brand-text outline-none focus:border-brand-primary transition-colors"
                        />
                      </div>
                      
                      {/* Teléfono */}
                      <div className="flex flex-col">
                        <label className="text-[10px] font-bold uppercase text-brand-text/60 tracking-wider mb-2">WhatsApp / Teléfono *</label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="Ej. 981498496"
                          className="bg-brand-bg border border-brand-primary/20 rounded-sm p-3 text-xs text-brand-text outline-none focus:border-brand-primary transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      {/* Correo */}
                      <div className="sm:col-span-1 flex flex-col">
                        <label className="text-[10px] font-bold uppercase text-brand-text/60 tracking-wider mb-2">Correo Electrónico *</label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="ejemplo@gmail.com"
                          className="bg-brand-bg border border-brand-primary/20 rounded-sm p-3 text-xs text-brand-text outline-none focus:border-brand-primary transition-colors"
                        />
                      </div>

                      {/* Tipo de proyecto */}
                      <div className="flex flex-col">
                        <label className="text-[10px] font-bold uppercase text-brand-text/60 tracking-wider mb-2">Tipo de Proyecto *</label>
                        <select
                          value={projectType}
                          onChange={(e) => setProjectType(e.target.value)}
                          className="bg-brand-bg border border-brand-primary/20 rounded-sm p-3 text-xs text-brand-text outline-none focus:border-brand-primary transition-colors"
                        >
                          <option value="Cocina">Muebles de Cocina</option>
                          <option value="Closet">Closet / Vestidor</option>
                          <option value="Baño">Tableros de Baño</option>
                          <option value="Comercial">Mobiliario Comercial</option>
                          <option value="Oficina">Oficinas / Corporativo</option>
                          <option value="Dormitorio">Muebles de Dormitorio</option>
                        </select>
                      </div>

                      {/* Material */}
                      <div className="flex flex-col">
                        <label className="text-[10px] font-bold uppercase text-brand-text/60 tracking-wider mb-2">Material sugerido *</label>
                        <select
                          value={materialType}
                          onChange={(e) => setMaterialType(e.target.value)}
                          className="bg-brand-bg border border-brand-primary/20 rounded-sm p-3 text-xs text-brand-text outline-none focus:border-brand-primary transition-colors"
                        >
                          <option value="Cuarzo">Cuarzo Tecnológico</option>
                          <option value="Granito">Granito Natural</option>
                          <option value="Marmol">Mármol Natural</option>
                          <option value="Piedra Sinterizada">Piedra Sinterizada</option>
                          <option value="Melamina">Melamina RH (Maderas)</option>
                          <option value="No Decidido">Aún no decido</option>
                        </select>
                      </div>
                    </div>

                    {/* Mensaje */}
                    <div className="flex flex-col">
                      <label className="text-[10px] font-bold uppercase text-brand-text/60 tracking-wider mb-2">Mensaje / Medidas aproximadas *</label>
                      <textarea
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={4}
                        placeholder="Por favor, descríbenos brevemente tu proyecto. Puedes incluir medidas aproximadas (Ej: encimera en L de 3m x 2m) para realizar un pre-cálculo de presupuesto."
                        className="bg-brand-bg border border-brand-primary/20 rounded-sm p-3 text-xs text-brand-text outline-none focus:border-brand-primary resize-none transition-colors"
                      />
                    </div>

                    {/* Subir archivo de referencia (mocked) */}
                    <div className="flex flex-col">
                      <label className="text-[10px] font-bold uppercase text-brand-text/60 tracking-wider mb-2">Imagen o plano de referencia (Opcional)</label>
                      <div className="relative border border-dashed border-brand-primary/30 rounded-sm p-6 text-center hover:bg-brand-primary/5 transition-colors cursor-pointer">
                        <input
                          type="file"
                          accept="image/*,application/pdf"
                          onChange={handleFileChange}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        <div className="flex flex-col items-center justify-center gap-2">
                          <Upload className="h-6 w-6 text-brand-gold" />
                          <span className="text-xs text-brand-text/80 font-medium">
                            {fileName ? fileName : "Seleccionar archivo de referencia"}
                          </span>
                          <span className="text-[10px] text-brand-text/40">
                            Formatos permitidos: JPG, PNG, PDF (máx. 10MB)
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Botón de Enviar */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full flex items-center justify-center gap-2 rounded-sm bg-brand-primary py-4 text-xs font-bold uppercase tracking-wider text-brand-bg hover:bg-brand-accent hover:text-white transition-all disabled:bg-brand-primary/60 cursor-pointer shadow-md"
                      >
                        {isLoading ? (
                          <span className="animate-pulse">Enviando cotización...</span>
                        ) : (
                          <>
                            <Send className="h-4 w-4" />
                            Enviar Solicitud
                          </>
                        )}
                      </button>
                    </div>

                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </main>

      <WhatsAppButton />
      <Footer />
    </>
  );
}
