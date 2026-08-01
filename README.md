# Calibi AI

Marketing site for **Calibi AI** — premium AI automation, development, consulting, and training
for businesses, colleges, and corporate teams.

Built with TanStack Start (SSR), React 19, Tailwind CSS v4, shadcn/ui, and Motion.

## Development

Requires Node.js 20+ (or Bun).

```sh
npm install
npm run dev
```

The dev server runs on [http://localhost:8080](http://localhost:8080).

## Scripts

| Script              | Description                                     |
| ------------------- | ----------------------------------------------- |
| `npm run dev`       | Start the dev server on port 8080               |
| `npm run build`     | Production build (Nitro, `cloudflare-module`)   |
| `npm run build:dev` | Build with development mode settings            |
| `npm run preview`   | Preview the production build locally            |
| `npm run lint`      | Run ESLint                                      |
| `npm run format`    | Format the codebase with Prettier               |

## Project structure

```
public/            Static assets (favicons, robots.txt, web manifest)
src/
  assets/          Images imported by the bundler
  components/site/ Page sections (Hero, Nav, Footer, …)
  components/ui/   shadcn/ui primitives
  content/site.ts  Single source of truth for all site copy
  routes/          File-based routes (TanStack Router)
  server.ts        SSR entry with error handling
  start.ts         Request middleware (error + CSRF)
```

## Content

All copy lives in [`src/content/site.ts`](src/content/site.ts). Edit that file to change
site text rather than hardcoding strings in components.

## Deployment

`npm run build` emits a Nitro server bundle targeting `cloudflare-module` in `dist/`
(`dist/client` for static assets, `dist/server` for the worker). Set a different target by
adjusting the `nitro()` preset in [`vite.config.ts`](vite.config.ts).
