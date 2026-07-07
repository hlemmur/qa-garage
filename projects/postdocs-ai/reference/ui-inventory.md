# UI Inventory — postdocs-ai

Widget bundles, routes, and smoke candidacy from Phase 0B/0C exploration. Source: session logs 2026-07-07.

| ID | Widget / bundle | Route / trigger | Expected when (account: owner w/ seed data) | Smoke candidate | Status | Evidence |
|----|-----------------|-----------------|---------------------------------------------|-----------------|--------|----------|
| UI-001 | Auth shell | `/auth` | Microsoft + university SSO buttons | yes (manual auth) | observed | Phase 0B |
| UI-002 | Home dashboard | `/home` | Grants card, Profile card, Recent proposals table | yes | observed | Phase 0C |
| UI-003 | Grants summary card | `/home` | Opportunity count + funding-body count | yes | observed | Phase 0C |
| UI-004 | Explore grants CTA | Home → Explore | Navigates to `/grants?status=open,forthcoming` | yes | observed | Phase 0C |
| UI-005 | Profile card + Edit | Home → Edit | Opens `/profile/settings` | yes | observed | Phase 0C |
| UI-006 | Create proposal CTA | Home or Proposals | Modal **Select a grant call** with search | yes | observed | Phase 0C |
| UI-007 | Grant picker modal | Create proposal | Search returns grant rows; select creates proposal | yes | observed | Phase 0C |
| UI-008 | Sidebar primary nav | All authed pages | Home, Grants, Proposals buttons route correctly | yes | observed | Phase 0C |
| UI-009 | Sidebar Learn | Click Learn | New tab `learn.postdocs.ai` with UTM params | yes | observed | Phase 0C |
| UI-010 | Notifications panel | Sidebar bell | Panel expands; heading **Notifications** | yes | observed | Phase 0C |
| UI-011 | Username menu | Sidebar username | Navigates to `/profile/settings` | yes | observed | Phase 0C |
| UI-012 | Support chatbot | Bottom-right (home) | Chat widget opens | yes (partial) | partial | DOM buttons opacity:0 in automation — manual verify |
| UI-013 | Grants list | `/grants` | Search, Bookmarked toggle, Status/Funding body filters | regression | observed | Phase 0B |
| UI-014 | Proposals list | `/proposals` | My proposals, search, status In progress | regression | observed | Phase 0B |
| UI-015 | Proposal workspace header | `/proposals/{id}/steps/*` | Title, step switcher, Open menu | yes | observed | Phase 0B |
| UI-016 | Setup step | `/steps/quiz` | Start modes, synopsis fields, Generate project description | regression | observed | Phase 0B/0C |
| UI-017 | Project description editor | `/steps/project` | Rich-text toolbar, sections, Download Project Description | yes | observed | Phase 0C |
| UI-018 | AI Collaborator panel | Proposal workspace | Message input, Send, greeting, AI response | yes | observed | Phase 0C |
| UI-019 | Right rail tabs | Proposal workspace | AI Collaborator, Sections, Comments, Review, Sources | regression | observed | Phase 0B |
| UI-020 | Review panel | Review tab | Assessment criteria + Review proposal | regression | observed | Phase 0B |
| UI-021 | Profile settings | `/profile/settings` | Name, institution, tone of voice, research areas, bookmark groups, Zotero connect, logout | regression | observed | Phase 0C |
| UI-022 | Mobile warning banner | All pages | "isn't optimized for mobile yet" | monitor | observed | Phase 0B |
| UI-023 | Download export | Project Description toolbar | Button disables during download; .docx file | yes | observed | Phase 0C |

## State notes

- **Owner account (seed):** 6+ proposals In progress; profile populated; bookmark groups present.
- **Empty account:** Not yet explored — defer empty-state smoke until second account available.
- **Auth automation:** Passkey blocks unattended login; use `storageState` after human sign-in (D-002).

## Negative / edge surfaces (regression, not smoke)

- Grant search with no results
- Create proposal with invalid/empty search
- Generate project description with empty synopsis (button disabled observed)
- Export with empty sections (TBD)
- Invite to non-allowlisted email (must not test outside D-003)
- Concurrent edit / permission boundaries (R-005)
- Upload unsupported file type / oversize (Q-007)
