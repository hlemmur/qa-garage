# Test Data

## Purpose

Record account, fixture, and data setup constraints without storing secrets.

| Data area | Status | Source | Last verified | Evidence | Notes |
| --- | --- | --- | --- | --- | --- |
| Institutional SSO account | unknown | docs | 2026-07-07 | https://learn.postdocs.ai/guides | Required for authenticated app testing if university sign-in is used. |
| Microsoft sign-in account | unknown | docs | 2026-07-07 | https://learn.postdocs.ai/guides | Alternative sign-in path documented, but test account is not available yet. |
| Grant calls | confirmed | docs | 2026-07-07 | https://learn.postdocs.ai/features | Docs mention Swedish funders including VR, Formas, Vinnova, and Energimyndigheten. |
| Background materials | confirmed | docs | 2026-07-07 | https://learn.postdocs.ai/tips-and-tricks | Supported examples include PDF, Word, and PowerPoint files. |
| Proposal fixture | unknown | QA setup | 2026-07-07 | `project-context.md` | Need non-sensitive mock research materials and synopsis. |
| Collaborator email | unknown | docs | 2026-07-07 | https://learn.postdocs.ai/features | Needed to validate invite, comment, and edit flows. |

## Data Constraints

- Do not use confidential research proposals, unpublished papers, or personal data in automation fixtures.
- Prefer generated mock research content for uploads and synopsis text.
- Avoid sending collaborator invites to real users unless explicitly approved.
- Grant data freshness claims require either app-visible metadata or product-provided validation rules.

## Open Questions

1. What test accounts are approved for automated QA?
2. Should QA use production grant data, staging grant data, or synthetic grant fixtures?
3. Are AI outputs retained, and how should automated runs clean up generated proposal data?
