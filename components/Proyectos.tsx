'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { X, Pause, Play, ArrowUpRight, Plus } from 'lucide-react';
import { proyectos, MOSTRAR_PENDIENTES, type Proyecto } from './proyectos';

const por = (s: string[]) => s.map((x) => proyectos.find((p) => p.slug === x)!);
const arriba = por(['campo-aventura', 'trofeos-mg', 'gsf', 'crealte', 'we-love-party']);
const abajo = por(['grupo-rios', 'wm-refractories', 'inspira-stone', 'vida-esencial']);

const Pendiente = () => <span className="rounded bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-800">Pendiente</span>;

function Fila({ items, alto, dir, dur, cta, abrir }: { items: Proyecto[]; alto: string; dir: '' | 'der'; dur: number; cta?: boolean; abrir: (p: Proyecto) => void }) {
  return (
    <div className="marquee overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className={`marquee-pista ${dir}`} style={{ ['--dur' as string]: `${dur}s` }}>
        {[0, 1, 2].map((c) => (
          <div key={c} aria-hidden={c > 0} className={`flex shrink-0 gap-5 pr-5 ${alto} ${c > 0 ? 'copia' : ''}`}>
            {items.map((p) => (
              <button key={p.slug} tabIndex={c > 0 ? -1 : 0} onClick={() => abrir(p)} aria-label={`Ver proyecto ${p.nombre}`}
                className="group relative h-full shrink-0 overflow-hidden rounded-xl bg-grafito">
                <Image src={p.principal.src} width={p.principal.w} height={p.principal.h} alt={c > 0 ? '' : `Sitio web de ${p.nombre}`}
                  sizes="(min-width:768px) 560px, 360px" className="h-full w-auto max-w-none transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none" />
                <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-black/85 to-transparent p-4 text-left text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                  <span className="font-display text-lg font-bold">{p.nombre}</span>
                  <span className="flex shrink-0 items-center gap-1 text-sm font-semibold text-naranja-claro">Ver proyecto <Plus size={16} /></span>
                </span>
              </button>
            ))}
            {cta && (
              <a href="#contacto" tabIndex={c > 0 ? -1 : 0}
                className="group flex h-full w-[300px] shrink-0 flex-col justify-center rounded-xl bg-gradient-to-br from-azul to-azul-oscuro p-6 text-white md:w-[380px]">
                <span className="font-display text-2xl font-bold leading-tight md:text-3xl">Tu proyecto puede ser el siguiente.</span>
                <span className="mt-4 inline-flex items-center gap-2 font-semibold text-naranja-claro">
                  Cotiza tu proyecto <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function Bloque({ titulo, ok, children }: { titulo: string; ok: boolean; children: React.ReactNode }) {
  if (!ok && !MOSTRAR_PENDIENTES) return null;
  return (
    <section className="mt-8">
      <h3 className="font-display text-lg font-bold text-azul">{titulo}</h3>
      <div className="mt-2 text-grafito/85">{ok ? children : <p className="flex items-center gap-2"><Pendiente /> Por redactar</p>}</div>
    </section>
  );
}

function Ficha({ p, cerrar }: { p: Proyecto; cerrar: () => void }) {
  const meta = [p.sector, p.solucion, p.anio].filter(Boolean).join(' · ');
  return (
    <article>
      <div className="sticky top-0 z-10 h-0">
        <button onClick={cerrar} aria-label="Cerrar ficha" className="absolute right-3 top-3 rounded-full bg-white/90 p-2 shadow hover:bg-white"><X size={22} /></button>
      </div>
      <Image src={p.principal.src} width={p.principal.w} height={p.principal.h} alt={`Página de inicio de ${p.nombre}`} className="h-auto w-full" />
      <div className="p-6 md:p-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-naranja">Proyecto</p>
        <h2 id="ficha-titulo" className="mt-1 font-display text-3xl font-extrabold text-azul md:text-4xl">{p.nombre}</h2>
        <p className="mt-2 flex items-center gap-2 text-grafito/80">
          {meta || (MOSTRAR_PENDIENTES && <><Pendiente /> Sector y tipo de solución</>)}
        </p>
        <Bloque titulo="Servicios involucrados" ok={!!p.servicios?.length}>
          <ul className="flex flex-wrap gap-2">{p.servicios?.map((s) => <li key={s} className="rounded-full bg-niebla px-3 py-1 text-sm font-semibold">{s}</li>)}</ul>
        </Bloque>
        <div className="grid gap-x-10 md:grid-cols-2">
          <Bloque titulo="El reto" ok={!!p.reto}><p>{p.reto}</p></Bloque>
          <Bloque titulo="Qué desarrollamos" ok={!!p.desarrollo}><p>{p.desarrollo}</p></Bloque>
        </div>
        <Bloque titulo="Resultado" ok={!!p.resultado}><p>{p.resultado}</p></Bloque>
        {(p.galeria?.length || MOSTRAR_PENDIENTES) && (
          <section className="mt-8">
            <h3 className="font-display text-lg font-bold text-azul">Galería</h3>
            <div className="mt-3 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {p.galeria?.length
                ? p.galeria.map((g) => (
                    <figure key={g.src}>
                      <Image src={g.src} width={g.w} height={g.h} alt={g.pie ?? `Pantalla de ${p.nombre}`} className="h-auto w-full rounded-lg" />
                      {g.pie && <figcaption className="mt-1 text-sm text-grafito/70">{g.pie}</figcaption>}
                    </figure>
                  ))
                : [1, 2, 3].map((n) => <div key={n} className="flex aspect-video items-center justify-center rounded-lg border-2 border-dashed border-grafito/20"><Pendiente /></div>)}
            </div>
          </section>
        )}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          {p.url ? (
            <a href={p.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border-2 border-azul px-6 py-3 font-semibold text-azul hover:bg-azul hover:text-white">
              Visitar sitio web <ArrowUpRight size={18} />
            </a>
          ) : MOSTRAR_PENDIENTES && <span className="flex items-center gap-2 text-sm"><Pendiente /> Enlace al sitio</span>}
          <a href="#contacto" onClick={cerrar} className="rounded-full bg-naranja px-6 py-3 font-semibold text-white hover:bg-naranja-claro">Quiero un proyecto así</a>
        </div>
      </div>
    </article>
  );
}

export default function Proyectos() {
  const dlg = useRef<HTMLDialogElement>(null);
  const [sel, setSel] = useState<Proyecto | null>(null);
  const [pausa, setPausa] = useState(false);
  useEffect(() => {
    if (sel && dlg.current && !dlg.current.open) dlg.current.showModal();
    document.body.style.overflow = sel ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [sel]);

  return (
    <section id="proyectos" className="py-20">
      <div className="mx-auto flex max-w-6xl flex-wrap items-end justify-between gap-4 px-5">
        <div>
          <h2 className="font-display text-3xl font-bold md:text-4xl">Proyectos recientes</h2>
          <p className="mt-3 max-w-xl text-grafito/80">Marcas que confiaron en nosotros. Haz clic en un proyecto para conocerlo.</p>
        </div>
        <button onClick={() => setPausa(!pausa)} aria-pressed={pausa}
          className="flex items-center gap-2 rounded-full border border-grafito/20 px-4 py-2 text-sm font-semibold hover:border-naranja hover:text-naranja">
          {pausa ? <Play size={16} /> : <Pause size={16} />} {pausa ? 'Reanudar movimiento' : 'Pausar movimiento'}
        </button>
      </div>
      <div className={`mt-10 space-y-5 ${pausa ? 'pausa' : ''}`}>
        <Fila items={arriba} alto="h-[200px] md:h-[300px]" dir="" dur={75} abrir={setSel} />
        <Fila items={abajo} alto="h-[160px] md:h-[240px]" dir="der" dur={85} cta abrir={setSel} />
      </div>
      <dialog ref={dlg} onClose={() => setSel(null)} onClick={(e) => e.target === dlg.current && dlg.current?.close()} aria-labelledby="ficha-titulo"
        className="m-auto max-h-[92vh] w-[min(1000px,94vw)] overflow-y-auto rounded-2xl bg-white p-0 text-grafito backdrop:bg-black/70">
        {sel && <Ficha p={sel} cerrar={() => dlg.current?.close()} />}
      </dialog>
    </section>
  );
}
