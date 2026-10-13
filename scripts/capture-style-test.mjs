import { createServer } from 'vite';
import { chromium } from '@playwright/test';
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = join(process.cwd(), 'docs', 'evidence', 'P02');
mkdirSync(outDir, { recursive: true });

async function main() {
  console.log('Starting Vite server programmatically…');
  const server = await createServer({
    server: { port: 5173 },
  });
  await server.listen();
  const address = server.httpServer?.address();
  const port = typeof address === 'object' && address ? address.port : 5173;
  const baseUrl = `http://localhost:${port}/#/dev/style-test`;

  console.log(`Vite listening at ${baseUrl}. Launching Chromium…`);
  const browser = await chromium.launch({ headless: true });

  const viewports = [
    { width: 360, height: 780, name: 'p02-360px.png' },
    { width: 768, height: 1024, name: 'p02-768px.png' },
    { width: 1440, height: 900, name: 'p02-1440px.png' },
  ];

  for (const vp of viewports) {
    console.log(`Capturing viewport ${vp.width}x${vp.height} …`);
    const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
    await page.goto(baseUrl, { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);

    // Baca hasil QA panel
    const badgeText = await page.locator('#qa-badge').innerText();
    console.log(`  QA Status at ${vp.width}px: ${badgeText}`);

    const dest = join(outDir, vp.name);
    await page.screenshot({ path: dest, fullPage: true });
    console.log(`  ✓ Saved screenshot: ${dest}`);
    await page.close();
  }

  await browser.close();
  await server.close();
  console.log('All screenshots captured successfully.');
}

main().catch((err) => {
  console.error('Error during capture:', err);
  process.exit(1);
});
