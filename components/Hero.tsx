'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { slides } from './heroSlides';

export default function Hero() {
  const [i, setI] = useState(0);
  const [pausa, setPausa] = useState(false);
  const n = slides.length;
  useEffect(() => {
    if (pausa) return;
    const t = setInterval(() => setI((v) => (v + 1) % n), 6500);
    return () => clearInterval(t);
  }, [pausa, n]);
  const ir = (k: number) => setI((k + n) % n);
  const flecha = 'absolute top-1/2 z-20 -translate-y-1/2 rounded-full p-2 text-white/90 hover:bg-white/15';

  return (
    <section id="inicio" aria-roledescription="carousel" aria-label="Servicios de Dynamedia"
      onMouseEnter={() => setPausa(true)} onMouseLeave={() => setPausa(false)}
      onFocus={() => setPausa(true)} onBlur={() => setPausa(false)}
      className="relative h-[100svh] min-h-[600px] overflow-hidden bg-grafito text-white">
      {slides.map((s, k) => {
        const H = (k === 0 ? 'h1' : 'h2') as 'h1';
        const activa = k === i;
        return (
          <div key={s.id} aria-hidden={!activa} aria-roledescription="slide" aria-label={`${k + 1} de ${n}`}
            className={`absolute inset-0 transition-opacity duration-700 motion-reduce:transition-none ${activa ? 'opacity-100' : 'pointer-events-none opacity-0'}`}>
            <div className="absolute inset-0" style={{ background: s.fondo }} />
            {s.imagen && <Image src={s.imagen} alt="" fill priority={k === 0} sizes="100vw" className="object-cover" />}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />
            <div className="relative flex h-full flex-col items-center justify-center px-6 pt-24 text-center">
              <H className="font-display text-[clamp(2.25rem,8vw,6.5rem)] font-extrabold uppercase leading-[0.95] tracking-tight">
                {s.titulo.map((l) => <span key={l} className="block">{l}</span>)}
              </H>
              <p className="mt-8 max-w-2xl text-lg md:text-xl">{s.texto}</p>
              <a href="#contacto" tabIndex={activa ? 0 : -1}
                className="mt-9 rounded-full bg-naranja px-9 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-naranja-claro">
                Contacto
              </a>
            </div>
          </div>
        );
      })}
      <button aria-label="Pantalla anterior" onClick={() => ir(i - 1)} className={`${flecha} left-3 md:left-6`}><ChevronLeft size={32} /></button>
      <button aria-label="Pantalla siguiente" onClick={() => ir(i + 1)} className={`${flecha} right-3 md:right-6`}><ChevronRight size={32} /></button>
      <div className="absolute inset-x-0 bottom-6 z-20 flex justify-center gap-3">
        {slides.map((s, k) => (
          <button key={s.id} aria-label={`Ir a la pantalla ${k + 1}`} aria-current={k === i} onClick={() => ir(k)}
            className={`h-2.5 w-2.5 rounded-full ${k === i ? 'bg-white' : 'bg-white/40 hover:bg-white/70'}`} />
        ))}
      </div>
    </section>
  );
}
