# Portfólio — Victor Chinaglia (React + Vite)

Portfólio convertido de HTML/CSS/JS puro para React, mantendo o mesmo visual e comportamento.

## Como rodar

```bash
npm install
npm run dev      # desenvolvimento
npm run build    # gera a pasta dist/
npm run preview  # testa o build
```

## Estrutura

```
src/
├── assets/        # imagens e fontes
├── components/    # Header, Hero, Sobre, Experiencia, Github, Projetos, Certificados, Rodape...
│   └── modais/    # um componente por modal de projeto
├── css/style.css  # CSS original
├── data/          # dados dos cards (projetos, experiências, certificados, tecnologias)
├── hooks/         # useReveal (animação ao rolar) e useGithub (API do GitHub)
├── utils/         # funções auxiliares do GitHub
├── App.jsx
└── main.jsx
```

Bootstrap, Bootstrap Icons e Chart.js agora vêm do npm (antes eram CDN).
