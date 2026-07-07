# Regression Test Proposal — v1

Proposed deterministic regression coverage for postdocs-ai Phase 1. **No Playwright until scenarios approved in `decisions.md`.**

Grounded in: `risk-matrix.md`, `journeys/`, Phase 0C exploration, QA Lead scale context (~300 users, ~50 active, 1000+ expected autumn).

## Metadata

- **Version:** v1
- **Status:** proposed
- **Last updated:** 2026-07-07
- **Target environment:** Production (D-001) with mock fixtures only (D-003)

## Prioritization rationale

| Driver | Implication for regression |
|--------|---------------------------|
| ~50 active users today, 1000+ onboarding autumn | Smoke + P0 regressions must gate releases; focus on auth shell, proposal create/edit/export, AI completion |
| Users active 3–4 weeks/year (grant season) | Seasonal usage spikes — stability > breadth; avoid flaky AI string asserts |
| No staging | Production-safe fixtures; cleanup after runs; no destructive tests on real user data |
| Black-box + passkey auth | Human auth setup + storageState; collaboration tests need second account |

## Proposed regression scenarios

### P0 — Release gates (automate first)

| ID | Scenario | Happy path | Key negatives | Source | Risk / Journey | Tags |
|----|----------|------------|---------------|--------|----------------|------|
| SCN-001 | Grant search returns known fixture | Search "Innovative startups" → Vinnova row visible | No results message; special chars | `observation` | R-003, J-discover | `@regression` |
| SCN-002 | Status filter changes grant set | Uncheck Open → count decreases | All filters off → empty or all | `observation` | R-003, F-002 | `@regression` |
| SCN-003 | Bookmark grant persists | Bookmark row → toggle Bookmarked filter → row visible | Unbookmark removes from filter | `observation` | F-003, J-discover | `@regression` |
| SCN-004 | Create proposal loads correct template sections | Select Vinnova fixture → Setup shows grant-specific fields; AI lists Vinnova sections | Wrong grant selected; modal cancel | `observation` | R-002, J-win | `@regression` |
| SCN-005 | Setup synopsis gate | Empty synopsis → Generate disabled | Minimal synopsis → Generate enabled | `observation` | F-008, R-008 | `@regression` |
| SCN-010 | Generate project description completes | Mock synopsis + optional mock PDF → generation finishes; Project Description has content | Timeout; error toast; empty editor | `docs`+`observation` | R-006, R-009, J-win | `@regression` `@ai-smoke` |
| SCN-020 | Export .docx contains expected sections | Download from Brain health fixture → file opens; Objectives heading present | Empty export; corrupt file; zero bytes | `observation` | R-004, J-win | `@regression` |
| SCN-030 | Invite collaborator (edit) | Owner invites allowlisted collaborator email; invite sent UI | Non-allowlist rejected; invalid email | `human` | R-005, D-003, J-coauthor | `@regression` |
| SCN-031 | Collaborator edit access | Collaborator opens shared proposal → can edit section | Viewer cannot edit toolbar | `docs` | R-005, Q-009 | `@regression` |

### P1 — High value, next wave

| ID | Scenario | Happy path | Key negatives | Source | Risk / Journey | Tags |
|----|----------|------------|---------------|--------|----------------|------|
| SCN-011 | Regenerate after synopsis change | Change synopsis → regenerate → editor updates | Stale content after regen | `docs` | F-012, R-006 | `@regression` |
| SCN-012 | Form & attachments step loads | Navigate step 3 → form fields for grant visible | Missing fields vs template | `observation` | F-013 | `@regression` |
| SCN-013 | Form text generation completes | Generate abstract/summary fields | Empty output | `docs` | R-006 | `@regression` `@ai-smoke` |
| SCN-014 | Review assessment runs | Review proposal → feedback sections appear | Error/hang | `observation` | F-015 | `@regression` `@ai-smoke` |
| SCN-015 | Upload mock PDF on Setup | Upload fixture PDF → listed in File(s) | Unsupported type; oversize (Q-007) | `human` | R-001, R-008 | `@regression` |
| SCN-021 | Profile save research area | Add area → Save Profile enabled → persists reload | Duplicate area; empty save disabled | `observation` | UI-021 | `@regression` |
| SCN-022 | Proposals list search | Search partial title → filters list | No match empty state | `observation` | F-005 | `@regression` |
| SCN-032 | Invite accept (cold user) | Invite `POSTDOCS_INVITE_EMAIL` → accept → access proposal | Expired invite | `human` | J-coauthor, D-003 | `@regression` |
| SCN-033 | Comments on passage | Add comment → visible in Comments panel | Comment on empty selection | `docs` | F-018, R-005 | `@regression` |
| SCN-040 | Grant spot-check vs agency | Pick one grant → deadline/status matches funder page | Mismatch flags KI-001 class | `observation` | R-003, KI-001 | `@regression` `@manual` |

### P2 — Monitor / seasonal

| ID | Scenario | Notes | Tags |
|----|----------|-------|------|
| SCN-050 | Duplicate proposal | Open menu → Duplicate → new proposal in list | `@regression` |
| SCN-051 | Delete test proposal | Open menu → Delete → confirm → removed from list | `@regression` |
| SCN-052 | Version history | Edit → version history shows prior snapshot | `@regression` |
| SCN-053 | Zotero connect entry | Profile → Connect button reachable (no real OAuth) | `@regression` |
| SCN-054 | Sources panel grounding | Highlight text → sources listed | `@regression` |
| SCN-055 | Concurrent edit (2 sessions) | Owner + collaborator edit same section | `@regression` `@flaky-excluded` |

## AI assertion policy (regression)

| Scenario type | Assertion level | Notes |
|---------------|-----------------|-------|
| SCN-010, SCN-013, SCN-014 | `completion` | Workflow finishes; output region non-empty |
| Future quality gate | `property` / `eval` | Requires Q-010 answer + golden set in `decisions.md` |

Never assert exact LLM strings. Tag `@ai-smoke` cases excluded from flake threshold.

## Fixtures and data

| Fixture | Path / ref | Use |
|---------|------------|-----|
| Grant search term | Innovative startups 2026 | SCN-001, SCN-004, smoke SMK-011 |
| Seeded proposal | Brain health 2026 (`7ea4317d-…`) | SCN-020, SMK-012 |
| Mock PDF | `fixtures/mock-research-background.pdf` (create) | SCN-015 |
| Mock synopsis | Inline 2–3 sentences synthetic | SCN-005, SCN-010 |

## Approval checklist

- [ ] P0 scenarios reviewed by QA Lead
- [ ] Negative cases acceptable for production execution
- [ ] Record approval in `decisions.md` before Playwright authoring
- [ ] Move approved rows to `scenarios/approved/` as individual spec files (optional)

## Out of regression (this phase)

- Funder portal submission (external)
- Scientific accuracy of AI drafts
- Load/performance at 1000+ users (separate perf charter pre-autumn)
- Mobile layout (banner warns not optimized)
- University SSO matrix (institution-specific)
