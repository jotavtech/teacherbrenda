import type { Metadata } from 'next';
import { Barlow_Condensed, Caveat, DM_Sans } from 'next/font/google';
import './globals.css';

const display = Barlow_Condensed({ subsets: ['latin'], weight: ['600', '700', '800', '900'], variable: '--font-display' });
const body = DM_Sans({ subsets: ['latin'], variable: '--font-body' });
const handwritten = Caveat({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-handwritten' });
export const metadata: Metadata = {
  metadataBase: new URL('https://teacherbrenda.vercel.app'),
  title: 'Brenda Luna | Seu próximo capítulo pode ser em inglês',
  description: 'Sou Brenda Luna, professora de inglês desde 2018 e Cambridge CELTA Certified English Teacher. Me conta seus planos: vamos tirar o inglês do papel?',
  openGraph: { title: 'Seu próximo capítulo pode ser em inglês.', description: 'Sou Brenda Luna. Ensino inglês desde 2018 e quero te ajudar a falar com mais confiança. Me encontre em @teacherbrendaluna.', locale: 'pt_BR', type: 'website', url: 'https://teacherbrenda.vercel.app', siteName: 'Brenda Luna • English Teacher' },
  twitter: { card: 'summary_large_image', title: 'Seu próximo capítulo pode ser em inglês.', description: 'Sou Brenda Luna. Me conta onde você quer chegar com o inglês. Instagram: @teacherbrendaluna.' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className={`${display.variable} ${body.variable} ${handwritten.variable}`}>{children}</body></html>;
}
