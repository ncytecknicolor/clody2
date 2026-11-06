import type { Metadata } from 'next';
import { Poppins, Roboto } from 'next/font/google';
import './globals.css';

const poppins = Poppins({ subsets: ['latin'], variable: '--font-poppins', weight: ['500', '600', '700', '800'] });
const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto', weight: ['400', '500', '700'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://dynamedia.mx'),
  title: 'Dynamedia | Diseño web, software y marketing digital en Monterrey',
  description: 'Sitios web, software a la medida, posicionamiento en Google y redes sociales para empresas en Monterrey y todo México.',
  openGraph: { title: 'Dynamedia', description: 'Diseño web, software y marketing digital en Monterrey.', locale: 'es_MX', type: 'website' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX" className={`${poppins.variable} ${roboto.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
