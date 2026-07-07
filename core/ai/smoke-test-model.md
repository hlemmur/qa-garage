# Smoke Test Model

Black-box definition of smoke testing in QA Garage. Craft lives in vendored `playwright-automation` and `exploratory-testing`; this doc defines **what smoke covers**, **where scope comes from**, and **when automation is allowed**.

Before drafting smoke scope, read:

- `core/ai/test-design-principles.md`
- `core/ai/qa-project-context-model.md`
- The target project's `reference/`, `journeys/`, and `reference/testability.md`

## What smoke is

Smoke answers: **"Is the product alive and navigable for a real user in our test account context?"**

| Layer | Checks |
|-------|--------|
| **Auth shell** | Sign-in completes; authenticated landing reachable; session stable for the test account profile in use |
| **Authed surfaces load** | Each in-scope page/route opens without error; critical chrome visible (nav, header, main content region) |
| **Navigation** | Sidebar/top nav links route to expected URLs; back/forward between main areas works |
| **Links and controls** | In-scope interactive elements are present, enabled, and clickable on the happy-path tour |
| **Context-aware reality** | Expectations depend on documented account preconditions (see below) |
| **Primary journey (minimal path)** | One end-to-end pass through the top-priority journey with minimal required data and clicks |

### Context-aware expectations

Document the account profile in `scenarios/smoke-proposal.md` assumptions. Examples:

| Account state | Expect |
|---------------|--------|
| New / empty account | Empty states shown (e.g. no items yet), not broken UI or error pages |
| Account with seed data | Expected rows, cards, or summaries visible |
| Role without permission | Feature hidden or disabled per product policy — not a crash |

Never assume seed data exists without recording it in assumptions or `test-data.md`.

### Primary journey (minimal path)

Pick the **#1 user journey** from `journeys/` (action-oriented filename — see `_template/journeys/README.md`). Run the shortest credible path through its phases using straightforward defaults only.

Canonical harness example: `journeys/create-proposal-for-a-grant.md` — smoke covers Access + Start phases, not full AI generation or export fidelity.

**In scope for minimal path:** reach each critical touchpoint; confirm page loads and primary controls exist.

**Out of scope:** edge cases, negative matrices, AI output quality, export fidelity, collaboration concurrency, performance.

## What smoke is not

| Concern | Level |
|---------|-------|
| AI output quality, grounding, hallucination | Exploratory / `ai-system-testing` eval |
| Export format fidelity | Regression |
| Negative / error matrices | Regression / exploratory |
| Permission edge cases beyond smoke account | Regression |
| Visual pixel-perfect layout | Visual testing |
| Full DOM inventory | Not required — use widget bundles in `ui-inventory.md` |

## Sources of smoke scope (priority order)

1. This doc (`smoke-test-model.md`)
2. `reference/` + primary `journeys/*.md`
3. `reference/ui-inventory.md` (widget bundles and state logic from exploration)
4. `reference/testability.md` (SSO, passkey, flaky selectors, human-in-the-loop auth)

Draft cases in `scenarios/smoke-proposal.md` — never jump straight to `*.spec.ts`.

## Duration budget

Align with the project's Quality Goals in `qa-project-context.md` (typical target: full smoke under 5 minutes).

## Workflow

```text
Phase 0B exploration → ui-inventory.md + session logs
        ↓
smoke-test-design skill → scenarios/smoke-proposal.md (proposed)
        ↓
Human reviews assumptions + observation-sourced cases
        ↓
decisions.md approval
        ↓
scenarios/approved/ (optional per-case specs)
        ↓
playwright-automation → tests/e2e/*.spec.ts
```

## Authoring gate

Agents **must not** create or edit `*.spec.ts` until:

1. `scenarios/smoke-proposal.md` is reviewed,
2. Every `observation`-sourced case is individually `approved`,
3. Approval is recorded in `decisions.md` (e.g. "Smoke proposal v1 approved for automation").

Regression follows the same source-tier rules via `core/templates/scenario-spec.md`.

## Harness skill

Use `core/skills/smoke-test-design/SKILL.md` when drafting smoke scope after Phase 0B.
