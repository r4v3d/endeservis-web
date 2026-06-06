export interface Material {
  id: string;
  name: string;
  type: 'piedra' | 'melamina';
  description: string;
  advantages: string[];
  technicalSpecs: {
    hardness?: string; // para piedras
    porosity?: string; // para piedras
    thickness?: string;
    resistance: string;
    maintenance: string;
  };
  colors: { name: string; hex: string; image?: string }[];
  featuredImage: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Cocinas' | 'Closets' | 'Baños' | 'Oficinas' | 'Dormitorios' | 'Comercial';
  materialType: 'Cuarzo' | 'Granito' | 'Mármol' | 'Piedra Sinterizada' | 'Melamina';
  image: string;
  beforeImage?: string; // Opcional, para el comparador antes/después
  clientType: 'Residencial' | 'Comercial' | 'Institucional';
  executionDate: string;
  details: string[];
  pdfCatalog?: string; // Opcional, catálogo descargable
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  text: string;
  projectImage: string;
}

// 1. Materiales de piedra y melamina
export const materials: Material[] = [
  {
    id: 'cuarzo',
    name: 'Tableros de Cuarzo',
    type: 'piedra',
    description: 'El cuarzo es una piedra tecnológica compuesta por 90-94% de cuarzo natural mezclado con resinas de alta calidad. Ideal para cocinas y baños por su nula porosidad y alta resistencia a manchas.',
    advantages: [
      'Nula porosidad (no absorbe líquidos ni bacterias).',
      'Gran variedad de colores y patrones uniformes.',
      'Altamente resistente a rayones y golpes cotidianos.',
      'Fácil de limpiar, no requiere sellado periódico.'
    ],
    technicalSpecs: {
      hardness: '7 (Escala de Mohs - Muy Duro)',
      porosity: 'Nula (< 0.05%)',
      thickness: '12mm / 20mm',
      resistance: 'Alta a manchas y rayones. Moderada al calor directo (se recomiendan posavasos).',
      maintenance: 'Limpieza simple con agua y jabón neutro.'
    },
    colors: [
      { name: 'Blanco Estelar', hex: '#f3f4f6' },
      { name: 'Gris Calacatta', hex: '#e5e7eb' },
      { name: 'Negro Absoluto', hex: '#111827' },
      { name: 'Crema Premium', hex: '#fef3c7' }
    ],
    featuredImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80' // Encimera de cuarzo en cocina
  },
  {
    id: 'granito',
    name: 'Tableros de Granito',
    type: 'piedra',
    description: 'El granito es una piedra 100% natural, extraída directamente de canteras. Cada plancha es única, ofreciendo una resistencia inigualable al calor extremo y un brillo pulido natural de larga duración.',
    advantages: [
      'Resistencia térmica insuperable (soporta ollas calientes directamente).',
      'Cada pieza es única con patrones naturales e irrepetibles.',
      'Durabilidad extrema para interiores y exteriores.',
      'Económico en comparación con otras piedras premium.'
    ],
    technicalSpecs: {
      hardness: '6-6.5 (Escala de Mohs - Rígido)',
      porosity: 'Baja (requiere sellado anual sugerido)',
      thickness: '20mm / 30mm',
      resistance: 'Extrema al calor, alta a rayones. Sensible a ácidos si no está sellado.',
      maintenance: 'Requiere sellador protector una vez al año y limpieza suave.'
    },
    colors: [
      { name: 'Gris Sal y Pimienta', hex: '#9ca3af' },
      { name: 'Negro Aracruz', hex: '#1f2937' },
      { name: 'Marrón Báltico', hex: '#4b5563' }
    ],
    featuredImage: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'marmol',
    name: 'Tableros de Mármol',
    type: 'piedra',
    description: 'La piedra clásica del lujo y la sofisticación. El mármol es apreciado por sus vetas pronunciadas y elegancia visual sin igual, ideal para baños, chimeneas, mesas y revestimientos exclusivos.',
    advantages: [
      'Estética atemporal extremadamente lujosa y elegante.',
      'Vetas naturales marcadas que aportan dinamismo visual.',
      'Superficie fresca al tacto.',
      'Ideal para zonas de bajo impacto mecánico (baños y salas).'
    ],
    technicalSpecs: {
      hardness: '3-4 (Escala de Mohs - Suave)',
      porosity: 'Media (absorbente, requiere cuidado con líquidos coloridos)',
      thickness: '20mm',
      resistance: 'Sensible al calor muy alto y a rayones. Sensible a químicos ácidos (limón, vinagre).',
      maintenance: 'Limpieza cuidadosa inmediata y sellado frecuente.'
    },
    colors: [
      { name: 'Blanco Carrara', hex: '#f9fafb' },
      { name: 'Crema Marfil', hex: '#fef3c7' },
      { name: 'Negro Marquina', hex: '#111827' }
    ],
    featuredImage: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'piedrasinterizada',
    name: 'Piedra Sinterizada',
    type: 'piedra',
    description: 'Material de última generación fabricado con minerales de granito, cuarzo y vidrio sometidos a presiones y temperaturas extremas. Es la piedra definitiva: ultraresistente a todo.',
    advantages: [
      'Resistencia total a temperaturas extremas (soporta fuego directo).',
      'Inmune a los rayos UV (no pierde color a la intemperie).',
      'Antibacteriano y antiarañazos absoluto.',
      'Formatos extra grandes y espesores ultradelgados.'
    ],
    technicalSpecs: {
      hardness: '8 (Escala de Mohs - Ultra Duro)',
      porosity: 'Cero absoluto (no poroso)',
      thickness: '6mm / 12mm / 20mm',
      resistance: 'Máxima resistencia a fuego, heladas, rayones graves y manchas.',
      maintenance: 'Cero mantenimiento especial. Limpieza con cualquier producto.'
    },
    colors: [
      { name: 'Calacatta Gold Premium', hex: '#f3f4f6' },
      { name: 'Óxido Industrial', hex: '#374151' },
      { name: 'Gris Cemento', hex: '#6b7280' }
    ],
    featuredImage: 'https://images.unsplash.com/photo-1527359395202-74d4458836be?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'melamina',
    name: 'Muebles de Melamina',
    type: 'melamina',
    description: 'Tableros de partículas de madera recubiertos con resina melamínica en ambas caras. Endeservis utiliza exclusivamente melamina de alta densidad (tipo RH - Resistente a la Humedad) para garantizar la vida útil de tu mobiliario.',
    advantages: [
      'Excelente relación costo-beneficio para closets y reposteros.',
      'Variedad infinita de texturas (madera natural, mate, alto brillo).',
      'Protección RH contra humedad y termitas.',
      'Herrajes de cierre lento (blum) integrados en la fabricación.'
    ],
    technicalSpecs: {
      thickness: '18mm / 15mm (con cantos de PVC de 2mm)',
      resistance: 'Excelente a la humedad ambiente (Melamina RH), moderada a rayones cotidianos.',
      maintenance: 'Limpieza con paño seco o ligeramente húmedo, evitar encharcamientos.'
    },
    colors: [
      { name: 'Nogal Premium', hex: '#5c4033' },
      { name: 'Roble Escandinavo', hex: '#d2b48c' },
      { name: 'Gris Grafito', hex: '#374151' },
      { name: 'Blanco Texturizado', hex: '#ffffff' }
    ],
    featuredImage: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=600&q=80'
  }
];

// 2. Galería de proyectos del showroom y portafolio
export const projects: Project[] = [
  {
    id: 'proyecto-1',
    title: 'Cocina Moderna Minimalista',
    description: 'Remodelación completa de cocina residencial en Miraflores. Se instaló una encimera de Cuarzo Blanco Calacatta con vetas grises pronunciadas, combinada con muebles de melamina RH en Roble Escandinavo y Negro Mate con tiradores ocultos.',
    category: 'Cocinas',
    materialType: 'Cuarzo',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80', // Cocina antigua
    clientType: 'Residencial',
    executionDate: 'Marzo 2026',
    details: [
      'Tablero de Cuarzo de 20mm con zócalo de 10cm y canto pulido recto.',
      'Muebles altos en Melamina RH Blanco de 18mm con pistones a gas.',
      'Muebles bajos con cajonería oculta y rieles telescópicos pesados.',
      'Instalación de iluminación LED empotrada bajo los muebles altos.'
    ],
    pdfCatalog: '/catalogo-cocinas-endeservis.pdf'
  },
  {
    id: 'proyecto-2',
    title: 'Closet de Pared a Pared Premium',
    description: 'Diseño e instalación de closet a medida en dormitorio principal en San Isidro. Estructurado totalmente en melamina texturizada de 18mm color Nogal Premium, puertas corredizas con perfiles de aluminio y organizadores internos personalizados.',
    category: 'Closets',
    materialType: 'Melamina',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80',
    clientType: 'Residencial',
    executionDate: 'Enero 2026',
    details: [
      'Medidas: 4.2m de ancho por 2.6m de alto.',
      'Pantalonero extraíble y zapateras multinivel con correderas telescópicas.',
      'Barra de colgar con iluminación LED con sensor de movimiento.',
      'Puertas con sistema corredizo silencioso y frenado hidráulico.'
    ]
  },
  {
    id: 'proyecto-3',
    title: 'Baño Principal en Mármol Negro',
    description: 'Tablero suspendido de baño y revestimiento de pared con Mármol Negro Marquina pulido. Vetas blancas espectaculares que contrastan con grifería dorada satinada y mueble flotante inferior en melaminaRH gris cenizo.',
    category: 'Baños',
    materialType: 'Mármol',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
    clientType: 'Residencial',
    executionDate: 'Febrero 2026',
    details: [
      'Lavatorio empotrado bajo el tablero de mármol de 20mm.',
      'Faldón frontal de mármol de 15cm para simular un tablero macizo.',
      'Tratamiento impermeabilizante especial contra sales e impurezas de agua.',
      'Mueble flotante con dos amplios cajones con corte para desagüe.'
    ]
  },
  {
    id: 'proyecto-4',
    title: 'Cocina en Isla de Piedra Sinterizada',
    description: 'Encimera de isla de cocina y cascada lateral utilizando Piedra Sinterizada Calacatta Gold. Soporta altas temperaturas de cocción, fuego y rayaduras sin sufrir ningún daño.',
    category: 'Cocinas',
    materialType: 'Piedra Sinterizada',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1565182999561-18d7dc6fc77d?auto=format&fit=crop&w=1200&q=80',
    clientType: 'Residencial',
    executionDate: 'Diciembre 2025',
    details: [
      'Piedra sinterizada de 12mm de espesor en color Calacatta Gold.',
      'Laterales con ensamble a inglete (corte a 45 grados) logrando efecto de bloque sólido.',
      'Perforación a medida para placa de inducción y lavadero bajo tope.',
      'Resistencia a fuego directo demostrada en pruebas de instalación.'
    ]
  },
  {
    id: 'proyecto-5',
    title: 'Oficina Ejecutiva Corporativa',
    description: 'Mobiliario corporativo a medida para sala de reuniones y oficina de gerencia en San Borja. Escritorio central en melamina de 25mm de espesor color Gris Grafito y tableros auxiliares con pasacables integrados.',
    category: 'Oficinas',
    materialType: 'Melamina',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    clientType: 'Comercial',
    executionDate: 'Noviembre 2025',
    details: [
      'Escritorio gerencial de 2.0m x 1.0m con base metálica oculta.',
      'Módulo credenza posterior para archivo con cerraduras de seguridad.',
      'Cantos de PVC de 2mm aplicados a alta temperatura para evitar desprendimientos.',
      'Mesa de reuniones rectangular para 10 personas.'
    ]
  },
  {
    id: 'proyecto-6',
    title: 'Recepción de Clínica Estética',
    description: 'Mostrador principal de recepción residencial y comercial en Surco. Tablero de Granito Negro Aracruz de alta resistencia combinado con zócalo retroiluminado y frente texturizado en melamina acanalada blanca.',
    category: 'Comercial',
    materialType: 'Granito',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
    clientType: 'Comercial',
    executionDate: 'Octubre 2025',
    details: [
      'Tablero de granito natural de alta durabilidad y fácil limpieza.',
      'Diseño en L con doble altura (una para atención al público y otra operativa interna).',
      'Pasacables ocultos y bandejas porta-teclado retráctiles.',
      'Iluminación LED indirecta en la base.'
    ]
  }
];

// 3. Testimonios
export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Vanessa Rodriguez',
    role: 'Propietaria de Departamento en Miraflores',
    rating: 5,
    text: 'Encantada con el trabajo de Endeservis. Remodelaron mi cocina completa instalando cuarzo blanco. Tienen una puntualidad increíble, acabados finos en la carpintería y el cuarzo luce precioso.',
    projectImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 'test-2',
    name: 'Ing. Carlos Mendoza',
    role: 'Director de Constructora CM',
    rating: 5,
    text: 'Llevamos más de 5 años trabajando con ellos para los proyectos residenciales de la constructora. Su control de calidad en los tableros de granito y el ensamblaje de la melamina es impecable. Altamente recomendados.',
    projectImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 'test-3',
    name: 'Andrea Cáceres',
    role: 'Diseñadora de Interiores',
    rating: 5,
    text: 'Como diseñadora busco que los materiales queden perfectos. En el baño de mármol negro que instalamos, la alineación de las vetas fue espectacular. Sus técnicos son verdaderos artesanos.',
    projectImage: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=150&q=80'
  }
];
