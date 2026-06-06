"use client";

import { useState } from "react";
import { Check, Info, ArrowRight, Table, Phone, Shield } from "lucide-react";
import Navbar from "src/components/Navbar";
import Footer from "src/components/Footer";
import WhatsAppButton from "src/components/WhatsAppButton";
import { materials, Material } from "src/data/projects";

type CompareMaterialId = 'cuarzo' | 'granito' | 'marmol' | 'piedrasinterizada';

export default function Productos() {
  // Estado para el material activo en las fichas técnicas
  const [activeMaterialTab, setActiveMaterialTab] = useState<string>('cuarzo');

  // Estado para el comparador de materiales (por defecto compara Cuarzo vs Granito vs Mármol)
  const [compareMat1, setCompareMat1] = useState<CompareMaterialId>('cuarzo');
  const [compareMat2, setCompareMat2] = useState<CompareMaterialId>('granito');

  const selectedMaterial = materials.find((m) => m.id === activeMaterialTab) || materials[0];

  const getWhatsAppMaterialMessage = (matName: string) => {
    const text = `Hola Endeservis, me gustaría solicitar una cotización para tableros de ${matName}.`;
    return `https://wa.me/51981498496?text=${encodeURIComponent(text)}`;
  };

  // Datos fijos del comparador
  const comparisonData = {
    cuarzo: {
      name: "Cuarzo Tecnológico",
      composition: "90-94% cuarzo natural + resina de poliéster",
      hardness: "7 (Escala Mohs - Muy alta)",
      stains: "Excelente (Cero porosidad, no absorbe líquidos)",
      heat: "Moderada (Sensible a ollas hirviendo directamente)",
      scratches: "Alta resistencia",
      maintenance: "Nulo (Solo agua y jabón)",
      price: "Medio - Alto",
      idealFor: "Cocinas residenciales, baños, tableros de comedor"
    },
    granito: {
      name: "Granito Natural",
      composition: "100% piedra natural ígnea",
      hardness: "6 - 6.5 (Alta durabilidad)",
      stains: "Media (Requiere sellador protector anual)",
      heat: "Máxima (Soporta calor directo sin problemas)",
      scratches: "Alta resistencia",
      maintenance: "Bajo (Limpieza diaria y sellado anual sugerido)",
      price: "Económico - Medio",
      idealFor: "Cocinas de alto uso diario, exteriores, barbacoas"
    },
    marmol: {
      name: "Mármol Natural",
      composition: "100% piedra natural metamórfica calcárea",
      hardness: "3 - 4 (Piedra suave)",
      stains: "Baja (Muy poroso, absorbe ácidos y colorantes rápidamente)",
      heat: "Alta (Soporta calor, pero se mancha con facilidad)",
      scratches: "Moderada (Se puede rayar con cuchillos)",
      maintenance: "Alto (Sellado constante y cuidado inmediato de derrames)",
      price: "Alto - Premium",
      idealFor: "Baños, chimeneas, mesas de centro, muros decorativos"
    },
    piedrasinterizada: {
      name: "Piedra Sinterizada",
      composition: "Minerales de cuarzo, granito y sílice compactados",
      hardness: "8 (Escala Mohs - Extrema)",
      stains: "Máxima (Cero porosidad, resistente a químicos fuertes)",
      heat: "Máxima absoluta (Inmune a fuego directo)",
      scratches: "Inmune a rayones cotidianos",
      maintenance: "Nulo absoluto (Soporta lejía y ácidos)",
      price: "Premium (Inversión alta)",
      idealFor: "Cocinas de lujo interiores/exteriores, fachadas, pisos"
    }
  };

  const stoneIds: CompareMaterialId[] = ['cuarzo', 'granito', 'marmol', 'piedrasinterizada'];

  return (
    <>
      <Navbar />

      <main className="min-h-screen py-16 bg-brand-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-brand-gold">Nuestra Oferta</span>
            <h1 className="font-serif text-4xl sm:text-5xl font-light text-brand-text mt-3">
              Fichas de <span className="font-normal italic">Materiales & Productos</span>
            </h1>
            <p className="mt-4 text-sm text-brand-text/70">
              Conoce las propiedades de nuestras piedras y melaminas. Toma una decisión informada revisando las características técnicas de cada opción.
            </p>
            <div className="h-[1px] w-20 bg-brand-gold mx-auto mt-6" />
          </div>

          {/* 1. Selector de Fichas Técnicas (Tabs Interactivos) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24 items-start">
            
            {/* Lista de pestañas laterales */}
            <div className="lg:col-span-3 flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-2 pb-4 lg:pb-0 scrollbar-none shrink-0">
              {materials.map((mat) => (
                <button
                  key={mat.id}
                  onClick={() => setActiveMaterialTab(mat.id)}
                  className={`w-full text-left rounded-sm px-5 py-4 text-xs font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap lg:whitespace-normal ${
                    activeMaterialTab === mat.id
                      ? "bg-brand-primary text-brand-bg shadow-md border-l-4 border-brand-gold"
                      : "bg-[#fdfbf7] text-brand-text/80 hover:bg-brand-primary/5 border border-brand-primary/10"
                  }`}
                >
                  {mat.name}
                </button>
              ))}
            </div>

            {/* Ficha técnica del material seleccionado */}
            <div className="lg:col-span-9 bg-[#fdfbf7] border border-brand-primary/5 rounded-sm p-8 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Información y ventajas */}
              <div>
                <span className="text-[9px] font-bold uppercase tracking-widest text-brand-gold bg-brand-gold/10 px-2 py-0.5 rounded-sm">
                  {selectedMaterial.type === 'piedra' ? 'Piedra para encimeras' : 'Mobiliario a medida'}
                </span>
                <h2 className="font-serif text-3xl font-semibold text-brand-text mt-3">
                  {selectedMaterial.name}
                </h2>
                <p className="mt-4 text-xs sm:text-sm text-brand-text/75 leading-relaxed">
                  {selectedMaterial.description}
                </p>

                <h3 className="font-semibold text-brand-text text-[11px] uppercase tracking-wider mt-6 mb-3">Ventajas Principales:</h3>
                <ul className="space-y-2.5">
                  {selectedMaterial.advantages.map((adv, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-xs text-brand-text/75">
                      <Check className="h-4 w-4 text-brand-accent shrink-0 mt-0.5" />
                      <span>{adv}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="font-semibold text-brand-text text-[11px] uppercase tracking-wider mt-6 mb-3">Colores y Acabados de Muestra:</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedMaterial.colors.map((color, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-brand-bg border border-brand-primary/10 rounded-full px-3 py-1 text-xs">
                      <span className="h-3.5 w-3.5 rounded-full border border-brand-text/10" style={{ backgroundColor: color.hex }} />
                      <span className="text-[11px] font-medium text-brand-text/85">{color.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Especificaciones Técnicas e Imagen */}
              <div className="flex flex-col justify-between">
                <div className="relative aspect-video w-full rounded-sm overflow-hidden mb-6 shadow-sm border border-brand-primary/5">
                  <img
                    src={selectedMaterial.featuredImage}
                    alt={selectedMaterial.name}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div className="bg-brand-bg rounded-sm border border-brand-primary/10 p-5">
                  <h4 className="flex items-center gap-2 font-semibold text-brand-text text-[11px] uppercase tracking-wider mb-4 border-b border-brand-primary/10 pb-2">
                    <Shield className="h-4 w-4 text-brand-gold" /> Ficha Técnica
                  </h4>
                  <table className="w-full text-xs text-brand-text/80">
                    <tbody className="divide-y divide-brand-primary/5">
                      {selectedMaterial.technicalSpecs.hardness && (
                        <tr>
                          <td className="py-2 font-medium text-brand-text/50">Dureza</td>
                          <td className="py-2 text-right font-semibold">{selectedMaterial.technicalSpecs.hardness}</td>
                        </tr>
                      )}
                      {selectedMaterial.technicalSpecs.porosity && (
                        <tr>
                          <td className="py-2 font-medium text-brand-text/50">Porosidad</td>
                          <td className="py-2 text-right font-semibold">{selectedMaterial.technicalSpecs.porosity}</td>
                        </tr>
                      )}
                      <tr>
                        <td className="py-2 font-medium text-brand-text/50">Espesor</td>
                        <td className="py-2 text-right font-semibold">{selectedMaterial.technicalSpecs.thickness}</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-medium text-brand-text/50">Resistencia</td>
                        <td className="py-2 text-right font-semibold leading-relaxed">{selectedMaterial.technicalSpecs.resistance}</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-medium text-brand-text/50">Mantenimiento</td>
                        <td className="py-2 text-right font-semibold">{selectedMaterial.technicalSpecs.maintenance}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6">
                  <a
                    href={getWhatsAppMaterialMessage(selectedMaterial.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-sm bg-brand-primary py-3 text-xs font-bold uppercase tracking-wider text-brand-bg hover:bg-brand-accent hover:text-white transition-colors shadow-sm"
                  >
                    <Phone className="h-4 w-4" />
                    Cotizar {selectedMaterial.name}
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* 2. Comparador Dinámico de Materiales */}
          <div className="bg-[#fcf9f3] border border-brand-gold/20 rounded-sm p-8 sm:p-12 shadow-sm">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-gold/10 px-3 py-1 mb-3">
                <Table className="h-3.5 w-3.5 text-brand-gold" />
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-brand-gold">Herramienta Interactiva</span>
              </div>
              <h2 className="font-serif text-3xl font-light text-brand-text">
                Comparador de <span className="font-normal italic">Superficies de Piedra</span>
              </h2>
              <p className="mt-2 text-xs text-brand-text/60">
                Selecciona dos piedras de nuestra lista para ver sus diferencias técnicas cara a cara.
              </p>
            </div>

            {/* Selectores de Piedras */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              
              {/* Selector 1 */}
              <div className="w-full sm:w-64 flex flex-col">
                <label className="text-[10px] font-bold uppercase text-brand-text/50 tracking-wider mb-2">Material A</label>
                <select
                  value={compareMat1}
                  onChange={(e) => setCompareMat1(e.target.value as CompareMaterialId)}
                  className="bg-brand-bg border border-brand-primary/20 rounded-sm p-3 text-xs font-medium text-brand-text outline-none focus:border-brand-primary"
                >
                  {stoneIds.map((id) => (
                    <option key={id} value={id}>{comparisonData[id].name}</option>
                  ))}
                </select>
              </div>

              <div className="text-brand-gold font-serif text-xl italic pt-6">vs</div>

              {/* Selector 2 */}
              <div className="w-full sm:w-64 flex flex-col">
                <label className="text-[10px] font-bold uppercase text-brand-text/50 tracking-wider mb-2">Material B</label>
                <select
                  value={compareMat2}
                  onChange={(e) => setCompareMat2(e.target.value as CompareMaterialId)}
                  className="bg-brand-bg border border-brand-primary/20 rounded-sm p-3 text-xs font-medium text-brand-text outline-none focus:border-brand-primary"
                >
                  {stoneIds.map((id) => (
                    <option key={id} value={id} disabled={id === compareMat1}>{comparisonData[id].name}</option>
                  ))}
                </select>
              </div>

            </div>

            {/* Tabla Comparativa */}
            <div className="overflow-x-auto rounded-sm border border-brand-gold/10 bg-brand-bg">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="bg-brand-text text-brand-bg">
                    <th className="p-4 font-serif text-sm tracking-wider w-1/3">Características</th>
                    <th className="p-4 font-serif text-sm tracking-wider text-brand-gold w-1/3">{comparisonData[compareMat1].name}</th>
                    <th className="p-4 font-serif text-sm tracking-wider text-brand-gold w-1/3">{comparisonData[compareMat2].name}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-primary/5">
                  <tr>
                    <td className="p-4 font-semibold text-brand-text/70 bg-brand-gold/5">Composición</td>
                    <td className="p-4 leading-relaxed">{comparisonData[compareMat1].composition}</td>
                    <td className="p-4 leading-relaxed">{comparisonData[compareMat2].composition}</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-brand-text/70 bg-brand-gold/5">Dureza (Mohs)</td>
                    <td className="p-4 font-medium">{comparisonData[compareMat1].hardness}</td>
                    <td className="p-4 font-medium">{comparisonData[compareMat2].hardness}</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-brand-text/70 bg-brand-gold/5">Manchas y Porosidad</td>
                    <td className="p-4 leading-relaxed">{comparisonData[compareMat1].stains}</td>
                    <td className="p-4 leading-relaxed">{comparisonData[compareMat2].stains}</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-brand-text/70 bg-brand-gold/5">Resistencia Térmica</td>
                    <td className="p-4 leading-relaxed">{comparisonData[compareMat1].heat}</td>
                    <td className="p-4 leading-relaxed">{comparisonData[compareMat2].heat}</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-brand-text/70 bg-brand-gold/5">Resistencia Rayones</td>
                    <td className="p-4">{comparisonData[compareMat1].scratches}</td>
                    <td className="p-4">{comparisonData[compareMat2].scratches}</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-brand-text/70 bg-brand-gold/5">Mantenimiento</td>
                    <td className="p-4">{comparisonData[compareMat1].maintenance}</td>
                    <td className="p-4">{comparisonData[compareMat2].maintenance}</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-brand-text/70 bg-brand-gold/5">Rango de Precio</td>
                    <td className="p-4 font-semibold text-brand-primary">{comparisonData[compareMat1].price}</td>
                    <td className="p-4 font-semibold text-brand-primary">{comparisonData[compareMat2].price}</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-brand-text/70 bg-brand-gold/5">Recomendación de Uso</td>
                    <td className="p-4 leading-relaxed text-brand-text/80">{comparisonData[compareMat1].idealFor}</td>
                    <td className="p-4 leading-relaxed text-brand-text/80">{comparisonData[compareMat2].idealFor}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Aviso de aclaratoria */}
            <div className="mt-6 flex items-start gap-2.5 bg-brand-bg/50 border border-brand-primary/5 rounded-sm p-4 text-[11px] text-brand-text/65 leading-relaxed">
              <Info className="h-4 w-4 text-brand-gold shrink-0 mt-0.5" />
              <p>
                Los datos comparativos son de carácter informativo basados en promedios del mercado. La durabilidad y el rendimiento final del material dependen directamente de los hábitos de limpieza del usuario y del correcto mantenimiento periódico de sellado sugerido para piedras naturales.
              </p>
            </div>

          </div>
        </div>
      </main>

      <WhatsAppButton />
      <Footer />
    </>
  );
}
