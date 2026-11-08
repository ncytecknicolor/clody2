import Link from 'next/link';
import { ArrowUpRight, MessagesSquare, LifeBuoy, GraduationCap, LayoutGrid, Store, Factory, Briefcase, Newspaper, Globe } from 'lucide-react';
import { Tarjeta } from './ui';
import Contador from './Contador';
import Reveal from './Reveal';

export function PorQue() {
  const chicas = [
    { icon: MessagesSquare, t: 'Comunicación directa', d: 'Creemos en hablar de frente con cada cliente para dar soluciones funcionales a sus necesidades.' },
    { icon: LifeBuoy, t: 'Soporte después de entregar', d: 'Seguimos brindando soporte para el manejo y la actualización de tu sitio.' },
    { icon: GraduationCap, t: 'Talleres y cursos', d: 'Capacitamos a equipos y particulares para que administren su propio sitio.' },
    { icon: LayoutGrid, t: 'Todo en un solo lugar', d: 'Diseño web, software, marketing digital y capacitación con un mismo equipo.' },
  ];
  return (
    <section className="bg-niebla py-20">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="font-display text-3xl font-bold md:text-4xl">Por qué elegir Dynamedia</h2>
        <p className="mt-3 max-w-xl text-grafito/80">Más de una década acompañando a empresas de Monterrey y de todo México.</p>
        <div className="mt-10 grid gap-5 md:grid-cols-4">
          <Reveal className="md:col-span-2 md:row-span-2">
            <Tarjeta className="h-full border-0 bg-azul-oscuro p-8 text-white md:p-10" inner="relative flex h-full flex-col" luz="rgba(255,255,255,0.12)">
              <p className="font-display text-[6rem] font-extrabold leading-none text-naranja-claro md:text-[8rem]"><Contador hasta={15} prefijo="+" /></p>
              <p className="mt-2 font-display text-2xl font-bold">años creando soluciones digitales</p>
              <p className="mt-4 max-w-md text-white/80">Desde 2010 ayudamos a empresas a tener presencia digital profesional, tecnología hecha a su medida y más clientes.</p>
              <Link href="/nosotros" className="mt-auto inline-flex items-center gap-2 pt-8 font-semibold text-naranja-claro hover:text-white">Conoce nuestra historia <ArrowUpRight size={18} /></Link>
            </Tarjeta>
          </Reveal>
          {chicas.map(({ icon: Icon, t, d }, k) => (
            <Reveal key={t} delay={(k + 1) * 100} className="h-full">
              <Tarjeta className="h-full border border-black/10 bg-white p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-azul text-white transition-colors group-hover:bg-naranja"><Icon size={24} /></div>
                <h3 className="mt-4 font-display text-lg font-bold text-azul">{t}</h3>
                <p className="mt-2 text-sm text-grafito/80">{d}</p>
              </Tarjeta>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Giros() {
  const giros = [{ icon: Store, t: 'Tiendas departamentales' }, { icon: Factory, t: 'Industriales' }, { icon: Briefcase, t: 'Servicios' }, { icon: Newspaper, t: 'Periódicos digitales' }, { icon: Globe, t: 'Sitios informativos' }];
  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <h2 className="font-display text-3xl font-bold md:text-4xl">Experiencia en distintos giros</h2>
      <p className="mt-3 max-w-2xl text-grafito/80">Hemos desarrollado proyectos para empresas comerciales, industriales y de servicios, así como para medios digitales y sitios informativos.</p>
      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-5">
        {giros.map(({ icon: Icon, t }, k) => (
          <Reveal key={t} delay={k * 90} className="h-full">
            <Tarjeta className="h-full border border-black/10 bg-white p-6 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-niebla text-azul transition-all duration-300 group-hover:scale-110 group-hover:bg-naranja group-hover:text-white"><Icon size={26} /></div>
              <p className="mt-4 font-semibold text-azul">{t}</p>
            </Tarjeta>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
