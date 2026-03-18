import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { prerenderRoutes } from "../src/seo/routeSeo.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, "../dist");
const distIndexPath = path.join(distDir, "index.html");

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildStaticMarkup(route) {
  return `
    <main data-prerendered="true" style="max-width:960px;margin:0 auto;padding:48px 24px;font-family:Georgia,serif;color:#2e2418;background:#fffaf0;">
      <header style="margin-bottom:24px;">
        <p style="margin:0 0 12px;color:#8a5a2b;font-size:14px;letter-spacing:0.08em;text-transform:uppercase;">Slatka Magija</p>
        <h1 style="margin:0 0 16px;font-size:40px;line-height:1.1;">${escapeHtml(route.heading)}</h1>
        <p style="margin:0;font-size:18px;line-height:1.7;">${escapeHtml(route.body)}</p>
      </header>
      <nav aria-label="Glavna navigacija" style="margin-top:32px;">
        <a href="/" style="margin-right:16px;color:#8a5a2b;">Pocetna</a>
        <a href="/proizvodi" style="margin-right:16px;color:#8a5a2b;">Proizvodi</a>
        <a href="/recepti" style="margin-right:16px;color:#8a5a2b;">Recepti</a>
        <a href="/kontakt" style="color:#8a5a2b;">Kontakt</a>
      </nav>
    </main>`;
}

function injectMeta(html, route) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": route.type === "product" ? "Product" : route.type === "article" ? "Article" : "WebPage",
    name: route.heading,
    description: route.description,
    url: route.canonical,
  };

  return html
    .replace(/<title>.*?<\/title>/s, `<title>${escapeHtml(route.title)}</title>`)
    .replace(
      /<meta\s+name="description"\s+content=".*?"\s*\/?>/i,
      `<meta name="description" content="${escapeHtml(route.description)}" />`
    )
    .replace(
      /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i,
      `<link rel="canonical" href="${escapeHtml(route.canonical)}" />`
    )
    .replace(
      /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:title" content="${escapeHtml(route.title)}" />`
    )
    .replace(
      /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:description" content="${escapeHtml(route.description)}" />`
    )
    .replace(
      /<meta\s+property="og:type"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:type" content="${escapeHtml(route.type)}" />`
    )
    .replace(
      /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:url" content="${escapeHtml(route.canonical)}" />`
    )
    .replace(
      '<div id="root"></div>',
      `<div id="root">${buildStaticMarkup(route)}</div>`
    )
    .replace(
      "</head>",
      `  <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>\n  </head>`
    );
}

const template = await fs.readFile(distIndexPath, "utf8");

for (const route of prerenderRoutes) {
  const routeHtml = injectMeta(template, route);
  const outputPath =
    route.path === "/"
      ? path.join(distDir, "index.html")
      : path.join(distDir, route.path.slice(1), "index.html");

  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, routeHtml, "utf8");
}
