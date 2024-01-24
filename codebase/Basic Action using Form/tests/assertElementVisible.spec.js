// @ts-nocheck
const { test, expect, chromium } = require('@playwright/test');
const { log, Console } = require('console');

test('do checkAssertOrder', async ({ page }) => {
  await page.goto('https://www.google.com/search?q=Tata+motors');

  let resultEle = await page.getByText('About 165,000,000 results (0.')
  // console.log("Result"resultEle.textContent());
  await expect(page.getByRole('link', { name: 'Tata Motors: Home Tata Motors' })).toBeVisible();

  await page.getByRole('heading', { name: 'Tata', exact: true })

  await page.getByRole('heading', { name: 'Nexon' })

  await page.getByRole('heading', { name: 'Ev', exact: true })

  await page.getByRole('heading', { name: 'Tata Punch SUV' })

  const elements = await page.$$("table tr.mslg");

  for(let ele of elements){
    const result = page.locator('.jmjoTe').filter({ hasText: await ele.textContent()});
    console.log(result);
  }
})