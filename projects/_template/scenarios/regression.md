# Regression Scenarios

## Purpose

Regression scenarios protect confirmed expected behavior, fixed bugs, and accepted high-risk journeys with deterministic Playwright tests.

## Tags

`@regression`

## Promotion Rule

A scenario may become a regression test only after a human approves:

- Expected behavior.
- Required data and account state.
- Evidence or bug report that justifies automation.
- Assertion intent.

## Candidate Sources

- Confirmed entries in `reference/features.md` or approved `scenarios/approved/`.
- Human decisions in `decisions.md`.
- Approved bug reports.
- Approved scenario updates.
- Repeated high-risk exploratory findings with evidence.

## Scenario Backlog

| Scenario | Source | Status | Evidence | Approval |
| --- | --- | --- | --- | --- |
|  |  | proposed |  |  |

## Automation

Add approved deterministic coverage under `tests/e2e/` with the `@regression` tag.

The template placeholder lives in `projects/_template/tests/e2e/regression.spec.ts`.
