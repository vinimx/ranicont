# Ranicont — Escritório Contábil

Site institucional do Escritório Ranicont, localizado em Avaré, São Paulo. O objetivo é converter visitantes em clientes por meio de uma presença digital profissional e diferenciada no mercado contábil regional.

---

## Tecnologias

![Next.js](https://img.shields.io/badge/Next.js_14-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![CSS Modules](https://img.shields.io/badge/CSS_Modules-000000?style=for-the-badge&logo=cssmodules&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap_5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![Motion](https://img.shields.io/badge/Motion.dev-FF4154?style=for-the-badge&logo=framer&logoColor=white)
![React Icons](https://img.shields.io/badge/React_Icons-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

| Camada | Tecnologia |
|---|---|
| Framework | Next.js 14 com App Router e TypeScript |
| Estilo | CSS Modules + CSS Custom Properties + Bootstrap 5 (grid) |
| Animações | Motion.dev (framer-motion v11+) com `useReducedMotion` |
| Fontes | Playfair Display, DM Serif Display, DM Sans, JetBrains Mono via `next/font` |
| Ícones | React Icons (Font Awesome 5) |
| Formulário | Validação client-side com redirecionamento para WhatsApp Web API |
| Deploy | Vercel com headers de segurança configurados |

---

## Propósito

O escritório Ranicont atua há mais de 20 anos no mercado contábil de Avaré e região, atendendo micro e pequenas empresas, MEIs e pessoas físicas. Apesar da solidez e da reputação local, o escritório não possuía uma presença digital que estivesse à altura do serviço prestado.

Este site foi construído para:

- Transmitir autoridade e confiança logo no primeiro acesso
- Apresentar de forma clara todos os serviços oferecidos
- Facilitar o contato por WhatsApp, principal canal de atendimento
- Fornecer links úteis para portais governamentais (Receita Federal, SEFAZ SP, eSocial, etc.)
- Ser encontrado pelos empresários da região no Google

---

## Decisões de Design

A direção estética segue o conceito **Autoridade Refinada**: azul profundo como protagonista, detalhes dourado/âmbar como sotaque de excelência, tipografia editorial contrastando serif display com sans-serif clean. O objetivo é que o visitante sinta, sem ler uma palavra, que está diante de um escritório sólido e competente.

As animações foram implementadas com critério — cada efeito tem propósito funcional, não decorativo. O suporte a `prefers-reduced-motion` é nativo em todos os componentes animados.

---

## Páginas

| Rota | Descrição |
|---|---|
| `/` | Home com hero animado, diferenciais, contadores e CTA |
| `/empresa` | Apresentação institucional com linha do tempo |
| `/servicos` | Grid de serviços com expand interativo ao clicar |
| `/consultas` | Links externos para portais governamentais com filtro por categoria |
| `/contato` | Formulário com validação, dados de contato e mapa |

---

## Como rodar localmente

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build de produção
npm run build
```

O projeto estará disponível em `http://localhost:3000`.

---

## Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz com as seguintes variáveis:

```env
NEXT_PUBLIC_SITE_URL=https://ranicont.com.br
NEXT_PUBLIC_WHATSAPP_NUMBER=5514996100465
```

---

## Deploy

O projeto está configurado para deploy automático na Vercel. O arquivo `vercel.json` inclui headers de segurança (CSP, X-Frame-Options, Referrer-Policy) e regras de cache para assets estáticos.
