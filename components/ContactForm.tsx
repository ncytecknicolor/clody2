'use client';
import { useEffect, useRef, useState, type FormEvent } from 'react';
import { ArrowLeft, ArrowRight, Check, Send, MessageCircle, Loader2 } from 'lucide-react';
import { servicios } from '@/lib/servicios';
import { iconos } from '@/lib/iconos';
import { EMAIL, WA } from '@/lib/site';
import { Magnetico } from './ui';

const NO_SE = 'Aún no estoy seguro';
const cuandoOps = ['Lo antes posible', 'Este mes', 'En 2 o 3 meses', 'Solo estoy explorando'];
const titulos = ['Tu proyecto', 'Tus datos', 'Tu mensaje'];
type Datos = { nombre: string; correo: string; telefono: string; empresa: string; mensaje: string };
type Errores = Partial<Record<keyof Datos | 'sel', string>>;
const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);

function Campo({ id, label, value, onChange, error, required, type = 'text', autoComplete, area }:
  { id: string; label: string; value: string; onChange: (v: string) => void; error?: string; required?: boolean; type?: string; autoComplete?: string; area?: boolean }) {
  const cls = `peer w-full rounded-xl border bg-white px-4 pb-2 pt-6 text-grafito outline-none transition focus:border-naranja focus:ring-4 focus:ring-naranja/15 ${error ? 'border-red-400' : 'border-grafito/20'}`;
  const comun = { id, value, placeholder: ' ', 'aria-invalid': !!error, 'aria-describedby': error ? `${id}-err` : undefined, className: cls };
  return (
    <div className="relative">
      {area
        ? <textarea {...comun} rows={5} required={required} onChange={(e) => onChange(e.target.value)} />
        : <input {...comun} type={type} required={required} autoComplete={autoComplete} onChange={(e) => onChange(e.target.value)} />}
      <label htmlFor={id} className="pointer-events-none absolute left-4 top-4 origin-left text-grafito/60 transition-all duration-200 peer-focus:top-2 peer-focus:scale-75 peer-focus:text-naranja peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:scale-75">
        {label}{required && ' *'}
      </label>
      {error && <p id={`${id}-err`} role="alert" className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}

export default function ContactForm({ preseleccion = [] }: { preseleccion?: string[] }) {
  const [paso, setPaso] = useState(0);
  const [sel, setSel] = useState<string[]>([]);
  const [cuando, setCuando] = useState(cuandoOps[0]);
  const [d, setD] = useState<Datos>({ nombre: '', correo: '', telefono: '', empresa: '', mensaje: '' });
  const [err, setErr] = useState<Errores>({});
  const [estado, setEstado] = useState<'idle' | 'enviando' | 'ok' | 'error'>('idle');
  const [web, setWeb] = useState('');
  const t0 = useRef(0);

  useEffect(() => {
    t0.current = Date.now();
    const s = new URLSearchParams(window.location.search).get('servicio');
    const m = servicios.find((x) => x.slug === s);
    if (m) setSel([m.nombre]);
    else {
      const ini = servicios.filter((x) => preseleccion.includes(x.slug)).map((x) => x.nombre);
      if (ini.length) setSel(ini);
    }
  }, []);

  const set = (k: keyof Datos) => (v: string) => { setD((p) => ({ ...p, [k]: v })); setErr((p) => ({ ...p, [k]: undefined })); };
  const alternar = (n: string) => {
    setSel((p) => (n === NO_SE ? (p.includes(n) ? [] : [n]) : p.includes(n) ? p.filter((x) => x !== n) : [...p.filter((x) => x !== NO_SE), n]));
    setErr((p) => ({ ...p, sel: undefined }));
  };
  const validar = (p: number): Errores => {
    const e: Errores = {};
    if (p === 0 && sel.length === 0) e.sel = 'Elige al menos una opción.';
    if (p === 1) {
      if (d.nombre.trim().length < 2) e.nombre = 'Escribe tu nombre.';
      if (!emailOk(d.correo.trim())) e.correo = 'Escribe un correo válido.';
    }
    if (p === 2 && d.mensaje.trim().length < 10) e.mensaje = 'Cuéntanos un poco más (mínimo 10 caracteres).';
    return e;
  };
  const siguiente = () => { const e = validar(paso); setErr(e); if (Object.keys(e).length === 0) setPaso(paso + 1); };
  const enviar = async (ev: FormEvent) => {
    ev.preventDefault();
    if (paso < 2) { siguiente(); return; }
    const e = validar(2);
    setErr(e);
    if (Object.keys(e).length) return;
    setEstado('enviando');
    try {
      const r = await fetch('/api/contact', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...d, servicios: sel, cuando, web, tiempo: Date.now() - t0.current, pagina: window.location.href }),
      });
      setEstado(r.ok ? 'ok' : 'error');
    } catch { setEstado('error'); }
  };
  const reiniciar = () => { setPaso(0); setSel([]); setD({ nombre: '', correo: '', telefono: '', empresa: '', mensaje: '' }); setErr({}); setEstado('idle'); t0.current = Date.now(); };

  if (estado === 'ok') {
    const rombos = [[-90, -70], [90, -80], [-110, 10], [110, 20], [-60, 90], [70, 95], [0, -110], [0, 110]];
    return (
      <div role="status" className="relative overflow-hidden rounded-3xl bg-white p-10 text-center text-grafito shadow-2xl">
        {rombos.map(([x, y], k) => <span key={k} aria-hidden className="confeti absolute left-1/2 top-1/3 h-3 w-3 bg-naranja" style={{ ['--dx' as string]: `${x}px`, ['--dy' as string]: `${y}px`, background: k % 2 ? '#1B4F9C' : '#F26B21' }} />)}
        <svg aria-hidden viewBox="0 0 52 52" className="mx-auto h-24 w-24">
          <circle cx="26" cy="26" r="24" fill="none" stroke="#F26B21" strokeWidth="3" className="trazo-c" />
          <path d="M14 27l8 8 16-17" fill="none" stroke="#1B4F9C" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="trazo" />
        </svg>
        <h3 className="mt-4 font-display text-3xl font-bold text-azul">¡Mensaje enviado!</h3>
        <p className="mx-auto mt-3 max-w-sm text-grafito/80">Gracias, {d.nombre.split(' ')[0]}. Te responderemos pronto a <strong>{d.correo}</strong>.</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a href={WA} className="inline-flex items-center gap-2 rounded-full bg-naranja px-6 py-3 text-sm font-semibold text-white hover:bg-naranja-claro"><MessageCircle size={18} /> Escríbenos por WhatsApp</a>
          <button onClick={reiniciar} className="rounded-full border border-grafito/20 px-6 py-3 text-sm font-semibold text-azul hover:border-naranja hover:text-naranja">Enviar otro mensaje</button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={enviar} noValidate className="relative rounded-3xl bg-white p-6 text-grafito shadow-2xl md:p-8">
      <div aria-hidden className="absolute -left-[9999px] top-0"><label>Sitio web<input tabIndex={-1} autoComplete="off" value={web} onChange={(e) => setWeb(e.target.value)} /></label></div>

      <ol aria-label="Progreso del formulario" className="flex items-center gap-2">
        {titulos.map((t, i) => (
          <li key={t} className="flex flex-1 items-center gap-2 last:flex-none">
            <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors duration-300 ${i < paso ? 'bg-naranja text-white' : i === paso ? 'bg-azul text-white' : 'bg-niebla text-grafito/50'}`} aria-current={i === paso ? 'step' : undefined}>
              {i < paso ? <Check size={16} /> : i + 1}
            </span>
            <span className={`hidden text-sm font-semibold sm:block ${i === paso ? 'text-azul' : 'text-grafito/50'}`}>{t}</span>
            {i < 2 && <span aria-hidden className="h-0.5 flex-1 rounded bg-grafito/10"><span className={`block h-full rounded bg-naranja transition-all duration-500 ${i < paso ? 'w-full' : 'w-0'}`} /></span>}
          </li>
        ))}
      </ol>

      <div key={paso} className="panel-entra mt-7">
        {paso === 0 && (
          <div>
            <h3 className="font-display text-2xl font-bold text-azul">¿Qué necesitas?</h3>
            <p className="mt-1 text-grafito/70">Puedes elegir más de uno.</p>
            <div role="group" aria-label="Servicios de interés" className="mt-5 grid gap-3 sm:grid-cols-2">
              {[...servicios.map((s) => ({ n: s.nombre, I: iconos[s.icono] })), { n: NO_SE, I: MessageCircle }].map(({ n, I }) => {
                const on = sel.includes(n);
                return (
                  <button key={n} type="button" aria-pressed={on} onClick={() => alternar(n)}
                    className={`relative flex items-center gap-3 rounded-2xl border-2 p-3 text-left text-sm font-semibold transition-all duration-200 ${on ? 'scale-[1.02] border-naranja bg-naranja/10 text-azul' : 'border-grafito/10 bg-white text-grafito/80 hover:-translate-y-0.5 hover:border-azul/40'}`}>
                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors ${on ? 'bg-naranja text-white' : 'bg-niebla text-azul'}`}><I size={18} /></span>
                    <span className="flex-1">{n}</span>
                    {on && <Check size={18} className="shrink-0 text-naranja" />}
                  </button>
                );
              })}
            </div>
            {err.sel && <p role="alert" className="mt-3 text-sm text-red-600">{err.sel}</p>}
          </div>
        )}

        {paso === 1 && (
          <div>
            <h3 className="font-display text-2xl font-bold text-azul">¿Cómo te contactamos?</h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <Campo id="c-nombre" label="Nombre" value={d.nombre} onChange={set('nombre')} error={err.nombre} required autoComplete="name" />
              <Campo id="c-correo" label="Correo electrónico" type="email" value={d.correo} onChange={set('correo')} error={err.correo} required autoComplete="email" />
              <Campo id="c-tel" label="WhatsApp o teléfono" type="tel" value={d.telefono} onChange={set('telefono')} autoComplete="tel" />
              <Campo id="c-empresa" label="Empresa" value={d.empresa} onChange={set('empresa')} autoComplete="organization" />
            </div>
          </div>
        )}

        {paso === 2 && (
          <div>
            <h3 className="font-display text-2xl font-bold text-azul">Cuéntanos más</h3>
            <ul className="mt-3 flex flex-wrap gap-2">{sel.map((s) => <li key={s} className="rounded-full bg-niebla px-3 py-1 text-xs font-semibold text-azul">{s}</li>)}</ul>
            <div className="mt-4"><Campo id="c-mensaje" label="¿En qué te podemos ayudar?" value={d.mensaje} onChange={set('mensaje')} error={err.mensaje} required area /></div>
            <p className="mt-5 text-sm font-semibold text-grafito/70">¿Para cuándo lo necesitas?</p>
            <div role="radiogroup" aria-label="¿Para cuándo lo necesitas?" className="mt-2 flex flex-wrap gap-2">
              {cuandoOps.map((o) => (
                <button key={o} type="button" role="radio" aria-checked={cuando === o} onClick={() => setCuando(o)}
                  className={`rounded-full border-2 px-4 py-2 text-sm font-semibold transition-all ${cuando === o ? 'border-naranja bg-naranja text-white' : 'border-grafito/15 text-grafito/70 hover:border-azul/40'}`}>{o}</button>
              ))}
            </div>
          </div>
        )}
      </div>

      {estado === 'error' && (
        <p role="alert" className="mt-5 rounded-xl bg-red-50 p-4 text-sm text-red-700">No se pudo enviar tu mensaje. Escríbenos por <a href={WA} className="font-semibold underline">WhatsApp</a> o a <a href={`mailto:${EMAIL}`} className="font-semibold underline">{EMAIL}</a>.</p>
      )}

      <div className="mt-8 flex items-center justify-between gap-3">
        {paso > 0
          ? <button type="button" onClick={() => setPaso(paso - 1)} className="flex items-center gap-2 rounded-full border border-grafito/20 px-5 py-3 text-sm font-semibold text-azul transition-colors hover:border-naranja hover:text-naranja"><ArrowLeft size={18} /> Atrás</button>
          : <span />}
        <Magnetico>
          <button type="submit" disabled={estado === 'enviando'} className="brillo flex items-center gap-2 rounded-full bg-naranja px-7 py-3 text-sm font-semibold uppercase tracking-widest text-white hover:bg-naranja-claro disabled:opacity-70">
            {paso < 2 ? <>Continuar <ArrowRight size={18} /></> : estado === 'enviando' ? <><Loader2 size={18} className="animate-spin" /> Enviando</> : <><Send size={18} /> Enviar mensaje</>}
          </button>
        </Magnetico>
      </div>
    </form>
  );
}
