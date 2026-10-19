# Portfólio — Victor Chinaglia (React + Vite)

Site publicado em https://chinagliadev.github.io

## Desenvolvimento

```bash
npm install
npm run dev
```

## Deploy

A cada `git push` na branch `main`, o GitHub Actions (`.github/workflows/deploy.yml`) roda
`npm run build` e publica a pasta `dist/` no GitHub Pages.
No GitHub: Settings → Pages → Source → **GitHub Actions**.
