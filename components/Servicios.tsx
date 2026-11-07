'use client';
import { useState } from 'react';
import { Globe, Search, Code2, ShoppingCart, Share2, Palette, Plus, Check, ArrowRight } from 'lucide-react';

const servicios = [
  { icon: Globe, t: 'Diseño web', promesa: 'Tu empresa abierta las 24 horas, con una imagen profesional.',
    incluye: ['Sitio corporativo o landing page a la medida', 'Diseño adaptado a celular, tablet y computadora', 'Formulario de contacto y botón de WhatsApp', 'Estructura lista para aparecer en Google'],
    ideal: 'Empresas sin sitio web, o con uno que ya se ve desactualizado.' },
  { icon: Search, t: 'Posicionamiento en Google', promesa: 'Que te encuentren cuando buscan lo que vendes.',
    incluye: ['Revisión técnica y de contenido de tu sitio', 'Palabras clave según lo que busca tu cliente', 'Optimización de páginas y velocidad de carga', 'Reportes de avances'],
    ideal: 'Negocios con sitio web que casi no reciben visitas ni contactos.' },
  { icon: Code2, t: 'Software a la medida', promesa: 'Automatiza lo que hoy haces a mano.',
    incluye: ['Análisis de tu proceso antes de programar', 'Sistemas web: inventarios, nómina, encuestas, reportes', 'Usuarios con permisos y acceso seguro', 'Capacitación y soporte después de la entrega'],
    ideal: 'Empresas que trabajan con hojas de Excel y procesos repetitivos.' },
  { icon: ShoppingCart, t: 'Tiendas virtuales', promesa: 'Vende en línea desde el primer día.',
    incluye: ['Catálogo de productos y carrito de compra', 'Pagos con tarjeta y otras formas de pago', 'Cálculo y gestión de envíos', 'Panel para administrar tus pedidos'],
    ideal: 'Comercios y marcas que quieren vender por internet.' },
  { icon: Share2, t: 'Redes sociales para pymes', promesa: 'Presencia constante y profesional donde están tus clientes.',
    incluye: ['Identidad visual para tus perfiles', 'Calendario de publicaciones', 'Diseño de imágenes y piezas gráficas', 'Campañas y reporte de resultados'],
    ideal: 'Pymes que publican sin estrategia o sin tiempo para hacerlo.' },
  { icon: Palette, t: 'Diseño gráfico', promesa: 'Una marca que se reconoce y se recuerda.',
    incluye: ['Logotipo e identidad de marca', 'Empaques y etiquetas', 'Diseño editorial: catálogos, folletos, revistas', 'Material POP e impresos de todo tipo'],
    ideal: 'Marcas nuevas, o que quieren renovar su imagen.' },
];

export default function Servicios() {
  const [abierto, setAbierto] = useState<number | null>(0);
  return (
    <section id="servicios" className="bg-niebla py-20">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="font-display text-3xl font-bold md:text-4xl">Lo que hacemos por tu empresa</h2>
        <p className="mt-3 max-w-xl text-grafito/80">Elige un servicio para ver qué incluye y para quién es.</p>
        <ul className="mt-10 grid items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicios.map(({ icon: Icon, t, promesa, incluye, ideal }, k) => {
            const on = abierto === k;
            return (
              <li key={t} className={`group rounded-xl border-t-4 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none ${on ? 'border-naranja shadow-lg' : 'border-azul'}`}>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-azul text-white transition-colors group-hover:bg-naranja">
                  <Icon size={26} />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-azul">{t}</h3>
                <p className="mt-2 text-grafito/80">{promesa}</p>
                <button aria-expanded={on} aria-controls={`serv-${k}`} onClick={() => setAbierto(on ? null : k)}
                  className="mt-5 flex items-center gap-2 text-sm font-semibold text-naranja">
                  <Plus size={16} className={`transition-transform ${on ? 'rotate-45' : ''}`} />
                  {on ? 'Ocultar detalle' : 'Ver qué incluye'}
                </button>
                <div id={`serv-${k}`} className={`grid transition-all duration-300 motion-reduce:transition-none ${on ? 'mt-5 grid-rows-[1fr] opacity-100' : 'invisible grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <ul className="space-y-2">
                      {incluye.map((i) => (
                        <li key={i} className="flex gap-2 text-sm"><Check size={16} className="mt-0.5 shrink-0 text-naranja" />{i}</li>
                      ))}
                    </ul>
                    <p className="mt-4 rounded-md bg-niebla p-3 text-sm"><strong>Ideal para:</strong> {ideal}</p>
                    <a href="#contacto" className="mt-4 inline-flex items-center gap-2 font-semibold text-azul hover:text-naranja">
                      Cotizar este servicio <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
