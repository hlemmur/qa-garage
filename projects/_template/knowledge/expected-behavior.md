# Expected Behavior

## Purpose

Record human-approved expected behavior. Deterministic Playwright assertions should be grounded here, in approved scenarios, or in approved bug reports.

## Confirmed Expectations

| Behavior | Status | Source | Last verified | Evidence | Owner | Notes |
| --- | --- | --- | --- | --- | --- | --- |
|  | confirmed | human |  |  |  | Add only after human approval. |

## Proposed Expectations

Observed or inferred behavior that needs human approval before it can become test truth.

| Behavior | Current status | Source | Evidence | Question |
| --- | --- | --- | --- | --- |
| Target page should have a non-empty title. | observed | template smoke test | `projects/_template/tests/e2e/smoke.spec.ts` | Is this sufficient for project smoke, or should smoke assert a stronger landing state? |

## Approval Notes

When a human confirms expected behavior, record the decision in `decisions.md`.
