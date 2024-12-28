// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('/index.html');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/raydee99/);
});

test('has visible body', async ({ page }) => {
  await page.goto('/index.html');

  await expect(page.locator('body')).toBeVisible();
});

