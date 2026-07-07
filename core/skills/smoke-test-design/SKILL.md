---
name: smoke-test-design
description: Harness wrapper for drafting black-box smoke scope and smoke-proposal artifacts. Use after Phase 0B exploration, when asked what smoke should cover, or before any Playwright smoke authoring.
---

# Smoke Test Design

Thin harness wrapper. Playwright craft lives in vendored `playwright-automation`; exploration craft in `exploratory-testing` and `agentic-browser-testing`.

Before acting, read:

- `core/ai/smoke-test-model.md`
- `core/ai/test-design-principles.md`
- `core/ai/knowledge-maintenance.md`
- The target project's `reference/`, `reference/ui-inventory.md`, primary `journeys/*.md`, `reference/testability.md`

## Goal

Produce a source-labeled `scenarios/smoke-proposal.md` that humans can approve before any `*.spec.ts` work.

## When to use

- After Phase 0B app discovery
- "Draft smoke tests", "smoke proposal", "what should smoke cover"
- Before promoting exploration findings to deterministic smoke automation

## Steps

1. Read `smoke-test-model.md` and project artifacts (reference, ui-inventory, journeys, testability).
2. Identify the primary journey (action-oriented filename in `journeys/`).
3. List assumptions explicitly — account, seed data, environment, auth method. Unknowns → `questions.md`.
4. Draft or update `scenarios/smoke-proposal.md` from `core/templates/smoke-proposal.md`.
5. Label every SMK-* case with a source tier (`observation` | `docs` | `human` | `issue`).
6. Map cases to `ui-inventory.md` rows and journey phases where applicable.
7. List explicit out-of-smoke deferrals (AI quality, export, negatives).
8. Propose approved cases for `scenarios/approved/` as scenario-specs — **do not** write Playwright.
9. After human approval in `decisions.md`, hand off to vendored `playwright-automation`.

## Outputs

- `scenarios/smoke-proposal.md` (required)
- Updates to `reference/ui-inventory.md` smoke-candidate flags (if gaps found)
- `questions.md` entries for unresolved assumptions
- Optional `scenarios/approved/*.md` after per-case approval

## Guardrails

- Never create or edit `*.spec.ts` without approved `smoke-proposal.md` and `decisions.md` entry.
- Every `observation`-sourced case needs individual human approval before automation.
- Do not promote `observed` UI behavior to `confirmed` without human decision.
- Smoke is minimal path only — defer edge cases and AI quality to regression / exploratory / AI eval.
