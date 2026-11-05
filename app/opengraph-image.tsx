import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const alt = 'Brenda Luna — English Teacher. Seu próximo capítulo pode ser em inglês. Cambridge CELTA Certified Teacher.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpenGraphImage() {
  const [font, statue] = await Promise.all([
    readFile(join(process.cwd(), 'assets/BarlowCondensed-ExtraBold.ttf')),
    readFile(join(process.cwd(), 'public/liberty.png')),
  ]);

  return new ImageResponse(
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', background: '#f6f4ee', color: '#181818', fontFamily: 'sans-serif' }}>
      <div style={{ height: 22, background: '#194d99', width: '100%' }} />
      <div style={{ display: 'flex', flex: 1, padding: '38px 52px 30px', position: 'relative' }}>
        <div style={{ display: 'flex', flexDirection: 'column', width: 685 }}>
          <div style={{ fontSize: 31, fontWeight: 700, letterSpacing: -1 }}>brenda luna</div>
          <div style={{ fontSize: 11, letterSpacing: 4, marginTop: 5 }}>ENGLISH TEACHER</div>
          <div style={{ display: 'flex', flexDirection: 'column', fontFamily: 'Barlow', fontWeight: 800, fontSize: 86, lineHeight: .96, marginTop: 35 }}>
            <div>SEU PRÓXIMO</div>
            <div>CAPÍTULO PODE</div>
            <div style={{ display: 'flex' }}>SER <span style={{ color: '#d52c26', marginLeft: 16 }}>EM INGLÊS.</span></div>
          </div>
          <div style={{ width: 355, height: 4, background: '#d52c26', margin: '12px 0 0 126px', transform: 'rotate(-1deg)' }} />
          <div style={{ display: 'flex', background: '#d52c26', color: '#fff', padding: '15px 22px', marginTop: 28, width: 260, fontSize: 17, border: '2px solid #181818', boxShadow: '4px 4px 0 #181818', justifyContent: 'space-between', alignItems: 'center' }}>Quero aprender inglês<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M7 17 17 7M7 7h10v10" /></svg></div>
          <div style={{ fontSize: 14, color: '#55554e', marginTop: 20 }}>Do básico ao avançado. No seu ritmo.</div>
        </div>
        <div style={{ display: 'flex', position: 'absolute', right: 48, top: 39, width: 395, height: 475, background: '#d52c26', transform: 'rotate(3deg)', border: '2px solid #181818' }}>
          <div style={{ display: 'flex', flexDirection: 'column', position: 'absolute', top: 48, left: 26, fontFamily: 'Barlow', color: '#e97c75', fontSize: 91, lineHeight: .95 }}><div>HELLO</div><div>WORLD!</div></div>
          <img alt="" src={`data:image/png;base64,${statue.toString('base64')}`} width={320} height={440} style={{ position: 'absolute', bottom: 0, left: 37, objectFit: 'contain', filter: 'grayscale(1)' }} />
          <div style={{ display: 'flex', position: 'absolute', right: -17, top: 26, borderRadius: 70, border: '3px solid #181818', background: '#f6f4ee', padding: '13px 20px', fontSize: 24, fontWeight: 700, transform: 'rotate(5deg)' }}>Yes, you can!</div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'absolute', right: -19, bottom: 15, width: 128, height: 128, borderRadius: '50%', background: '#194d99', color: '#fff', border: '3px solid #f6f4ee', transform: 'rotate(8deg)' }}>
            <div style={{ fontSize: 10, letterSpacing: 1 }}>CAMBRIDGE</div><div style={{ fontFamily: 'Barlow', fontSize: 45 }}>CELTA</div><div style={{ fontSize: 9 }}>CERTIFIED TEACHER</div>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', height: 45, alignItems: 'center', justifyContent: 'space-between', padding: '0 52px', background: '#181818', color: '#f6f4ee', fontSize: 13, letterSpacing: 1 }}><span>teacherbrenda.vercel.app</span><span>@teacherbrendaluna</span></div>
    </div>,
    { ...size, fonts: [{ name: 'Barlow', data: font, weight: 800, style: 'normal' }] },
  );
}
