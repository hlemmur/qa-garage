# Decisions — postdocs-ai

Durable log of human decisions: confirmed expected behavior, scope calls, risk acceptance, overrides. Append-only unless correcting a factual error. Agents propose; the QA Lead decides.

## Decision Log

### D-001: Production target for exploratory testing

- Date: 2026-07-07
- Decided by: QA Lead
- Context: Q-001
- Decision: Use production https://app.postdocs.ai/ as the only available target for exploratory testing. No staging exists.
- Impact: Phase 0B app exploration and manual smoke can proceed against production. Use non-destructive actions and mock fixtures only until Q-003 is answered.

### D-002: Microsoft account for authenticated exploration

- Date: 2026-07-07
- Decided by: QA Lead
- Context: Q-002
- Decision: Approved Microsoft sign-in account `leka.mulyar@gmail.com` (passkey/Touch ID). No password stored in repo.
- Impact: Unblocks manual and agent-assisted exploratory sessions with human-in-the-loop auth. Full Playwright auth automation blocked until a non-passkey account or session-reuse strategy is approved. Collaboration tests still need additional accounts (see test-data.md).

## Overrides

Explicit permissions that relax a guardrail. The readiness gate checks here.

- Allow proceed with open questions: no
