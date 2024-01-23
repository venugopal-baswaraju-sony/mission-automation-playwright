// @ts-check
const { test, expect, chromium } = require('@playwright/test');


test('do Interaction', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/codebase/Open%20Browser/index.htm');

  const clickButton = await page.getByRole("button",{name:'Click'});
  
  await expect(page.getByText('Lorem ipsum dolor sit amet')).toBeVisible();
  
  await clickButton.click();

  await expect(page.getByText('Lorem ipsum dolor sit amet')).not.toBeVisible();

  await clickButton.click();

});
