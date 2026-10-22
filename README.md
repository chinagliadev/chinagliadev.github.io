# Portfólio — Victor Chinaglia
**Status:** Projeto finalizado

> No final da página, tem uma explicação breve das futuras implementações.

O Portfólio é o site pessoal onde apresento quem sou, minhas habilidades e os projetos que desenvolvi ao longo da minha jornada como desenvolvedor. A aplicação reúne, em uma única página, as informações de contato, as tecnologias que utilizo e os trabalhos realizados.

Cada projeto é apresentado em um **card** e, ao clicar nele, é exibido um **modal** com a descrição completa, as tecnologias utilizadas e o link para o repositório no GitHub, facilitando a visualização sem sair da página.

A proposta do projeto é ser um cartão de visitas digital: simples, rápido e organizado, mostrando de forma clara o que já foi construído e as tecnologias dominadas.

> Projeto desenvolvido apenas com **Front-End**, portanto a documentação é focada na interface, na estrutura de componentes e no deploy automático no **GitHub Pages**.

###### Desenvolvedor

**Victor Chinaglia** — [chinagliadev.github.io](https://chinagliadev.github.io/)

## Front End

**Tecnologias:** React, Vite, JavaScript, HTML5, CSS3 e GitHub Pages

### Início

Ao acessar o site, a primeira seção apresentada é a **tela inicial**, com uma breve apresentação pessoal e os principais pontos de navegação da página.

### Sobre

Na seção **Sobre**, o visitante encontra um resumo da minha trajetória, formação e objetivos como desenvolvedor.

### Habilidades

As **tecnologias e ferramentas** que utilizo são exibidas em uma seção própria, facilitando a visualização do meu conhecimento técnico.

### Projetos

Os projetos são apresentados em **cards**, contendo as principais informações, como **título**, **descrição resumida** e **tecnologias utilizadas**.

Os dados de cada projeto ficam organizados em um arquivo `projetos.js`, que guarda um array com as informações de cada item (modal, classe, tecnologias, título e descrição).

### Modal dos projetos

Ao clicar em um card, é exibido um **modal** com a descrição completa do projeto, as tecnologias utilizadas e o link para o repositório no **GitHub**.

Cada projeto possui seu próprio componente dentro de `components/modais` (por exemplo, `ModalControleFinanceiro`), registrado no `App.jsx`. Dessa forma, adicionar um novo projeto é simples e não afeta os demais.

### Contato

A seção de **contato** reúne os links para minhas redes e para o GitHub, permitindo que recrutadores e interessados falem comigo de forma rápida.

## Deploy

> O site é publicado automaticamente no GitHub Pages a cada atualização da branch `main`.

A cada `git push` na branch `main`, o **GitHub Actions** (`.github/workflows/deploy.yml`) executa o `npm run build` e publica a pasta `dist/` no GitHub Pages.

Para ativar, no GitHub acesse: **Settings → Pages → Source → GitHub Actions**.

---

## Tecnologias e versões

| Tecnologia | Versão |
|---|---|
| React | conforme `package.json` |
| Vite | conforme `package.json` |
| Node.js | 18+ |
| npm | gerenciado pelo Node.js |

## Pré-requisitos de uso

Antes de começar, você precisa ter instalado:

- [Node.js 18+](https://nodejs.org/)
- Git

## Configuração

### 1. Clone o repositório

```bash
git clone https://github.com/chinagliadev/chinagliadev.github.io.git
cd chinagliadev.github.io
```

### 2. Instale as dependências

```bash
npm install
```

## Introdução de uso

### Rodando em modo de desenvolvimento

```bash
npm run dev
```

### Gerando a versão de produção

```bash
npm run build
```

### Visualizando a versão de produção localmente

```bash
npm run preview
```

### A aplicação sobe em: **http://localhost:5173**

---

## Estrutura do projeto

O projeto segue a estrutura padrão do **Vite** com **React**, separando as responsabilidades por pastas e componentes.

```
chinagliadev.github.io
├── .github/workflows
│   └── deploy.yml        # Deploy automático no GitHub Pages
├── public                # Arquivos estáticos
├── src
│   ├── components
│   │   └── modais        # Um modal por projeto (ModalControleFinanceiro...)
│   ├── data
│   │   └── projetos.js   # Array com os dados dos projetos
│   ├── App.jsx           # Componente principal e registro dos modais
│   └── main.jsx          # Ponto de entrada da aplicação
├── index.html
├── package.json
└── vite.config.js
```

> Os nomes das pastas acima são um exemplo. Ajuste conforme a estrutura real do seu projeto.

---

## Futuras implementações

- Adicionar novos projetos ao portfólio.
- Melhorar a responsividade em telas menores.
- Incluir uma seção de certificados e formações.
- Adicionar suporte a modo claro e escuro.
