/** @type {import('next').NextConfig} */
const nextConfig = {
  // Redirecciones del WordPress anterior (/site/...) para conservar el SEO
  async redirects() {
    return [
      { source: '/site', destination: '/', permanent: true },
      { source: '/site/contacto', destination: '/#contacto', permanent: true },
      { source: '/site/cursos', destination: '/cursos', permanent: true },
      { source: '/site/asesoria-soporte-tecnico-paginas-web', destination: '/#soporte', permanent: true },
      { source: '/site/pages/nosotros', destination: '/#nosotros', permanent: true },
    ];
  },
};
export default nextConfig;
