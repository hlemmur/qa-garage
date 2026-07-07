# Smoke Scenario

Pointer to the proposal-first smoke workflow. Do not treat this file as the assertion source of truth.

## Workflow

1. Draft cases in [`smoke-proposal.md`](smoke-proposal.md) using harness `smoke-test-design` skill.
2. Human approves assumptions and `observation`-sourced cases; record in `decisions.md`.
3. Implement **only approved** SMK-* cases in `tests/e2e/` via vendored `playwright-automation`.

See `core/ai/smoke-test-model.md` for what smoke covers (auth, surfaces, nav, controls, context-aware state, primary journey minimal path).

## Tags

`@smoke`

## Placeholder automation

`tests/e2e/smoke.spec.ts` remains a minimal harness placeholder until approved cases exist. Generate spec steps from approved `smoke-proposal.md` cases only.
