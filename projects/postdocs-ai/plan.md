# Test Plan — postdocs-ai (Phase 1)

Translates `strategy.md` into current-phase work. Blocked items are gated on access (see `questions.md`).

## Coverage Map

| Journey / Risk | Level | Priority | Status | Evidence / Test |
|----------------|-------|----------|--------|-----------------|
| Sign-in reaches stable landing (win-a-grant journey, Access) | smoke | P0 | blocked (accounts/env) | tests/e2e/ (todo) |
| Create proposal loads correct template (R-002) | regression candidate | P0 | blocked | needs approval + access |
| Grant search/filter/bookmark (discover journey) | regression candidate | P1 | blocked | needs access |
| Word .docx export contains expected sections (R-004) | regression candidate | P1 | blocked | needs access |
| Collaboration permission enforcement (R-005) | exploratory | P1 | blocked (needs 4 accounts) | test-data.md |
| AI generation completes and returns output (R-006) | exploratory | P1 | blocked | ai-system-testing |
| Upload privacy/handling (R-001, R-008) | exploratory | P0 | blocked (privacy sign-off) | needs product/security |

## In Scope (this phase)

- Finalize context, journeys, and risk matrix (done).
- Resolve blocking access questions with the QA Lead.
- Define and approve the first smoke scenario.

## Deferred

- All Phase 2/3 items until access and privacy sign-off exist.

## Sequencing

Access + accounts -> smoke -> template-load regression -> grant-discovery regression -> collaboration/AI exploratory.
