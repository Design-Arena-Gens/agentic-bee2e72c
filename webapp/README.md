## Arabic Language Guide

A bilingual landing page that demonstrates Arabic comprehension with an interactive phrase translator, curated cultural notes, and responsive design ready for Vercel deployment.

### Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to explore the experience locally.

### Available Scripts

- `npm run dev` – Start the development server with hot reloading
- `npm run build` – Create an optimized production build
- `npm run start` – Run the production server locally
- `npm run lint` – Lint the project with Next.js ESLint rules

### Project Highlights

- Modern App Router structure with TypeScript, Tailwind CSS, and Geist fonts
- Interactive translator component supporting English ↔ Arabic lookups with transliteration and cultural notes
- Responsive layout with soft gradients tailored for storytelling about Arabic fluency

### Deploy

```bash
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-bee2e72c
```

After deployment, verify the production site with:

```bash
curl https://agentic-bee2e72c.vercel.app
```
