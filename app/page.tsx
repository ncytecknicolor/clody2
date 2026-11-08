import Link from 'next/link';
import { GraduationCap, LifeBuoy, MessageCircle, Mail, MapPin, ArrowRight } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Servicios from '@/components/Servicios';
import Proyectos from '@/components/Proyectos';

const WA = 'https://api.whatsapp.com/send?phone=528131979805&text=Hola%20quiero%20informacion%20de%20los%20servicios%20de%20Dynamedia';

const cifras = [['15', 'años de experiencia'], ['289', 'proyectos desarrollados'], ['320', 'clientes satisfechos'], ['1,590', 'horas de desarrollo']];

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <section id="nosotros" className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:grid-cols-2 md:grid-cols-4">
          {cifras.map(([n, l]) => (
            <div key={l}><p className="font-display text-5xl font-bold text-azul">{n}</p><p className="mt-1 text-grafito/70">{l}</p></div>
          ))}
        <Link href="/nosotros" className="inline-flex items-center gap-2 font-semibold text-azul hover:text-naranja sm:col-span-2 md:col-span-4">Conoce más sobre nosotros <ArrowRight size={18} /></Link>
      </section>

        <Servicios />

        <Proyectos />

        <section className="bg-niebla py-20">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2">
            <div id="cursos">
              <GraduationCap className="text-naranja" size={32} />
              <h2 className="mt-3 font-display text-2xl font-bold">Cursos presenciales</h2>
              <p className="mt-3 text-grafito/80">Capacitamos a equipos y a particulares que quieren crear o mantener páginas de internet. Hay curso de WordPress y de posicionamiento en Google.</p>
            </div>
            <div id="soporte">
              <LifeBuoy className="text-naranja" size={32} />
              <h2 className="mt-3 font-display text-2xl font-bold">Asesoría y soporte técnico</h2>
              <p className="mt-3 text-grafito/80">Resolvemos los problemas de tu página o sistema. Pregunta por nuestras pólizas de soporte.</p>
            </div>
          </div>
        </section>

        <section id="contacto" className="bg-grafito py-20 text-white">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-bold md:text-4xl">Hablemos de tu proyecto</h2>
              <p className="mt-4 max-w-md text-white/80">Escríbenos y te respondemos pronto.</p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-center gap-3"><Mail className="text-naranja" size={20} /> info@dynamedia.mx</li>
                <li className="flex items-center gap-3"><MapPin className="text-naranja" size={20} /> Monterrey, Nuevo León</li>
                <li><a href={WA} className="flex items-center gap-3 hover:text-naranja-claro"><MessageCircle className="text-naranja" size={20} /> Escríbenos por WhatsApp</a></li>
              </ul>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <footer className="bg-grafito py-6 text-center text-sm text-white/60">© 2026 Dynamedia</footer>
    </>
  );
}
