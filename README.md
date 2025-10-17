# Learn Programming - Educational Website

A modern, responsive educational site built with React + Vite + Tailwind. Markdown-powered lessons with quizzes, SEO, and authoring tools.

## Stack
- React 18, Vite 5, TypeScript
- Tailwind CSS 3
- React Router 6
- Gray-matter + Marked for Markdown
- Vitest + Testing Library (ready)

## Getting Started
```bash
# Install deps
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint and format
npm run lint
npm run format

# Run tests
npm test
```

## Content
- Lessons live under `content/<language>/<track>/<slug>.md`.
- Lesson frontmatter:
```yaml
title: My Lesson
difficulty: beginner | intermediate | advanced
time: 20 min
prerequisites:
  - Item 1
objectives:
  - Objective 1
```

## Live Code Sandbox (integration idea)
- Use Replit or CodeSandbox embeds on lesson pages.
- Store embed URL in frontmatter or a site config.
- For Python/JS runnable snippets, consider integrating an in-browser runner like Pyodide (Python) and native eval in a Web Worker (JS) with strict sandbox.

## SEO & Analytics
- `scripts/generate-sitemap.mjs` builds `public/sitemap.xml` (run on build).
- Add your `SITE_URL` env var in CI for correct absolute URLs.
- Analytics placeholder via adding your Plausible or GA snippet in `index.html`.

## Deployment
- Vercel or Netlify recommended. Serve `dist/` and ensure SPA fallback to `index.html`.

## License
MIT
