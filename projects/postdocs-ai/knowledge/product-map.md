# Product Map

## Purpose

Map the product surfaces a QA agent has discovered or confirmed.

## Surfaces

| Surface | Status | Source | Last verified | Evidence | Notes |
| --- | --- | --- | --- | --- | --- |
| Public learning documentation | confirmed | docs | 2026-07-07 | https://learn.postdocs.ai/ | Contains Introduction, Features, Guides, Tips & Tricks, and FAQ. |
| Production application | confirmed | docs | 2026-07-07 | https://learn.postdocs.ai/guides | Guide instructs users to sign in at `app.postdocs.ai`. |
| Grants page | confirmed | docs | 2026-07-07 | https://learn.postdocs.ai/guides | Sidebar entry used to browse open and forthcoming calls. |
| Proposals page | confirmed | docs | 2026-07-07 | https://learn.postdocs.ai/guides | Entry point for creating proposals. |
| Proposal setup page or tab | confirmed | docs | 2026-07-07 | https://learn.postdocs.ai/features | Users upload background materials and write a synopsis before generation. |
| Project description editor | confirmed | docs | 2026-07-07 | https://learn.postdocs.ai/features | AI-generated proposal sections are reviewed and edited here. |
| Submission form text generation | confirmed | docs | 2026-07-07 | https://learn.postdocs.ai/features | Generates abstract, popular science summary, sex- and gender perspectives, and other form answers. |
| Review area | confirmed | docs | 2026-07-07 | https://learn.postdocs.ai/features | Includes eligibility checks and assessment criteria feedback. |
| Collaboration and comments | confirmed | docs | 2026-07-07 | https://learn.postdocs.ai/features | Users invite collaborators by email, collaborate in real time, and comment on text passages. |
| Export action | confirmed | docs | 2026-07-07 | https://learn.postdocs.ai/guides | Exports proposal content for finishing outside postdocs.ai. |

## Navigation

- Public docs navigation: Introduction, Features, Guides, Tips & Tricks.
- App navigation documented so far: sidebar `Grants`, `Proposals`, proposal setup, project description, review, and export toolbar.
- Authentication documented so far: university account or Microsoft sign-in through `app.postdocs.ai`.

## Important States

- Empty: unknown.
- Loading: unknown.
- Success: proposal sections generated; docs do not define UI confirmation states.
- Error: unknown.
- Saved: unknown.
- Refreshed: grant calls are described as regularly refreshed.
- Permission denied: unknown.

## Open Questions

1. What are the exact route URLs for Grants, Proposals, Setup, Project Description, Review, and Export in the authenticated app?
2. What success and failure messages appear after proposal creation, upload, generation, collaboration invite, and export?
