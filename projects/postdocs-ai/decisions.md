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

## Overrides

Explicit permissions that relax a guardrail. The readiness gate checks here.

- Allow proceed with open questions: no
