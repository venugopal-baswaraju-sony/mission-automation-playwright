// @ts-nocheck
const { test, expect, chromium } = require('@playwright/test');
const { log, Console } = require('console');

test('do openIncognito', async ({ }) => {
    // Launch the browser in incognito mode
    const browser = await chromium.launch({ args: ['--incognito'] });
    
    // Create a new incognito context
    const context = await browser.newContext();
  
    // Create a new page in the incognito context
    const page = await context.newPage();
  
    // Perform actions on the incognito page
    await page.goto('https://www.wikipedia.org/');

    await page.waitForTimeout(10000);

    expect(await page.getByText('Wikipedia', { exact: true })).toBeVisible()
    await page.getByRole('link', { name: 'English 6,776,000+ articles' }).click()
})