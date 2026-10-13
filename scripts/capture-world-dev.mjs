import { createServer } from 'vite';
import { chromium } from '@playwright/test';
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = join(process.cwd(), 'docs', 'evidence', 'P05');
mkdirSync(outDir, { recursive: true });

async function main() {
  console.log('Starting Vite server programmatically…');
  const server = await createServer({
    server: { port: 5176 },
  });
  await server.listen();
  const address = server.httpServer?.address();
  const port = typeof address === 'object' && address ? address.port : 5176;
  const baseUrl = `http://localhost:${port}/#/dev/world`;

  console.log(`Vite listening at ${baseUrl}. Launching Chromium…`);
  const browser = await chromium.launch({ headless: true });

  const viewports = [
    { width: 360, height: 800, name: 'p05-world-360px.png' },
    { width: 768, height: 1024, name: 'p05-world-768px.png' },
    { width: 1440, height: 900, name: 'p05-world-1440px.png' },
  ];

  for (const vp of viewports) {
    console.log(`Capturing viewport ${vp.width}x${vp.height} …`);
    const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
    await page.goto(baseUrl, { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);

    const dest = join(outDir, vp.name);
    await page.screenshot({ path: dest, fullPage: false });
    console.log(`  ✓ Saved screenshot: ${dest}`);
    await page.close();
  }

  // Tangkap tampilan Calm Mode di 1440px
  console.log('Capturing Calm Mode at 1440px …');
  const calmPage = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await calmPage.goto(baseUrl, { waitUntil: 'networkidle' });
  await calmPage.waitForTimeout(500);
  const calmBtn = calmPage.locator('button:has-text("Mode Calm")');
  if (await calmBtn.isVisible()) {
    await calmBtn.click();
    await calmPage.waitForTimeout(800);
  }
  const calmDest = join(outDir, 'p05-world-calm-1440px.png');
  await calmPage.screenshot({ path: calmDest, fullPage: false });
  console.log(`  ✓ Saved screenshot: ${calmDest}`);
  await calmPage.close();

  // Tangkap tampilan Walk Strip & Stage 3D
  console.log('Capturing Stage / Walk Strip at 1440px …');
  const stagePage = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await stagePage.goto(baseUrl, { waitUntil: 'networkidle' });
  await stagePage.waitForTimeout(500);
  // Scroll down a bit to see Scene 2 & Walk Strip
  await stagePage.evaluate(() => window.scrollBy(0, 1200));
  await stagePage.waitForTimeout(800);
  const stageDest = join(outDir, 'p05-world-stage-1440px.png');
  await stagePage.screenshot({ path: stageDest, fullPage: false });
  console.log(`  ✓ Saved screenshot: ${stageDest}`);
  await stagePage.close();

  await browser.close();
  await server.close();
  console.log('Finished capturing P05 screenshots successfully.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
