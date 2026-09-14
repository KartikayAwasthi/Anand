# Anand Bhasker — Developer Portfolio

A personal portfolio website for **Anand Bhasker**, built with React, Vite and Tailwind CSS.

## Features

- Hero section
- About section
- Skills showcase
- Projects section
- Contact section
- Resume download (PDF, from `public/`)

## Tech stack

- React 19 + Vite
- Tailwind CSS 4
- Framer Motion — animation
- `react-router-dom`, `react-scroll` — navigation/scrolling

## Project structure

```
src/
  components/
    Hero.jsx, About.jsx, Skills.jsx, Projects.jsx, Contact.jsx, Navbar.jsx, Footer.jsx
  App.jsx, main.jsx, index.css
public/
  Anand_Bhasker_Resume.pdf
  logo/Anand-logo.png
```

## Getting started

```bash
npm install
npm run dev
```

| Script | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Production build |
| `npm run lint` | Run ESLint |
