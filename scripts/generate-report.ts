import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { formatTimestamp, loadRuntimeConfig } from './utils/config';

interface PlaywrightSummary {
  status?: string;
  stats?: {
    expected?: number;
    unexpected?: number;
    flaky?: number;
    skipped?: number;
  };
}

function readPlaywrightSummary(rootDir: string): PlaywrightSummary | undefined {
  const resultsPath = path.join(rootDir, 'test-results', 'results.json');

  if (!existsSync(resultsPath)) {
    return undefined;
  }

  return JSON.parse(readFileSync(resultsPath, 'utf8')) as PlaywrightSummary;
}

function renderReport(): string {
  const config = loadRuntimeConfig();
  const summary = readPlaywrightSummary(config.rootDir);
  const generatedAt = new Date().toISOString();
  const mockBadge = config.mockMode ? '[MOCK MODE]' : 'off';

  return `# Daily QA Report

## Session Summary

- Project: ${config.project}
- Target: ${config.targetUrl ?? 'not configured'}
- Environment: ${config.environment ?? 'not configured'}
- Generated: ${generatedAt}
- Mock mode: ${mockBadge}
- Config: ${config.configPath ?? 'env only'}

## Playwright Summary

- Status: ${summary?.status ?? 'not available'}
- Expected: ${summary?.stats?.expected ?? 'not available'}
- Unexpected: ${summary?.stats?.unexpected ?? 'not available'}
- Flaky: ${summary?.stats?.flaky ?? 'not available'}
- Skipped: ${summary?.stats?.skipped ?? 'not available'}

## Findings

No findings have been added yet. Review Playwright output, traces, screenshots, videos, and exploratory session logs before confirming issues.

## Suggested Regression Tests

Add human-approved regression candidates here.

## Next QA Actions

1. Review the latest Playwright report with \`npm run qa:trace\`.
2. Attach relevant evidence paths.
3. Classify failures before proposing fixes.
`;
}

function main(): void {
  const config = loadRuntimeConfig();
  const reportsDir = path.join(config.projectDir, 'reports');
  mkdirSync(reportsDir, { recursive: true });

  const reportPath = path.join(reportsDir, `${formatTimestamp()}-daily-report.md`);
  writeFileSync(reportPath, renderReport());
  console.log(`QA report written to ${path.relative(config.rootDir, reportPath)}`);
}

main();
