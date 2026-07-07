# App Discovery Report — Phase 0B

**Date:** 2026-07-07  
**Target:** https://app.postdocs.ai/ (production)  
**Scope:** Authenticated app tour — navigation, grants browse, proposals list, create-proposal entry, proposal workspace  
**Session log:** `evidence/sessions/2026-07-07T17-06-18-525Z-session-log.md`  
**Operator:** QA Lead (Microsoft OAuth) + agent browser

## Executive summary

Phase 0B confirmed the authenticated product shell, main navigation, grants and proposals list surfaces, and the proposal workspace layout. Auth routes through **Supabase** (`supabase.postdocs.ai`). The three-step workflow is visible as **Setup → Project Description → Form & attachments**. Several doc-vs-app discrepancies were found (EU grant availability, export label, Setup URL slug, stale grant statuses).

All findings below are **observed** unless marked suspected. None are promoted to **confirmed** expected behavior without QA Lead review.

## Auth and entry

| Item | Observation |
|------|-------------|
| Sign-in URL | `/auth` |
| Providers | Continue with Microsoft; Continue with university account |
| OAuth callback | `https://supabase.postdocs.ai/auth/v1/callback` |
| Post-auth landing | `/home` |
| Automation | Passkey / human OAuth blocks unattended Playwright (D-002) |

## Navigation (authenticated)

Sidebar links observed:

- **Home** → `/home`
- **Grants** → `/grants`
- **Proposals** → `/proposals`
- **Learn** (external docs link)
- **Notifications** (bell icon)
- Profile menu (user name)

Mobile warning banner present on desktop viewport.

## Home (`/home`)

- Grants summary card: opportunity count and funding-body count (1,119 / 35 on session date).
- Profile card with research areas.
- Recent proposals table with **Create proposal** action.
- User name displayed in header.

## Grants (`/grants`)

- Search placeholder: `Search grant call or funding agency...`
- **Bookmarked** toggle filter.
- **Status** filter: Open, Forthcoming, Closed (checkboxes; all checked by default).
- **Funding body** filter.
- Per-row **Bookmark grant** action.
- Grant cards show title, funding body, status badge, deadline.

**Suspected issue:** EU Horizon/EIC calls appear with **Open** status and 2023 deadlines — possible stale data (see R-003, known-issues KI-001).

**Doc contradiction:** FAQ states EU grants are upcoming; EU calls already appear in production browse.

## Proposals (`/proposals`)

- **My proposals** list with status **In progress**.
- Search: `Search proposals...`
- **Create proposal** opens modal **Select a grant call** with grant search.
- Stable fixture candidate: **Innovative startups 2026** (Vinnova).

Existing proposals observed (owner workspace): Brain health 2026, Innovative startups 2026, and others (6 total).

## Proposal workspace

**URL pattern:** `/proposals/{uuid}/steps/{step}`

| UI step | URL slug | Notes |
|---------|----------|-------|
| Setup | `/steps/quiz` | `/steps/setup` returns 404 |
| Project Description | `/steps/project` | Rich-text editor |
| Form & attachments | (not fully toured) | Third step label confirmed in step switcher |

**Right panel tabs:** AI Collaborator, Sections, Comments, Review, Sources.

**Toolbar:** Rich-text controls (H2, font, bold, lists, tables, version history).

**Export:** Button labeled **Download Project Description** (not generic "Export").

**Open menu (⋯):** Invite, Duplicate proposal, Open call text, Delete proposal.

**Review panel:** Assessment criteria — Excellence, Impact, Quality and efficiency of the implementation; **Review proposal** button.

## Setup step (`/steps/quiz`)

- Start modes: from existing proposal, from scratch, I don't know.
- Fields: Synopsis, Background, Purpose and objective, Method/implementation, Expected outcomes, File(s), Other instructions.
- Actions: **Generate project description**, Add template.

Maps to docs "Outline" terminology (Q-013 resolved as observed alias).

## Doc vs app reconciliation

| Topic | Docs say | App shows | Action |
|-------|----------|-----------|--------|
| EU grants | Upcoming (FAQ) | EU calls in browse | Raise with product (Q-008) |
| Export | Export toolbar | Download Project Description | Update selectors/docs refs |
| Setup route | Setup tab | URL slug `quiz` | Use `/steps/quiz` in tests |
| Workflow step 3 | Submission-form texts | Form & attachments | Align glossary |
| Learn | Not in product map | Sidebar link | Add PM-015 |

## Smoke test proposal (Q-005)

**Proposed (not approved):** After human-assisted auth, assert:

1. URL matches `/home` (or redirects there).
2. Sidebar contains links named **Grants** and **Proposals**.
3. User display name visible in header/profile area.

Does not exercise AI generation or uploads — suitable for human-in-the-loop smoke.

## Recommended next charters

1. Setup upload with mock PDF + single-section generation (D-003).
2. Invite dialog and permission levels (allowlist emails).
3. Form & attachments step tour.
4. Download Project Description → validate .docx opens and contains sections.
5. Grant status spot-check against authoritative funder page (R-003).

## Evidence

- Session log: `evidence/sessions/2026-07-07T17-06-18-525Z-session-log.md`
- Job stub: `jobs/2026-07-07T17-06-18-525Z-explore.md`
- Reference updates: `reference/product-map.md`, `reference/testability.md`

## Human review needed

- Approve smoke scenario (Q-005).
- Confirm whether stale EU grant statuses are known/accepted (KI-001).
- Approve fixture grant **Innovative startups 2026** for create-proposal tests (Q-006 partial).
