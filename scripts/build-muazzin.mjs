// Generates muazzin/index.html (static, crawlable, portfolio-styled) from the shared policy data.
// Run: node scripts/build-muazzin.mjs
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { muazzinFeatures, muazzinMeta, muazzinPolicy } from '../src/data/muazzinPolicy.js';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const out = resolve(root, 'muazzin', 'index.html');

const renderBlock = (b) => {
  if (b.h3) return `<h3>${b.h3}</h3>`;
  if (b.p) return `<p>${b.p}</p>`;
  if (b.ul) return `<ul>${b.ul.map((li) => `<li>${li}</li>`).join('')}</ul>`;
  if (b.table) {
    const head = b.table.head.map((h) => `<th scope="col">${h}</th>`).join('');
    const rows = b.table.rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join('')}</tr>`).join('');
    return `<div class="table-wrap" tabindex="0" role="region" aria-label="Third-party services"><table><thead><tr>${head}</tr></thead><tbody>${rows}</tbody></table></div>`;
  }
  return '';
};

const toc = muazzinPolicy
  .map((s) => `<li><a href="#${s.id}">${s.title.replace(/^\d+\.\s*/, '')}</a></li>`)
  .join('');
const sections = muazzinPolicy
  .map((s) => `<section id="${s.id}"><h2>${s.title}</h2>${s.blocks.map(renderBlock).join('')}</section>`)
  .join('\n');
const features = muazzinFeatures.map((f) => `<li>${f}</li>`).join('');

const css = `
:root{--bg:#fff;--surface:#fff;--surface-2:#faf6f3;--ink:#343a40;--muted:#868e96;--accent:#bd5d38;--accent-dark:#6b2929;--line:#dee2e6;--bar:#843738;--tag:rgba(132,55,56,.08);--radius:14px;color-scheme:light}
:root[data-theme=dark]{--bg:#161212;--surface:#1f1918;--surface-2:#251e1d;--ink:#ece8e6;--muted:#a9a29f;--accent:#e08a63;--accent-dark:#f0b79c;--line:#302927;--bar:#2b1819;--tag:rgba(224,138,99,.12);color-scheme:dark}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth;scroll-padding-top:80px}
body{font-family:'Open Sans',system-ui,sans-serif;background:var(--bg);color:var(--ink);line-height:1.7;overflow-x:hidden}
a{color:var(--accent);text-decoration:none;overflow-wrap:anywhere}a:hover{text-decoration:underline}
:focus-visible{outline:2px solid var(--accent);outline-offset:3px;border-radius:4px}
.bar{position:sticky;top:0;z-index:10;background:var(--bar);box-shadow:0 2px 12px rgba(0,0,0,.2)}
.bar__in{max-width:960px;margin:0 auto;padding:0 1.25rem;height:56px;display:flex;align-items:center;gap:1rem}
.brand{font-family:'Saira Extra Condensed',sans-serif;font-size:1.4rem;font-weight:700;color:#fff;letter-spacing:.08em;margin-right:auto}
.bar a.back{color:rgba(255,255,255,.8);font-size:.9rem;font-weight:600}
.bar a.back:hover{color:#fff;text-decoration:none}
.theme{width:2.2rem;height:2.2rem;border-radius:50%;border:1px solid rgba(255,255,255,.25);background:rgba(255,255,255,.1);color:#fff;cursor:pointer;font-size:1rem}
.theme:hover{background:rgba(255,255,255,.22)}
main{max-width:960px;margin:0 auto;padding:3rem 1.25rem 4rem}
.eyebrow{font-size:.78rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--accent);margin-bottom:.35rem}
h1{font-family:'Saira Extra Condensed',sans-serif;font-size:clamp(2.4rem,7vw,4rem);font-weight:900;text-transform:uppercase;line-height:.95;margin-bottom:.75rem}
h1 span{color:var(--accent)}
.lead{max-width:65ch;margin-bottom:1.25rem}
.meta{display:flex;flex-wrap:wrap;gap:.5rem;margin-bottom:1.5rem}
.chip{padding:.25rem .75rem;border-radius:999px;font-size:.8rem;font-weight:600;background:var(--tag);color:var(--accent-dark);border:1px solid rgba(132,55,56,.15)}
.card{background:var(--surface);border:1px solid var(--line);border-left:4px solid var(--accent);border-radius:var(--radius);padding:1.5rem;margin-bottom:2rem;box-shadow:0 1px 3px rgba(52,58,64,.08)}
.card h2,.toc h2{font-family:'Saira Extra Condensed',sans-serif;font-size:1.4rem;letter-spacing:.08em;text-transform:uppercase;margin-bottom:.6rem}
.feat{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:.5rem 1.5rem;list-style:none}
.feat li{position:relative;padding-left:1.1rem;font-size:.95rem}
.feat li::before{content:'';position:absolute;top:.7rem;left:0;width:.4rem;height:.4rem;border-radius:50%;background:var(--accent)}
.toc{background:var(--surface-2);border:1px solid var(--line);border-radius:var(--radius);padding:1.25rem 1.5rem;margin-bottom:2rem}
.toc ol{padding-left:1.25rem;columns:2 220px;column-gap:2rem}.toc li{font-size:.92rem;padding:.15rem 0;break-inside:avoid}
.policy{background:var(--surface);border:1px solid var(--line);border-radius:var(--radius);padding:2rem;box-shadow:0 1px 3px rgba(52,58,64,.08)}
.policy section{margin-top:2rem}.policy section:first-child{margin-top:0}
.policy h2{font-family:'Saira Extra Condensed',sans-serif;font-size:1.6rem;letter-spacing:.05em;color:var(--accent);margin-bottom:.5rem}
.policy h3{font-size:1rem;margin:1.1rem 0 .25rem}
.policy p,.policy li{font-size:.95rem;margin:.5rem 0;overflow-wrap:anywhere}
.policy ul{padding-left:1.3rem}
code{background:var(--tag);padding:.1rem .4rem;border-radius:4px;font-size:.85em}
.table-wrap{overflow-x:auto;margin:1rem 0;border:1px solid var(--line);border-radius:var(--radius)}
table{width:100%;min-width:560px;border-collapse:collapse;font-size:.88rem;background:var(--surface)}
th,td{padding:.7rem .9rem;text-align:left;vertical-align:top;border-bottom:1px solid var(--line)}
th{background:var(--tag);font-size:.75rem;text-transform:uppercase;letter-spacing:.06em}tr:last-child td{border-bottom:none}
footer{background:var(--bar);color:rgba(255,255,255,.7);text-align:center;padding:1.5rem 1.25rem;font-size:.8rem}
footer a{color:rgba(255,255,255,.8)}
@media(max-width:600px){main{padding:2rem 1rem 3rem}.policy{padding:1.25rem 1rem}.card{padding:1.25rem 1rem}.toc ol{columns:1}}
@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}}
`.replace(/\n\s*/g, '\n');

const themeScript = `(function(){try{var t=localStorage.getItem('portfolio-theme');if(!t&&matchMedia('(prefers-color-scheme: dark)').matches)t='dark';if(t)document.documentElement.dataset.theme=t}catch(e){}})();`;
const toggleScript = `(function(){var b=document.getElementById('theme');function s(){b.textContent=document.documentElement.dataset.theme==='dark'?'\\u2600':'\\u263E'}s();b.addEventListener('click',function(){var n=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=n;try{localStorage.setItem('portfolio-theme',n)}catch(e){}s()})})();`;

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="Privacy Policy for ${muazzinMeta.name} (${muazzinMeta.packageId}).">
<title>Privacy Policy - ${muazzinMeta.name}</title>
<link rel="icon" type="image/svg+xml" href="../favicon.svg">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Saira+Extra+Condensed:wght@500;700;900&family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet">
<script>${themeScript}</script>
<style>${css}</style>
</head>
<body>
<header class="bar"><div class="bar__in">
  <span class="brand">Kamrul Hasan</span>
  <a class="back" href="../docs/#/projects/6">&larr; Portfolio</a>
  <button class="theme" id="theme" type="button" aria-label="Toggle dark theme"></button>
</div></header>
<main>
  <p class="eyebrow">Project &middot; Privacy Policy</p>
  <h1>Muazzin <span>Qibla, Salah, Quran</span></h1>
  <p class="lead">A privacy-first Android app for Muslims: prayer times, Azan alerts, Qibla, nearby mosques, Ramadan schedule, Quran, Hadith and duas.</p>
  <div class="meta"><span class="chip">Package: ${muazzinMeta.packageId}</span><span class="chip">Effective: ${muazzinMeta.effectiveDate}</span><span class="chip">Android</span></div>
  <div class="card"><h2>Key features</h2><ul class="feat">${features}</ul></div>
  <nav class="toc" aria-label="Contents"><h2>On this page</h2><ol>${toc}</ol></nav>
  <article class="policy">
${sections}
  </article>
</main>
<footer>&copy; 2026 Kamrul Hasan &middot; <a href="../docs/#/projects/6">Back to portfolio</a> &middot; <a href="mailto:${muazzinMeta.contactEmail}">${muazzinMeta.contactEmail}</a></footer>
<script>${toggleScript}</script>
</body>
</html>
`;

mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, html, 'utf8');
console.log(`Wrote ${out} (${html.length} bytes)`);
