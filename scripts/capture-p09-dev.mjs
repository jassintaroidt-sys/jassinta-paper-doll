import { createServer } from 'vite';
import { chromium } from '@playwright/test';
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = join(process.cwd(), 'docs', 'evidence', 'P09');
mkdirSync(outDir, { recursive: true });

async function main() {
  console.log('Starting Vite server programmatically…');
  const server = await createServer({
    server: { port: 5178 },
  });
  await server.listen();
  const address = server.httpServer?.address();
  const port = typeof address === 'object' && address ? address.port : 5178;
  const baseUrl = `http://localhost:${port}/#/dev/trilogy`;

  console.log(`Vite listening at ${baseUrl}. Launching Chromium…`);
  const browser = await chromium.launch({ headless: true });

  const viewports = [
    { width: 360, height: 800, name: 'p09-trilogy-360px.png' },
    { width: 768, height: 1024, name: 'p09-trilogy-768px.png' },
    { width: 1440, height: 900, name: 'p09-trilogy-1440px.png' },
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

  // Tangkap tampilan Café 3A di 1440px
  console.log('Capturing Café 3A at 1440px …');
  const cafePage = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await cafePage.goto(baseUrl, { waitUntil: 'networkidle' });
  await cafePage.waitForTimeout(500);
  const cafeTabBtn = cafePage.locator('button:has-text("3A Café")');
  if (await cafeTabBtn.isVisible()) {
    await cafeTabBtn.click();
    await cafePage.waitForTimeout(800);
  }
  const cafeDest = join(outDir, 'p09-cafe-1440px.png');
  await cafePage.screenshot({ path: cafeDest, fullPage: false });
  console.log(`  ✓ Saved screenshot: ${cafeDest}`);

  // Buka modal INFO
  const infoBtn = cafePage.locator('button:has-text("INFO")');
  if (await infoBtn.isVisible()) {
    await infoBtn.click();
    await cafePage.waitForTimeout(600);
    const infoDest = join(outDir, 'p09-cafe-info-1440px.png');
    await cafePage.screenshot({ path: infoDest, fullPage: false });
    console.log(`  ✓ Saved screenshot: ${infoDest}`);
  }
  await cafePage.close();

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
  const calmDest = join(outDir, 'p09-trilogy-calm-1440px.png');
  await calmPage.screenshot({ path: calmDest, fullPage: false });
  console.log(`  ✓ Saved screenshot: ${calmDest}`);
  await calmPage.close();

  await browser.close();
  await server.close();
  console.log('Finished capturing P09 screenshots successfully.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
