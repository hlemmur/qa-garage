# Deep Exploratory Report — Phase 0C

**Date:** 2026-07-07  
**Session:** `evidence/sessions/2026-07-07T19-19-01-441Z-session-log.md`  
**Purpose:** Validate QA Lead smoke scope (D-004); feed ui-inventory, smoke/regression proposals, autumn readiness planning.

## Summary

Phase 0C confirmed all D-004 smoke touchpoints except support chatbot (automation-blocked). Minimal journey create → search → workspace verified. Export download and AI Collaborator response verified. Profile settings surface expanded testable area.

## Smoke validation matrix

| D-004 requirement | Result | SMK ID |
|-------------------|--------|--------|
| Authenticated session | Pass | SMK-001 |
| Dashboard widgets | Pass | SMK-002 |
| Create proposal modal | Pass | SMK-003 |
| Explore → grants | Pass → `/grants?status=open,forthcoming` | SMK-004 |
| Profile Edit | Pass → `/profile/settings` | SMK-005 |
| Sidebar Home/Grants/Proposals | Pass (Grants confirmed) | SMK-006 |
| Learn clickable | Pass → new tab learn.postdocs.ai | SMK-007 |
| Notifications | Pass → panel expands | SMK-008 |
| Username menu | Pass → profile settings | SMK-009 |
| Support chatbot | **Partial** — opacity 0 in automation | SMK-010 |
| Create + search grant | Pass — Innovative startups 2026 | SMK-011 |
| Export | Pass — download triggered | SMK-012 |
| AI responds | Pass — section list returned ~15s | SMK-013 |

## New surfaces for regression

- `/profile/settings`: tone of voice, Zotero Connect, bookmark groups, file management, logout
- AI Collaborator **Thought** expandable during generation
- Grant picker search placeholder differs from grants page search text

## Outputs

- `reference/ui-inventory.md` (23 widgets)
- `scenarios/smoke-proposal.md` v1 approved
- `scenarios/regression-proposal.md` v1 proposed
- `scenarios/complex-flows-and-quality-strategy.md`
- `proposals/testing-scope-2026-07-07.md`
- `cadence.md` pre-autumn schedule

## Human review

- [ ] Approve regression proposal P0 (SCN-001–031)
- [ ] Manual SMK-010 chatbot verification
- [ ] Approve client scope proposal before send
- [ ] Sign off storageState auth for Playwright implementation
