import { expect, test } from '@playwright/test';

test('@smoke target homepage loads with a title', async ({ page }) => {
  const targetUrl = process.env.TARGET_URL;

  expect(targetUrl, 'Set TARGET_URL before running smoke tests.').toBeTruthy();

  await page.goto(targetUrl!);
  await expect(page).toHaveTitle(/.+/);
});
