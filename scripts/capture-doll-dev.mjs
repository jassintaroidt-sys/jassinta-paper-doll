import { chromium } from '@playwright/test';
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = join(process.cwd(), 'docs', 'evidence', 'P03');
mkdirSync(outDir, { recursive: true });

async function capture() {
  const browser = await chromium.launch({ headless: true });

  const viewports = [
    { name: 'doll-dev-1440', width: 1440, height: 900 },
    { name: 'doll-dev-768', width: 768, height: 1024 },
    { name: 'doll-dev-360', width: 360, height: 800 },
  ];

  for (const vp of viewports) {
    const page = await browser.newPage({
      viewport: { width: vp.width, height: vp.height },
    });

    console.log(`Navigating to http://localhost:3000/#/dev/doll on ${vp.width}px...`);
    await page.goto('http://localhost:3000/#/dev/doll', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(2000);

    const outPath = join(outDir, `${vp.name}.png`);
    await page.screenshot({ path: outPath, fullPage: true });
    console.log(`✓ Saved screenshot: ${outPath}`);

    await page.close();
  }

  await browser.close();
  console.log('Capture P03 complete.');
}

capture().catch((e) => {
  console.error(e);
  process.exit(1);
});
