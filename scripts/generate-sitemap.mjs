import { readdirSync, writeFileSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const BASE = process.env.SITE_URL || 'https://example.com';
const routes = ['/', '/admin/add-lesson'];
const languages = ['python','javascript','java','c','cpp','html-css'];

languages.forEach((l) => routes.push(`/languages/${l}`));

function walkContent(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const s = statSync(p);
    if (s.isDirectory()) walkContent(p);
    else if (name.endsWith('.md')) {
      const parts = p.split('/content/')[1].split('/');
      const language = parts[0];
      const slug = parts[2].replace('.md','');
      routes.push(`/lesson/${language}/${slug}`);
    }
  }
}

const publicContent = join(process.cwd(), 'public', 'content');
const distContent = join(process.cwd(), 'dist', 'content');
if (existsSync(distContent)) {
  walkContent(distContent);
} else if (existsSync(publicContent)) {
  walkContent(publicContent);
}

const urlset = routes
  .map((r) => `<url><loc>${BASE}${r}</loc></url>`) 
  .join('');

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlset}</urlset>`;

const outPath = existsSync(distContent) ? 'dist/sitemap.xml' : 'public/sitemap.xml';
writeFileSync(outPath, xml);
console.log('sitemap.xml generated with', routes.length, 'routes', '->', outPath);
