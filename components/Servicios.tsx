'use client';
import { useEffect, useRef, useState } from 'react';
import { Globe, Search, Code2, ShoppingCart, Share2, Palette, MousePointerClick, Sparkles, GraduationCap, X, Check, ArrowRight } from 'lucide-react';

// Orden = prioridad de mercado. Para cambiarlo, mueve los bloques de lugar.
const servicios = [
  { icon: MousePointerClick, t: 'Campañas de pago por clic (PPC)', promesa: 'Anuncios que aparecen justo cuando alguien busca lo que vendes. Pagas por cada clic.',
    incluye: ['Campañas en Google Ads y en redes sociales', 'Selección de palabras clave y de audiencia', 'Anuncios y páginas de destino pensados para convertir', 'Seguimiento de clics, contactos y costo por cliente potencial'],
    ideal: 'Negocios que quieren resultados rápidos y medibles, o que lanzan un producto o promoción.' },
  { icon: Search, t: 'Posicionamiento en Google', promesa: 'Que te encuentren cuando buscan lo que vendes, sin pagar por cada visita.',
    incluye: ['Revisión técnica y de contenido de tu sitio', 'Palabras clave según lo que busca tu cliente', 'Posicionamiento local en Google y Google Maps', 'Reportes de avances'],
    ideal: 'Negocios con sitio web que casi no reciben visitas ni contactos.' },
  { icon: Sparkles, t: 'Creación de contenido con IA', promesa: 'Publica más y mejor, con herramientas de inteligencia artificial y revisión humana.',
    incluye: ['Textos para redes, blog y correo con el tono de tu marca', 'Imágenes y piezas gráficas creadas con IA', 'Guiones y videos cortos para redes', 'Revisión humana de calidad, datos y estilo de marca'],
    ideal: 'Pymes que necesitan publicar seguido sin contratar un equipo completo.' },
  { icon: Share2, t: 'Redes sociales para pymes', promesa: 'Presencia constante y profesional donde están tus clientes.',
    incluye: ['Identidad visual para tus perfiles', 'Calendario de publicaciones', 'Diseño de imágenes y piezas gráficas', 'Campañas y reporte de resultados'],
    ideal: 'Pymes que publican sin estrategia o sin tiempo para hacerlo.' },
  { icon: Globe, t: 'Diseño web', promesa: 'Tu empresa abierta las 24 horas, con una imagen profesional.',
    incluye: ['Sitio corporativo o landing page a la medida', 'Diseño adaptado a celular, tablet y computadora', 'Formulario de contacto y botón de WhatsApp', 'Estructura lista para aparecer en Google'],
    ideal: 'Empresas sin sitio web, o con uno que ya se ve desactualizado.' },
  { icon: ShoppingCart, t: 'Tiendas virtuales', promesa: 'Vende en línea desde el primer día.',
    incluye: ['Catálogo de productos y carrito de compra', 'Pagos con tarjeta y otras formas de pago', 'Cálculo y gestión de envíos', 'Panel para administrar tus pedidos'],
    ideal: 'Comercios y marcas que quieren vender por internet.' },
  { icon: Code2, t: 'Software a la medida', promesa: 'Automatiza lo que hoy haces a mano.',
    incluye: ['Análisis de tu proceso antes de programar', 'Sistemas web: inventarios, nómina, encuestas, reportes', 'Usuarios con permisos y acceso seguro', 'Capacitación y soporte después de la entrega'],
    ideal: 'Empresas que trabajan con hojas de Excel y procesos repetitivos.' },
  { icon: GraduationCap, t: 'Capacitación', promesa: 'Tu equipo aprende a usar las herramientas digitales y a sacarles provecho.',
    incluye: ['Cursos presenciales de WordPress y de posicionamiento en Google', 'Talleres de marketing digital y redes sociales', 'Uso de inteligencia artificial en el trabajo diario', 'Para equipos o personas, con material de apoyo'],
    ideal: 'Equipos que quieren manejar su propia página y marketing, o profesionales que desean actualizarse.' },
  { icon: Palette, t: 'Diseño gráfico', promesa: 'Una marca que se reconoce y se recuerda.',
    incluye: ['Logotipo e identidad de marca', 'Empaques y etiquetas', 'Diseño editorial: catálogos, folletos, revistas', 'Material POP e impresos de todo tipo'],
    ideal: 'Marcas nuevas, o que quieren renovar su imagen.' },
];

const cara = 'flex flex-col p-6 transition-opacity duration-300 [grid-area:1/1] motion-reduce:transition-none';

export default function Servicios() {
  const [abierto, setAbierto] = useState<number | null>(null);
  const ultimo = useRef<number | null>(null);
  useEffect(() => {
    if (abierto !== null) document.getElementById(`cerrar-${abierto}`)?.focus();
    else if (ultimo.current !== null) document.getElementById(`abrir-${ultimo.current}`)?.focus();
  }, [abierto]);

  return (
    <section id="servicios" className="bg-niebla py-20">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="font-display text-3xl font-bold md:text-4xl">Lo que hacemos por tu empresa</h2>
        <p className="mt-3 max-w-xl text-grafito/80">Elige un servicio para ver qué incluye y para quién es.</p>
        <ul className="mt-10 grid auto-rows-fr gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicios.map(({ icon: Icon, t, promesa, incluye, ideal }, k) => {
            const on = abierto === k;
            return (
              <li key={t} onKeyDown={(e) => e.key === 'Escape' && setAbierto(null)}
                className="group grid overflow-hidden rounded-xl shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none">
                {/* Cara frontal */}
                <div className={`${cara} border-t-4 border-azul bg-white ${on ? 'pointer-events-none invisible opacity-0' : 'opacity-100'}`}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-azul text-white transition-colors group-hover:bg-naranja">
                    <Icon size={26} />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-azul">{t}</h3>
                  <p className="mt-2 text-grafito/80">{promesa}</p>
                  <button id={`abrir-${k}`} aria-expanded={on} onClick={() => { ultimo.current = k; setAbierto(k); }}
                    className="mt-auto flex items-center gap-2 pt-6 text-sm font-semibold text-naranja">
                    Ver qué incluye <ArrowRight size={16} />
                  </button>
                </div>
                {/* Cara de detalle */}
                <div className={`${cara} border-t-4 border-naranja bg-azul-oscuro text-white ${on ? 'opacity-100' : 'pointer-events-none invisible opacity-0'}`}>
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-lg font-bold">{t}</h3>
                    <button id={`cerrar-${k}`} aria-label={`Cerrar detalle de ${t}`} onClick={() => setAbierto(null)} className="rounded-full p-1 hover:bg-white/15">
                      <X size={20} />
                    </button>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {incluye.map((i) => (
                      <li key={i} className="flex gap-2 text-sm"><Check size={16} className="mt-0.5 shrink-0 text-naranja-claro" />{i}</li>
                    ))}
                  </ul>
                  <p className="mt-4 rounded-md bg-white/10 p-3 text-sm"><strong>Ideal para:</strong> {ideal}</p>
                  <a href="#contacto" className="mt-auto inline-flex items-center gap-2 pt-5 font-semibold text-naranja-claro hover:text-white">
                    Cotizar este servicio <ArrowRight size={16} />
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
