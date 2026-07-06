# Smoke Scenario

## Purpose

Confirm the target application is reachable and returns a browser-rendered page with a document title.

## Tags

`@smoke`

## Preconditions

- `TARGET_URL` points to the target environment.
- Browser dependencies are installed with `npx playwright install chromium`.

## Journey

1. Open the target URL.
2. Wait for the page to load.
3. Verify the document title is not empty.

## Expected Outcomes

- The page loads without browser navigation failure.
- The page has a non-empty title.

## Automation

Covered by `projects/_template/tests/e2e/smoke.spec.ts`.
