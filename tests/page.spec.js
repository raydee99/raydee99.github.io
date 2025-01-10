// @ts-check
const { test, expect } = require('@playwright/test');

[
  '/index.html',
  '/about.html',
  '/games.html',
  '/podcasts.html',
  '/music.html',
  '/audioventure.html',
  '/contact.html',
  '/terms.html',
  '/privacy.html',
].forEach((page_url) => {
  test(`${page_url} has title`, async ({ page }) => {
    await page.goto(page_url);

    await expect(page).toHaveTitle(/raydee99/);
  });

  test(`${page_url} has visible body`, async ({ page }) => {
    await page.goto(page_url);

    await expect(page.locator('body')).toBeVisible();
  });
});
