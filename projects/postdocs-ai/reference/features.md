# Features

Capability inventory. What the product does — not how users feel (see `journeys/`).

| ID | Capability | Key negative flows | Status | Source | Last verified | Evidence | Links |
|----|------------|-------------------|--------|--------|---------------|----------|-------|
| F-001 | Grant search by name or funding agency | No results; irrelevant results; search timeout | inferred | docs:https://learn.postdocs.ai/features | 2026-07-07 | Features › Browse grants › Search | UC-001, PM-002, J-discover |
| F-002 | Grant status and agency filters (Open, Forthcoming, Closed; VR, Formas, Vinnova, etc.) | Wrong status shown; filter has no effect; stale data | inferred | docs:https://learn.postdocs.ai/features | 2026-07-07 | Features › Browse grants › Filters | UC-002, R-003, J-discover |
| F-003 | Bookmark grants into custom groups/folders | Bookmark lost on reload; group not persisted | inferred | docs:https://learn.postdocs.ai/features | 2026-07-07 | Features › Browse grants › Bookmark & Organize | UC-003, J-discover |
| F-004 | Filter/view bookmarked grants by custom folders | Bookmark filter empty; wrong folder contents | inferred | docs:https://learn.postdocs.ai/features | 2026-07-07 | Features › Browse grants › Filters | UC-003 |
| F-005 | Pre-loaded grant-call template on proposal creation | Wrong template; missing sections; limits not shown | inferred | docs:https://learn.postdocs.ai/features | 2026-07-07 | Features › Write › Pre-loaded templates | UC-004, R-002, J-win |
| F-006 | Character and word limit display while writing | Limits missing; incorrect limit values | inferred | docs:https://learn.postdocs.ai/features | 2026-07-07 | Features › Write › Pre-loaded templates | UC-010, R-002 |
| F-007 | Setup: upload background materials (PDF, Word, PowerPoint) | Unsupported type; upload failure; parse error | inferred | docs:https://learn.postdocs.ai/tips-and-tricks | 2026-07-07 | Tips › Upload Tips; Guides Step 4 | UC-005, R-001, R-008, J-win |
| F-008 | Setup: write project synopsis / outline | Empty synopsis blocks generation; synopsis not used in output | inferred | docs:https://learn.postdocs.ai/features | 2026-07-07 | Features › Three-Step Workflow; Tips › Synopsis | UC-005, G-synopsis |
| F-009 | Setup: describe how uploaded materials should be used | Mis-weighted sources in generated draft | inferred | docs:https://learn.postdocs.ai/guides | 2026-07-07 | Guides Step 4; Tips › Upload Tips | UC-005 |
| F-010 | Generate Project Description sections from setup inputs | Generation fails; empty output; timeout | inferred | docs:https://learn.postdocs.ai/features | 2026-07-07 | Features › Three-Step Workflow; Guides Step 4–5 | UC-006, R-006, R-009, J-win |
| F-011 | Select which sections to generate and choose language | Wrong sections generated; language mismatch | inferred | docs:https://learn.postdocs.ai/guides | 2026-07-07 | Guides Step 4 | UC-006 |
| F-012 | Edit and regenerate project-description sections | Regenerate ignores updated synopsis/materials | inferred | docs:https://learn.postdocs.ai/guides | 2026-07-07 | Guides Step 5; Tips › How to get the most out | UC-007, J-win |
| F-013 | Generate submission-form texts (abstract, popular science summary, sex/gender perspectives) from project description | Missing form fields; inconsistent with main draft | inferred | docs:https://learn.postdocs.ai/features | 2026-07-07 | Features › Three-Step Workflow; Intro FAQ use cases | UC-008, R-006, J-win |
| F-014 | Eligibility requirements with compliance checkboxes | Checkboxes not persisted; requirements missing | inferred | docs:https://learn.postdocs.ai/features | 2026-07-07 | Features › Review › Eligibility checking | UC-009, J-win |
| F-015 | Assessment criteria view and run assessment feedback | Assessment unavailable; misleading feedback | inferred | docs:https://learn.postdocs.ai/features | 2026-07-07 | Features › Review › Assessment criteria | UC-010, J-win |
| F-016 | Invite collaborators by email | Invite not delivered; invalid email accepted | inferred | docs:https://learn.postdocs.ai/features | 2026-07-07 | Features › Team collaboration; FAQ collaboration | UC-011, R-005, J-coauthor |
| F-017 | Real-time co-editing with editor presence | Lost edits; stale presence; conflict not surfaced | inferred | docs:https://learn.postdocs.ai/features | 2026-07-07 | Features › Team collaboration | UC-012, R-005, J-coauthor |
| F-018 | Comments on specific text passages | Comment lost; mis-anchored comment | inferred | docs:https://learn.postdocs.ai/features | 2026-07-07 | Features › Team collaboration | UC-013, R-005, J-coauthor |
| F-019 | Collaborator access levels: view, comment, or edit | Viewer can edit; wrong default level | inferred | docs:https://learn.postdocs.ai/ (FAQ) | 2026-07-07 | FAQ › Can I collaborate… | UC-011, Q-009, R-005 |
| F-020 | Export proposal to Microsoft Word (.docx) | Export fails; formatting lost; missing sections | inferred | docs:https://learn.postdocs.ai/ (FAQ) | 2026-07-07 | FAQ › What export formats; Guides Step 6 | UC-014, R-004, J-win |
| F-021 | Sign in via university SSO or Microsoft | SSO failure; institution not supported | inferred | docs:https://learn.postdocs.ai/guides | 2026-07-07 | Guides Step 1 | UC-015, R-007, J-win |
| F-022 | Grant database sourced from funding agencies with regular refresh | Stale deadline/eligibility; discrepancy vs agency site | inferred | docs:https://learn.postdocs.ai/ (FAQ) | 2026-07-07 | FAQ › How accurate is the grant database | R-003, Q-008 |
| F-023 | EU data residency; no third-party sharing except invited collaborators; no model training on user data | Data leaves EU; unintended retention | inferred | docs:https://learn.postdocs.ai/ (FAQ) | 2026-07-07 | FAQ › Is my data secure | R-001, Q-003 |

## Notes

- Three product pillars documented: **Browse**, **Write**, **Review** (`docs:https://learn.postdocs.ai/features`).
- File upload types confirmed in docs: PDF, Word, PowerPoint. Size limits and validation messages are **unknown** (Q-007).
- EU grants (Horizon Europe, ERC) are planned but not yet available (`docs:https://learn.postdocs.ai/` FAQ).
- Access is via institutional partnerships, not self-serve subscription (`docs:https://learn.postdocs.ai/` FAQ).
