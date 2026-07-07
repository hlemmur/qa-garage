# Test Strategy — postdocs-ai

Reads `.agents/qa-project-context.md` and `risk-matrix.md`. Black-box, FE-first. Updated 2026-07-07 post Phase 0C.

## Business context

- **Production** is the only test environment (D-001).
- **~300** registered users, **~50** active; **1000+** new users expected by autumn (contract onboarding).
- Users typically active **3–4 weeks/year** during grant application cycles — episodic, high-intensity usage.
- **Priority:** broad journey coverage, functional stability, readiness for user-scale onboarding — not deep perf testing yet.

## Scope & Phasing

1. **Phase 1 (now — pre-autumn):** Approved smoke (D-004) + P0 regression on critical journeys; exploratory charters for gaps; human-in-the-loop auth.
2. **Phase 2 (when access granted):** Backend grant-data pipeline, upload parsing, API contracts (Supabase confirmed for auth; rest TBD Q-012).
3. **Phase 3 (pre-release hardening):** AI eval thresholds (Q-010), collaboration concurrency, export fidelity depth, accessibility, optional load smoke on grants browse.

## Levels

| Level | Purpose | Artifact |
|-------|---------|----------|
| **Smoke** | Product alive + navigable + minimal journey + AI completion | `scenarios/smoke-proposal.md` (approved D-004) |
| **Regression** | Human-approved deterministic checks on P0/P1 scenarios | `scenarios/regression-proposal.md` |
| **Exploratory** | Complex flows, negatives, new risks | `scenarios/complex-flows-and-quality-strategy.md`, session logs |
| **AI eval** | Quality/science gates — only after Q-010 + golden set | Future `@ai-eval` |

## Entry / Exit Criteria

- **Entry:** Execution gate clear; smoke proposal approved (D-004); fixtures defined (D-005).
- **Exit smoke automation:** storageState auth runbook + SMK-* green 3 consecutive runs.
- **Exit pre-autumn:** P0 regression green; Flow F checklist in complex-flows doc complete; KI-001 disposition in client proposal.

## Quality Gates

- Release-relevant: smoke green; no open no-go (R-001–R-003) unaddressed for changed area.
- AI smoke: completion-only; excluded from flake tracking.
- Autumn onboarding: smoke daily + weekly P0 regression minimum 2 weeks before user ramp.

## Tooling

- Deterministic: Playwright (`tests/e2e/`).
- Exploration: Playwright MCP / Cursor browser.
- AI features: `ai-system-testing` (completion → property → eval escalation).
- Reporting: `release-readiness`, periodic `reports/`.
- Maintenance: `cadence.md` scheduled jobs.

## Maintenance model

See `scenarios/complex-flows-and-quality-strategy.md` §3 — daily smoke, weekly regression rotation, bi-weekly exploratory charter, monthly fixture validation, reference hygiene via knowledge-curator every session.
