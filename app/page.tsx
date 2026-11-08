import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Mail, MapPin, MessageCircle } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Servicios from '@/components/Servicios';
import Proyectos from '@/components/Proyectos';
import ExploraServicios from '@/components/ExploraServicios';
import CursosSoporte from '@/components/CursosSoporte';
import { PorQue, Giros } from '@/components/HomeSecciones';
import Ticker from '@/components/Ticker';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';
import Contador from '@/components/Contador';
import Reveal from '@/components/Reveal';
import { Magnetico } from '@/components/ui';
import { SITE, WA, FB, EMAIL, TEL } from '@/lib/site';

export const metadata: Metadata = { alternates: { canonical: '/' } };

const cifras = [
  { n: 15, p: '+', l: 'años de experiencia' }, { n: 289, p: '', l: 'proyectos desarrollados' },
  { n: 320, p: '', l: 'clientes satisfechos' }, { n: 1590, p: '', l: 'horas de desarrollo' },
];
const faqs = [
  { q: '¿Dónde está Dynamedia y a quién atiende?', a: 'Estamos en Monterrey, Nuevo León, y trabajamos con empresas de Monterrey y de todo México.' },
  { q: '¿Qué servicios ofrece Dynamedia?', a: 'Diseño web, tiendas virtuales, software a la medida, posicionamiento en Google, campañas de pago por clic, redes sociales, contenido con IA, diseño gráfico y capacitación.' },
  { q: '¿Dan soporte después de entregar el proyecto?', a: 'Sí. Seguimos brindando soporte para el manejo y la actualización de los sitios que desarrollamos, y ofrecemos pólizas de soporte.' },
  { q: '¿Imparten cursos?', a: 'Sí. Ofrecemos cursos presenciales, como el de WordPress y el de posicionamiento web en Google, y talleres para equipos.' },
  { q: '¿Cuánto cuesta un proyecto y cuánto tarda?', a: 'Depende del alcance de cada proyecto. Cuéntanos qué necesitas y te enviamos una cotización con costos y tiempos.' },
];
const grafo = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'ProfessionalService', name: 'Dynamedia', url: SITE, email: EMAIL, telephone: TEL, image: `${SITE}/brand/logo-dynamedia.png`,
      description: 'Diseño web, software a la medida y marketing digital en Monterrey, Nuevo León.',
      address: { '@type': 'PostalAddress', addressLocality: 'Monterrey', addressRegion: 'Nuevo León', addressCountry: 'MX' },
      areaServed: ['Monterrey', 'Nuevo León', 'México'], sameAs: [FB] },
    { '@type': 'FAQPage', mainEntity: faqs.map((x) => ({ '@type': 'Question', name: x.q, acceptedAnswer: { '@type': 'Answer', text: x.a } })) },
  ],
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(grafo) }} />
        <Hero />
        <Ticker />

        <section id="nosotros" className="mx-auto max-w-6xl px-5 pb-16">
          <div className="grid gap-8 rounded-2xl bg-white p-8 shadow-xl sm:grid-cols-2 md:grid-cols-4">
            {cifras.map((c) => (
              <div key={c.l}>
                <p className="font-display text-4xl font-extrabold text-azul md:text-5xl"><Contador hasta={c.n} prefijo={c.p} /></p>
                <p className="mt-1 text-grafito/70">{c.l}</p>
              </div>
            ))}
          </div>
          <Link href="/nosotros" className="mt-6 inline-flex items-center gap-2 font-semibold text-azul hover:text-naranja">Conoce más sobre nosotros <ArrowRight size={18} /></Link>
        </section>

        <Servicios />

        <section className="mx-auto max-w-6xl px-5 py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl font-bold md:text-4xl">Todos nuestros servicios en Monterrey</h2>
              <p className="mt-3 max-w-xl text-grafito/80">Cada servicio tiene su propia página con todo lo que incluye.</p>
            </div>
            <Link href="/servicios" className="inline-flex items-center gap-2 font-semibold text-azul hover:text-naranja">Ver todos los servicios <ArrowRight size={18} /></Link>
          </div>
          <div className="mt-8"><ExploraServicios /></div>
        </section>

        <Proyectos />
        <PorQue />
        <Giros />
        <CursosSoporte />

        <section className="mx-auto max-w-4xl px-5 py-20">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Preguntas frecuentes</h2>
          <div className="mt-8"><Faq items={faqs} /></div>
        </section>

        <section id="contacto" className="relative overflow-hidden bg-grafito py-20 text-white">
          <div aria-hidden className="absolute -right-24 -top-24 h-72 w-72 rotate-45 opacity-20" style={{ background: 'linear-gradient(135deg,#F26B21 50%,#1B4F9C 50%)' }} />
          <div className="relative mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2">
            <Reveal>
              <h2 className="font-display text-3xl font-bold md:text-4xl">Hablemos de tu proyecto</h2>
              <p className="mt-4 max-w-md text-white/80">Escríbenos y te respondemos pronto.</p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-center gap-3"><Mail className="text-naranja" size={20} /> {EMAIL}</li>
                <li className="flex items-center gap-3"><MapPin className="text-naranja" size={20} /> Monterrey, Nuevo León</li>
                <li><Magnetico><a href={WA} className="flex items-center gap-3 hover:text-naranja-claro"><MessageCircle className="text-naranja" size={20} /> Escríbenos por WhatsApp</a></Magnetico></li>
              </ul>
            </Reveal>
            <Reveal delay={150}><ContactForm /></Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
