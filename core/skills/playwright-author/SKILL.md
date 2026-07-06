---
name: playwright-author
description: Use when drafting or updating Playwright tests for approved QA coverage.
---

# Playwright Author

Before acting, read:

- `core/ai/qa-principles.md`
- `core/ai/test-authoring-workflow.md`
- Relevant scenario or approved bug report

## Goal

Create deterministic browser coverage for approved behavior.

## Steps

1. Confirm expected behavior is human-approved.
2. Write one behavior-focused test.
3. Run it and confirm the initial failure is meaningful when covering a bug.
4. Make the minimum approved implementation or test setup change.
5. Run the target test until green.
6. Summarize evidence and review risks.

## Guardrail

Do not change assertions, skip tests, or update baselines without explicit approval.
