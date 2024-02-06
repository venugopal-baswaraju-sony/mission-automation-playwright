// @ts-nocheck
const { test, expect, chromium } = require('@playwright/test');
const { log, Console } = require('console');

test('Add Data into browser storage', async ({ page }) => {

  await page.goto('http://127.0.0.1:5500/index.htm');

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

  console.log(percentageValue, totalValue);

  await expect(page.getByText('Percentage', { exact: true })).toBeVisible();

  const percentage = await page.locator('#valueInPercentage');
  
  await percentage.fill(percentageValue);

  await expect(page.getByText('Value', { exact: true })).toBeVisible();

  const totalValueInput = await page.locator('#valueInNumber');

  await totalValueInput.fill(totalValue);

  await page.waitForTimeout(3000);

  await page.getByRole('button', { name: 'Calculate' }).click()

  const result = page.locator('#formContainer div').filter({ hasText: 'Result: The 60% of 600 is 360' });

  await expect(result).toContainText('Result: The 60% of 600 is 360');

  await page.waitForTimeout(3000);
  
  await expect(page.locator("#infoDetails")).toBeVisible()
//   // Set data in sessionStorage
//   await page.evaluate(() => {
//     sessionStorage.setItem('testKey', 'testValue');
//   });

//   // Get data from sessionStorage
//   const sessionStorageValue = await page.evaluate(() => {
//     return sessionStorage.getItem('testKey');
//   });

//   console.log( sessionStorageValue);
})

test('Login into Amazon', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
   // Set data in localStorage
  await page.evaluate(() => {
    sessionStorage.setItem('phoneNumber', 8754242687);
  });

  await page.evaluate(() => {
    sessionStorage.setItem('password', "Vicky@205187");
  });
  await page.waitForTimeout(2000);
   // Get data from localStorage
   const phoneNumber = await page.evaluate(() => {
    return sessionStorage.getItem('phoneNumber');
  });

  // Get data from localStorage
  const password = await page.evaluate(() => {
    return sessionStorage.getItem('password');
 });
 await page.waitForTimeout(2000);
  await page.getByRole('link', { name: 'Hello, sign in Account & Lists' }).click();
  await page.getByLabel('Email or mobile phone number').fill(phoneNumber);
  await page.getByLabel('Continue').click();
  await page.waitForTimeout(2000);
  await page.getByLabel('Password').fill(password);
  await page.getByLabel('Keep me signed in.\n          \n            \n              Details').check();
  // await page.waitForTimeout(2000);
  await page.getByLabel('Sign in').click();
  await page.waitForTimeout(3000);
  expect(await page.getByText('Enter verification code')).toBeVisible();
})
