// @ts-check
const { test, expect, chromium } = require('@playwright/test');

//HappyPath
test('isNavigated', async ({ page }) => {

  await page.goto('http://127.0.0.1:5500/index.htm');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Percentage Calculator/);
});

//Unhappy Path
test('notNavigated', async ({ page }) => {
  await page.goto('http://127.0.0.1:5501/index.htm');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Calculate Percentage/);
});