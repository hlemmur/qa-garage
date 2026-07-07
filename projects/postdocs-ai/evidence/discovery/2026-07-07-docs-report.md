# Discovery Report — Docs Pass

## Project

- Name: postdocs-ai
- Target URL: https://app.postdocs.ai/
- Environment: production (only documented environment; staging unknown)
- Date: 2026-07-07
- Agent/tool: Claude in Cursor (browser extraction from https://learn.postdocs.ai/)

## Product Surfaces Observed

From documentation only (no authenticated app access):

- Sign-in (university SSO, Microsoft)
- Grants list with search, status/agency filters, bookmarks/groups, grant detail
- Proposals list and create-proposal grant picker
- Proposal workspace: Setup, Project description editor, submission-form generator, Review (eligibility + assessment), Export toolbar, Share/collaborate

## Reference Updates Proposed

| ID / Artifact | Summary | Status | Source | Evidence |
| --- | --- | --- | --- | --- |
| reference/features.md | 23 capabilities (F-001–F-023) across Browse, Write, Review | inferred | docs:https://learn.postdocs.ai/ | evidence/discovery/2026-07-07-docs-report.md |
| reference/use-cases.md | 16 use cases (UC-001–UC-016) | inferred | docs:https://learn.postdocs.ai/ | same |
| reference/product-map.md | 14 surfaces (PM-001–PM-014) | inferred | docs:https://learn.postdocs.ai/guides | same |
| reference/glossary.md | 13 terms (G-001–G-013) | inferred | docs:https://learn.postdocs.ai/ | same |
| reference/testability.md | 14 testability rows (T-001–T-014) | unknown | docs pass | same |

## Context Updates

| Artifact / Section | Summary | Status | Source | Evidence |
| --- | --- | --- | --- | --- |
| qa-project-context › Product | Three pillars: Browse, Write, Review | inferred | docs:https://learn.postdocs.ai/features | same |
| qa-project-context › Product | Collaborator permissions: view, comment, edit | inferred | docs FAQ | same |
| qa-project-context › Environments | Institutional partnerships only; contact research office | inferred | docs FAQ | same |
| qa-project-context › Tech Stack | Upload types: PDF, Word, PowerPoint; EU data residency | inferred | docs FAQ + Tips | same |
| questions.md Q-009 | Proposed: view, comment, edit (docs FAQ) | inferred | docs FAQ | same |
| questions.md Q-007 | Partial: PDF/Word/PPT supported; limits still unknown | inferred | docs Tips | same |

## Core Journeys

1. Discover and track grants — unchanged; aligned with reference F-001–F-004
2. Win a grant with a drafted proposal — unchanged; aligned with reference F-005–F-020
3. Co-author with a collaborator — unchanged; FAQ adds view/comment/edit levels (F-019)

## Personas And Accounts

- Primary persona: experienced PI applying for Swedish national grants (VR, Formas, Vinnova, Energimyndigheten)
- Access via institutional partnerships (not self-serve subscription)
- Test accounts: unknown — blocking (Q-002)
- Collaboration testing needs owner + editor + commenter/viewer + invited-not-yet-accepted (test-data.md)

## Initial Smoke Candidates

1. Sign-in reaches authenticated landing (Q-005 open for exact assertion)
2. Grants sidebar loads list (post-auth)
3. Create proposal from known grant loads template (regression candidate)

## Exploratory Charters

1. Grant filter accuracy vs agency websites (R-003)
2. Upload + single-section generation loop (Tips workflow)
3. Collaborator permission boundaries view vs comment vs edit (R-005)
4. .docx export structure inspection (R-004)

## Risks And Unknowns

- File size limits and validation errors (Q-007)
- Permission revocation and viewer enforcement (not in docs)
- Setup vs Outline naming inconsistency in Tips vs Guides
- No staging environment (Q-001)
- Mock mode for AI/SSO/email (Q-004)

## Proposed Confirmations

Docs-backed behaviors awaiting QA Lead approval before `confirmed` status:

- EU data storage; no model training on user data (F-023)
- Export format is .docx only (F-020)
- Collaborator levels: view, comment, edit (F-019)
- Grant DB refreshed from agency sources; 24h discrepancy SLA (F-022)

## Setup Blockers

- No approved test accounts or target-environment sign-off
- No privacy sign-off for upload tests
- Production-only; institutional SSO may block automation

## Recommended Next Step

QA Lead answers blocking questions Q-001–Q-003 and approves test accounts (TASK-002), then run Phase 0B app exploration to move reference rows from `inferred`/`unknown` to `observed`.
