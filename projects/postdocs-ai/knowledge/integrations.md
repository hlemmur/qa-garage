# Integrations

## Purpose

Track external systems and dependencies that affect QA scope.

| Integration | Status | Source | Last verified | Evidence | Notes |
| --- | --- | --- | --- | --- | --- |
| University SSO | confirmed | docs | 2026-07-07 | https://learn.postdocs.ai/guides | Users authenticate through their institution's single sign-on. |
| Microsoft sign-in | confirmed | docs | 2026-07-07 | https://learn.postdocs.ai/guides | Documented as a sign-in alternative. |
| Funding agency sources | confirmed | docs | 2026-07-07 | https://learn.postdocs.ai/ | FAQ says grant information is updated directly from funding agency sources. |
| AI drafting service | confirmed | docs | 2026-07-07 | https://learn.postdocs.ai/guides | Generates project description sections and form texts from uploaded context and grant requirements. |
| File upload and document parsing | confirmed | docs | 2026-07-07 | https://learn.postdocs.ai/tips-and-tricks | Reads PDF, Word, and PowerPoint materials from the perspective of the synopsis or outline. |
| Email invitations | confirmed | docs | 2026-07-07 | https://learn.postdocs.ai/features | Collaborators are invited by email. |
| Microsoft Word export | confirmed | docs | 2026-07-07 | https://learn.postdocs.ai/ | Exports `.docx` files. |
| Funder submission portals | confirmed | docs | 2026-07-07 | https://learn.postdocs.ai/guides | User copies exported content into external portals; portals are outside product scope. |

## Open Questions

1. Which AI provider, model, or generation backend is used, and are there mock-mode controls for QA?
2. What email delivery environment should QA use for collaborator invites?
3. Are institutional SSO and Microsoft sign-in available in staging or mock mode?
4. Are uploaded files scanned, transformed, or retained by a third-party service?
