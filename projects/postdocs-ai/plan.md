# Test Plan — postdocs-ai (Phase 1)

Translates `strategy.md` into current-phase work. Updated 2026-07-07 after Phase 0C + smoke/regression proposals.

## Coverage Map

| Journey / Risk | Level | Priority | Status | Evidence / Test |
|----------------|-------|----------|--------|-----------------|
| Auth + home dashboard shell (D-004) | smoke SMK-001–010 | P0 | proposed automation | `scenarios/smoke-proposal.md` |
| Minimal create + export + AI (D-004) | smoke SMK-011–013 | P0 | proposed automation | Phase 0C session |
| Grant search/filter/bookmark | regression SCN-001–003 | P0 | proposed | `regression-proposal.md` |
| Create proposal + template (R-002) | regression SCN-004–005 | P0 | proposed | Phase 0C |
| AI generation completion (R-006) | regression SCN-010 | P0 | proposed | `@ai-smoke` |
| Word .docx export sections (R-004) | regression SCN-020 | P0 | proposed | Phase 0C download observed |
| Collaboration invite/permissions (R-005) | regression SCN-030–031 | P0 | blocked Q-009 UI | exploratory next |
| Upload privacy/handling (R-001, R-008) | regression SCN-015 | P0 | approved scope D-003 | fixtures TBD |
| Grant freshness (R-003, KI-001) | exploratory SCN-040 | P1 | suspected | in client proposal |
| Form & attachments (F-013) | regression SCN-012–013 | P1 | not toured | charter queued |
| Profile settings | regression SCN-021 | P1 | observed Phase 0C | `/profile/settings` |
| Pre-autumn scale readiness | checklist Flow F | P0 | proposed | complex-flows doc |

## In Scope (this phase)

- [x] Phase 0B/0C discovery and reference layer
- [x] Smoke proposal v1 approved (D-004)
- [x] Regression proposal v1 drafted
- [x] Complex flows + maintenance strategy documented
- [ ] Playwright smoke implementation (after storageState sign-off)
- [ ] P0 regression authoring (after regression approval in decisions.md)
- [ ] Client scope proposal for autumn readiness

## Deferred

- Phase 2 backend/API until engineering access (Q-012 partial — Supabase auth only)
- AI quality eval until Q-010 answered
- Load testing until product approves approach
- University SSO institution matrix

## Sequencing

1. Approve regression proposal (P0 SCN-*)
2. Implement auth setup + smoke Playwright suite
3. Create mock fixtures (`fixtures/`)
4. P0 regression automation
5. Exploratory charters (invite, form step, upload matrix)
6. Pre-autumn Flow F checklist run

## Seasonal note

Grant-season spikes align with user activity (3–4 weeks). Increase cadence to **daily smoke + weekly full P0** starting **6 weeks before autumn onboarding**.
