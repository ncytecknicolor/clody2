// Para poner la imagen de cada pantalla: copia el archivo a public/hero/
// y escribe su ruta en "imagen", por ejemplo: imagen: '/hero/01-somos.jpg'
// VIDEO: copia el .mp4 a public/hero/ y agrega  video: '/hero/video.mp4'  a la pantalla que lo lleve.
// Dura lo mismo que las demás pantallas (el video se corta si es más largo). Si tiene "imagen", se usa como póster mientras carga.
// VELO: capa de color opcional sobre la imagen o el video (ej. velo: 'rgba(37,99,235,0.82)') para que el texto blanco se lea.
// Tamaño recomendado: 1920x1080, menos de 400 KB. Mientras no haya imagen se ve el degradado.
export type Slide = { id: string; titulo: string[]; texto: string; fondo: string; imagen?: string; video?: string; velo?: string };

export const slides: Slide[] = [
  { id: 'somos', titulo: ['Somos', 'Dynamedia'], texto: 'Un equipo de expertos, capacitados en Diseño Web, Marketing Digital y Desarrollo de Software, siempre dispuestos a ayudarte.', fondo: 'linear-gradient(135deg,#123874,#1B4F9C)', imagen: '/hero/01-somos.jpg', video: '/hero/video.mp4', velo: 'rgba(37,99,235,0.82)' },
  { id: 'soluciones', titulo: ['Generamos', 'soluciones'], texto: 'Creemos en la comunicación directa con nuestros clientes para así brindar soluciones funcionales a sus necesidades.', fondo: 'linear-gradient(135deg,#2B2F36,#1B4F9C)', imagen: '/hero/02-soluciones.jpg', velo: 'rgba(18,56,116,0.62)' },
  { id: 'grafico', titulo: ['Diseño gráfico'], texto: 'Creamos experiencias a través de logotipos, empaques, diseño editorial, material POP e impresos de todo tipo.', fondo: 'linear-gradient(135deg,#2B2F36,#F26B21)', imagen: '/hero/03-grafico.jpg', velo: 'rgba(43,47,54,0.62)' },
  { id: 'web', titulo: ['Diseño web'], texto: 'Apasionados por impulsar la presencia de nuestros clientes con proyectos web de calidad.', fondo: 'linear-gradient(135deg,#1B4F9C,#2B2F36)', imagen: '/hero/04-web.jpg', velo: 'rgba(43,47,54,0.66)' },
  { id: 'seo', titulo: ['Posicionamiento', 'web en buscadores'], texto: 'Contamos con la experiencia que se requiere para posicionar tu sitio web en la primera página de resultados de Google. ¡Pregúntanos cómo!', fondo: 'linear-gradient(135deg,#1B4F9C,#FBA23A)', imagen: '/hero/05-seo-monterrey.jpg', velo: 'rgba(18,56,116,0.64)' },
  { id: 'software', titulo: ['Desarrollo de software', 'a la medida'], texto: 'Programadores especializados dispuestos a dar solución a las necesidades de tu empresa con software a la medida.', fondo: 'linear-gradient(135deg,#123874,#2B2F36)', imagen: '/hero/06-software.jpg', velo: 'rgba(18,56,116,0.45)' },
  { id: 'redes', titulo: ['Redes sociales', 'para pymes'], texto: 'Generamos propuestas de valor uniendo a nuestros clientes con el segmento ideal mediante una identidad profesional.', fondo: 'linear-gradient(135deg,#F26B21,#123874)', imagen: '/hero/07-redes.jpg', velo: 'rgba(43,47,54,0.35)' },
];
