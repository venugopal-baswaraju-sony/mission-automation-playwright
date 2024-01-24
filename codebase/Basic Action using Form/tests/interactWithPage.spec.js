
const { test, expect, chromium } = require('@playwright/test');


test('do Interaction', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/index.htm');

  await expect(page.getByRole('heading', { name: 'Percentage Calculator' })).toBeVisible();

  await expect(page.getByText('Percentage', { exact: true })).toBeVisible();

  const percentage = await page.locator('#valueInPercentage');
  
  await percentage.fill("60");

  await expect(page.getByText('Value', { exact: true })).toBeVisible();

  const totalValue = await page.locator('#valueInNumber');

  await totalValue.fill("600");

  await page.getByRole('button', { name: 'Calculate' }).click()

  const result = page.locator('#formContainer div').filter({ hasText: 'Result: The 60% of 600 is 360' });

  await expect(result).toContainText('Result: The 60% of 600 is 360');
  
  await expect(page.locator("#infoDetails")).toBeVisible()

  await page.locator("#myCheckbox").check()

  
  await expect(page.locator("#infoDetails")).not.toBeVisible()

});
