import { ArrowUpRight, MessageCircle, Sparkles, Globe2, AudioLines, BookOpen, BadgeCheck } from 'lucide-react';

function Instagram({ size = 24 }: { size?: number }) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none"/></svg>; }

const whatsapp = 'https://wa.me/5583999140820?text=Oi%2C%20Brenda!%20Quero%20saber%20mais%20sobre%20as%20aulas%20de%20ingl%C3%AAs.';
function Contact({ children = 'Quero aprender inglês', className = '' }: { children?: React.ReactNode; className?: string }) {
  return <a className={`button ${className}`} href={whatsapp} target="_blank" rel="noopener noreferrer">{children}<ArrowUpRight size={22} aria-hidden="true" /></a>;
}
function UnionJack() { return <svg viewBox="0 0 60 38" role="img" aria-label="Bandeira do Reino Unido"><defs><clipPath id="flag"><path d="M0 0h60v38H0z" /></clipPath></defs><g clipPath="url(#flag)"><path fill="#184b9b" d="M0 0h60v38H0z"/><path stroke="#fff" strokeWidth="11" d="m0 0 60 38M60 0 0 38"/><path stroke="#df302c" strokeWidth="4" d="m0 0 60 38M60 0 0 38"/><path stroke="#fff" strokeWidth="15" d="M30 0v38M0 19h60"/><path stroke="#df302c" strokeWidth="8" d="M30 0v38M0 19h60"/></g></svg> }

export default function Home() {
return <>
  <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
  <div className="announcement"><span className="status-dot"/> DO PRIMEIRO HELLO À SUA PRÓXIMA CONQUISTA <span className="announcement-star">✦</span> AULAS PARTICULARES DE INGLÊS</div>
  <header className="header wrap">
    <a href="#" aria-label="Brenda Luna — início" className="brand">brenda luna<span>ENGLISH TEACHER <i>✦</i></span></a>
    <nav aria-label="Menu principal"><a href="#aulas">As aulas</a><a href="#brenda">Meet Brenda</a><a href="#duvidas">Dúvidas</a></nav>
    <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="header-contact">Let’s talk <ArrowUpRight size={18}/></a>
  </header>
  <main id="conteudo">
    <section className="hero wrap" aria-labelledby="hero-title">
      <div className="hero-copy">
        <div className="eyebrow"><span/> INGLÊS PARA A VIDA REAL</div>
        <h1 id="hero-title">SEU PRÓXIMO<br/>CAPÍTULO PODE<br/>SER <span className="red-word">EM INGLÊS.<svg viewBox="0 0 440 22" aria-hidden="true"><path d="M4 14Q180-2 430 7M30 21Q220 9 409 17"/></svg></span></h1>
        <p>O mundo tem muito pra te contar.<br/>Vamos fazer você se sentir parte da conversa?</p>
        <Contact />
        <div className="hero-footnote"><span className="tiny-star">✳</span> Do básico ao avançado. No seu ritmo.</div>
      </div>
      <div className="hero-art" aria-label="Colagem artística da Estátua da Liberdade">
        <div className="art-red"><span className="art-top">THE WORLD IS YOURS TO EXPLORE</span><span className="giant-hello">HELLO<br/>WORLD!</span><div className="halftone"/><span className="art-bottom">NEW CHAPTER. NEW POSSIBILITIES. ↗</span></div>
        <div className="tape tape-one"/>
        <div className="blue-orbit"/>
        <img className="liberty" src="/liberty.png" width="1464" height="2022" alt="Estátua da Liberdade em uma colagem em preto e branco" fetchPriority="high"/>
        <span className="speech-bubble">Yes, you can!</span>
        <span className="art-spark">✧</span>
        <div className="flag-sticker"><UnionJack/><span>LET’S GO!</span></div>
        <div className="cert-sticker"><BadgeCheck size={28}/><span>CAMBRIDGE<strong>CELTA</strong>CERTIFIED TEACHER</span></div>
        <span className="handwritten art-note">your next chapter ↗</span>
      </div>
    </section>
    <div className="ticker" aria-label="Inglês para conversar, viajar, conectar e ir além"><div><span>FALE COM CONFIANÇA</span><i>✦</i><span>EXPLORE O MUNDO</span><i>✦</i><span>CRIE CONEXÕES</span><i>✦</i><span>VÁ ALÉM</span><i>✦</i><span aria-hidden="true">FALE COM CONFIANÇA</span></div></div>
    <section id="aulas" className="lessons wrap section">
      <div className="section-heading"><div><span className="eyebrow">01 / O SEU INGLÊS, DO SEU JEITO</span><h2>GRANDES HISTÓRIAS.<br/><span className="blue-text">UM HELLO DE CADA VEZ.</span></h2></div><p>Você traz os seus objetivos.<br/>A gente encontra as palavras<br/>para chegar lá.</p></div>
      <div className="lesson-grid">
        <article className="lesson-card"><span className="card-index">CHAPTER 01</span><AudioLines size={36} strokeWidth={1.5}/><h3>Solte a voz.</h3><p>Inglês para participar da conversa, expressar suas ideias e se conectar com o mundo.</p><span className="card-label">CONVERSAÇÃO & CONFIANÇA <ArrowUpRight size={18}/></span></article>
        <article className="lesson-card blue-card"><span className="card-index">CHAPTER 02</span><Globe2 size={36} strokeWidth={1.5}/><h3>Abra caminhos.</h3><p>Da próxima viagem às novas oportunidades: leve o inglês para os seus planos.</p><span className="card-label">INGLÊS PARA A VIDA REAL <ArrowUpRight size={18}/></span></article>
        <article className="lesson-card"><span className="card-index">CHAPTER 03</span><BookOpen size={36} strokeWidth={1.5}/><h3>Vá no seu ritmo.</h3><p>Começando do zero ou dando o próximo passo? Seu ponto de partida faz parte da sua história.</p><span className="card-label">DO BÁSICO AO AVANÇADO <ArrowUpRight size={18}/></span></article>
      </div>
    </section>
    <section id="brenda" className="about-section"><div className="about wrap">
      <div className="teacher-art"><div className="notebook"><div className="paper-holes"/><span className="eyebrow">A NOTE FROM YOUR TEACHER</span><p>Aprender inglês<br/>é descobrir que<br/>o seu mundo pode<br/>ser <span>muito maior.</span></p><span className="signature">with love, Brenda ♡</span></div><div className="since-sticker">TEACHING<br/><strong>SINCE 2018</strong><Sparkles size={22}/></div></div>
      <div className="about-copy"><span className="eyebrow">02 / QUEM VAI COM VOCÊ</span><h2>HI, I’M<br/><span className="red-text">BRENDA LUNA.</span><span className="hello-wave">✳</span></h2><p>Tenho 26 anos e ensino inglês desde 2018. Acredito que aprender um idioma é abrir espaço para novas histórias, encontros e possibilidades.</p><p>Sou <strong>Cambridge CELTA Certified English Teacher</strong> e quero te acompanhar do primeiro “hello” aos próximos capítulos da sua vida em inglês.</p><div className="credential"><BadgeCheck size={30}/><div><strong>Cambridge CELTA</strong><span>Certified English Teacher</span></div></div><a className="text-link" href="https://www.instagram.com/brendaluns/" target="_blank" rel="noopener noreferrer"><Instagram size={19}/> Me encontre no Instagram <ArrowUpRight size={18}/></a></div>
    </div></section>
    <section id="duvidas" className="faq wrap section"><div><span className="eyebrow">03 / ANTES DO PRIMEIRO HELLO</span><h2>LET’S CLEAR<br/><span className="blue-text">THINGS UP.</span></h2><span className="handwritten faq-note">ou, em português: vamos lá! ↗</span></div><div className="questions">
      <details><summary>Preciso saber inglês para começar?<span>+</span></summary><p>Não! As aulas vão do básico ao avançado. Conte para a Brenda onde você está e o que gostaria de conquistar com o inglês.</p></details>
      <details><summary>Como saber qual é o meu nível?<span>+</span></summary><p>O primeiro passo é conversar. Fale com a Brenda pelo WhatsApp sobre sua experiência com o idioma para entenderem juntos o melhor ponto de partida.</p></details>
      <details><summary>Como funcionam horários e valores?<span>+</span></summary><p>Entre em contato pelo WhatsApp para consultar horários, valores e disponibilidade de turmas ou aulas particulares.</p></details>
      <details><summary>Como faço para começar?<span>+</span></summary><p>É só clicar em “Quero aprender inglês”. A conversa abre direto no WhatsApp da Brenda para tirar suas dúvidas e combinar os próximos passos.</p></details>
    </div></section>
    <section className="contact-section" id="contato"><div className="wrap contact-inner"><span className="eyebrow">O PRIMEIRO PASSO É UM HELLO.</span><h2>O PRÓXIMO CAPÍTULO?<br/><span>LET’S WRITE IT TOGETHER.</span></h2><p>Seus planos merecem ganhar o mundo. Vamos começar?</p><Contact className="white-button">Vamos conversar <MessageCircle size={20}/></Contact><a className="contact-number" href={whatsapp} target="_blank" rel="noopener noreferrer">(83) 99914-0820</a><span className="contact-star" aria-hidden="true">✳</span></div></section>
  </main>
  <footer className="wrap footer"><a className="brand" href="#">brenda luna<span>ENGLISH TEACHER <i>✦</i></span></a><span>Novos capítulos começam com novas palavras.</span><a href="https://www.instagram.com/brendaluns/" target="_blank" rel="noopener noreferrer"><Instagram size={18}/>@brendaluns <ArrowUpRight size={16}/></a><details className="credits"><summary>Créditos da imagem</summary><p>Estátua: <a href="https://commons.wikimedia.org/wiki/File:Statue_of_liberty_(transparent).png" target="_blank" rel="noopener noreferrer">Elcobbola / Edward-Woodrow</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0/" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a>. Exibida em escala de cinza.</p></details></footer>
</>;
}
