'use client';
import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const [estado, setEstado] = useState<'idle' | 'enviando' | 'ok' | 'error'>('idle');

  async function enviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEstado('enviando');
    const datos = Object.fromEntries(new FormData(e.currentTarget));
    const r = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(datos) });
    setEstado(r.ok ? 'ok' : 'error');
  }

  if (estado === 'ok')
    return (
      <p className="flex items-center gap-3 rounded-lg bg-white/10 p-6 text-lg">
        <CheckCircle2 className="text-naranja-claro" /> Recibimos tu mensaje. Te respondemos pronto.
      </p>
    );

  const campo = 'w-full rounded-md border border-white/25 bg-white/10 px-4 py-3 text-white placeholder:text-white/60';
  return (
    <form onSubmit={enviar} className="grid gap-4">
      <input name="nombre" required placeholder="Nombre" className={campo} />
      <input name="correo" type="email" required placeholder="Correo" className={campo} />
      <input name="telefono" placeholder="WhatsApp o teléfono" className={campo} />
      <textarea name="mensaje" required rows={4} placeholder="Cuéntanos qué necesitas" className={campo} />
      <button disabled={estado === 'enviando'} className="flex items-center justify-center gap-2 rounded-md bg-naranja px-6 py-3 font-semibold text-white hover:bg-naranja-claro disabled:opacity-60">
        <Send size={18} /> {estado === 'enviando' ? 'Enviando' : 'Enviar mensaje'}
      </button>
      {estado === 'error' && <p role="alert">No se pudo enviar. Escríbenos a info@dynamedia.mx.</p>}
    </form>
  );
}
