# Smoke Proposal

Agile backlog of proposed smoke cases. Source-labeled; human approves before Playwright authoring.

See `core/ai/smoke-test-model.md` and `core/skills/smoke-test-design/SKILL.md`.

## Metadata

- **Version:** v1
- **Status:** approved
- **Primary journey:** [win-a-grant-with-a-drafted-proposal.md](../journeys/win-a-grant-with-a-drafted-proposal.md)
- **Last updated:** 2026-07-07
- **Approved by:** QA Lead, 2026-07-07 (D-004)

## Assumptions

| Item | Value | Source |
|------|-------|--------|
| Environment | Production `https://app.postdocs.ai/` | D-001 |
| Account / role | Owner (`POSTDOCS_OWNER_EMAIL`); passkey auth | D-002 |
| Seed data | 6+ proposals; profile populated; grants count ~1119 | Phase 0C observation |
| Auth method | Human-in-the-loop Microsoft OAuth → Playwright `storageState` reuse | D-002, T-001 |
| Mock mode | off (production) | D-001 |
| Grant fixture | Innovative startups 2026 (Vinnova) or equivalent open grant | D-005 |
| Export fixture | Brain health 2026 proposal with generated Objectives section (existing) | Phase 0C |

**Note:** QA Lead expanded canonical harness smoke (D-004) to include minimal primary journey + AI Collaborator completion. Budget target relaxed to **~10–15 minutes** including human auth and AI wait (vs default 5 min).

## Primary journey smoke path (minimal)

Shortest credible path through win-a-grant journey per D-004:

1. **Access** — Authenticated session active (human sign-in or saved storageState).
2. **Start proposal** — Home → Create proposal → search fixture grant → select → lands on Setup `/steps/quiz`.
3. **Export handoff** — Open existing proposal with content → Project Description → **Download Project Description** → download starts (file present; content validation deferred to regression SCN-020).
4. **AI Collaborator** — Send one prompt → assistant response appears (completion-level; no quality eval).

**Phases in smoke:** Access, Find/Start (minimal), Export (download trigger), AI Collaborator (completion)  
**Phases deferred:** Full generation, Form & attachments, Review assessment quality, collaboration, export fidelity

## Proposed smoke cases

| ID | Description | Source | Refs | Needs human review | Status |
|----|-------------|--------|------|--------------------|--------|
| SMK-001 | Authenticated user reaches `/home` (or redirect from `/auth`) with session stable | `human` | D-004, UI-002 | no | approved |
| SMK-002 | Home dashboard shows Grants card, Profile card (name visible), Most recent proposals section | `observation` | UI-002, UI-003 | yes | approved |
| SMK-003 | **Create proposal** on home is enabled; opens **Select a grant call** modal with search field | `observation` | UI-006, UI-007 | yes | approved |
| SMK-004 | **Explore** on home grants card navigates to `/grants` with status query params | `observation` | UI-004 | yes | approved |
| SMK-005 | **Edit** on profile card opens `/profile/settings` with Profile Information form | `observation` | UI-005, UI-021 | yes | approved |
| SMK-006 | Sidebar **Home**, **Grants**, **Proposals** each navigate to expected routes | `observation` | UI-008 | yes | approved |
| SMK-007 | Sidebar **Learn** opens `learn.postdocs.ai` in new tab | `observation` | UI-009 | yes | approved |
| SMK-008 | Sidebar **Notifications** expands panel with Notifications heading | `observation` | UI-010 | yes | approved |
| SMK-009 | Sidebar **username** opens `/profile/settings` | `observation` | UI-011 | yes | approved |
| SMK-010 | Support chatbot button opens chat widget | `observation` | UI-012 | yes | approved (partial — automation blocked; manual or CDP fallback) |
| SMK-011 | Minimal create path: search **Innovative startups 2026** → select → proposal workspace loads at `/proposals/{uuid}/steps/quiz` | `human` | D-005, UI-007 | no | approved |
| SMK-012 | Export path: **Download Project Description** on seeded proposal disables during download / file received | `observation` | UI-023, F-020 | yes | approved |
| SMK-013 | AI Collaborator: send prompt → response text appears within timeout (≤60s); no error state | `human` | D-004, UI-018, F-010 | no | approved |

### Source tiers

| Source | Meaning | Automation gate |
|--------|---------|-----------------|
| `observation` | From exploration/session | Approve case individually |
| `docs` | From user/dev documentation | Approve if docs trusted |
| `human` | QA Lead decision | Already approved |
| `issue` | Known issue / bug report | Approve disposition |

**Status values:** `proposed` → `approved` → `automated` | `rejected` | `deferred`

## Out of smoke (explicit)

- AI output scientific quality / grounding (→ `@ai-eval` regression)
- Export .docx structure and formatting fidelity (→ SCN-020 regression)
- Grant database accuracy / stale statuses (→ exploratory + KI-001)
- Collaboration permissions and concurrency (→ SCN-030+ regression)
- Upload matrix and file validation (→ SCN-015 regression)
- Negative/error matrices (→ regression-proposal.md)
- Empty-account empty states (→ deferred until second account)
- University SSO path (→ separate charter)

## Approval

- [x] Assumptions reviewed (D-004, D-005)
- [x] All `observation` cases individually approved (QA Lead scope answer 2026-07-07)
- [x] Recorded in `decisions.md` (D-004)
- [ ] Ready for `playwright-automation` — pending storageState strategy sign-off

## Automation notes

- Tag suite: `@smoke`; AI cases additionally `@ai-smoke` (excluded from flake % per R-006/R-009).
- Auth: `tests/e2e/.auth/owner.json` from manual `auth.setup.ts` run; never commit secrets.
- SMK-010: widget buttons report `opacity: 0` in a11y tree — use visual/manual check or wait-for-visible helper; document flake policy.
- SMK-012: assert `download` event + non-zero file size; do not parse docx in smoke.
- SMK-013: assert response region has text length > N; forbid exact string match.
- Cleanup: delete smoke-created proposals (e.g. UUID from SMK-011) after run; keep Brain health fixture.
- Selectors: prefer `getByRole('button', { name: ... })` per `reference/testability.md`.
