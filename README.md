# SvelteKit Landing Page - Hublast

Landing page completa recriada em SvelteKit com animações GSAP.

## Estrutura

```
sveltekit-landing/
├── src/
│   ├── lib/          # Componentes reutilizáveis
│   │   ├── About.svelte
│   │   ├── Footer.svelte
│   │   ├── Header.svelte
│   │   ├── Logo.svelte
│   │   ├── Main.svelte
│   │   ├── ParallaxText.svelte
│   │   └── Projects.svelte
│   ├── routes/       # Rotas do SvelteKit
│   │   ├── +layout.svelte
│   │   └── +page.svelte
│   ├── app.css       # Estilos globais
│   └── app.html      # Template HTML
├── static/           # Arquivos estáticos
│   ├── manifest.json
│   └── favicon.png
└── package.json
```

## Desenvolvimento

```bash
npm install
npm run dev
```

Acesse em `http://localhost:5002`

## Build

```bash
npm run build
npm run preview
```

## Docker

### Build e Run

```bash
docker build -t sveltekit-landing .
docker run -p 5002:5002 sveltekit-landing
```

### Docker Compose

```bash
docker-compose up -d
```

Acesse em `http://localhost:5002`

## Tecnologias

- SvelteKit 2.0
- Svelte 5
- GSAP 3 (ScrollTrigger, ScrollToPlugin)
- Tailwind CSS 4
- TypeScript

