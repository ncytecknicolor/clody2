// Un registro por proyecto: la imagen del carrusel y su ficha salen de aquí.
// Campos opcionales (los que falten se muestran como "Pendiente" mientras MOSTRAR_PENDIENTES sea true):
//   sector, solucion, anio, servicios: ['Diseño web', ...], reto, desarrollo, resultado,
//   url: 'https://...' (solo si el sitio sigue en línea), galeria: [{ src, w, h, pie }]
// Imágenes en public/proyectos/<slug>/ (principal.jpg, galeria-1.jpg, ...).
export type Imagen = { src: string; w: number; h: number; pie?: string };
export type Proyecto = {
  slug: string; nombre: string; principal: Imagen;
  sector?: string; solucion?: string; anio?: string; servicios?: string[];
  reto?: string; desarrollo?: string; resultado?: string; url?: string; galeria?: Imagen[];
};

// Ponlo en false cuando todas las fichas estén completas: los bloques sin dato se ocultan.
export const MOSTRAR_PENDIENTES = true;

export const proyectos: Proyecto[] = [
  { slug: 'campo-aventura', nombre: 'Campo Aventura', principal: { src: '/proyectos/campo-aventura/principal.jpg', w: 1600, h: 802 } },
  { slug: 'trofeos-mg', nombre: 'Trofeos MG', principal: { src: '/proyectos/trofeos-mg/principal.jpg', w: 1600, h: 805 } },
  { slug: 'gsf', nombre: 'GSF', principal: { src: '/proyectos/gsf/principal.jpg', w: 1600, h: 768 } },
  { slug: 'crealte', nombre: 'Crealte', principal: { src: '/proyectos/crealte/principal.jpg', w: 1600, h: 801 } },
  { slug: 'we-love-party', nombre: 'We Love Party', principal: { src: '/proyectos/we-love-party/principal.jpg', w: 1600, h: 804 } },
  { slug: 'grupo-rios', nombre: 'Grupo Ríos', principal: { src: '/proyectos/grupo-rios/principal.jpg', w: 1600, h: 805 } },
  { slug: 'wm-refractories', nombre: 'WM Refractories', principal: { src: '/proyectos/wm-refractories/principal.jpg', w: 1600, h: 796 } },
  { slug: 'inspira-stone', nombre: 'Inspira Stone', principal: { src: '/proyectos/inspira-stone/principal.jpg', w: 1600, h: 797 } },
  { slug: 'vida-esencial', nombre: 'Vida Esencial', principal: { src: '/proyectos/vida-esencial/principal.jpg', w: 1600, h: 771 } },
];
