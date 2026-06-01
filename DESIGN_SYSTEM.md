# DESIGN_SYSTEM.md — Ranicont Escritório Contábil
> Design System para site institucional — Versão 1.0

---

## 1. Identidade Visual e Direção Estética

### Conceito
**"Autoridade Refinada"** — Um escritório contábil deve transmitir confiança, solidez e precisão. A estética foge do padrão corporativo genérico apostando em:

- **Tipografia editorial** com contraste forte entre serif display e sans-serif clean
- **Azul profundo como protagonista** — não azul "de banco", mas azul com personalidade
- **Detalhes dourado/âmbar** como sotaque que remete a excelência e tradição
- **Layouts com quebra de grid** — assimetria controlada, não caos
- **Espaço negativo generoso** equilibrado com seções de alta densidade informacional
- **Motion discreto mas preciso** — cada animação tem propósito, não é decoração

### Personalidade da Marca
| Atributo | Expressão no Design |
|---|---|
| Confiável | Cores sólidas, tipografia clara, sem truques visuais |
| Especialista | Linguagem visual precisa, ícones técnicos, dados concretos |
| Acessível | Hierarquia clara, CTAs óbvios, linguagem sem jargão |
| Diferenciado | Motion elegante, layouts surpreendentes, detalhes refinados |

---

## 2. Tokens de Cor

### CSS Variables (cole em `styles/design-tokens.css`)

```css
:root {
  /* ========================
     CORES PRIMÁRIAS
  ======================== */
  --color-blue-primary:    #0000FF;  /* Azul elétrico — CTAs, links, destaques */
  --color-blue-deep:       #000080;  /* Azul navy — headers, backgrounds escuros */
  --color-blue-vivid:      #0033CC;  /* Azul médio — hover states, gradientes */
  --color-blue-muted:      #3355BB;  /* Azul mais suave — estados secundários */
  
  /* ========================
     BACKGROUNDS
  ======================== */
  --color-bg-site:         #F0F4FF;  /* Background geral do site (azul ultra-claro) */
  --color-bg-white:        #FFFFFF;  /* Cards, modais, formulários */
  --color-bg-dark:         #050818;  /* Seções escuras, hero, footer */
  --color-bg-dark-mid:     #0A0F2E;  /* Variação de dark para seções alternadas */
  --color-bg-section-alt:  #E8EEFF;  /* Seções alternadas claras */
  
  /* ========================
     SOTAQUES E DESTAQUES
  ======================== */
  --color-accent-gold:     #C9A227;  /* Dourado — elementos premium, bordas destaque */
  --color-accent-gold-lt:  #F0C93A;  /* Dourado claro — hover, brilhos */
  --color-accent-cyan:     #00AAFF;  /* Ciano — gradientes, glows */
  
  /* ========================
     TEXTOS
  ======================== */
  --color-text-primary:    #0D0D2B;  /* Texto principal em fundos claros */
  --color-text-secondary:  #3D4A6B;  /* Texto secundário, parágrafos */
  --color-text-muted:      #7A8AAD;  /* Labels, placeholders, metadados */
  --color-text-inverse:    #FFFFFF;  /* Texto em fundos escuros */
  --color-text-accent:     #0000FF;  /* Links e destaques inline */
  
  /* ========================
     BORDAS E DIVISORES
  ======================== */
  --color-border-light:    #D5DEFF;  /* Bordas suaves em fundo claro */
  --color-border-dark:     #1A2550;  /* Bordas em fundo escuro */
  --color-border-accent:   #C9A227;  /* Bordas de destaque (cards featured) */
  
  /* ========================
     STATUS
  ======================== */
  --color-success:         #1DB954;
  --color-warning:         #F5A623;
  --color-error:           #E53E3E;
  
  /* ========================
     GRADIENTES
  ======================== */
  --gradient-hero:         linear-gradient(135deg, #000080 0%, #0000FF 40%, #0033AA 100%);
  --gradient-card-hover:   linear-gradient(135deg, #0000FF 0%, #000080 100%);
  --gradient-gold:         linear-gradient(135deg, #C9A227 0%, #F0C93A 100%);
  --gradient-dark-overlay: linear-gradient(to bottom, rgba(5,8,24,0) 0%, rgba(5,8,24,0.85) 100%);
}
```

---

## 3. Tipografia

### Seleção de Fontes

| Uso | Família | Fallback | Estilo |
|---|---|---|---|
| Display / Hero | `Playfair Display` | Georgia, serif | Bold, Black — impacto máximo |
| Headings | `DM Serif Display` | Georgia, serif | Regular — elegância editorial |
| Body / UI | `DM Sans` | system-ui, sans-serif | Regular, Medium — legibilidade |
| Mono / Dados | `JetBrains Mono` | monospace | Números, códigos fiscais |

> **Por que essas fontes?** Playfair tem a gravidade de uma firma tradicional sem parecer antiquada. DM Sans é moderna sem ser genérica. A combinação serif/sans é o coração de publicações financeiras de alto nível.

### Escala Tipográfica

```css
:root {
  /* ========================
     FONT FAMILIES
  ======================== */
  --font-display:    'Playfair Display', Georgia, serif;
  --font-heading:    'DM Serif Display', Georgia, serif;
  --font-body:       'DM Sans', system-ui, sans-serif;
  --font-mono:       'JetBrains Mono', 'Courier New', monospace;
  
  /* ========================
     FONT SIZES (escala fluida)
  ======================== */
  --text-xs:         0.75rem;   /* 12px — labels, badges */
  --text-sm:         0.875rem;  /* 14px — captions, metadados */
  --text-base:       1rem;      /* 16px — body padrão */
  --text-md:         1.125rem;  /* 18px — body ênfase, lead */
  --text-lg:         1.25rem;   /* 20px — subtítulos */
  --text-xl:         1.5rem;    /* 24px — h3 */
  --text-2xl:        2rem;      /* 32px — h2 */
  --text-3xl:        2.75rem;   /* 44px — h1 seções */
  --text-4xl:        3.5rem;    /* 56px — hero heading */
  --text-5xl:        4.5rem;    /* 72px — hero display */
  --text-hero:       clamp(3rem, 7vw, 5.5rem); /* Fluido no hero */
  
  /* ========================
     FONT WEIGHTS
  ======================== */
  --weight-regular:  400;
  --weight-medium:   500;
  --weight-semibold: 600;
  --weight-bold:     700;
  --weight-black:    900;
  
  /* ========================
     LINE HEIGHTS
  ======================== */
  --leading-tight:   1.2;  /* Headings grandes */
  --leading-snug:    1.35; /* Headings menores */
  --leading-normal:  1.6;  /* Body text */
  --leading-relaxed: 1.75; /* Parágrafos longos */
  
  /* ========================
     LETTER SPACING
  ======================== */
  --tracking-tight:   -0.02em; /* Display grande */
  --tracking-normal:  0em;
  --tracking-wide:    0.05em;  /* Labels, caps */
  --tracking-widest:  0.15em;  /* Overlines, badges */
}
```

### Uso Prático de Tipografia

```css
/* Hero principal */
.hero-title {
  font-family: var(--font-display);
  font-size: var(--text-hero);
  font-weight: var(--weight-black);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-text-inverse);
}

/* Slogan / tagline */
.hero-slogan {
  font-family: var(--font-body);
  font-size: var(--text-xl);
  font-weight: var(--weight-medium);
  letter-spacing: var(--tracking-wide);
  color: var(--color-accent-gold-lt);
  text-transform: uppercase;
}

/* Section heading */
.section-title {
  font-family: var(--font-heading);
  font-size: clamp(var(--text-2xl), 4vw, var(--text-3xl));
  font-weight: var(--weight-regular); /* Serif já tem peso visual */
  line-height: var(--leading-snug);
  color: var(--color-text-primary);
}

/* Overline / label acima do título */
.overline {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-bold);
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-blue-primary);
}

/* Body text padrão */
.body-text {
  font-family: var(--font-body);
  font-size: var(--text-base);
  line-height: var(--leading-relaxed);
  color: var(--color-text-secondary);
}
```

---

## 4. Espaçamento e Grid

```css
:root {
  /* ========================
     ESPAÇAMENTO (escala 4px)
  ======================== */
  --space-1:   0.25rem;   /* 4px */
  --space-2:   0.5rem;    /* 8px */
  --space-3:   0.75rem;   /* 12px */
  --space-4:   1rem;      /* 16px */
  --space-5:   1.25rem;   /* 20px */
  --space-6:   1.5rem;    /* 24px */
  --space-8:   2rem;      /* 32px */
  --space-10:  2.5rem;    /* 40px */
  --space-12:  3rem;      /* 48px */
  --space-16:  4rem;      /* 64px */
  --space-20:  5rem;      /* 80px */
  --space-24:  6rem;      /* 96px */
  --space-32:  8rem;      /* 128px */
  
  /* ========================
     SEÇÕES
  ======================== */
  --section-py:      var(--space-20);  /* Padding vertical padrão de seção */
  --section-py-lg:   var(--space-32);  /* Seções hero e especiais */
  --container-max:   1200px;
  --container-px:    var(--space-6);   /* Padding lateral container */
  
  /* ========================
     BORDER RADIUS
  ======================== */
  --radius-sm:   4px;
  --radius-md:   8px;
  --radius-lg:   16px;
  --radius-xl:   24px;
  --radius-2xl:  32px;
  --radius-full: 9999px;
  
  /* ========================
     SOMBRAS
  ======================== */
  --shadow-sm:   0 1px 3px rgba(0,0,128,0.08), 0 1px 2px rgba(0,0,128,0.04);
  --shadow-md:   0 4px 16px rgba(0,0,128,0.12), 0 2px 8px rgba(0,0,128,0.06);
  --shadow-lg:   0 12px 40px rgba(0,0,128,0.16), 0 4px 16px rgba(0,0,128,0.08);
  --shadow-xl:   0 24px 64px rgba(0,0,128,0.2);
  --shadow-glow: 0 0 40px rgba(0,0,255,0.25);
  --shadow-gold: 0 4px 20px rgba(201,162,39,0.3);
}
```

---

## 5. Componentes

### 5.1 Botões

```css
/* Botão Primário — CTA principal */
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-8);
  background: var(--color-blue-primary);
  color: var(--color-text-inverse);
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: var(--weight-semibold);
  letter-spacing: var(--tracking-wide);
  border: 2px solid var(--color-blue-primary);
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.22, 1, 0.36, 1);
  text-decoration: none;
}

.btn-primary:hover {
  background: var(--color-blue-deep);
  border-color: var(--color-blue-deep);
  transform: translateY(-2px);
  box-shadow: var(--shadow-glow);
}

/* Botão WhatsApp */
.btn-whatsapp {
  background: #25D366;
  border-color: #25D366;
  color: white;
}
.btn-whatsapp:hover {
  background: #1DA851;
  border-color: #1DA851;
  box-shadow: 0 0 30px rgba(37, 211, 102, 0.4);
}

/* Botão Outline */
.btn-outline {
  background: transparent;
  color: var(--color-blue-primary);
  border-color: var(--color-blue-primary);
}
.btn-outline:hover {
  background: var(--color-blue-primary);
  color: white;
}

/* Botão Outline Inverse (em fundo escuro) */
.btn-outline-inverse {
  background: transparent;
  color: white;
  border: 2px solid rgba(255,255,255,0.5);
}
.btn-outline-inverse:hover {
  background: white;
  color: var(--color-blue-deep);
  border-color: white;
}
```

### 5.2 Cards de Serviço

```css
.service-card {
  background: var(--color-bg-white);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-xl);
  padding: var(--space-8);
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}

/* Linha de destaque no topo */
.service-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: var(--gradient-gold);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}

.service-card:hover::before {
  transform: scaleX(1);
}

.service-card:hover {
  box-shadow: var(--shadow-lg);
  border-color: var(--color-blue-primary);
  transform: translateY(-8px);
}

.service-card__icon {
  width: 56px;
  height: 56px;
  background: var(--color-bg-site);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--space-6);
  color: var(--color-blue-primary);
  font-size: 1.5rem;
  transition: all 0.25s ease;
}

.service-card:hover .service-card__icon {
  background: var(--color-blue-primary);
  color: white;
}

.service-card__title {
  font-family: var(--font-heading);
  font-size: var(--text-xl);
  color: var(--color-text-primary);
  margin-bottom: var(--space-3);
}

.service-card__desc {
  font-family: var(--font-body);
  font-size: var(--text-base);
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-4);
}

.service-card__list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.service-card__list li {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  padding: var(--space-1) 0;
  padding-left: var(--space-5);
  position: relative;
}

.service-card__list li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--color-blue-primary);
  font-weight: bold;
}
```

### 5.3 Counter Cards

```css
.counter-card {
  text-align: center;
  padding: var(--space-8);
}

.counter-card__value {
  display: block;
  font-family: var(--font-display);
  font-size: var(--text-4xl);
  font-weight: var(--weight-black);
  color: var(--color-text-inverse);
  line-height: 1;
  margin-bottom: var(--space-2);
  background: var(--gradient-gold);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.counter-card__label {
  display: block;
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: var(--weight-medium);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: rgba(255,255,255,0.6);
}
```

### 5.4 Consulta Card (link externo)

```css
.consulta-card {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-4) var(--space-6);
  background: var(--color-bg-white);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-lg);
  text-decoration: none;
  color: var(--color-text-primary);
  transition: all 0.2s ease;
  cursor: pointer;
}

.consulta-card:hover {
  border-color: var(--color-blue-primary);
  background: var(--color-bg-site);
  transform: translateX(4px);
  box-shadow: var(--shadow-md);
  color: var(--color-blue-primary);
}

.consulta-card__icon {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  background: var(--color-bg-site);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-blue-primary);
  transition: all 0.2s ease;
}

.consulta-card:hover .consulta-card__icon {
  background: var(--color-blue-primary);
  color: white;
}

.consulta-card__name {
  font-size: var(--text-sm);
  font-weight: var(--weight-medium);
  flex: 1;
}

.consulta-card__arrow {
  color: var(--color-text-muted);
  transition: transform 0.2s ease;
}

.consulta-card:hover .consulta-card__arrow {
  transform: translateX(4px);
  color: var(--color-blue-primary);
}
```

### 5.5 Header

```css
.site-header {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  padding: var(--space-4) 0;
  transition: all 0.3s ease;
}

/* Scrolled state — adicionar via JS */
.site-header.scrolled {
  background: rgba(5, 8, 24, 0.92);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  padding: var(--space-3) 0;
  box-shadow: 0 1px 0 rgba(255,255,255,0.08);
}

.site-header__logo {
  height: 48px;
  width: auto;
}

.site-header__nav {
  display: flex;
  align-items: center;
  gap: var(--space-1);
}

.nav-link {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: var(--weight-medium);
  color: rgba(255,255,255,0.8);
  text-decoration: none;
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-md);
  letter-spacing: var(--tracking-wide);
  transition: all 0.2s ease;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0; left: var(--space-4); right: var(--space-4);
  height: 2px;
  background: var(--color-accent-gold);
  transform: scaleX(0);
  transition: transform 0.25s ease;
}

.nav-link:hover,
.nav-link.active {
  color: white;
}

.nav-link:hover::after,
.nav-link.active::after {
  transform: scaleX(1);
}

/* Link externo (simulador) */
.nav-link--external {
  color: var(--color-accent-gold-lt);
  border: 1px solid rgba(201,162,39,0.3);
}
.nav-link--external:hover {
  background: rgba(201,162,39,0.1);
  border-color: var(--color-accent-gold);
}
```

### 5.6 Footer

```css
.site-footer {
  background: var(--color-bg-dark);
  border-top: 1px solid var(--color-border-dark);
  padding: var(--space-20) 0 var(--space-8);
}

.footer-logo {
  height: 48px;
  margin-bottom: var(--space-6);
  filter: brightness(0) invert(1);
}

.footer-slogan {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: rgba(255,255,255,0.5);
  max-width: 280px;
  line-height: var(--leading-relaxed);
}

.footer-heading {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-bold);
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-accent-gold);
  margin-bottom: var(--space-6);
}

.footer-link {
  display: block;
  font-size: var(--text-sm);
  color: rgba(255,255,255,0.6);
  text-decoration: none;
  padding: var(--space-1) 0;
  transition: color 0.2s ease;
}
.footer-link:hover {
  color: white;
}

.footer-social {
  display: flex;
  gap: var(--space-3);
}

.footer-social__link {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255,255,255,0.6);
  text-decoration: none;
  transition: all 0.2s ease;
  font-size: 1.1rem;
}
.footer-social__link:hover {
  border-color: var(--color-blue-primary);
  color: white;
  background: var(--color-blue-primary);
}

.footer-bottom {
  margin-top: var(--space-16);
  padding-top: var(--space-8);
  border-top: 1px solid var(--color-border-dark);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: var(--space-4);
}

.footer-copy {
  font-size: var(--text-xs);
  color: rgba(255,255,255,0.3);
}
```

### 5.7 Hero Section

```css
.hero-section {
  min-height: 100vh;
  background: var(--gradient-hero);
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
}

/* Padrão de grade sobreposto */
.hero-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 60px 60px;
  pointer-events: none;
}

/* Brilho radial centralizado */
.hero-section::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  height: 800px;
  background: radial-gradient(circle, rgba(0,170,255,0.15) 0%, transparent 70%);
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  padding: var(--section-py-lg) var(--container-px);
}

.hero-phones {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-6);
  flex-wrap: wrap;
  margin: var(--space-8) 0;
}

.hero-phone {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  color: rgba(255,255,255,0.85);
  font-family: var(--font-body);
  font-size: var(--text-md);
  font-weight: var(--weight-medium);
  text-decoration: none;
  transition: color 0.2s ease;
}
.hero-phone:hover {
  color: var(--color-accent-gold-lt);
}

.hero-ctas {
  display: flex;
  gap: var(--space-4);
  justify-content: center;
  flex-wrap: wrap;
  margin-top: var(--space-8);
}

/* Scroll indicator animado */
.hero-scroll-indicator {
  position: absolute;
  bottom: var(--space-8);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
  color: rgba(255,255,255,0.4);
  font-size: var(--text-xs);
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
}
```

### 5.8 Seção "Sobre" / Diferenciais

```css
.diferenciais-section {
  background: var(--color-bg-site);
  padding: var(--section-py) 0;
}

.diferenciais-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: var(--space-6);
  margin-top: var(--space-12);
}

.diferencial-card {
  background: var(--color-bg-white);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-xl);
  padding: var(--space-8);
  position: relative;
  overflow: hidden;
}

.diferencial-card__number {
  font-family: var(--font-display);
  font-size: 5rem;
  font-weight: var(--weight-black);
  color: var(--color-blue-primary);
  opacity: 0.06;
  position: absolute;
  top: -0.5rem;
  right: var(--space-6);
  line-height: 1;
  pointer-events: none;
  user-select: none;
}
```

### 5.9 WhatsApp Botão Flutuante

```css
.whatsapp-float {
  position: fixed;
  bottom: var(--space-8);
  right: var(--space-8);
  z-index: 9999;
  width: 56px;
  height: 56px;
  background: #25D366;
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  box-shadow: 0 4px 20px rgba(37,211,102,0.4);
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.whatsapp-float:hover {
  transform: scale(1.1);
  box-shadow: 0 8px 30px rgba(37,211,102,0.5);
}

/* Pulse ring animado */
.whatsapp-float::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: var(--radius-full);
  background: #25D366;
  animation: whatsapp-pulse 2s ease-out infinite;
}

@keyframes whatsapp-pulse {
  0%   { transform: scale(1); opacity: 0.6; }
  100% { transform: scale(1.8); opacity: 0; }
}
```

### 5.10 Formulário de Contato

```css
.contact-form {
  background: var(--color-bg-white);
  border-radius: var(--radius-2xl);
  padding: var(--space-12);
  box-shadow: var(--shadow-lg);
}

.form-group {
  margin-bottom: var(--space-6);
}

.form-label {
  display: block;
  font-size: var(--text-sm);
  font-weight: var(--weight-medium);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-2);
  letter-spacing: var(--tracking-wide);
}

.form-input {
  width: 100%;
  padding: var(--space-4) var(--space-5);
  background: var(--color-bg-site);
  border: 1.5px solid var(--color-border-light);
  border-radius: var(--radius-lg);
  font-family: var(--font-body);
  font-size: var(--text-base);
  color: var(--color-text-primary);
  transition: all 0.2s ease;
  outline: none;
}

.form-input:focus {
  border-color: var(--color-blue-primary);
  background: white;
  box-shadow: 0 0 0 4px rgba(0, 0, 255, 0.08);
}

.form-input::placeholder {
  color: var(--color-text-muted);
}

.form-textarea {
  min-height: 140px;
  resize: vertical;
}
```

---

## 6. Animações (Motion.dev)

### 6.1 Configurações Padrão de Easing

```typescript
// lib/animations.ts
export const EASING = {
  smooth:    [0.22, 1, 0.36, 1],      // easeOutQuint — entrada suave
  snappy:    [0.4, 0, 0.2, 1],        // Material Design — transições UI
  bounce:    { type: "spring", stiffness: 400, damping: 28 },
  gentle:    { type: "spring", stiffness: 200, damping: 30 },
} as const;

export const DURATION = {
  fast:    0.2,
  normal:  0.4,
  slow:    0.6,
  hero:    0.8,
} as const;
```

### 6.2 Variants Reutilizáveis

```typescript
// lib/variants.ts
import type { Variants } from "motion/react";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }
  }),
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.6, delay }
  }),
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (delay = 0) => ({
    opacity: 1, scale: 1,
    transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }
  }),
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};
```

### 6.3 Parallax Config

```typescript
// Valores de parallax por seção
export const PARALLAX = {
  hero:          { speed: -0.3 },   // Lento = sensação de profundidade
  heroBg:        { speed: 0.4 },    // BG move mais rápido
  sectionTitle:  { speed: -0.1 },   // Sutil nos títulos
  decorElement:  { speed: 0.2 },    // Elementos decorativos
};
```

---

## 7. Responsividade

### Breakpoints (compatível com Bootstrap 5)

```css
/* Extra small: < 576px */
/* Small: ≥ 576px */
/* Medium: ≥ 768px */
/* Large: ≥ 992px */
/* Extra large: ≥ 1200px */
/* XXL: ≥ 1400px */

/* Regras específicas do projeto */
@media (max-width: 767px) {
  .hero-title { font-size: clamp(2rem, 8vw, 3rem); }
  .service-card { padding: var(--space-6); }
  .contact-form { padding: var(--space-8) var(--space-6); }
  .whatsapp-float { bottom: var(--space-6); right: var(--space-6); }
}

@media (max-width: 991px) {
  .site-header__nav { display: none; } /* Substituído pelo menu mobile */
}

/* Reduzir animações para acessibilidade */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 8. Dados Estruturados para SEO

```typescript
// Exemplo de structured data para Google
export const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "name": "Ranicont Escritório Contábil",
  "description": "Serviços contábeis, fiscais, trabalhistas e de assessoria em Avaré – SP",
  "url": "https://ranicont.com.br",
  "telephone": ["+55-14-3731-2017", "+55-14-99610-0465"],
  "email": "ranicont@yahoo.com.br",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Av. Prof. Celso Ferreira da Silva, 786",
    "addressLocality": "Avaré",
    "addressRegion": "SP",
    "addressCountry": "BR"
  },
  "sameAs": [
    "https://www.facebook.com/escritorioranicont",
    "https://www.instagram.com/escritoriocontabilranicont/"
  ]
};
```

---

## 9. Checklist de Design QA

### Visual
- [ ] Contraste de texto mínimo 4.5:1 (WCAG AA) em todas as combinações
- [ ] Fontes carregando antes do first paint (next/font preload)
- [ ] Imagens com `alt` descritivo em todas as tags `<img>` e `<Image>`
- [ ] Focus visible em todos os elementos interativos
- [ ] Hover states definidos para todos os links e botões

### Animação
- [ ] Nenhuma animação ultrapassa 800ms de duração
- [ ] `prefers-reduced-motion` implementado e testado
- [ ] Parallax desativado em mobile (performance)
- [ ] `will-change` removido após animação completar
- [ ] Sem layout shift durante animações (usar `transform`, nunca `top/left`)

### Mobile
- [ ] Touch targets mínimo 44×44px
- [ ] Menu mobile acessível via teclado (ESC para fechar)
- [ ] Formulário usável com teclado virtual
- [ ] WhatsApp float não bloqueia conteúdo importante
- [ ] Testado em Chrome/Safari mobile

### Performance
- [ ] LCP < 2.5s
- [ ] CLS < 0.1
- [ ] FID < 100ms
- [ ] Sem layout shifts causados por fontes (font-display: swap)
- [ ] Imagens hero no formato WebP com dimensões corretas
