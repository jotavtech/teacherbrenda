import type { Metadata } from 'next';
import { Barlow_Condensed, DM_Sans } from 'next/font/google';
import './globals.css';

const display = Barlow_Condensed({ subsets: ['latin'], weight: ['600', '700', '800', '900'], variable: '--font-display' });
const body = DM_Sans({ subsets: ['latin'], variable: '--font-body' });
export const metadata: Metadata = {
  title: 'Brenda Luna | Seu próximo capítulo pode ser em inglês',
  description: 'Aulas particulares de inglês do básico ao avançado com Brenda Luna. Professora desde 2018 e Cambridge CELTA Certified English Teacher. Vamos conversar?',
  openGraph: { title: 'Seu próximo capítulo pode ser em inglês.', description: 'Inglês com Brenda Luna. Do primeiro hello à sua próxima conquista.', locale: 'pt_BR', type: 'website' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className={`${display.variable} ${body.variable}`}>{children}</body></html>;
}
