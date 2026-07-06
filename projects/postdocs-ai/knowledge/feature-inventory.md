# Feature Inventory

## Purpose

Track product features, confidence level, and testing response.

| Feature | Status | Source | Last verified | Evidence | Suggested coverage | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Documentation site | confirmed | docs exploration | 2026-07-07 | https://learn.postdocs.ai/ | smoke | Public docs load and expose four top-level pages. |
| Authentication | confirmed | docs | 2026-07-07 | https://learn.postdocs.ai/guides | exploratory, smoke | Sign-in alternatives include university account or Microsoft. |
| Grant search | confirmed | docs | 2026-07-07 | https://learn.postdocs.ai/features | regression | Search by grant name or funding agency. |
| Grant filters | confirmed | docs | 2026-07-07 | https://learn.postdocs.ai/features | regression | Filter by Open, Forthcoming, Closed, funding agency, or bookmarked grants. |
| Grant bookmark groups | confirmed | docs | 2026-07-07 | https://learn.postdocs.ai/features | regression | Custom groups organize grant pipeline. |
| Proposal creation | confirmed | docs | 2026-07-07 | https://learn.postdocs.ai/guides | smoke, regression | Create proposal from target grant call. |
| Pre-loaded grant templates | confirmed | docs | 2026-07-07 | https://learn.postdocs.ai/features | regression | Selecting a grant call loads its template. |
| Character and word limits | confirmed | docs | 2026-07-07 | https://learn.postdocs.ai/features | regression, exploratory | Limits are displayed while writing. |
| Background material uploads | confirmed | docs | 2026-07-07 | https://learn.postdocs.ai/guides | regression, data | Supports previous proposals, papers, reports, PDF, Word, and PowerPoint files. |
| Synopsis-guided generation | confirmed | docs | 2026-07-07 | https://learn.postdocs.ai/tips-and-tricks | exploratory, regression candidate | Synopsis guides grant-call answers and uploaded file handling. |
| Project description generation | confirmed | docs | 2026-07-07 | https://learn.postdocs.ai/features | exploratory, regression candidate | Generate selected sections in a chosen language. |
| Submission form text generation | confirmed | docs | 2026-07-07 | https://learn.postdocs.ai/features | exploratory, regression candidate | Generates abstract, popular science summary, sex- and gender perspectives, and final form answers. |
| Real-time collaboration | confirmed | docs | 2026-07-07 | https://learn.postdocs.ai/features | regression, exploratory | Includes email invites, real-time editing visibility, and comments on text passages. |
| Eligibility checking | confirmed | docs | 2026-07-07 | https://learn.postdocs.ai/features | regression | Funder requirements are shown with checkboxes. |
| Assessment criteria review | confirmed | docs | 2026-07-07 | https://learn.postdocs.ai/features | exploratory, regression candidate | Users can run an assessment for feedback by category. |
| Word export | confirmed | docs | 2026-07-07 | https://learn.postdocs.ai/ | regression | FAQ says export format is Microsoft Word `.docx`. |

## Coverage Gaps

- Smoke: authenticated app smoke is not defined yet.
- Regression: no approved scenarios or tests yet.
- Exploratory: AI generation quality, grant database freshness, collaboration, and file upload handling.
- Visual: editor, proposal template, and generated document formatting are not covered.
- Accessibility: docs and app accessibility are unknown.
- API/data: grant database source updates and uploaded file processing are unknown.
- Performance: generation time, upload limits, and collaboration responsiveness are unknown.

## Open Questions

1. Which features are available in a QA/staging environment versus production only?
2. What upload size limits and accepted file extensions are enforced?
3. Can grant database freshness be validated through visible timestamps or metadata?
