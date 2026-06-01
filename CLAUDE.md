# CLAUDE.md — Ranicont Escritório Contábil
> Spec-Driven Development Document  
> Metodologia: /speckit — Constitution → Specify → Plan → Tasks → Implement

---

## /speckit.constitution

### Visão do Produto
Site institucional para o **Escritório Contábil Ranicont**, localizado em Avaré – SP. O objetivo é converter visitantes em clientes por meio de uma presença digital profissional, confiável e diferenciada no mercado contábil regional.

### Missão do Produto
Comunicar autoridade contábil, gerar confiança e facilitar o contato com o escritório — tudo com uma experiência visual memorável que destoe do padrão genérico dos sites de contabilidade.

### Público-Alvo
- Micro e pequenos empresários do interior de São Paulo
- Pessoas físicas buscando regularização fiscal
- Empreendedores abrindo novos negócios (MEI, ME, LTDA)
- Empresas buscando trocar de escritório contábil

### Princípios Fundamentais
1. **Confiança em primeiro lugar** — Tipografia sólida, cores institucionais, linguagem clara
2. **Experiência premium** — Animações com Motion.dev, parallax, micro-interações cuidadosas
3. **Conversão orientada** — CTAs claros, dados de contato sempre acessíveis, WhatsApp como canal principal
4. **Sem padrão IA** — Design com identidade própria, efeitos que surpreendem positivamente
5. **Performance e acessibilidade** — SSR com Next.js, semântica HTML correta

### Restrições e Requisitos Técnicos
- **Framework:** Next.js 14+ (App Router) + TypeScript
- **Estilo:** CSS Modules + Bootstrap 5 (layout grid) + variáveis CSS customizadas
- **Animação:** Motion.dev (framer-motion v11+) para todos os efeitos
- **Parallax:** `react-scroll-parallax` ou implementação custom via scroll events
- **Fontes:** Google Fonts — sem Inter, Roboto ou Arial
- **Deploy alvo:** Vercel
- **Sem banco de dados** — site estático com formulário via WhatsApp API
- **Formulário de contato:** redireciona para WhatsApp com mensagem pré-formatada

---

## /speckit.specify

### Funcionalidades e Páginas

#### 1. Layout Global
- `<Header>` fixo com logo + nav principal + CTA WhatsApp
- `<Footer>` com endereço, links rápidos, redes sociais, horário de atendimento
- Transições de página animadas (Motion.dev `AnimatePresence`)
- Menu mobile com drawer animado

#### 2. Página HOME (`/`)
**Seções:**
- **Hero** — Logo grande, slogan, telefones, botão WhatsApp CTA, background com efeito parallax + partículas ou gradiente animado
- **Sobre Breve** — Texto de boas-vindas, 4 diferenciais em cards (Tabelas Práticas, Modelos de Documentos, Instituições Financeiras, Emissão NF)
- **Números em destaque** — Contadores animados (anos de mercado, clientes, cidades atendidas etc.)
- **CTA Central** — Banner "Fale conosco hoje" com botão WhatsApp

#### 3. Página EMPRESA (`/empresa`)
**Seções:**
- Hero interno — "Seu negócio EM BOAS MÃOS!" com imagem parallax
- Texto institucional completo
- Cards de valores: Ética, Qualidade, Transparência, Economia
- Equipe/Diferenciais com ícones ou ilustrações
- Timeline de história ou conquistas (opcional, para enriquecer)

#### 4. Página SERVIÇOS (`/servicos`)
**Seções:**
- Hero interno — "Nossos principais SERVIÇOS"
- Cards de serviços com hover animado:
  - Assessoria e Consultoria (Fiscal, RH, Contábil, Legalizações)
  - Serviços Contábeis (classificação, relatórios, normas)
  - Planejamento Tributário
  - Abertura e Encerramento de Empresas
  - Departamento Pessoal / RH
- Cada card expande ou redireciona para detalhe

#### 5. Página CONSULTAS (`/consultas`)
**Seções:**
- Hero interno — "Consultas Contábeis"
- Grid de links externos categorizados:
  - Estadual SP (SEFAZ, JUCESP, Governo SP, DETRAN)
  - Federal (Receita Federal, Simples Nacional, NF-e, CFC, MEI)
  - Trabalhista (Trabalho e Previdência, CNAE)
  - Índices e Finanças (Indicadores Econômicos, Formulários)
- Cards com ícone + nome + link externo (abre em nova aba)

#### 6. Página CONTATO (`/contato`)
**Seções:**
- Hero interno — "Entre em CONTATO"
- Dados de contato (endereço, telefones, e-mails) com ícones
- Formulário → gera link WhatsApp com campos preenchidos (Nome, Email, Telefone, Mensagem)
- Mapa embed Google Maps (endereço: Av. Prof. Celso Ferreira da Silva, 786, Jardim Europa, Avaré – SP)
- Redes sociais com ícones animados

#### 7. Link externo — SIMULADOR DE IMPOSTOS
- Item do menu que abre `https://simulacao-de-tributos-lp.vercel.app/` em nova aba
- Indicador visual de link externo

---

## /speckit.plan

### Arquitetura de Projeto

```
ranicont-site/
├── app/
│   ├── layout.tsx              # Root layout (Header + Footer + AnimatePresence)
│   ├── page.tsx                # HOME
│   ├── empresa/
│   │   └── page.tsx
│   ├── servicos/
│   │   └── page.tsx
│   ├── consultas/
│   │   └── page.tsx
│   └── contato/
│       └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── MobileMenu.tsx
│   │   └── PageTransition.tsx
│   ├── ui/
│   │   ├── AnimatedText.tsx        # Motion.dev text reveals
│   │   ├── ParallaxSection.tsx     # Wrapper parallax
│   │   ├── CounterCard.tsx         # Contador animado
│   │   ├── ServiceCard.tsx         # Card serviço hover
│   │   ├── ConsultaCard.tsx        # Card link externo
│   │   └── WhatsAppButton.tsx      # CTA flutuante
│   └── sections/
│       ├── home/
│       │   ├── HeroSection.tsx
│       │   ├── DiferenciaisSection.tsx
│       │   ├── NumerosSection.tsx
│       │   └── CTASection.tsx
│       ├── empresa/
│       │   ├── EmpresaHero.tsx
│       │   ├── ValoresSection.tsx
│       │   └── TimelineSection.tsx
│       ├── servicos/
│       │   └── ServicosGrid.tsx
│       ├── consultas/
│       │   └── ConsultasGrid.tsx
│       └── contato/
│           ├── ContatoForm.tsx
│           └── ContatoInfo.tsx
├── lib/
│   ├── data/
│   │   ├── services.ts             # Dados dos serviços
│   │   ├── consultas.ts            # Links de consultas
│   │   └── site.ts                 # Dados globais (telefones, endereço etc.)
│   ├── hooks/
│   │   ├── useScrollAnimation.ts
│   │   └── useParallax.ts
│   └── utils/
│       └── whatsapp.ts             # Gera link WhatsApp formatado
├── styles/
│   ├── globals.css                 # Variáveis CSS, reset, base
│   ├── design-tokens.css           # Tokens do design system
│   └── animations.css              # Keyframes globais
└── public/
    ├── logo/
    │   ├── ranicont-logo.svg
    │   └── ranicont-logo-white.svg
    └── images/
        ├── hero-bg.jpg
        ├── empresa-bg.jpg
        └── pattern-overlay.png
```

### Fluxo de Animações (Motion.dev)
1. **Entrada de página** — `AnimatePresence` com fade + slide-up (0.4s)
2. **Hero** — Stagger de elementos: logo → slogan → telefones → CTA (cada +0.15s)
3. **Seções ao scroll** — `useInView` + `whileInView` para revelar cards, textos, contadores
4. **Parallax** — Background do Hero e heroes internos com `useScroll` + `useTransform`
5. **Hover em cards** — `whileHover: { y: -8, boxShadow }` + border color transition
6. **Contador animado** — `animate` de 0 até valor quando entra na viewport
7. **Menu mobile** — Drawer com `AnimatePresence` + slide-right
8. **Botão WhatsApp flutuante** — Pulse animation em CSS + scale on hover

### Estratégia de Performance
- Imagens: `next/image` com lazy loading e formatos WebP
- Fontes: `next/font` com preload
- Animações: `will-change: transform` apenas durante animação, removido após
- Parallax: `requestAnimationFrame` throttled, desativado em `prefers-reduced-motion`

---

## /speckit.tasks

### Sprint 1 — Fundação
- [ ] `T01` Inicializar projeto Next.js 14 + TypeScript + ESLint + Prettier
- [ ] `T02` Instalar dependências: `motion`, `react-scroll-parallax`, `bootstrap`, `react-icons`
- [ ] `T03` Configurar variáveis CSS e design tokens (`globals.css`, `design-tokens.css`)
- [ ] `T04` Selecionar e configurar fontes via `next/font` (display + body)
- [ ] `T05` Criar arquivo `lib/data/site.ts` com todos os dados estáticos do escritório
- [ ] `T06` Criar utilitário `lib/utils/whatsapp.ts`

### Sprint 2 — Layout e Navegação
- [ ] `T07` Implementar `<Header>` com logo, nav desktop e CTA WhatsApp
- [ ] `T08` Implementar `<MobileMenu>` com drawer animado (Motion.dev)
- [ ] `T09` Implementar `<Footer>` com 3 colunas: dados, links rápidos, redes sociais
- [ ] `T10` Implementar `<PageTransition>` com `AnimatePresence`
- [ ] `T11` Criar root `layout.tsx` integrando Header + Footer + PageTransition
- [ ] `T12` Criar `<WhatsAppButton>` flutuante com pulse CSS

### Sprint 3 — Componentes UI Base
- [ ] `T13` `<AnimatedText>` — wrapper para revelar texto com stagger por palavra/linha
- [ ] `T14` `<ParallaxSection>` — wrapper com `useScroll` + `useTransform`
- [ ] `T15` `<CounterCard>` — contador animado com `animate` do Motion.dev
- [ ] `T16` `<ServiceCard>` — card com hover animado, ícone, título, descrição
- [ ] `T17` `<ConsultaCard>` — card link externo com ícone e hover

### Sprint 4 — Página HOME
- [ ] `T18` `<HeroSection>` — parallax bg, logo, slogan animado, telefones, CTA
- [ ] `T19` `<DiferenciaisSection>` — 4 cards reveal com stagger ao scroll
- [ ] `T20` `<NumerosSection>` — 3-4 contadores animados (anos, clientes, serviços)
- [ ] `T21` `<CTASection>` — banner de conversão com fundo azul escuro
- [ ] `T22` Montar `app/page.tsx` com todas as seções

### Sprint 5 — Página EMPRESA
- [ ] `T23` `<EmpresaHero>` — parallax + título animado
- [ ] `T24` `<ValoresSection>` — 4 cards ética/qualidade/transparência/economia
- [ ] `T25` `<TimelineSection>` — linha do tempo de conquistas (opcional)
- [ ] `T26` Montar `app/empresa/page.tsx`

### Sprint 6 — Página SERVIÇOS
- [ ] `T27` Criar dados de serviços em `lib/data/services.ts`
- [ ] `T28` `<ServicosGrid>` — grid de cards com hover e expand
- [ ] `T29` Montar `app/servicos/page.tsx`

### Sprint 7 — Página CONSULTAS
- [ ] `T30` Criar dados de consultas em `lib/data/consultas.ts` (com URLs e categorias)
- [ ] `T31` `<ConsultasGrid>` — grid categorizado com filtro de categoria
- [ ] `T32` Montar `app/consultas/page.tsx`

### Sprint 8 — Página CONTATO
- [ ] `T33` `<ContatoForm>` — formulário com validação e geração de link WhatsApp
- [ ] `T34` `<ContatoInfo>` — cards de endereço, telefone, e-mail com ícones Motion
- [ ] `T35` Embed Google Maps iframe
- [ ] `T36` Montar `app/contato/page.tsx`

### Sprint 9 — Polimento e QA
- [ ] `T37` Revisar responsividade em mobile (320px → 1440px)
- [ ] `T38` Implementar `prefers-reduced-motion` para desativar animações
- [ ] `T39` Adicionar meta tags SEO (title, description, og:image) por página
- [ ] `T40` Otimizar imagens com `next/image` e placeholders blur
- [ ] `T41` Testar formulário WhatsApp em dispositivos reais
- [ ] `T42` Lighthouse audit: Performance ≥ 85, Accessibility ≥ 90
- [ ] `T43` Configurar `vercel.json` e variáveis de ambiente

---

## /speckit.implement

### Guia de Implementação por Camada

#### Camada 1 — Dados Estáticos (`lib/data/site.ts`)
```typescript
export const SITE = {
  nome: "Ranicont Escritório Contábil",
  slogan: "Nosso plano de negócio é a saúde da sua empresa!",
  telefones: ["(14) 3731-2017", "(14) 99610-0465"],
  whatsapp: "5514996100465",
  email: {
    geral: "ranicont@yahoo.com.br",
    contato: "contato@ranicont.com.br",
    fiscal: "fiscal@ranicont.com.br",
  },
  endereco: {
    logradouro: "Av. Prof. Celso Ferreira da Silva, 786",
    bairro: "Jardim Europa",
    cidade: "Avaré – SP",
  },
  redes: {
    facebook: "https://www.facebook.com/escritorioranicont",
    instagram: "https://www.instagram.com/escritoriocontabilranicont/",
    whatsapp: "https://api.whatsapp.com/send?phone=5514996100465",
  },
  simulador: "https://simulacao-de-tributos-lp.vercel.app/",
} as const;
```

#### Camada 2 — Utilitário WhatsApp (`lib/utils/whatsapp.ts`)
```typescript
interface WhatsAppPayload {
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
}

export function gerarLinkWhatsApp(payload: WhatsAppPayload): string {
  const texto = `Olá! Meu nome é ${payload.nome}.
Email: ${payload.email}
Telefone: ${payload.telefone}
Mensagem: ${payload.mensagem}`;
  
  const encoded = encodeURIComponent(texto);
  return `https://api.whatsapp.com/send?phone=5514996100465&text=${encoded}`;
}
```

#### Camada 3 — Componente AnimatedText (Motion.dev)
```tsx
"use client";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

interface AnimatedTextProps {
  text: string;
  tag?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  delay?: number;
  splitBy?: "word" | "char" | "line";
}

export function AnimatedText({ 
  text, tag: Tag = "p", className, delay = 0, splitBy = "word" 
}: AnimatedTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  
  const words = text.split(" ");
  
  return (
    <Tag ref={ref} className={className} style={{ overflow: "hidden" }}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          style={{ display: "inline-block", marginRight: "0.25em" }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: delay + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
}
```

#### Camada 4 — ParallaxSection
```tsx
"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

interface ParallaxSectionProps {
  children: React.ReactNode;
  bgImage?: string;
  speed?: number; // 0.1 a 0.5
  className?: string;
  overlay?: boolean;
}

export function ParallaxSection({ 
  children, bgImage, speed = 0.3, className, overlay = true 
}: ParallaxSectionProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  
  return (
    <section ref={ref} className={`parallax-section ${className ?? ""}`} style={{ position: "relative", overflow: "hidden" }}>
      {bgImage && (
        <motion.div
          style={{
            position: "absolute", inset: "-20%", y,
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}
      {overlay && <div className="parallax-overlay" />}
      <div style={{ position: "relative", zIndex: 1 }}>
        {children}
      </div>
    </section>
  );
}
```

#### Camada 5 — ServiceCard com hover Motion
```tsx
"use client";
import { motion } from "motion/react";

interface ServiceCardProps {
  icon: React.ReactNode;
  titulo: string;
  descricao: string;
  itens?: string[];
  index: number;
}

export function ServiceCard({ icon, titulo, descricao, itens, index }: ServiceCardProps) {
  return (
    <motion.article
      className="service-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, transition: { duration: 0.25 } }}
    >
      <motion.div 
        className="service-card__icon"
        whileHover={{ scale: 1.15, rotate: 5 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        {icon}
      </motion.div>
      <h3 className="service-card__title">{titulo}</h3>
      <p className="service-card__desc">{descricao}</p>
      {itens && (
        <ul className="service-card__list">
          {itens.map((item, i) => (
            <motion.li key={i} initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.08 }}>
              {item}
            </motion.li>
          ))}
        </ul>
      )}
    </motion.article>
  );
}
```

#### Camada 6 — ContatoForm com link WhatsApp
```tsx
"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { gerarLinkWhatsApp } from "@/lib/utils/whatsapp";

export function ContatoForm() {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", mensagem: "" });
  
  const handleSubmit = () => {
    const link = gerarLinkWhatsApp(form);
    window.open(link, "_blank");
  };
  
  // campos com motion.input e validação básica
  // ...
}
```

#### Camada 7 — CounterCard animado
```tsx
"use client";
import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import { useRef, useEffect } from "react";

export function CounterCard({ valor, sufixo, label }: { valor: number; sufixo?: string; label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  
  useEffect(() => {
    if (isInView) {
      const controls = animate(count, valor, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView]);
  
  return (
    <motion.div ref={ref} className="counter-card"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
      <span className="counter-card__value">
        <motion.span>{rounded}</motion.span>{sufixo}
      </span>
      <span className="counter-card__label">{label}</span>
    </motion.div>
  );
}
```

### Comandos de Desenvolvimento

```bash
# Iniciar projeto
npx create-next-app@latest ranicont-site --typescript --tailwind=false --app --src-dir=false

# Instalar dependências
npm install motion react-scroll-parallax bootstrap react-icons

# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Deploy Vercel
vercel --prod
```

### Variáveis de Ambiente (`.env.local`)
```env
NEXT_PUBLIC_WHATSAPP_NUMBER=5514996100465
NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL=https://maps.google.com/maps?...
NEXT_PUBLIC_GA_ID= # Google Analytics (opcional)
```

### Checklist de Launch
- [ ] Todas as 5 páginas funcionando
- [ ] Menu mobile abrindo e fechando com animação
- [ ] Formulário gerando link WhatsApp correto
- [ ] Botão WhatsApp flutuante visível em todas as páginas
- [ ] Parallax suave sem lag no mobile
- [ ] `prefers-reduced-motion` respeitado
- [ ] Meta tags SEO corretas em cada página
- [ ] Google Search Console configurado
- [ ] Analytics configurado
- [ ] Domínio custom configurado na Vercel
