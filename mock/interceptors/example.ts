import type { Page } from '@playwright/test';
import exampleFixture from '../fixtures/example.json';

export async function applyExampleMockInterceptors(page: Page): Promise<void> {
  if (process.env.MOCK_MODE !== 'true') {
    return;
  }

  await page.route('**/api/example', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify(exampleFixture)
    });
  });
}
