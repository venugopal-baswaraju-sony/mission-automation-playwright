// @ts-nocheck
const { test, expect, chromium } = require('@playwright/test');

test('Add Data into browser storage', async ({ page }) => {

  await page.goto('http://127.0.0.1:5500/index.htm');

  await expect(page.getByText('Percentage', { exact: true })).toBeVisible();

  const screenshotData1 = await page.screenshot();


    // Save the screenshot data to local storage
    await page.evaluate(screenshotBase64 => {
      localStorage.setItem('screenshot1', screenshotBase64);
    }, 'data:image/png;base64,' + screenshotData1.toString('base64'));
  

    // Set data in localStorage
    await page.evaluate(() => {
      localStorage.setItem('percentageValue', 60);
    });
  
    await page.evaluate(() => {
      localStorage.setItem('totalValue', 600);
    });
  
    // Get data from localStorage
    const percentageValue = await page.evaluate(() => {
      return localStorage.getItem('percentageValue');
    });
  
    // Get data from localStorage
    const totalValue = await page.evaluate(() => {
      return localStorage.getItem('totalValue');
   });

  const percentage = await page.locator('#valueInPercentage');
  
  await percentage.fill(percentageValue);

  await expect(page.getByText('Value', { exact: true })).toBeVisible();

  const totalValueInput = await page.locator('#valueInNumber');

  await totalValueInput.fill(totalValue);

  const screenshotData2 = await page.screenshot();

  // Save the screenshot data to local storage
  await page.evaluate(screenshotBase64 => {
    localStorage.setItem('screenshot2', screenshotBase64);
  }, 'data:image/png;base64,' + screenshotData2.toString('base64'));


  const responseScreenShot1 = await page.evaluate(() => {
    return localStorage.getItem('screenshot1');
  });

  const responseScreenShot2 = await page.evaluate(() => {
    return localStorage.getItem('screenshot2');
  });

  // expect(await page.textContent('.hero__title')).toMatchSnapshot('hero.txt');

  // Compare the base64 strings
  if (responseScreenShot1 === responseScreenShot2) {
    console.log('Screenshots are identical.');
  } else {
    console.log('Screenshots are different.');
  }
})