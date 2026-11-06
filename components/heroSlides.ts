// Para poner la imagen de cada pantalla: copia el archivo a public/hero/
// y escribe su ruta en "imagen", por ejemplo: imagen: '/hero/01-somos.jpg'
// Tamaño recomendado: 1920x1080, menos de 400 KB. Mientras no haya imagen se ve el degradado.
export type Slide = { id: string; titulo: string[]; texto: string; fondo: string; imagen?: string };

export const slides: Slide[] = [
  { id: 'somos', titulo: ['Somos', 'Dynamedia'], texto: 'Un equipo de expertos, capacitados en Diseño Web, Marketing Digital y Desarrollo de Software, siempre dispuestos a ayudarte.', fondo: 'linear-gradient(135deg,#123874,#1B4F9C)' },
  { id: 'soluciones', titulo: ['Generamos', 'soluciones'], texto: 'Creemos en la comunicación directa con nuestros clientes para así brindar soluciones funcionales a sus necesidades.', fondo: 'linear-gradient(135deg,#2B2F36,#1B4F9C)' },
  { id: 'grafico', titulo: ['Diseño gráfico'], texto: 'Creamos experiencias a través de logotipos, empaques, diseño editorial, material POP e impresos de todo tipo.', fondo: 'linear-gradient(135deg,#2B2F36,#F26B21)' },
  { id: 'web', titulo: ['Diseño web'], texto: 'Apasionados por impulsar la presencia de nuestros clientes con proyectos web de calidad.', fondo: 'linear-gradient(135deg,#1B4F9C,#2B2F36)' },
  { id: 'seo', titulo: ['Posicionamiento', 'web en buscadores'], texto: 'Contamos con la experiencia que se requiere para posicionar tu sitio web en la primera página de resultados de Google. ¡Pregúntanos cómo!', fondo: 'linear-gradient(135deg,#1B4F9C,#FBA23A)' },
  { id: 'software', titulo: ['Desarrollo de software', 'a la medida'], texto: 'Programadores especializados dispuestos a dar solución a las necesidades de tu empresa con software a la medida.', fondo: 'linear-gradient(135deg,#123874,#2B2F36)' },
  { id: 'redes', titulo: ['Redes sociales', 'para pymes'], texto: 'Generamos propuestas de valor uniendo a nuestros clientes con el segmento ideal mediante una identidad profesional.', fondo: 'linear-gradient(135deg,#F26B21,#123874)' },
];
