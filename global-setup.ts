async function globalSetup(): Promise<void> {
  if (process.env.MOCK_MODE === 'true') {
    console.log('[MOCK MODE] Playwright will run with mock-mode helpers available.');
  }
}

export default globalSetup;
