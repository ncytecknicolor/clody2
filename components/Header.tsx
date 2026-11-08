'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, MessageCircle, Menu, X, ChevronDown } from 'lucide-react';

const FB = 'https://www.facebook.com/dynamediamx';
const WA = 'https://api.whatsapp.com/send?phone=528131979805&text=Hola%20quiero%20informacion%20de%20los%20servicios%20de%20Dynamedia';
const links = [
  { t: 'Inicio', h: '/' },
  { t: 'Nosotros', h: '/nosotros' },
  { t: 'Servicios', h: '/#servicios' },
  { t: 'Cursos', h: '/#cursos', sub: ['Curso WordPress Monterrey', 'Posicionamiento web Google'] },
  { t: 'Asesoría y soporte', h: '/#soporte' },
  { t: 'Contacto', h: '/#contacto' },
];
const item = 'text-[13px] font-semibold uppercase tracking-wider text-white hover:text-naranja-claro';

export default function Header() {
  const [abierto, setAbierto] = useState(false);
  return (
    <>
      <header className="absolute inset-x-0 top-0 z-30 border-b border-white/25">
        <nav aria-label="Principal" className="flex items-center justify-between px-6 py-4 lg:px-14">
          <Link href="/" aria-label="Dynamedia, inicio">
            <Image src="/brand/logo-dynamedia.png" alt="Dynamedia" width={400} height={100} priority className="h-auto w-48 lg:w-60" />
          </Link>
          <div className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <div key={l.t} className="group relative">
                <Link href={l.h} className={`${item} flex items-center gap-1`}>{l.t}{l.sub && <ChevronDown size={14} />}</Link>
                {l.sub && (
                  <ul className="invisible absolute left-0 top-full min-w-64 bg-grafito py-2 opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                    {l.sub.map((s) => <li key={s}><Link href={l.h} className="block px-5 py-2 text-sm text-white hover:bg-white/10">{s}</Link></li>)}
                  </ul>
                )}
              </div>
            ))}
            <a href={FB} aria-label="Facebook" className={item}><Facebook size={18} /></a>
            <a href={WA} aria-label="WhatsApp" className={item}><MessageCircle size={20} /></a>
          </div>
          <button aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={abierto} onClick={() => setAbierto(!abierto)} className="text-white lg:hidden">
            {abierto ? <X size={30} /> : <Menu size={30} />}
          </button>
        </nav>
        {abierto && (
          <div className="bg-azul-oscuro px-6 pb-6 lg:hidden">
            {links.map((l) => <Link key={l.t} href={l.h} onClick={() => setAbierto(false)} className={`${item} block py-3`}>{l.t}</Link>)}
          </div>
        )}
      </header>
      <div className="fixed right-0 top-[38%] z-30 hidden flex-col md:flex">
        <a href={FB} aria-label="Facebook" className="flex h-14 w-14 items-center justify-center bg-[#3b6bc6] text-white"><Facebook size={20} /></a>
        <a href={WA} aria-label="WhatsApp" className="flex h-14 w-14 items-center justify-center bg-[#8cc152] text-white"><MessageCircle size={22} /></a>
      </div>
    </>
  );
}
