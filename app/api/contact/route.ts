import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { nombre, correo, telefono, mensaje } = await req.json();
  if (!nombre || !correo || !mensaje) return NextResponse.json({ error: 'Faltan datos' }, { status: 400 });

  // TODO: conectar el envío real. Ejemplo con Resend (npm i resend, RESEND_API_KEY en .env.local):
  // await new Resend(process.env.RESEND_API_KEY).emails.send({
  //   from: 'Sitio <contacto@dynamedia.mx>', to: 'info@dynamedia.mx',
  //   subject: `Nuevo mensaje de ${nombre}`, text: `${correo}\n${telefono ?? ''}\n\n${mensaje}` });
  console.log('Contacto:', { nombre, correo, telefono, mensaje });
  return NextResponse.json({ ok: true });
}
