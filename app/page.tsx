import { ArrowUpRight, MessageCircle, Sparkles, Globe2, AudioLines, BookOpen, BadgeCheck } from 'lucide-react';
import Age from './components/age';
import MotionEnhancements from './components/motion-enhancements';
import Starburst from './components/starburst';
import { getBrendaAge } from '../lib/brenda';

function Instagram({ size = 24 }: { size?: number }) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none"/></svg>; }

const whatsapp = 'https://wa.me/5583999140820?text=Oi%2C%20Brenda!%20Quero%20saber%20mais%20sobre%20as%20aulas%20de%20ingl%C3%AAs.';
function Contact({ children = 'Quero aprender inglês', className = '' }: { children?: React.ReactNode; className?: string }) {
  return <a className={`button ${className}`} href={whatsapp} target="_blank" rel="noopener noreferrer">{children}<ArrowUpRight size={22} aria-hidden="true" /></a>;
}
function UnionJack() { return <svg viewBox="0 0 60 38" role="img" aria-label="Bandeira do Reino Unido"><defs><clipPath id="flag"><path d="M0 0h60v38H0z" /></clipPath></defs><g clipPath="url(#flag)"><path fill="#184b9b" d="M0 0h60v38H0z"/><path stroke="#fff" strokeWidth="11" d="m0 0 60 38M60 0 0 38"/><path stroke="#df302c" strokeWidth="4" d="m0 0 60 38M60 0 0 38"/><path stroke="#fff" strokeWidth="15" d="M30 0v38M0 19h60"/><path stroke="#df302c" strokeWidth="8" d="M30 0v38M0 19h60"/></g></svg> }

export default function Home() {
return <>
  <MotionEnhancements />
  <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
  <div className="announcement"><span className="status-dot"/> UM POUCO DE PRÁTICA. MUITAS POSSIBILIDADES. <span className="announcement-star">✦</span> AULAS PARTICULARES DE INGLÊS</div>
  <header className="header wrap">
    <a href="#" aria-label="Brenda Luna — início" className="brand">brenda luna<span>ENGLISH TEACHER <i>✦</i></span></a>
    <nav aria-label="Menu principal"><a href="#aulas">As aulas</a><a href="#brenda">Sobre mim</a><a href="#duvidas">Dúvidas</a></nav>
    <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="header-contact">Let’s talk <ArrowUpRight size={18}/></a>
  </header>
  <main id="conteudo">
    <section className="hero wrap" aria-labelledby="hero-title">
      <div className="hero-copy">
        <div className="eyebrow"><span/> INGLÊS PARA A VIDA REAL</div>
        <h1 id="hero-title">SEU PRÓXIMO<br/>CAPÍTULO PODE<br/>SER <span className="red-word">EM INGLÊS.<svg viewBox="0 0 440 22" aria-hidden="true"><path d="M4 14Q180-2 430 7M30 21Q220 9 409 17"/></svg></span></h1>
        <p>Sabe aquela vontade de falar sem travar? Eu te ajudo a transformar isso em prática.</p>
        <Contact />
        <div className="hero-footnote"><span className="tiny-star" aria-hidden="true"><Starburst /></span> Aulas particulares, do básico ao avançado.</div>
      </div>
      <div className="hero-art" aria-label="Colagem artística da Estátua da Liberdade">
        <div className="art-red"><span className="art-top">MAKE ROOM FOR SOMETHING NEW</span><span className="giant-hello">HELLO<br/>WORLD!</span><div className="halftone"/><span className="art-bottom">A LITTLE PRACTICE GOES A LONG WAY.</span></div>
        <div className="tape tape-one"/>
        <div className="blue-orbit"/>
        <img className="liberty" src="/liberty.png" width="1464" height="2022" alt="Estátua da Liberdade em uma colagem em preto e branco" fetchPriority="high"/>
        <span className="speech-bubble">Yes, you can!</span>
        <span className="art-spark">✧</span>
        <div className="flag-sticker"><UnionJack/><span>LET’S GO!</span></div>
        <div className="cert-sticker"><BadgeCheck size={28}/><span>CAMBRIDGE<strong>CELTA</strong>CERTIFIED TEACHER</span></div>
        <span className="handwritten art-note">one step at a time ♡</span>
      </div>
    </section>
    <div className="ticker" aria-label="Inglês para as coisas que você gosta de fazer"><div><span>PEÇA SEU CAFÉ</span><i>✦</i><span>ENTENDA SUA MÚSICA</span><i>✦</i><span>PUXE CONVERSA</span><i>✦</i><span>CURTA A VIAGEM</span><i>✦</i><span>CONTE SUA HISTÓRIA</span></div></div>
    <section id="aulas" className="lessons wrap section">
      <div className="section-heading"><div><span className="eyebrow">01 / O QUE VOCÊ QUER FAZER COM O INGLÊS?</span><h2>MENOS “E SE EU ERRAR?”.<br/><span className="blue-text">MAIS “DEIXA EU TENTAR”.</span></h2></div><p>Me conta o que te trouxe até aqui.<br/>{' '}Quero conhecer seus planos<br/>{' '}e ajudar você a colocá-los em prática.</p></div>
      <div className="lesson-grid">
        <article className="lesson-card"><span className="card-index">LET’S TALK</span><AudioLines size={36} strokeWidth={1.5}/><h3>Quero me expressar.</h3><p>Dar sua opinião, contar uma novidade, fazer uma pergunta. Vamos trabalhar o inglês que ajuda você a participar.</p><span className="card-label">SUA VOZ NA CONVERSA <ArrowUpRight size={18}/></span></article>
        <article className="lesson-card blue-card"><span className="card-index">OUT THERE</span><Globe2 size={36} strokeWidth={1.5}/><h3>Tenho planos.</h3><p>Uma viagem, uma oportunidade ou aquela série sem legenda. Me conta: onde você quer usar o inglês?</p><span className="card-label">DO ESTUDO PARA O DIA A DIA <ArrowUpRight size={18}/></span></article>
        <article className="lesson-card"><span className="card-index">KEEP GOING</span><BookOpen size={36} strokeWidth={1.5}/><h3>Quero ir mais longe.</h3><p>Talvez você esteja começando. Talvez já saiba bastante e queira destravar. A gente parte do que você já sabe.</p><span className="card-label">UM PASSO DE CADA VEZ <ArrowUpRight size={18}/></span></article>
      </div>
    </section>
    <section id="brenda" className="about-section"><div className="about wrap">
      <div className="teacher-art"><div className="notebook"><div className="paper-holes"/><span className="eyebrow">UM BILHETE MEU PRA VOCÊ</span><p>Pode errar,<br/>pode perguntar.<br/>O importante é<br/><span>se permitir tentar.</span></p><span className="signature">with love, Brenda ♡</span></div><div className="since-sticker">TEACHING<br/><strong>SINCE 2018</strong><Sparkles size={22}/></div></div>
      <div className="about-copy"><span className="eyebrow">02 / PRAZER, SUA TEACHER</span><h2>HI, I’M<br/><span className="red-text">BRENDA LUNA.</span><span className="hello-wave" aria-hidden="true"><Starburst /></span></h2><p>Tenho <Age initialAge={getBrendaAge()} /> anos e dou aulas de inglês desde 2018. Gosto de pensar no idioma como uma ferramenta pra fazer mais do que você gosta — e descobrir coisas novas também.</p><p>Sou <strong>Cambridge CELTA Certified English Teacher</strong>. Por aqui, quero que você se sinta à vontade pra perguntar, experimentar e aprender. Não precisa acertar tudo de primeira.</p><div className="credential"><BadgeCheck size={30}/><div><strong>Cambridge CELTA</strong><span>Certified English Teacher</span></div></div><a className="text-link" href="https://www.instagram.com/teacherbrendaluna/" target="_blank" rel="noopener noreferrer"><Instagram size={19}/> Vem me conhecer no Instagram <ArrowUpRight size={18}/></a></div>
    </div></section>
    <section id="duvidas" className="faq wrap section"><div><span className="eyebrow">03 / FICOU ALGUMA DÚVIDA?</span><h2>LET’S CLEAR<br/><span className="blue-text">THINGS UP.</span></h2><span className="handwritten faq-note">já te adianto algumas respostas ♡</span></div><div className="questions">
      <details><summary>Preciso saber inglês para começar?<span>+</span></summary><div className="answer"><p>Não precisa! Se você está começando do zero, eu te ajudo a dar os primeiros passos. Pode chegar com as dúvidas, inclusive aquelas que parecem bobas.</p></div></details>
      <details><summary>Como saber qual é o meu nível?<span>+</span></summary><div className="answer"><p>Me conta o que você já estudou e em quais situações sente mais dificuldade. Assim, a gente entende o que você já sabe e o que vale trabalhar agora.</p></div></details>
      <details><summary>Como funcionam horários e valores?<span>+</span></summary><div className="answer"><p>Me chama no WhatsApp e me diz quais horários funcionam pra você. Por lá, te passo os valores e a disponibilidade das aulas.</p></div></details>
      <details><summary>Como faço para começar?<span>+</span></summary><div className="answer"><p>É só clicar em “Quero aprender inglês” e me mandar uma mensagem. Quero saber o que você busca e te ajudar a escolher por onde começar.</p></div></details>
    </div></section>
    <section className="contact-section" id="contato"><div className="wrap contact-inner"><span className="eyebrow">PODE CHEGAR, EU TE ESCUTO.</span><h2>BORA TIRAR O INGLÊS<br/><span>DO PAPEL?</span></h2><p>Me conta seus planos. Vamos descobrir como posso te ajudar.</p><Contact className="white-button">Me chama no WhatsApp <MessageCircle size={20}/></Contact><a className="contact-number" href={whatsapp} target="_blank" rel="noopener noreferrer">(83) 99914-0820</a><span className="contact-star" aria-hidden="true"><Starburst /></span></div></section>
  </main>
  <footer className="wrap footer"><a className="brand" href="#">brenda luna<span>ENGLISH TEACHER <i>✦</i></span></a><span>Feito com carinho. See you in class!</span><a href="https://www.instagram.com/teacherbrendaluna/" target="_blank" rel="noopener noreferrer"><Instagram size={18}/>@teacherbrendaluna <ArrowUpRight size={16}/></a><details className="credits"><summary>Créditos da imagem</summary><p>Estátua: <a href="https://commons.wikimedia.org/wiki/File:Statue_of_liberty_(transparent).png" target="_blank" rel="noopener noreferrer">Elcobbola / Edward-Woodrow</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0/" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a>. Exibida em escala de cinza.</p></details></footer>
</>;
}
