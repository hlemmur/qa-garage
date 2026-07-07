# Product Map

Surfaces, navigation, and major UI states discovered or confirmed from documentation and Phase 0B app exploration.

| ID | Surface / area | Navigation path | Important states | Status | Source | Last verified | Evidence | Links |
|----|----------------|-----------------|------------------|--------|--------|---------------|----------|-------|
| PM-001 | Sign-in / landing | https://app.postdocs.ai/ → `/auth` → Microsoft or university SSO | Unauthenticated; auth in progress; authenticated redirect to `/home` | observed | app:2026-07-07 | 2026-07-07 | session log; app report | F-021, UC-015 |
| PM-002 | Home dashboard | Sidebar → Home → `/home` | Grants summary; profile card; recent proposals | observed | app:2026-07-07 | 2026-07-07 | session log | UC-004 |
| PM-003 | Grants list | Sidebar → Grants → `/grants` | List loaded; filtered; bookmarked toggle; empty results | observed | app:2026-07-07 | 2026-07-07 | session log | F-001, F-002, UC-001 |
| PM-004 | Grant detail | Grants list → click grant | Detail view; requirements; deadline; eligibility summary | inferred | docs:https://learn.postdocs.ai/guides | 2026-07-07 | Guides Step 2 | UC-001, R-003 |
| PM-005 | Bookmarks / bookmark groups | Grants → Bookmarked toggle + per-row bookmark | Bookmarked; unbookmarked; group filter | observed | app:2026-07-07 | 2026-07-07 | session log | F-003, F-004 |
| PM-006 | Proposals list | Sidebar → Proposals → `/proposals` | Empty; has proposals (In progress); search | observed | app:2026-07-07 | 2026-07-07 | session log | UC-004 |
| PM-007 | Create proposal / grant picker | Proposals → Create proposal → modal | Search results; grant selected | observed | app:2026-07-07 | 2026-07-07 | session log | UC-004, F-005 |
| PM-008 | Setup page | Proposal → Setup tab → `/steps/quiz` | Uploads; synopsis; start modes; ready to generate | observed | app:2026-07-07 | 2026-07-07 | session log | F-007–F-009, UC-005 |
| PM-009 | Project description editor | Setup → Generate → `/steps/project` | Section list; generating; draft; rich-text editing | observed | app:2026-07-07 | 2026-07-07 | session log | F-010–F-012, UC-006 |
| PM-010 | Form & attachments | Step switcher → Form & attachments | Form fields; attachments (not fully toured) | observed | app:2026-07-07 | 2026-07-07 | session log | F-013, UC-008 |
| PM-011 | Review — assessment | Right panel → Review | Criteria visible; Review proposal action | observed | app:2026-07-07 | 2026-07-07 | session log | F-015, UC-010 |
| PM-012 | Download project description | Editor toolbar | Download in progress; .docx downloaded | observed | app:2026-07-07 | 2026-07-07 | session log | F-020, UC-014 |
| PM-013 | Share / invite dialog | Proposal → Open menu → Invite | Email entry; permission selector (unverified) | inferred | docs:https://learn.postdocs.ai/features | 2026-07-07 | Open menu observed; dialog not opened | F-016, F-019, UC-011 |
| PM-014 | Collaborative editor (shared) | Open shared proposal | AI Collaborator, Comments panels observed | partial | app + docs | 2026-07-07 | session log | F-017, F-018, UC-012 |
| PM-015 | Learn (docs) | Sidebar → Learn | External documentation link | observed | app:2026-07-07 | 2026-07-07 | session log | — |

## Navigation overview

Confirmed authenticated structure (Phase 0B):

```text
app.postdocs.ai
├── /auth — Sign in (Microsoft | university SSO)
└── Authenticated app
    ├── /home           (sidebar Home) — dashboard, recent proposals
    ├── /grants         (sidebar Grants) — browse, search, filter, bookmark
    ├── /proposals      (sidebar Proposals) — list, create, open proposal
    ├── Learn           (sidebar) — external docs
    └── Proposal workspace  /proposals/{uuid}/steps/{step}
        ├── /steps/quiz     — Setup (UI label)
        ├── /steps/project  — Project Description (rich-text editor)
        ├── Form & attachments (step 3; slug TBD)
        ├── Right rail: AI Collaborator | Sections | Comments | Review | Sources
        ├── Download Project Description (toolbar)
        └── Open menu: Invite | Duplicate | Open call text | Delete
```

## Notes

- Setup UI label is **Setup**; URL slug is **`quiz`** (not `setup`).
- Export control is labeled **Download Project Description**, not "Export".
- Documentation site (https://learn.postdocs.ai/) is separate from the product app (https://app.postdocs.ai/).
- Eligibility checkboxes (F-014) not located in Review panel during this tour — may live elsewhere.
