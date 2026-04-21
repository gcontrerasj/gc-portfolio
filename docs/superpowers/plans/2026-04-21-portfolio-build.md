# Portfolio Build Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and deploy a single-page dark-themed portfolio site for Gabriel Contreras Jurado using Astro 4 + Tailwind CSS, hosted for free on GitHub Pages.

**Architecture:** Single-page Astro 4 static site. All content lives in TypeScript data files under `src/data/`. Seven section components compose into one `index.astro` page. Scroll animations via Intersection Observer. Deployed to GitHub Pages via GitHub Actions on every push to `main`.

**Tech Stack:** Astro 4, `@astrojs/tailwind`, Tailwind CSS 3, TypeScript, GitHub Actions, GitHub Pages.

---

## File Map

| File | Responsibility |
|------|---------------|
| `package.json` | Dependencies and npm scripts |
| `astro.config.mjs` | Astro config — Tailwind integration, GitHub Pages base path |
| `tailwind.config.mjs` | Tailwind content paths |
| `tsconfig.json` | TypeScript config |
| `src/styles/global.css` | Tailwind directives + scroll animation CSS classes |
| `public/favicon.svg` | Site favicon |
| `src/layouts/Layout.astro` | HTML shell — `<head>`, sticky nav, `<slot />` |
| `src/pages/index.astro` | Single page — imports and orders all section components |
| `src/data/projects.ts` | Array of 8 pipeline card objects |
| `src/data/stack.ts` | Tech stack grouped by category |
| `src/data/experience.ts` | Work experience timeline entries |
| `src/components/Nav.astro` | Sticky nav bar with smooth-scroll links + active section highlight |
| `src/components/Hero.astro` | Full-height gradient hero — name, title, tagline, CTAs |
| `src/components/About.astro` | Bio text + language/location badges |
| `src/components/Metrics.astro` | Four stat counters, animate up on scroll enter |
| `src/components/TechStack.astro` | Badge grid, grouped by category |
| `src/components/Projects.astro` | 2-column card grid with coloured top borders |
| `src/components/Experience.astro` | Vertical timeline |
| `src/components/Contact.astro` | Email, LinkedIn, GitHub links |
| `.github/workflows/deploy.yml` | Build and deploy to GitHub Pages on push to `main` |

---

## Task 1: Project Setup

**Files:**
- Create: `package.json`
- Create: `astro.config.mjs`
- Create: `tailwind.config.mjs`
- Create: `tsconfig.json`
- Create: `src/styles/global.css`
- Create: `public/favicon.svg`
- Create: `src/layouts/Layout.astro` (placeholder)
- Create: `src/pages/index.astro` (placeholder)

- [ ] **Step 1: Create `package.json`**

```json
{
  "name": "gc-portfolio",
  "type": "module",
  "version": "1.0.0",
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview"
  },
  "dependencies": {
    "@astrojs/tailwind": "^5.1.3",
    "astro": "^4.15.0",
    "tailwindcss": "^3.4.10"
  }
}
```

- [ ] **Step 2: Install dependencies**

```bash
npm install
```

Expected: `node_modules/` created, no errors.

- [ ] **Step 3: Create `astro.config.mjs`**

```js
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://gcontrerasj.github.io',
  base: '/gc-portfolio',
  integrations: [tailwind()],
  output: 'static',
});
```

> **Note on base path:** If you later add a custom domain (e.g. `gabrielcontreras.dev`), remove the `base` line and set `site` to your domain.

- [ ] **Step 4: Create `tailwind.config.mjs`**

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        brand: '#38bdf8',
      },
    },
  },
  plugins: [],
};
```

- [ ] **Step 5: Create `tsconfig.json`**

```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@data/*": ["src/data/*"],
      "@components/*": ["src/components/*"]
    }
  }
}
```

- [ ] **Step 6: Create `src/styles/global.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}

/* Scroll-triggered fade-up animation */
.anim {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
.anim.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Staggered delay helpers */
.anim-delay-1 { transition-delay: 0.1s; }
.anim-delay-2 { transition-delay: 0.2s; }
.anim-delay-3 { transition-delay: 0.3s; }
.anim-delay-4 { transition-delay: 0.4s; }
.anim-delay-5 { transition-delay: 0.5s; }
.anim-delay-6 { transition-delay: 0.6s; }
```

- [ ] **Step 7: Create `public/favicon.svg`**

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="6" fill="#0f172a"/>
  <text x="16" y="22" text-anchor="middle" font-size="18"
    fill="#38bdf8" font-family="monospace" font-weight="bold">G</text>
</svg>
```

- [ ] **Step 8: Create placeholder `src/layouts/Layout.astro`**

```astro
---
import '../styles/global.css';

interface Props {
  title: string;
}
const { title } = Astro.props;
---
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Gabriel Contreras Jurado — Data Engineer & Geospatial Specialist" />
    <title>{title}</title>
    <link rel="icon" type="image/svg+xml" href={`${import.meta.env.BASE_URL}favicon.svg`} />
  </head>
  <body class="bg-slate-900 text-slate-50 antialiased">
    <slot />
  </body>
</html>
```

- [ ] **Step 9: Create placeholder `src/pages/index.astro`**

```astro
---
import Layout from '../layouts/Layout.astro';
---
<Layout title="Gabriel Contreras Jurado — Data Engineer">
  <main>
    <p class="p-8 text-sky-400 font-mono">Portfolio loading...</p>
  </main>
</Layout>
```

- [ ] **Step 10: Verify dev server starts**

```bash
npm run dev
```

Expected: `http://localhost:4321/gc-portfolio/` shows "Portfolio loading..." in sky blue on dark background. No errors in terminal.

- [ ] **Step 11: Commit**

```bash
git add .
git commit -m "feat: initialise Astro 4 + Tailwind project"
```

---

## Task 2: Data Files

**Files:**
- Create: `src/data/projects.ts`
- Create: `src/data/stack.ts`
- Create: `src/data/experience.ts`

- [ ] **Step 1: Create `src/data/projects.ts`**

```typescript
export interface Project {
  title: string;
  description: string;
  tags: string[];
  accent: 'sky' | 'indigo' | 'lime' | 'orange';
}

export const projects: Project[] = [
  {
    title: 'Land Registry Data Platform',
    description:
      'Ingesting, transforming and publishing UK property ownership, title, and land data at scale — sourced from the HM Land Registry.',
    tags: ['HMLR', 'PostgreSQL', 'AWS S3', 'pandas'],
    accent: 'sky',
  },
  {
    title: 'Airflow Orchestration Platform',
    description:
      'AWS ECS Fargate-hosted Apache Airflow instance managing dozens of scheduled data pipelines, with DAG synchronisation via AWS DataSync and EFS.',
    tags: ['Apache Airflow', 'ECS Fargate', 'Terraform', 'RDS'],
    accent: 'indigo',
  },
  {
    title: 'Geospatial Pipeline Suite',
    description:
      'Raster and vector processing pipelines for property-level spatial analysis, zonal statistics, and automated map layer generation at national scale.',
    tags: ['GDAL', 'GeoPandas', 'Rasterio', 'PostGIS'],
    accent: 'lime',
  },
  {
    title: 'Land Report Generator',
    description:
      'Fully serverless Step Functions workflow: Athena queries land data → Lambda transforms → ECS bundles results → CloudFront delivers signed PDF reports.',
    tags: ['Step Functions', 'Athena', 'Lambda', 'CloudFront'],
    accent: 'orange',
  },
  {
    title: 'Material Information Pipeline',
    description:
      'Multi-stage pipeline processing land and property attributes across six build steps to produce compliance-ready structured data outputs.',
    tags: ['PostgreSQL', 'pandas', 'boto3', 'AWS S3'],
    accent: 'sky',
  },
  {
    title: 'Planning Data Pipeline',
    description:
      'Ingesting and transforming UK planning application data from multiple sources, integrating Google Cloud Storage and AWS for distributed processing.',
    tags: ['polars', 'GCS', 'AWS S3', 'PostgreSQL'],
    accent: 'indigo',
  },
  {
    title: 'GIS Mapping API',
    description:
      'TypeScript/Node.js REST API serving geospatial and land registry data to web mapping clients, deployed on ECS Fargate behind a Network Load Balancer.',
    tags: ['Node.js', 'TypeScript', 'PostgreSQL', 'ECS'],
    accent: 'lime',
  },
  {
    title: 'Vector Tile Generation',
    description:
      'Automated Tippecanoe pipeline containerised in Docker, producing Mapbox-compatible PMTiles from large geospatial datasets stored in S3.',
    tags: ['Tippecanoe', 'Docker', 'Mapbox', 'AWS S3'],
    accent: 'orange',
  },
];
```

- [ ] **Step 2: Create `src/data/stack.ts`**

```typescript
export interface StackCategory {
  name: string;
  color: 'sky' | 'orange' | 'lime' | 'fuchsia';
  tools: string[];
}

export const stack: StackCategory[] = [
  {
    name: 'Data Processing',
    color: 'sky',
    tools: ['Python', 'pandas', 'polars', 'PySpark', 'DuckDB', 'PyArrow'],
  },
  {
    name: 'Cloud / AWS',
    color: 'orange',
    tools: [
      'S3', 'EMR', 'ECS Fargate', 'Lambda', 'Step Functions',
      'Athena', 'Glue', 'RDS', 'CloudFront', 'API Gateway', 'Cognito',
    ],
  },
  {
    name: 'Orchestration',
    color: 'fuchsia',
    tools: ['Apache Airflow', 'AWS Step Functions'],
  },
  {
    name: 'Geospatial',
    color: 'lime',
    tools: [
      'GeoPandas', 'Shapely', 'GDAL', 'Rasterio', 'PostGIS',
      'Apache Sedona', 'Tippecanoe', 'Mapbox', 'QGIS', 'ArcGIS', 'FME', 'GeoServer',
    ],
  },
  {
    name: 'Databases',
    color: 'sky',
    tools: ['PostgreSQL', 'DuckDB', 'SQLite', 'SQLAlchemy'],
  },
  {
    name: 'IaC / DevOps',
    color: 'fuchsia',
    tools: ['Terraform', 'Docker', 'GitHub Actions', 'ECR'],
  },
  {
    name: 'Backend',
    color: 'sky',
    tools: ['Node.js', 'TypeScript', 'FastAPI', 'Express'],
  },
];
```

- [ ] **Step 3: Create `src/data/experience.ts`**

```typescript
export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  current: boolean;
  bullets: string[];
}

export const experience: ExperienceEntry[] = [
  {
    role: 'Geospatial Data Engineer',
    company: 'Tytl',
    period: 'Apr 2021 – Present',
    current: true,
    bullets: [
      'Built and maintained 100+ data pipelines across AWS EMR, ECS Fargate, Athena, Glue, and Apache Airflow',
      'Modernised geospatial pipelines with Apache Sedona and PySpark, significantly reducing processing times',
      'Architected cloud infrastructure with Terraform; managed Docker deployments on ECS Fargate',
    ],
  },
  {
    role: 'Database Technician — Endangered Archaeology',
    company: 'University of Oxford (EAMENA)',
    period: 'Jul 2020 – Feb 2021',
    current: false,
    bullets: [
      'Developed database solutions on the Arches OSS platform using PostgreSQL/PostGIS and JavaScript',
      'Provided GIS and IT support with GeoServer, QGIS, and PostGIS',
    ],
  },
  {
    role: 'Data Asset Technician',
    company: 'SSE plc',
    period: 'Mar 2020 – Jul 2020',
    current: false,
    bullets: [
      'Maintained GIS data quality standards and managed database integration between legacy and new systems',
    ],
  },
  {
    role: 'GIS Analyst / Technician',
    company: 'Self-employed',
    period: 'Jun 2018 – Jul 2019',
    current: false,
    bullets: [
      'Delivered geospatial consultancy — ArcPy automation, QGIS, FME, and geospatial strategy for an agricultural cooperative',
    ],
  },
  {
    role: 'Mapping Technician',
    company: 'Verisk Analytics',
    period: 'Jun 2017 – Jun 2018',
    current: false,
    bullets: [
      'Contributed to the UK Building high-profile project — land change analysis, 3D GIS modelling, and database import via QGIS and FME',
    ],
  },
  {
    role: 'Senior GIS Technician / QA',
    company: 'Cyient (Rural Payments Agency)',
    period: 'May 2014 – Jun 2017',
    current: false,
    bullets: [
      'Led team strategy and methodology; trained new staff on ArcGIS and eSpatial; achieved 99% QA pass rate',
    ],
  },
];
```

- [ ] **Step 4: Verify TypeScript compiles cleanly**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 5: Commit**

```bash
git add src/data/
git commit -m "feat: add content data files (projects, stack, experience)"
```

---

## Task 3: Base Layout & Sticky Nav

**Files:**
- Modify: `src/layouts/Layout.astro`
- Create: `src/components/Nav.astro`

- [ ] **Step 1: Create `src/components/Nav.astro`**

```astro
---
const links = [
  { label: 'About',      href: '#about' },
  { label: 'Stack',      href: '#stack' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
];
---

<nav id="nav" class="fixed top-0 inset-x-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 transition-all">
  <div class="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
    <a href="#hero" class="font-mono text-sky-400 font-bold tracking-tight hover:text-sky-300 transition-colors">
      gc<span class="text-slate-500">.</span>dev
    </a>
    <ul class="hidden md:flex gap-6">
      {links.map(({ label, href }) => (
        <li>
          <a
            href={href}
            class="nav-link text-sm text-slate-400 hover:text-slate-100 transition-colors"
            data-section={href.replace('#', '')}
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  </div>
</nav>

<script>
  const navLinks = document.querySelectorAll<HTMLAnchorElement>('.nav-link');
  const sections = document.querySelectorAll<HTMLElement>('section[id]');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            const active = link.dataset.section === entry.target.id;
            link.classList.toggle('text-sky-400', active);
            link.classList.toggle('text-slate-400', !active);
          });
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );

  sections.forEach((section) => observer.observe(section));
</script>
```

- [ ] **Step 2: Update `src/layouts/Layout.astro` to include Nav and scroll animation observer**

Replace the entire file with:

```astro
---
import '../styles/global.css';
import Nav from '../components/Nav.astro';

interface Props {
  title: string;
}
const { title } = Astro.props;
---
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Gabriel Contreras Jurado — Data Engineer & Geospatial Specialist" />
    <title>{title}</title>
    <link rel="icon" type="image/svg+xml" href={`${import.meta.env.BASE_URL}favicon.svg`} />
  </head>
  <body class="bg-slate-900 text-slate-50 antialiased">
    <Nav />
    <slot />
    <script>
      // Scroll fade-in animations
      const animEls = document.querySelectorAll('.anim');
      const animObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              animObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      animEls.forEach((el) => animObserver.observe(el));
    </script>
  </body>
</html>
```

- [ ] **Step 3: Verify nav renders**

```bash
npm run dev
```

Open `http://localhost:4321/gc-portfolio/` — should see dark sticky nav bar with `gc.dev` logo and nav links. No console errors.

- [ ] **Step 4: Commit**

```bash
git add src/layouts/Layout.astro src/components/Nav.astro
git commit -m "feat: add base layout and sticky nav with scroll spy"
```

---

## Task 4: Hero Section

**Files:**
- Create: `src/components/Hero.astro`

- [ ] **Step 1: Create `src/components/Hero.astro`**

```astro
---
---
<section
  id="hero"
  class="min-h-screen flex items-center pt-14"
  style="background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 60%, #0c4a6e 100%);"
>
  <div class="max-w-5xl mx-auto px-6 py-24">
    <p class="font-mono text-sky-400 text-sm tracking-widest uppercase mb-4 anim">
      Data Engineer · Geospatial Specialist
    </p>
    <h1 class="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-50 leading-none mb-6 anim anim-delay-1">
      Gabriel<br />
      <span class="text-transparent bg-clip-text"
        style="background-image: linear-gradient(90deg, #38bdf8 0%, #818cf8 100%);">
        Contreras
      </span>
    </h1>
    <p class="text-lg text-slate-400 max-w-xl leading-relaxed mb-10 anim anim-delay-2">
      Building scalable geospatial pipelines, cloud-native ETL systems,
      and data infrastructure on AWS — turning raw land and property data
      into high-impact insights.
    </p>
    <div class="flex gap-4 flex-wrap anim anim-delay-3">
      <a
        href="#projects"
        class="px-6 py-3 bg-sky-400 text-slate-900 font-bold rounded-lg hover:bg-sky-300 transition-colors text-sm"
      >
        View Projects
      </a>
      <a
        href="#contact"
        class="px-6 py-3 border border-sky-400 text-sky-400 font-semibold rounded-lg hover:bg-sky-400/10 transition-colors text-sm"
      >
        Contact Me
      </a>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Add Hero to `src/pages/index.astro`**

```astro
---
import Layout from '../layouts/Layout.astro';
import Hero from '../components/Hero.astro';
---
<Layout title="Gabriel Contreras Jurado — Data Engineer">
  <main>
    <Hero />
  </main>
</Layout>
```

- [ ] **Step 3: Verify in browser**

```bash
npm run dev
```

Open `http://localhost:4321/gc-portfolio/` — full-height dark gradient hero with name, gradient "Contreras" text, tagline, and two buttons. Elements should fade up on page load.

- [ ] **Step 4: Commit**

```bash
git add src/components/Hero.astro src/pages/index.astro
git commit -m "feat: add Hero section"
```

---

## Task 5: About Section

**Files:**
- Create: `src/components/About.astro`
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Create `src/components/About.astro`**

```astro
---
---
<section id="about" class="py-24 border-b border-slate-800">
  <div class="max-w-5xl mx-auto px-6">
    <h2 class="font-mono text-sky-400 text-sm tracking-widest uppercase mb-10 anim">
      About Me
    </h2>
    <div class="grid md:grid-cols-2 gap-12 items-start">
      <div class="anim anim-delay-1">
        <p class="text-slate-300 text-lg leading-relaxed mb-6">
          Geospatial Data Engineer with 10+ years of experience — from traditional
          GIS fieldwork to modern cloud-scale data engineering. I specialise in
          automating geospatial pipelines, big data processing, and building
          AWS-based infrastructure that turns raw land and property data into
          high-impact insights.
        </p>
        <p class="text-slate-400 leading-relaxed">
          I'm committed to continuous learning and building efficient, scalable
          GIS solutions for decision-makers and stakeholders. Fluent in English
          and Spanish, I've worked across the UK and Europe.
        </p>
      </div>
      <div class="anim anim-delay-2 flex flex-col gap-4">
        <div class="bg-slate-800 rounded-xl p-6 border border-slate-700">
          <p class="text-xs font-mono text-slate-500 uppercase tracking-widest mb-3">Location</p>
          <p class="text-slate-200">🇬🇧 United Kingdom &nbsp;/&nbsp; 🇪🇸 Spain</p>
        </div>
        <div class="bg-slate-800 rounded-xl p-6 border border-slate-700">
          <p class="text-xs font-mono text-slate-500 uppercase tracking-widest mb-3">Languages</p>
          <div class="flex gap-2 flex-wrap">
            <span class="px-3 py-1 bg-sky-400/10 border border-sky-400/30 text-sky-300 rounded-full text-sm">English — Full Professional</span>
            <span class="px-3 py-1 bg-sky-400/10 border border-sky-400/30 text-sky-300 rounded-full text-sm">Spanish — Native</span>
          </div>
        </div>
        <div class="bg-slate-800 rounded-xl p-6 border border-slate-700">
          <p class="text-xs font-mono text-slate-500 uppercase tracking-widest mb-3">Focus Areas</p>
          <div class="flex gap-2 flex-wrap">
            {['Geospatial Pipelines', 'Cloud ETL', 'AWS Infrastructure', 'Big Data'].map((tag) => (
              <span class="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Add About to `src/pages/index.astro`**

```astro
---
import Layout from '../layouts/Layout.astro';
import Hero from '../components/Hero.astro';
import About from '../components/About.astro';
---
<Layout title="Gabriel Contreras Jurado — Data Engineer">
  <main>
    <Hero />
    <About />
  </main>
</Layout>
```

- [ ] **Step 3: Verify in browser** — scroll past hero, About section appears with bio and info cards, fades in on scroll.

- [ ] **Step 4: Commit**

```bash
git add src/components/About.astro src/pages/index.astro
git commit -m "feat: add About section"
```

---

## Task 6: Metrics Section

**Files:**
- Create: `src/components/Metrics.astro`
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Create `src/components/Metrics.astro`**

```astro
---
const stats = [
  { value: 100, suffix: '+', label: 'Pipelines Built' },
  { value: 10,  suffix: '+', label: 'Years Experience' },
  { value: 15,  suffix: '+', label: 'AWS Services' },
  { value: 99,  suffix: '%', label: 'QA Pass Rate' },
];
---

<section class="py-16 border-b border-slate-800"
  style="background: linear-gradient(180deg, #0f172a 0%, #0c1a2e 100%);">
  <div class="max-w-5xl mx-auto px-6">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map(({ value, suffix, label }, i) => (
        <div class={`text-center anim anim-delay-${i + 1}`}>
          <div class="text-4xl md:text-5xl font-extrabold text-sky-400 mb-2">
            <span class="counter" data-target={value}>0</span>{suffix}
          </div>
          <p class="text-slate-400 text-sm">{label}</p>
        </div>
      ))}
    </div>
  </div>
</section>

<script>
  function animateCounter(el: HTMLElement) {
    const target = parseInt(el.dataset.target ?? '0', 10);
    const duration = 1500;
    const start = performance.now();

    function step(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      el.textContent = Math.floor(eased * target).toString();
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }

  const counterEls = document.querySelectorAll<HTMLElement>('.counter');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target as HTMLElement);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counterEls.forEach((el) => observer.observe(el));
</script>
```

- [ ] **Step 2: Add Metrics to `src/pages/index.astro`**

```astro
---
import Layout from '../layouts/Layout.astro';
import Hero from '../components/Hero.astro';
import About from '../components/About.astro';
import Metrics from '../components/Metrics.astro';
---
<Layout title="Gabriel Contreras Jurado — Data Engineer">
  <main>
    <Hero />
    <About />
    <Metrics />
  </main>
</Layout>
```

- [ ] **Step 3: Verify in browser** — scroll to Metrics, four numbers count up from 0. Verify counts reach correct values: 100+, 10+, 15+, 99%.

- [ ] **Step 4: Commit**

```bash
git add src/components/Metrics.astro src/pages/index.astro
git commit -m "feat: add Metrics section with animated counters"
```

---

## Task 7: Tech Stack Section

**Files:**
- Create: `src/components/TechStack.astro`
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Create `src/components/TechStack.astro`**

```astro
---
import { stack } from '../data/stack';

const colorMap: Record<string, string> = {
  sky:     'bg-sky-400/10 border-sky-400/30 text-sky-300',
  orange:  'bg-orange-400/10 border-orange-400/30 text-orange-300',
  lime:    'bg-lime-400/10 border-lime-400/30 text-lime-300',
  fuchsia: 'bg-fuchsia-400/10 border-fuchsia-400/30 text-fuchsia-300',
};
---

<section id="stack" class="py-24 border-b border-slate-800">
  <div class="max-w-5xl mx-auto px-6">
    <h2 class="font-mono text-sky-400 text-sm tracking-widest uppercase mb-2 anim">
      Tech Stack
    </h2>
    <p class="text-slate-400 mb-12 anim anim-delay-1">
      Tools and technologies I work with daily.
    </p>

    <div class="flex flex-col gap-8">
      {stack.map(({ name, color, tools }, i) => (
        <div class={`anim anim-delay-${Math.min(i + 1, 6)}`}>
          <p class="text-xs font-mono text-slate-500 uppercase tracking-widest mb-3">{name}</p>
          <div class="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span class={`px-3 py-1.5 rounded-lg border text-sm font-medium ${colorMap[color]}`}>
                {tool}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
```

- [ ] **Step 2: Add TechStack to `src/pages/index.astro`**

```astro
---
import Layout from '../layouts/Layout.astro';
import Hero from '../components/Hero.astro';
import About from '../components/About.astro';
import Metrics from '../components/Metrics.astro';
import TechStack from '../components/TechStack.astro';
---
<Layout title="Gabriel Contreras Jurado — Data Engineer">
  <main>
    <Hero />
    <About />
    <Metrics />
    <TechStack />
  </main>
</Layout>
```

- [ ] **Step 3: Verify in browser** — Tech Stack section shows all 7 categories with colour-coded pill badges. Each category row fades in on scroll.

- [ ] **Step 4: Commit**

```bash
git add src/components/TechStack.astro src/pages/index.astro
git commit -m "feat: add Tech Stack section"
```

---

## Task 8: Projects Section

**Files:**
- Create: `src/components/Projects.astro`
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Create `src/components/Projects.astro`**

```astro
---
import { projects } from '../data/projects';

const accentBorder: Record<string, string> = {
  sky:    'border-t-sky-400',
  indigo: 'border-t-indigo-400',
  lime:   'border-t-lime-400',
  orange: 'border-t-orange-400',
};

const accentTag: Record<string, string> = {
  sky:    'bg-sky-400/10 text-sky-300',
  indigo: 'bg-indigo-400/10 text-indigo-300',
  lime:   'bg-lime-400/10 text-lime-300',
  orange: 'bg-orange-400/10 text-orange-300',
};
---

<section id="projects" class="py-24 border-b border-slate-800">
  <div class="max-w-5xl mx-auto px-6">
    <h2 class="font-mono text-sky-400 text-sm tracking-widest uppercase mb-2 anim">
      Pipelines & Projects
    </h2>
    <p class="text-slate-400 mb-12 anim anim-delay-1">
      A selection of data systems designed, built, and maintained at scale.
      Descriptions are intentionally high-level to respect data confidentiality.
    </p>

    <div class="grid md:grid-cols-2 gap-6">
      {projects.map(({ title, description, tags, accent }, i) => (
        <div
          class={`bg-slate-800 rounded-xl p-6 border-t-2 border border-slate-700 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/30 transition-all duration-200 anim anim-delay-${Math.min(i + 1, 6)} ${accentBorder[accent]}`}
        >
          <h3 class="font-semibold text-slate-100 mb-2">{title}</h3>
          <p class="text-slate-400 text-sm leading-relaxed mb-4">{description}</p>
          <div class="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span class={`px-2 py-1 rounded text-xs font-medium ${accentTag[accent]}`}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
```

- [ ] **Step 2: Add Projects to `src/pages/index.astro`**

```astro
---
import Layout from '../layouts/Layout.astro';
import Hero from '../components/Hero.astro';
import About from '../components/About.astro';
import Metrics from '../components/Metrics.astro';
import TechStack from '../components/TechStack.astro';
import Projects from '../components/Projects.astro';
---
<Layout title="Gabriel Contreras Jurado — Data Engineer">
  <main>
    <Hero />
    <About />
    <Metrics />
    <TechStack />
    <Projects />
  </main>
</Layout>
```

- [ ] **Step 3: Verify in browser** — 8 project cards in a 2-column grid. Each card has a coloured top border. Hover should lift the card slightly. Cards fade in staggered on scroll.

- [ ] **Step 4: Commit**

```bash
git add src/components/Projects.astro src/pages/index.astro
git commit -m "feat: add Projects section with 8 pipeline cards"
```

---

## Task 9: Experience Section

**Files:**
- Create: `src/components/Experience.astro`
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Create `src/components/Experience.astro`**

```astro
---
import { experience } from '../data/experience';
---

<section id="experience" class="py-24 border-b border-slate-800">
  <div class="max-w-5xl mx-auto px-6">
    <h2 class="font-mono text-sky-400 text-sm tracking-widest uppercase mb-2 anim">
      Experience
    </h2>
    <p class="text-slate-400 mb-12 anim anim-delay-1">10+ years across GIS, data engineering, and cloud infrastructure.</p>

    <div class="relative">
      <!-- Timeline vertical line -->
      <div class="absolute left-2.5 top-2 bottom-0 w-px bg-slate-700"></div>

      <div class="flex flex-col gap-10">
        {experience.map(({ role, company, period, current, bullets }, i) => (
          <div class={`pl-10 relative anim anim-delay-${Math.min(i + 1, 6)}`}>
            <!-- Timeline dot -->
            <div class={`absolute left-0 top-1.5 w-5 h-5 rounded-full border-2 flex items-center justify-center
              ${current
                ? 'bg-sky-400 border-sky-400'
                : 'bg-slate-900 border-slate-600'}`}>
            </div>

            <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-2 gap-1">
              <h3 class={`font-semibold ${current ? 'text-slate-100' : 'text-slate-300'}`}>
                {role}
              </h3>
              <span class={`text-sm font-mono ${current ? 'text-sky-400' : 'text-slate-500'}`}>
                {period}
              </span>
            </div>
            <p class="text-slate-400 text-sm mb-3">{company}</p>
            <ul class="flex flex-col gap-1.5">
              {bullets.map((bullet) => (
                <li class="text-slate-400 text-sm flex gap-2">
                  <span class="text-slate-600 mt-1 flex-shrink-0">›</span>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Add Experience to `src/pages/index.astro`**

```astro
---
import Layout from '../layouts/Layout.astro';
import Hero from '../components/Hero.astro';
import About from '../components/About.astro';
import Metrics from '../components/Metrics.astro';
import TechStack from '../components/TechStack.astro';
import Projects from '../components/Projects.astro';
import Experience from '../components/Experience.astro';
---
<Layout title="Gabriel Contreras Jurado — Data Engineer">
  <main>
    <Hero />
    <About />
    <Metrics />
    <TechStack />
    <Projects />
    <Experience />
  </main>
</Layout>
```

- [ ] **Step 3: Verify in browser** — vertical timeline with Tytl entry highlighted in sky blue (current role), older entries in muted tones. Bullet points visible for each role.

- [ ] **Step 4: Commit**

```bash
git add src/components/Experience.astro src/pages/index.astro
git commit -m "feat: add Experience timeline section"
```

---

## Task 10: Contact Section & Final index.astro

**Files:**
- Create: `src/components/Contact.astro`
- Modify: `src/pages/index.astro` (final version)

- [ ] **Step 1: Create `src/components/Contact.astro`**

```astro
---
const links = [
  {
    label: 'Email',
    href: 'mailto:gabriel.contrerasj@gmail.com',
    display: 'gabriel.contrerasj@gmail.com',
    icon: '✉',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/gabriel-contreras-jurado-geospatial-specialist',
    display: 'linkedin.com/in/gabriel-contreras-jurado',
    icon: '⟶',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/gcontrerasj',
    display: 'github.com/gcontrerasj',
    icon: '⟶',
  },
];
---

<section id="contact" class="py-24">
  <div class="max-w-5xl mx-auto px-6">
    <h2 class="font-mono text-sky-400 text-sm tracking-widest uppercase mb-2 anim">
      Get in Touch
    </h2>
    <p class="text-slate-400 mb-12 max-w-lg anim anim-delay-1">
      Open to new opportunities, freelance projects, and geospatial consultancy.
      Feel free to reach out.
    </p>

    <div class="flex flex-col gap-4 md:flex-row md:gap-6">
      {links.map(({ label, href, display, icon }, i) => (
        <a
          href={href}
          target={href.startsWith('mailto') ? undefined : '_blank'}
          rel="noopener noreferrer"
          class={`flex items-center gap-4 bg-slate-800 border border-slate-700 rounded-xl px-6 py-4 hover:border-sky-400/50 hover:bg-slate-700 transition-all group anim anim-delay-${i + 2}`}
        >
          <span class="text-sky-400 text-lg">{icon}</span>
          <div>
            <p class="text-xs font-mono text-slate-500 uppercase tracking-widest">{label}</p>
            <p class="text-slate-300 text-sm group-hover:text-sky-300 transition-colors">{display}</p>
          </div>
        </a>
      ))}
    </div>

    <p class="text-slate-600 text-xs mt-16 font-mono">
      © {new Date().getFullYear()} Gabriel Contreras Jurado. Built with Astro & Tailwind CSS.
    </p>
  </div>
</section>
```

- [ ] **Step 2: Write final `src/pages/index.astro`**

```astro
---
import Layout from '../layouts/Layout.astro';
import Hero from '../components/Hero.astro';
import About from '../components/About.astro';
import Metrics from '../components/Metrics.astro';
import TechStack from '../components/TechStack.astro';
import Projects from '../components/Projects.astro';
import Experience from '../components/Experience.astro';
import Contact from '../components/Contact.astro';
---
<Layout title="Gabriel Contreras Jurado — Data Engineer">
  <main>
    <Hero />
    <About />
    <Metrics />
    <TechStack />
    <Projects />
    <Experience />
    <Contact />
  </main>
</Layout>
```

- [ ] **Step 3: Full end-to-end browser review**

```bash
npm run dev
```

Walk through the full page and verify each section:
1. Hero — dark gradient, name with gradient text, two CTA buttons
2. About — bio, location + language badges, focus area tags
3. Metrics — four counters animate up: 100+, 10+, 15+, 99%
4. Tech Stack — 7 categories with colour-coded badges
5. Projects — 8 cards in 2-column grid, hover lift effect
6. Experience — vertical timeline, Tytl highlighted in sky blue
7. Contact — three link cards for Email, LinkedIn, GitHub

- [ ] **Step 4: Run production build and verify no errors**

```bash
npm run build
```

Expected: `dist/` folder created, no build errors. Then:

```bash
npm run preview
```

Open `http://localhost:4321/gc-portfolio/` and verify the built site looks identical to dev.

- [ ] **Step 5: Commit**

```bash
git add src/components/Contact.astro src/pages/index.astro
git commit -m "feat: add Contact section and complete all page sections"
```

---

## Task 11: GitHub Actions Deploy to GitHub Pages

**Files:**
- Create: `.github/workflows/deploy.yml`

- [ ] **Step 1: Enable GitHub Pages in repo settings**

In your GitHub repo (`https://github.com/gcontrerasj/gc-portfolio`):
1. Go to **Settings → Pages**
2. Under **Source**, select **GitHub Actions**
3. Save

- [ ] **Step 2: Create `.github/workflows/deploy.yml`**

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - run: npm ci

      - run: npm run build

      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist/

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/configure-pages@v4

      - uses: actions/deploy-pages@v4
        id: deployment
```

- [ ] **Step 3: Add `.gitignore` if not already present**

```bash
cat .gitignore 2>/dev/null || echo "dist/\nnode_modules/\n.env\n.DS_Store\n.superpowers/" > .gitignore
```

- [ ] **Step 4: Commit and push to main**

```bash
git add .github/workflows/deploy.yml .gitignore
git commit -m "feat: add GitHub Actions deploy workflow for GitHub Pages"
git push origin master:main
```

> **Note:** The GitHub repo's default branch may be `main` or `master`. If `main` doesn't exist yet, create it: `git checkout -b main && git push -u origin main`.

- [ ] **Step 5: Verify deployment**

1. Go to `https://github.com/gcontrerasj/gc-portfolio/actions`
2. Watch the **Deploy to GitHub Pages** workflow run
3. When it completes (green ✓), open `https://gcontrerasj.github.io/gc-portfolio/`
4. Verify the full portfolio loads correctly in the browser — all 7 sections, nav links, animated counters, hover effects on project cards

---

## Post-Deploy: Optional Custom Domain

If you want a domain like `gabrielcontreras.dev` instead of the GitHub Pages subdomain:

1. Buy a domain from Namecheap, Cloudflare Registrar, etc.
2. Add a `CNAME` file to `public/` with just the domain: `gabrielcontreras.dev`
3. In `astro.config.mjs`, change `site` to `https://gabrielcontreras.dev` and **remove** the `base` line entirely
4. Configure DNS: add a CNAME record pointing your domain to `gcontrerasj.github.io`
5. In GitHub Settings → Pages, add the custom domain and enable "Enforce HTTPS"