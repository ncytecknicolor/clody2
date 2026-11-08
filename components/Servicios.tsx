import Link from 'next/link';
import { Globe, Code2, ShoppingCart, TrendingUp, Check, ArrowUpRight } from 'lucide-react';
import { Tarjeta } from './ui';
import Reveal from './Reveal';

const ejes = [
  { n: '01', icon: Globe, t: 'Desarrollo web',
    titulo: 'Tu empresa merece una presencia digital profesional.',
    texto: 'Diseñamos y desarrollamos sitios web funcionales, atractivos y estratégicos que fortalecen tu marca y generan oportunidades comerciales.',
    lista: ['Diseño y desarrollo de páginas web.', 'Sitios web corporativos.', 'Landing pages.', 'Portales y sitios especializados.', 'Rediseño y mantenimiento web.'],
    cta: 'Conoce nuestros servicios web', href: '/servicios/diseno-web' },
  { n: '02', icon: Code2, t: 'Software a la medida',
    titulo: 'Tecnología diseñada alrededor de tu negocio.',
    texto: 'Desarrollamos sistemas y herramientas digitales adaptados a los procesos y necesidades de cada empresa.',
    lista: ['Sistemas administrativos.', 'Sistemas de inventarios.', 'CRM y gestión de clientes.', 'Automatización de procesos.', 'Aplicaciones y plataformas empresariales.'],
    cta: 'Explora nuestras soluciones de software', href: '/servicios/software-a-la-medida' },
  { n: '03', icon: ShoppingCart, t: 'Ecommerce',
    titulo: 'Lleva tus productos y servicios al mundo digital.',
    texto: 'Creamos tiendas en línea que facilitan la compra, administración y crecimiento de tu negocio.',
    lista: ['Diseño y desarrollo de tiendas en línea.', 'Integración de pasarelas de pago.', 'Catálogos digitales.', 'Integración de envíos y logística.', 'Administración y optimización de ecommerce.'],
    cta: 'Descubre nuestras soluciones de comercio electrónico', href: '/servicios/tiendas-virtuales' },
  { n: '04', icon: TrendingUp, t: 'Crecimiento digital',
    titulo: 'Haz que más clientes encuentren tu empresa.',
    texto: 'Desarrollamos estrategias digitales para mejorar tu posicionamiento, atraer clientes potenciales y aprovechar mejor tus oportunidades comerciales.',
    lista: ['Posicionamiento en Google (SEO).', 'Publicidad en Google Ads y redes sociales.', 'Estrategias de marketing digital.', 'Generación de clientes potenciales.', 'Analítica y optimización de conversiones.'],
    cta: 'Conoce cómo impulsar tu crecimiento', href: '/servicios/posicionamiento-en-google' },
];

export default function Servicios() {
  return (
    <section id="servicios" className="bg-niebla py-20">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="font-display text-3xl font-bold md:text-4xl">Lo que hacemos por tu empresa</h2>
        <p className="mt-3 max-w-xl text-grafito/80">Cuatro áreas de trabajo para hacer crecer tu empresa en Monterrey y todo México.</p>
        <ul className="mt-10 grid auto-rows-fr gap-6 md:grid-cols-2">
          {ejes.map(({ n, icon: Icon, t, titulo, texto, lista, cta, href }, k) => (
            <li key={t}>
              <Reveal delay={(k % 2) * 120} className="h-full">
                <Tarjeta className="h-full border border-black/10 border-t-4 border-t-azul bg-white p-8 hover:border-t-naranja" inner="relative flex h-full flex-col">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-azul text-white transition-colors group-hover:bg-naranja"><Icon size={26} /></div>
                    <span aria-hidden className="font-display text-5xl font-extrabold text-azul/10 transition-colors group-hover:text-naranja/30">{n}</span>
                  </div>
                  <h3 className="mt-6 text-sm font-semibold uppercase tracking-widest text-naranja">{t}</h3>
                  <p className="mt-2 font-display text-2xl font-bold leading-snug text-azul">{titulo}</p>
                  <p className="mt-3 text-grafito/80">{texto}</p>
                  <p className="mt-5 text-sm font-semibold uppercase tracking-wider text-grafito/60">Servicios</p>
                  <ul className="mt-2 space-y-2">
                    {lista.map((i) => <li key={i} className="flex gap-2"><Check size={18} className="mt-0.5 shrink-0 text-naranja" />{i}</li>)}
                  </ul>
                  <Link href={href} className="mt-auto inline-flex items-center gap-2 pt-7 font-semibold text-azul hover:text-naranja">
                    {cta} <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </Tarjeta>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
