# User Journeys

## Purpose

Track observed and confirmed user workflows. Only approved journeys should become deterministic regression assertions.

| Journey | Persona | Status | Source | Last verified | Evidence | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Sign in through university account or Microsoft | Experienced PI | confirmed | docs | 2026-07-07 | https://learn.postdocs.ai/guides | User goes to `app.postdocs.ai`, selects a sign-in alternative, and authenticates through institutional SSO. |
| Browse grants | Experienced PI | confirmed | docs | 2026-07-07 | https://learn.postdocs.ai/guides | User opens `Grants`, browses open and forthcoming calls, filters by funding agency or status, and opens grant details. |
| Organize grants | Experienced PI | confirmed | docs | 2026-07-07 | https://learn.postdocs.ai/features | User searches grants, bookmarks grants, and organizes bookmarks into custom folders. |
| Create proposal from grant call | Experienced PI | confirmed | docs | 2026-07-07 | https://learn.postdocs.ai/guides | User clicks `Create proposal`, searches for target grant call, and selects it to start a proposal. |
| Complete setup | Experienced PI | confirmed | docs | 2026-07-07 | https://learn.postdocs.ai/guides | User uploads background materials, describes how to use them, writes a synopsis, selects sections and language, then generates. |
| Generate and edit project description | Experienced PI | confirmed | docs | 2026-07-07 | https://learn.postdocs.ai/guides | AI generates selected sections; user reviews and edits each section. |
| Iterate on generation inputs | Experienced PI | confirmed | docs | 2026-07-07 | https://learn.postdocs.ai/tips-and-tricks | User tweaks synopsis or uploaded materials, regenerates the same section, and compares output. |
| Generate submission form texts | Experienced PI | confirmed | docs | 2026-07-07 | https://learn.postdocs.ai/features | User generates abstract, popular science summary, sex- and gender perspectives, and related form answers from project description. |
| Review eligibility and assessment criteria | Experienced PI | confirmed | docs | 2026-07-07 | https://learn.postdocs.ai/features | User views eligibility checkboxes and runs an assessment against reviewer criteria. |
| Collaborate on proposal | Experienced PI, Research collaborator | confirmed | docs | 2026-07-07 | https://learn.postdocs.ai/features | PI invites collaborators by email; collaborators view, comment, or edit. |
| Export to Word and submit externally | Experienced PI | confirmed | docs | 2026-07-07 | https://learn.postdocs.ai/guides | User exports to Word and copies content into the funder's submission portal. |

## Candidate Journeys

- Authentication smoke.
- Grant discovery and filtering.
- Proposal creation setup.
- AI generation happy path using non-sensitive fixtures.
- Regeneration after synopsis or upload changes.
- Eligibility and assessment review.
- Collaboration invite and permission checks.
- Export to Word.

## Open Questions

1. Which journey should be the first smoke scenario once access is available?
2. Which AI generation outputs are deterministic enough for regression testing, and which should remain exploratory or human-reviewed?
