// @ts-check
const { test, expect, chromium } = require('@playwright/test');

test('isNavigated', async ({ }) => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('http://127.0.0.1:5500/codebase/Open%20Browser/index.htm');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Testing Playwright/);
  await page.close();
});