# Product Map

Surfaces, navigation, and major UI states discovered or confirmed from documentation. App layout unverified until Phase 0B exploration.

| ID | Surface / area | Navigation path | Important states | Status | Source | Last verified | Evidence | Links |
|----|----------------|-----------------|------------------|--------|--------|---------------|----------|-------|
| PM-001 | Sign-in / landing | https://app.postdocs.ai/ → university SSO or Microsoft | Unauthenticated; auth in progress; authenticated landing | inferred | docs:https://learn.postdocs.ai/guides | 2026-07-07 | Guides Step 1 | F-021, UC-015 |
| PM-002 | Grants list | Sidebar → Grants | List loaded; filtered; empty results; loading | inferred | docs:https://learn.postdocs.ai/guides | 2026-07-07 | Guides Step 2 | F-001, F-002, UC-001 |
| PM-003 | Grant detail | Grants list → click grant | Detail view; requirements; deadline; eligibility summary | inferred | docs:https://learn.postdocs.ai/guides | 2026-07-07 | Guides Step 2 | UC-001, R-003 |
| PM-004 | Bookmarks / bookmark groups | Grants area (bookmark action + folder filter) | Bookmarked; unbookmarked; group selected | inferred | docs:https://learn.postdocs.ai/features | 2026-07-07 | Features › Bookmark & Organize | F-003, F-004 |
| PM-005 | Proposals list | Sidebar → Proposals (inferred) | Empty; has proposals; loading | inferred | docs:https://learn.postdocs.ai/guides | 2026-07-07 | Guides Step 3 | UC-004 |
| PM-006 | Create proposal / grant picker | Proposals → Create proposal → search grant | Search results; grant selected | inferred | docs:https://learn.postdocs.ai/guides | 2026-07-07 | Guides Step 3 | UC-004, F-005 |
| PM-007 | Setup page | New proposal → Setup tab | Uploads present; synopsis empty/filled; ready to generate | inferred | docs:https://learn.postdocs.ai/features | 2026-07-07 | Features › Three-Step Workflow; Guides Step 4 | F-007–F-009, UC-005 |
| PM-008 | Project description editor | Setup → Generate Project Description → editor | Section list; generating; draft ready; editing | inferred | docs:https://learn.postdocs.ai/guides | 2026-07-07 | Guides Step 5 | F-010–F-012, UC-006 |
| PM-009 | Submission-form generator | After project description (third workflow step) | Form fields empty; generated; editing | inferred | docs:https://learn.postdocs.ai/features | 2026-07-07 | Features › Three-Step Workflow | F-013, UC-008 |
| PM-010 | Review — eligibility | Review area (inferred tab/section) | Requirements listed; checkboxes unchecked/checked | inferred | docs:https://learn.postdocs.ai/features | 2026-07-07 | Features › Eligibility checking | F-014, UC-009 |
| PM-011 | Review — assessment | Review area | Criteria visible; assessment running; feedback shown | inferred | docs:https://learn.postdocs.ai/features | 2026-07-07 | Features › Assessment criteria | F-015, UC-010 |
| PM-012 | Export toolbar | Proposal editor toolbar → Export | Export ready; download in progress; .docx downloaded | inferred | docs:https://learn.postdocs.ai/guides | 2026-07-07 | Guides Step 6; FAQ export | F-020, UC-014 |
| PM-013 | Share / invite dialog | Proposal → share/invite (inferred) | Email entry; permission selector (view/comment/edit); invite sent | inferred | docs:https://learn.postdocs.ai/features | 2026-07-07 | Features › Team collaboration; FAQ | F-016, F-019, UC-011 |
| PM-014 | Collaborative editor (shared) | Open shared proposal | Presence indicators; concurrent edits; comments panel | inferred | docs:https://learn.postdocs.ai/features | 2026-07-07 | Features › Team collaboration | F-017, F-018, UC-012 |

## Navigation overview

Documented top-level areas (inferred from guides):

```text
app.postdocs.ai
├── Sign in (university SSO | Microsoft)
└── Authenticated app
    ├── Grants          (sidebar) — browse, search, filter, bookmark, detail
    ├── Proposals       (sidebar) — list, create, open proposal
    └── Proposal workspace (per proposal)
        ├── Setup tab
        ├── Project description editor
        ├── Submission-form texts (workflow step 3)
        ├── Review (eligibility + assessment)
        ├── Export (toolbar)
        └── Share / collaborate
```

## Notes

- Exact sidebar labels, tab names, and URL routes are **inferred** from guides; confirm in Phase 0B app exploration.
- Documentation site (https://learn.postdocs.ai/) is separate from the product app (https://app.postdocs.ai/).
