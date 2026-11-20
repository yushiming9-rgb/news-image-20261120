// Hands the day's news image in: copies entry.png to /output/entry.png, as the bounty asks.
// The image was drawn by the entrant's own agent in the bundled sessions (poster.html, rendered
// with headless Chromium). Friday 20 November 2026: Shenzhen trilateral, ICJ Myanmar genocide
// ruling, Iran's Hormuz strikes, Anthropic's $100B IPO, Peltola's Alaska upset, Nvidia's board.
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ENTRY_NAME = "The World in One Day — Friday, 20 November 2026 (six stories, one poster)";
const here = fileURLToPath(new URL('.', import.meta.url));
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

console.log(`handing in entry: ${ENTRY_NAME}`);
mkdirSync(out, { recursive: true });
copyFileSync(join(here, 'entry.png'), join(out, 'entry.png'));
console.log('entry.png written to', join(out, 'entry.png'));
