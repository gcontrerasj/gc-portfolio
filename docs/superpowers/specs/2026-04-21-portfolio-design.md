# Portfolio Design Spec — Gabriel Contreras Jurado

**Date:** 2026-04-21  
**Status:** Approved

---

## Overview

A single-page, publicly accessible professional portfolio for Gabriel Contreras Jurado, a Geospatial Data Engineer with 10+ years of experience. The portfolio showcases pipelines, tools, and cloud infrastructure built at Tytl/Addland without revealing sensitive implementation details, credentials, or business logic.

**Target audiences:** Recruiters, technical leads, potential clients/freelance engagements.

---

## Architecture

- **Framework:** Astro 4.x (static site generator)
- **Styling:** Tailwind CSS
- **Output:** Static HTML — no server, no database
- **Hosting:** GitHub Pages (free, HTTPS, custom domain support)
- **CI/CD:** GitHub Actions — build and deploy on every push to `main` via the official `astro.yml` action
- **Animations:** CSS `@keyframes` + Intersection Observer for scroll fade-ins; metric counters animate up on viewport enter; no heavy JS animation libraries

---

## Visual Design

- **Style:** Dark + Polished — dark background with premium feel, gradient backgrounds, subtle glow effects, stat highlights
- **Color palette:**
  - Background: `#0f172a` (slate-900)
  - Surface: `#1e293b` (slate-800)
  - Border: `#334155` (slate-700)
  - Primary accent: `#38bdf8` (sky-400)
  - Secondary accent: `#818cf8` (indigo-400)
  - Data Processing badges: `#38bdf8`
  - AWS badges: `#f97316` (orange-500)
  - Geospatial badges: `#a3e635` (lime-400)
  - Orchestration/IaC badges: `#e879f9` (fuchsia-400)
  - Text primary: `#f8fafc` (slate-50)
  - Text muted: `#94a3b8` (slate-400)
- **Typography:** System font stack for body; `font-mono` for code labels and nav logo
- **Hero gradient:** `linear-gradient(135deg, #0f172a 0%, #1e3a5f 60%, #0c4a6e 100%)`

---

## Page Structure (single scroll)

All sections live on one `index.astro` page with a sticky nav that highlights the active section on scroll.

### ① Hero

Full-height opening section with hero gradient background.

- Name: **Gabriel Contreras Jurado**
- Title: **Data Engineer · Geospatial Specialist**
- Tagline: "Building scalable geospatial pipelines, cloud-native ETL systems, and data infrastructure on AWS."
- Two CTAs: `View Projects` (primary, filled) → scrolls to Projects section; `Contact Me` (outlined) → scrolls to Contact

### ② About Me

Two-column layout: bio text left, optional avatar placeholder right.

**Bio text:**
> Geospatial Data Engineer with 10+ years of experience — from traditional GIS fieldwork to modern cloud-scale data engineering. I specialise in automating geospatial pipelines, big data processing, and building AWS-based infrastructure that turns raw land and property data into high-impact insights.

- Flags/language tags: 🇬🇧 UK / 🇪🇸 Spain · English · Spanish

### ③ Impact Metrics

Four animated stat counters in a horizontal strip, count up on scroll into view:

| Stat | Value |
|------|-------|
| Pipelines Built & Maintained | 100+ |
| Years of Experience | 10+ |
| AWS Services Used | 15+ |
| QA Pass Rate | 99% |

### ④ Tech Stack

Badge grid, organised by category. Each badge is a pill with the tool name. Categories are labelled in small-caps above their badge row.

| Category | Tools |
|----------|-------|
| Data Processing | Python, pandas, polars, PySpark, DuckDB, PyArrow |
| Cloud / AWS | S3, EMR, ECS Fargate, Lambda, Step Functions, Athena, Glue, RDS, CloudFront, API Gateway, Cognito |
| Orchestration | Apache Airflow, AWS Step Functions |
| Geospatial | GeoPandas, Shapely, GDAL, Rasterio, Rasterstats, Fiona, PostGIS, Apache Sedona, Tippecanoe, Mapbox, QGIS, ArcGIS, FME, GeoServer, OpenLayers |
| Databases | PostgreSQL, DuckDB, SQLite, SQLAlchemy |
| IaC / DevOps | Terraform, Docker, GitHub Actions, ECR |
| Backend | Node.js, TypeScript, FastAPI, Express |

### ⑤ Pipelines & Projects

Card grid (2 columns on desktop, 1 on mobile). Each card has a coloured top border, title, short description (no sensitive details), and tool tags. Cards fade in staggered on scroll.

| Title | Description | Tags | Accent |
|-------|-------------|------|--------|
| Land Registry Data Platform | Ingesting, transforming and publishing UK property ownership, title, and land data at scale | HMLR · PostgreSQL · S3 · pandas | sky |
| Airflow Orchestration Platform | AWS ECS Fargate-hosted Apache Airflow instance managing dozens of scheduled data pipelines with DAG sync via DataSync/EFS | Airflow · ECS · Terraform · RDS | indigo |
| Geospatial Pipeline Suite | Raster and vector processing pipelines for property-level spatial analysis, zonal statistics, and map layer generation | GDAL · GeoPandas · Rasterio · PostGIS | lime |
| Land Report Generator | Serverless Step Functions workflow — Athena queries → Lambda → ECS bundler → CloudFront PDF delivery | Step Functions · Athena · Lambda · CloudFront | orange |
| Material Information Pipeline | Multi-stage pipeline processing land and property attributes to produce compliance-ready data outputs | PostgreSQL · pandas · boto3 · S3 | sky |
| Planning Data Pipeline | Ingesting and transforming UK planning application data from multiple sources with cloud storage integration | polars · GCS · S3 · PostgreSQL | indigo |
| GIS Mapping API | TypeScript/Node.js REST API serving geospatial and land registry data to web mapping clients | Node.js · TypeScript · PostgreSQL · ECS | lime |
| Vector Tile Generation | Automated Tippecanoe pipeline producing Mapbox-compatible PMTiles from large geospatial datasets | Tippecanoe · Docker · Mapbox · S3 | orange |

### ⑥ Work Experience

Vertical timeline, most recent at top. Each entry: role, company, date range, 1–2 bullet points.

| Role | Company | Dates | Notes |
|------|---------|-------|-------|
| Geospatial Data Engineer | Tytl (Addland) | Apr 2021 – Present | Cloud-scale geospatial pipelines, AWS infrastructure, Airflow orchestration |
| Database Technician — Endangered Archaeology | University of Oxford (EAMENA) | Jul 2020 – Feb 2021 | PostgreSQL/PostGIS, GeoServer, JavaScript on Arches OSS platform |
| Data Asset Technician | SSE plc | Mar 2020 – Jul 2020 | GIS data quality, database integration |
| GIS Analyst / Technician | Self-employed | Jun 2018 – Jul 2019 | ArcPy automation, QGIS, FME, geospatial strategy |
| Mapping Technician | Verisk Analytics | Jun 2017 – Jun 2018 | UK Building project, 3D GIS modelling, OpenLayers |
| Senior GIS Technician / QA | Cyient (for Rural Payments Agency) | May 2014 – Jun 2017 | Team lead, ArcGIS, 99% QA pass rate achievement |
| GIS Technician | Cyient | Jul 2013 – May 2014 | Remote sensing, ArcGIS, parcel mapping |
| Cartographic Technician | Ronda Rural Development Agency | Jun – Aug 2012 | Topographic cartography, ArcGIS, IDRISSI |

### ⑦ Contact

Simple section with three links, horizontally laid out:

- **Email:** gabriel.contrerasj@gmail.com
- **LinkedIn:** linkedin.com/in/gabriel-contreras-jurado-geospatial-specialist
- **GitHub:** github.com/gcontrerasj

No contact form (keeps it static, no server required).

---

## Privacy & Security Rules

The following must NOT appear anywhere in the portfolio:

- Phone numbers
- Any API keys, tokens, secrets, or credentials
- Internal pipeline business logic or data schemas
- AWS account IDs or resource ARNs
- Client-specific data or company-internal metrics beyond the approved stats above
- Any content from `.env` files or config files

---

## File Structure

```
gc-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Astro GitHub Pages deploy action
├── src/
│   ├── layouts/
│   │   └── Layout.astro        # Base HTML shell, nav, head
│   ├── pages/
│   │   └── index.astro         # Single page, all sections
│   ├── components/
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Metrics.astro
│   │   ├── TechStack.astro
│   │   ├── Projects.astro
│   │   ├── Experience.astro
│   │   └── Contact.astro
│   ├── data/
│   │   ├── projects.ts         # Project card data
│   │   ├── stack.ts            # Tech stack data by category
│   │   └── experience.ts       # Timeline data
│   └── styles/
│       └── global.css          # Tailwind base + custom animations
├── public/
│   └── favicon.svg
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

---

## Animations

- **Scroll fade-in:** `opacity: 0 → 1`, `translateY: 20px → 0` via Intersection Observer on section entry; 150ms stagger between cards
- **Metric counters:** Count from 0 to target value over 1.5s on first viewport entry using `requestAnimationFrame`
- **Nav active state:** Highlight current section link as user scrolls
- **Project card hover:** `translateY: -4px` + box-shadow lift, 200ms ease

---

## Deployment

1. Push to `main` triggers GitHub Actions workflow
2. Action runs `astro build` → outputs to `dist/`
3. Action deploys `dist/` to `gh-pages` branch
4. GitHub Pages serves from `gh-pages`
5. Optional: add custom domain via `CNAME` file in `public/`