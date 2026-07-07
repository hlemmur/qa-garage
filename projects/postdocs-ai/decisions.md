# Decisions — postdocs-ai

Durable log of human decisions: confirmed expected behavior, scope calls, risk acceptance, overrides. Append-only unless correcting a factual error. Agents propose; the QA Lead decides.

## Decision Log

### D-001: Production target for exploratory testing

- Date: 2026-07-07
- Decided by: QA Lead
- Context: Q-001
- Decision: Use production https://app.postdocs.ai/ as the only available target for exploratory testing. No staging exists.
- Impact: Phase 0B app exploration and manual smoke can proceed against production. Upload/collaboration scope governed by D-003.

### D-002: Microsoft account for authenticated exploration

- Date: 2026-07-07
- Decided by: QA Lead
- Context: Q-002
- Decision: Approved Microsoft sign-in account `leka.mulyar@gmail.com` (passkey/Touch ID). No password stored in repo.
- Impact: Unblocks manual and agent-assisted exploratory sessions with human-in-the-loop auth. Full Playwright auth automation blocked until a non-passkey account or session-reuse strategy is approved.

### D-003: Production upload and collaboration test scope

- Date: 2026-07-07
- Decided by: QA Lead
- Context: Q-003
- Decision: Approved synthetic/mock/generated test data for exploratory uploads and AI generation in production. Collaborator invites limited to three approved emails: `leka.mulyar@gmail.com` (owner), `omulyar.work@gmail.com` (registered collaborator), `lena.m.coaching@gmail.com` (unregistered — invite-acceptance flow). No invites to addresses outside this set.
- Impact: Unblocks upload, generation, and collaboration exploratory charters (R-001 guardrail: mock data only, no real research). Execution gate clears for Phase 0B. Credentials remain out-of-band.

### D-004: Smoke test scope v1

- Date: 2026-07-07
- Decided by: QA Lead
- Context: Q-005
- Decision: Smoke covers auth shell, full home dashboard widget tour (grants card, profile edit, recent proposals, create proposal modal, explore grants, sidebar nav, Learn/Notifications/profile menu, support chatbot), minimal primary journey (create proposal → search grant → export), and AI Collaborator completion smoke (responds, not quality-evaluated).
- Impact: `scenarios/smoke-proposal.md` v1 drafted from this scope. Playwright authoring gated on proposal review + individual observation-case approval per harness.

### D-005: Grant fixture for create-proposal tests

- Date: 2026-07-07
- Decided by: QA Lead
- Context: Q-006
- Decision: Primary fixture grant **Innovative startups 2026** (Vinnova); any equivalent open grant acceptable for tests.
- Impact: Recorded in `test-data.md` and smoke/regression proposals.

### D-006: KI-001 disposition during discovery

- Date: 2026-07-07
- Decided by: QA Lead
- Context: KI-001 (stale EU grant statuses)
- Decision: Keep noted as suspected; include in client scope proposal. Do not file external bug until product confirms known vs unknown.
- Impact: KI-001 remains `suspected`; tracked in `proposals/` and exploratory charters for grant freshness (R-003).

### D-007: User scale and autumn onboarding context

- Date: 2026-07-07
- Decided by: QA Lead
- Context: Engagement planning
- Decision: Product has ~300 users (~50 active); 1000+ new users expected by autumn. Users active 3–4 weeks/year. QA priority is coverage, stability, and pre-autumn readiness — not load testing in Phase 1.
- Impact: Updated `strategy.md`, `plan.md`, `cadence.md`, and client `proposals/testing-scope-2026-07-07.md`.

## Overrides

Explicit permissions that relax a guardrail. The readiness gate checks here.

- Allow proceed with open questions: no
