# Brenda Luna — English Teacher

Landing page em português com direção de arte inspirada em colagem editorial e HQ. Next.js App Router, TypeScript e CSS responsivo; conteúdo renderizado estaticamente, sem banco de dados ou variáveis de ambiente.

## Desenvolvimento

Requisitos: Node.js 24 e pnpm 11.25.0.

```sh
corepack enable
pnpm install
pnpm dev
```

## Validação e produção

```sh
pnpm build
pnpm start
```

O build também verifica os tipos. Na Vercel, importe `jotavtech/teacherbrenda`, selecione Next.js, diretório raiz e Node.js 24.x. A branch de produção é `main`; o comando de build é `pnpm build`.

## Conteúdo e contatos

Os textos e links estão em `app/page.tsx`; estilos e pontos de quebra em `app/globals.css`; título e descrição em `app/layout.tsx`.

- Instagram profissional: https://www.instagram.com/teacherbrendaluna/
- WhatsApp: https://wa.me/5583999140820
- Informações fornecidas: professora desde 2018, Cambridge CELTA Certified English Teacher. A idade avança a cada 4 de abril; nascimento em 04/04/2000 inferido a partir dos 26 anos informados em novembro de 2026.
- Horários, preços e disponibilidade são consultados diretamente com a professora.

## Imagens

`public/liberty.png`: fotografia de Elcobbola, recorte de Edward-Woodrow, via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Statue_of_liberty_(transparent).png), [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/). Original preservado; apresentação em escala de cinza por CSS. A apresentação derivada da imagem mantém a mesma licença. Créditos também disponíveis no rodapé.

A página usa uma composição tipográfica na apresentação da professora; nenhuma foto ou reprodução de certificado foi inventada.
