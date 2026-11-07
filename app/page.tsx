import { GraduationCap, LifeBuoy, MessageCircle, Mail, MapPin } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Servicios from '@/components/Servicios';

const WA = 'https://api.whatsapp.com/send?phone=528131979805&text=Hola%20quiero%20informacion%20de%20los%20servicios%20de%20Dynamedia';

const proyectos = ['HEMSA', 'Campo Aventura', 'Admynco', 'Nibo', 'Protectus', 'Vida Esencial', 'Nutriceramic', 'Purizee', 'Eitmedia'];
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
        </section>

        <Servicios />

        <section id="proyectos" className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Proyectos recientes</h2>
          <p className="mt-3 max-w-xl text-grafito/80">Marcas que confiaron en nosotros. Agrega las capturas en <code>public/projects</code> y reemplaza estos bloques por <code>next/image</code>.</p>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
            {proyectos.map((p) => (
              <div key={p} className="flex aspect-[4/3] items-center justify-center rounded-lg bg-grafito font-display text-lg font-semibold text-white">{p}</div>
            ))}
          </div>
        </section>

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
