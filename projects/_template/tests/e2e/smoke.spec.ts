// Placeholder only. Generate tests from approved SMK-* cases in scenarios/smoke-proposal.md
// after human approval in decisions.md. See core/ai/smoke-test-model.md.

import { expect, test } from '@playwright/test';
import { loadRuntimeConfig } from '../../../../scripts/utils/config';

test('@smoke target homepage loads with a title', async ({ page }) => {
  const targetUrl = process.env.TARGET_URL ?? loadRuntimeConfig().targetUrl;

  expect(targetUrl, 'Set TARGET_URL or configure config/targets.yaml before running smoke tests.').toBeTruthy();

  await page.goto(targetUrl!);
  await expect(page).toHaveTitle(/.+/);
});
