#!/usr/bin/env node
import fg from 'fast-glob';
import { writeFileSync } from 'node:fs';

const site = process.env.SITE_URL || 'https://example.com';
const staticRoutes = ['/', '/admin'];
const mdFiles = await fg(['public/content/**/*.md']);

const urls = [
  ...staticRoutes.map((p) => `${site}${p}`),
  ...mdFiles.map((f) => {
    const parts = f.split('/');
    const lang = parts[2];
    const slug = parts.at(-1).replace(/\.md$/, '');
    return `${site}/lesson/${lang}/${slug}`;
  })
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
urls.map((u) => `\n  <url><loc>${u}</loc></url>`).join('') +
`\n</urlset>\n`;

writeFileSync('public/sitemap.xml', xml);
console.log(`Generated sitemap with ${urls.length} URLs`);
