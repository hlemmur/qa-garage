# Testing Scope Proposal — postdocs.ai

> **Status:** draft — requires QA Lead approval before sending to client.
> **Goal:** Establish QA coverage and stability ahead of 1000+ user onboarding (autumn 2026).
> **Project:** postdocs.ai
> **Date:** 2026-07-07
> **Prepared by:** QA Garage / QA Lead

---

## Goal and context

postdocs.ai helps researchers discover grants and draft proposals with AI assistance. The product is in **production** with ~300 registered users and ~50 active; a contract will onboard **1000+ additional users by autumn**. Users are typically active for **3–4 weeks per year** during grant application cycles.

This engagement focuses on **black-box QA from production**: building a smoke gate, prioritized regression coverage, and an ongoing maintenance model so critical journeys remain stable through the onboarding ramp. Discovery is complete through Phase 0C; automation follows approved test proposals.

---

## What we understand about the product

- Grant discovery: search, filter (Open/Forthcoming/Closed), bookmark groups (F-001–F-004)
- Proposal workflow: Setup → Project Description → Form & attachments (F-007–F-013)
- AI-assisted drafting and AI Collaborator chat (F-010, observed)
- Review: assessment criteria feedback (F-015)
- Export to Word .docx (F-020)
- Collaboration: invite by email with view/comment/edit (F-016–F-019)
- Auth: Microsoft + university SSO via Supabase (F-021, observed)
- Profile settings: tone of voice, research areas, Zotero integration (observed Phase 0C)

Primary journey: [win-a-grant-with-a-drafted-proposal.md](../journeys/win-a-grant-with-a-drafted-proposal.md)

---

## What matters most

| Risk | Area | Level | Why it matters |
|------|------|-------|----------------|
| R-001 | Upload privacy | Critical | Confidential research data |
| R-002 | Template accuracy | Critical | Wrong template invalidates applications |
| R-003 | Grant DB freshness | Critical | Wrong deadlines harm real applicants |
| R-004 | Export fidelity | High | Breaks funder portal submission |
| R-005 | Collaboration permissions | High | Cross-institution data leakage |
| R-006 | AI output quality | High | Misleading scientific content |
| R-007 | Auth / automation | High | Blocks unattended testing today |

**Suspected issue for product review:** KI-001 — EU Horizon grants showing **Open** with 2023 deadlines (included in proposal; disposition pending product confirmation per D-006).

---

## Proposed scope — in

| Priority | Area / journey | Test level | Rationale |
|----------|----------------|------------|-----------|
| P0 | Auth + home dashboard + navigation | Smoke (13 cases) | D-004; daily liveness |
| P0 | Create proposal → search grant → export download | Smoke + regression | Core seasonal journey |
| P0 | AI Collaborator responds | Smoke (`completion`) | AI is core value |
| P0 | Grant search, filter, bookmark | Regression | R-003 pipeline |
| P0 | Template load + generation completion | Regression | R-002, R-006 |
| P0 | .docx export contains sections | Regression | R-004 |
| P0 | Invite + permission boundaries | Regression + exploratory | R-005 |
| P1 | Upload matrix (mock data) | Regression | R-001, R-008 |
| P1 | Form & attachments step | Regression | Workflow step 3 |
| P1 | Grant spot-check vs agency sites | Manual regression | KI-001 / R-003 |
| Pre-autumn | Scale readiness checklist | Operational | 1000+ user ramp |

---

## Out of scope (this engagement)

- Funder portal submission (external systems)
- Scientific peer review of AI content (unless acceptance criteria defined)
- Load/performance testing at 1000+ concurrent users (recommend separate perf engagement)
- Mobile optimization (product displays mobile warning)
- Full university SSO matrix across institutions
- Staging environment testing (none available)

---

## How we will test

| Level | What it means for this project |
|-------|-------------------------------|
| Smoke | 13 approved cases: auth shell, dashboard widgets, nav, minimal create/export, AI response |
| Regression | ~25 proposed SCN-* scenarios with happy + negative paths |
| Exploratory | Bi-weekly charters for complex flows and new risks |
| AI eval | Deferred until QA Lead sets Q-010 thresholds |

Approach: black-box FE-first Playwright + agent exploration; production with synthetic fixtures only (D-003).

---

## What we need from you

| Decision needed | Why | Status |
|-----------------|-----|--------|
| Smoke scope (Q-005) | Defines daily gate | **Answered** D-004 |
| Grant fixture (Q-006) | Stable create-proposal tests | **Answered** D-005 |
| KI-001 disposition | Stale EU grants | **Noted** D-006 — include in proposal |
| Collaborator permission UI (Q-009) | SCN-030/031 | Open — charter queued |
| Upload limits (Q-007) | SCN-015 | Open |
| Export validation approach (Q-011) | SCN-020 | Open |
| Non-passkey test account | Unattended CI smoke | Recommended before autumn |
| Staging environment | Safer regression | Not available — using production w/ guardrails |

---

## Deliverables

- [x] Discovery reports (docs + app Phase 0B/0C)
- [x] Reference layer + ui-inventory
- [x] Smoke proposal v1 (approved)
- [x] Regression proposal v1 (draft)
- [x] Complex flows + quality strategy
- [ ] Playwright smoke suite
- [ ] P0 regression automation
- [ ] Periodic QA reports
- [ ] Pre-autumn release readiness summary

---

## Assumptions and timeline

**Assumptions:**

- Production testing approved with mock/synthetic data only (D-001, D-003)
- Primary auth remains human-in-the-loop until test account provisioned
- Autumn onboarding date TBD — ramp cadence starts T-8 weeks before

**Indicative phasing:**

1. **Now – 4 weeks:** Smoke automation + P0 regression authoring + exploratory charters
2. **4–8 weeks:** P1 regression + export/upload depth + collaboration tests
3. **T-8 → T-0:** Daily smoke, weekly P0, scope freeze, release readiness

---

## Evidence basis

- Documentation: https://learn.postdocs.ai/
- Exploration: Phase 0B/0C session logs, `evidence/discovery/2026-07-07-app-report.md`
- Human decisions: D-001 through D-007 in `decisions.md`

---

## Approval

- [ ] QA Lead reviewed for accuracy
- [ ] Recorded in `decisions.md` before client send
