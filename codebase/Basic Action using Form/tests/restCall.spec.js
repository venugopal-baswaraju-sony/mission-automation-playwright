// @ts-nocheck
const { test, expect, chromium } = require('@playwright/test');
const { log, Console } = require('console');

test('do API Call', async ({ page, request }) => {
  // const newIssue = await request.post(`/repos/${USER}/${REPO}/issues`, {
  //   data: {
  //     title: '[Feature] request 1',
  //     body: 'Feature description',
  //   }
  // });
  // expect(newIssue.ok()).toBeTruthy();
  await page.goto('http://127.0.0.1:5500/index.htm');
  const issues = await request.get(`http://127.0.0.1:8000/getData`);
  expect(issues.ok()).toBeTruthy();
  var json = await issues.json()
  console.log(json)
  expect(await issues.json()).toContainEqual(expect.objectContaining({
    name: 'Vignesh',
    dept: 'SARD'
  }));
});