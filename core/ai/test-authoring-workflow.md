# Test Authoring Workflow

Use this workflow when a human approves a regression candidate or asks for deterministic coverage.

## TDD Loop

Work in tracer bullets:

1. Write one behavior-focused test through the public browser interface.
2. Run it and confirm it fails for the expected reason when covering a known bug.
3. Make only the minimal approved change needed to get green.
4. Refactor only while green.
5. Repeat for the next behavior.

## Test Shape

Good Playwright tests:

- Start from a scenario file or approved bug report.
- Use stable user-facing locators.
- Assert observable outcomes.
- Keep setup explicit.
- Capture traces on failure.
- Avoid arbitrary sleeps.

Avoid:

- Testing implementation details.
- Encoding ambiguous product behavior.
- Updating snapshots or assertions without approval.
- Hiding failures with broad retries or soft assertions.

## Regression Promotion

Before adding a regression test, confirm:

- The bug or risk is approved for automation.
- Expected behavior is written down.
- The test can run deterministically.
- Required accounts and data are available.
- The failure mode would be understandable in CI.

## Review Checklist

- Does the test fail for the intended reason before the fix?
- Does the assertion match human-approved expected behavior?
- Is the test narrow enough to diagnose?
- Is the test broad enough to protect the user journey?
- Are evidence and scenario files linked?
