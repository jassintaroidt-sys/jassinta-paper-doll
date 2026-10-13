import { createServer } from 'vite';
import { chromium } from '@playwright/test';
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = join(process.cwd(), 'docs', 'evidence', 'P04');
mkdirSync(outDir, { recursive: true });

async function main() {
  console.log('Starting Vite server programmatically…');
  const server = await createServer({
    server: { port: 5174 },
  });
  await server.listen();
  const address = server.httpServer?.address();
  const port = typeof address === 'object' && address ? address.port : 5174;
  const baseUrl = `http://localhost:${port}/#/dev/assets`;

  console.log(`Vite listening at ${baseUrl}. Launching Chromium…`);
  const browser = await chromium.launch({ headless: true });

  const viewports = [
    { width: 360, height: 800, name: 'p04-assets-360px.png' },
    { width: 768, height: 1024, name: 'p04-assets-768px.png' },
    { width: 1440, height: 900, name: 'p04-assets-1440px.png' },
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

  // Tangkap juga tampilan Property Style Gate
  console.log('Capturing Property Gate view at 1440px …');
  const gatePage = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await gatePage.goto(baseUrl, { waitUntil: 'networkidle' });
  await gatePage.waitForTimeout(500);
  // Klik tombol tab Property Gate
  const gateTabBtn = gatePage.locator('button:has-text("Gerbang Gaya Properti")');
  if (await gateTabBtn.isVisible()) {
    await gateTabBtn.click();
    await gatePage.waitForTimeout(800);
  }
  const gateDest = join(outDir, 'p04-property-gate-1440px.png');
  await gatePage.screenshot({ path: gateDest, fullPage: false });
  console.log(`  ✓ Saved screenshot: ${gateDest}`);
  await gatePage.close();

  // Tangkap juga tampilan Uji Siluet (Silhouette Test)
  console.log('Capturing Silhouette Test at 1440px …');
  const silPage = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await silPage.goto(baseUrl, { waitUntil: 'networkidle' });
  await silPage.waitForTimeout(500);
  const silBtn = silPage.locator('button:has-text("Uji Siluet")');
  if (await silBtn.isVisible()) {
    await silBtn.click();
    await silPage.waitForTimeout(800);
  }
  const silDest = join(outDir, 'p04-silhouette-test-1440px.png');
  await silPage.screenshot({ path: silDest, fullPage: false });
  console.log(`  ✓ Saved screenshot: ${silDest}`);
  await silPage.close();

  await browser.close();
  await server.close();
  console.log('All P04 screenshots captured successfully.');
}

main().catch((err) => {
  console.error('Error during capture:', err);
  process.exit(1);
});
