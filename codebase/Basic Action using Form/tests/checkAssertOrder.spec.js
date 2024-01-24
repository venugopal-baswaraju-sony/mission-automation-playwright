// @ts-nocheck
const { test, expect, chromium } = require('@playwright/test');
const { log, Console } = require('console');


test('do Interaction', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/codebase/Open%20Browser/index.htm?');

  await expect(page.getByRole('heading', { name: 'Percentage Calculator' })).toBeVisible();

  await expect(page.getByRole('heading', { name: 'For your References' })).toBeVisible();

  await page.locator('#valueInPercentage').isEnabled()

  await page.getByText('Percentage is a way of').first();

  await page.getByText('Percentage is a way of').nth(1)

  await page.getByText('Percentages are used in a').isEditable()

});


// test('do Interaction', async ({ page }) => {
//   await page.goto('http://127.0.0.1:5500/codebase/Open%20Browser/index.htm?');

//   const selector = 'infoDetails';

//   // Specify the expected style property and its value
//   const expectedStyleProperty = 'font-size';
//   const expectedStyleValue = '16px'; // Change this value to the expected color

//   const ele = page.locator("#infoDetails");
//   // Use page.$eval to assert the style property
//   const actualStyleValue = await page.evaluate(({ selector, prop }) => {
//     const element =  document.getElementById(selector);
//     return window.getComputedStyle(element)[prop];
//   }, { selector, prop: expectedStyleProperty });

//   // Assert the style property value
//   expect(actualStyleValue).toBe(expectedStyleValue);
// })

test('do Check', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/codebase/Open%20Browser/index.htm?');

  const selector = 'infoDetails';


  const expectedStyleProperty = 'font-size';
  const expectedStyleValue = '16px'; 

  const elements =   await page.locator("h3");

  // Assert visibility using toBeVisible()
  await expect(elements.nth(0)).toBeVisible();
  await expect(elements.nth(0)).toContainText("What is a percentage?");
  await expect(elements.nth(1)).toBeVisible();
  await expect(elements.nth(1)).toContainText("How do you calculate a percentage?");
  await expect(elements.nth(2)).toBeVisible(); 
  await expect(elements.nth(2)).toContainText("How do you calculate a percentage?");
})


