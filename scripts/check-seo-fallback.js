/**
 * Guards the hand-maintained SEO surfaces against drift.
 *
 * index.html carries a static fallback block (what non-JS crawlers and AI readers
 * see) and public/llms.txt summarises the site for AI readers. Both duplicate
 * content that actually lives in the React components, and nothing else enforces
 * that they agree. This script does.
 *
 * Runs automatically via the "prebuild" npm script, so `npm run build` and
 * `npm run deploy` both fail loudly on drift instead of shipping a stale fallback.
 * Escape hatch: SKIP_SEO_CHECK=1 npm run build
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');

if (process.env.SKIP_SEO_CHECK === '1') {
  console.log('seo-fallback check skipped (SKIP_SEO_CHECK=1)');
  process.exit(0);
}

const about = read('src/components/sections/About.tsx');
const portfolio = read('src/components/sections/Portfolio.tsx');
const coursework = read('src/components/sections/Coursework.tsx');
const fallback = read('index.html');
const llms = read('public/llms.txt');

const failures = [];
const check = (label, needle, haystacks) => {
  for (const [name, text] of haystacks) {
    if (!text.includes(needle)) failures.push({ label, needle, missingFrom: name });
  }
};

// Research interests: the array in About.tsx is the source of truth.
const interests = [...about.matchAll(/^  "(.+?)",$/gm)].map((m) => m[1]);
if (interests.length === 0) failures.push({ label: 'interests', needle: '(none parsed)', missingFrom: 'About.tsx' });
for (const item of interests) {
  check('interest', item, [['index.html fallback', fallback], ['public/llms.txt', llms]]);
}

// Taglines a visitor reads as sentences.
for (const re of [/Informatics junior @ UW\. ([^<\n]+?)\n/, /^\s+(Where AI systems[^<\n]+?)\n/m]) {
  const m = about.match(re);
  if (m) {
    const phrase = m[1].trim().replace(/\.$/, '');
    check('tagline', phrase, [['index.html fallback', fallback]]);
  }
}

// Every project card must be reachable from both crawler surfaces.
const projects = [...portfolio.matchAll(/title:\s*"(INFO [^"]+)"/g)].map((m) => m[1]);
for (const title of projects) {
  const code = title.match(/^INFO \d+/)[0];
  const name = title.split(': ')[1] || title;
  // Stop at "&": the component writes "&", the fallback escapes it as "&amp;",
  // and llms.txt spells it "and". Comparing across that is not worth the noise.
  const key = name.split('&')[0].trim().slice(0, 18);
  for (const [surface, text] of [['index.html fallback', fallback], ['public/llms.txt', llms]]) {
    if (!(text.includes(code) && text.includes(key))) {
      failures.push({ label: 'project', needle: `${code} ... ${key}`, missingFrom: surface });
    }
  }
}

// Course codes.
const codes = [...new Set([...coursework.matchAll(/code:\s*"([A-Z& ]+\d[\w/]*)"/g)].map((m) => m[1]))];
const uwCodes = codes.filter((c) => /^(INFO|CSE|ARCH)/.test(c));
for (const code of uwCodes) {
  check('course', code, [['index.html fallback', fallback], ['public/llms.txt', llms]]);
}

// The couplings that make the fallback render correctly at all.
const tw = read('tailwind.config.ts');
if (!tw.includes('"./index.html"')) {
  failures.push({ label: 'coupling', needle: '"./index.html" in tailwind content globs', missingFrom: 'tailwind.config.ts' });
}
if (!read('vite.config.ts').includes('stripSeoFallbackInDev()')) {
  failures.push({ label: 'coupling', needle: 'stripSeoFallbackInDev() plugin', missingFrom: 'vite.config.ts' });
}
for (const marker of ['SEO_FALLBACK_START', 'SEO_FALLBACK_END']) {
  if (!fallback.includes(marker)) failures.push({ label: 'coupling', needle: marker, missingFrom: 'index.html' });
}
const heroInitials = (read('src/components/sections/Hero.tsx').match(/initial=\{false\}/g) || []).length;
if (heroInitials < 4) {
  failures.push({
    label: 'coupling',
    needle: `Hero initial={false} on 4 blocks (found ${heroInitials}); restoring them makes the hero blink over the static copy`,
    missingFrom: 'Hero.tsx',
  });
}

if (failures.length) {
  console.error('\nSEO fallback drift detected. The static fallback in index.html and/or');
  console.error('public/llms.txt no longer match the components they duplicate.\n');
  for (const f of failures) {
    console.error(`  [${f.label}] missing from ${f.missingFrom}:`);
    console.error(`      ${f.needle}\n`);
  }
  console.error('Fix: update the SEO_FALLBACK block in index.html and public/llms.txt.');
  console.error('See .claude/skills/seo-checklist/SKILL.md.');
  console.error('Override for a one-off build: SKIP_SEO_CHECK=1 npm run build\n');
  process.exit(1);
}

console.log(
  `seo-fallback check passed (${interests.length} interests, ${projects.length} projects, ${uwCodes.length} courses, 4 couplings)`
);
