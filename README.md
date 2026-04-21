# Gabriel Contreras Jurado — Portfolio

Personal portfolio site for Gabriel Contreras Jurado, Geospatial Data Engineer.

Live at: **https://gcontrerasj.github.io/gc-portfolio/**

## Stack

- [Astro 4](https://astro.build) — static site generator
- [Tailwind CSS](https://tailwindcss.com) — utility-first styling
- [GitHub Actions](https://github.com/features/actions) — CI/CD deploy on push to `main`
- [GitHub Pages](https://pages.github.com) — free static hosting

## Local Development

```bash
npm install
npm run dev
```

Opens at `http://localhost:4321/gc-portfolio/`

## Build

```bash
npm run build    # outputs to dist/
npm run preview  # preview the production build locally
```

## Deploy

Pushing to `main` triggers the GitHub Actions workflow (`.github/workflows/deploy.yml`) which builds the site and deploys it to GitHub Pages automatically.

## Structure

```
src/
├── components/   # One .astro file per page section
├── data/         # Content as TypeScript arrays (projects, stack, experience)
├── layouts/      # Base HTML shell with nav
├── pages/        # index.astro — single page, all sections composed here
└── styles/       # Tailwind + scroll animation CSS
```

## Content

All content is intentionally high-level. Pipeline descriptions do not reveal internal business logic, credentials, or sensitive implementation details.