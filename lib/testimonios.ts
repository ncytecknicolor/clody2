// Testimonios de clientes (inicio y Nosotros). Escribe en "texto" las PALABRAS REALES del cliente, con su permiso.
// Mientras falte el texto, se muestra una etiqueta "Pendiente". Pon MOSTRAR_PENDIENTES en false para ocultar los que no tengan texto.
export const MOSTRAR_PENDIENTES = true;

export type Testimonio = { id: string; nombre: string; empresa: string; cargo?: string; texto?: string };

export const testimonios: Testimonio[] = [
  { id: 'trofeos-mg', nombre: 'Alfonso M.', empresa: 'Trofeos MG' },
  { id: 'gsf-cargo', nombre: 'Miguel F.', empresa: 'GSF Cargo' },
];

export const iniciales = (n: string) => n.replace(/\./g, '').split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase();
