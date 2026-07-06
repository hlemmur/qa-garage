---
name: test-review
description: Use when reviewing QA harness, Playwright test, scenario, or report changes.
---

# Test Review

Before acting, read:

- `core/ai/qa-principles.md`
- `core/ai/test-authoring-workflow.md`

## Review Priorities

Lead with risks:

- Assertions weakened or expected behavior changed without approval.
- Tests deleted, skipped, or made less diagnostic.
- Missing evidence for reported bugs.
- Flaky timing, arbitrary sleeps, or unstable selectors.
- Scenarios updated without a clear source of truth.

## Review Steps

1. Identify what behavior the change claims to protect.
2. Compare assertions against scenario or bug-report intent.
3. Check whether failures remain visible and actionable.
4. Verify evidence paths and reproduction notes.
5. Recommend regression additions only when they protect approved behavior.

## Output

Return findings first, ordered by severity, with concise file references.
