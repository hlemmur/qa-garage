# Expected Behavior

## Purpose

Record docs-backed or human-approved expected behavior. Deterministic Playwright assertions should be grounded here, in approved scenarios, or in approved bug reports.

## Docs-Backed Expectations

These items are backed by current public documentation, but QA Lead approval is still required before using them as deterministic test assertions.

| Behavior | Status | Source | Last verified | Evidence | Owner | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Users can sign in at `app.postdocs.ai` with a university account or Microsoft. | confirmed | docs | 2026-07-07 | https://learn.postdocs.ai/guides | QA Lead | Needs account-specific validation. |
| Users can browse open and forthcoming grant calls from the Grants sidebar entry. | confirmed | docs | 2026-07-07 | https://learn.postdocs.ai/guides | QA Lead | Filter details are in feature docs. |
| Users can filter grants by status and funding agency. | confirmed | docs | 2026-07-07 | https://learn.postdocs.ai/features | QA Lead | Status values documented as Open, Forthcoming, Closed. |
| Users can bookmark grants into custom groups. | confirmed | docs | 2026-07-07 | https://learn.postdocs.ai/features | QA Lead | Example groups: `Priority Applications`, `2026 Deadlines`. |
| Selecting a grant call loads a pre-loaded template. | confirmed | docs | 2026-07-07 | https://learn.postdocs.ai/features | QA Lead | Template accuracy needs product validation. |
| Character and word limits are displayed while writing. | confirmed | docs | 2026-07-07 | https://learn.postdocs.ai/features | QA Lead | Exact UI and boundary behavior unknown. |
| Proposal setup accepts background materials and a project synopsis. | confirmed | docs | 2026-07-07 | https://learn.postdocs.ai/guides | QA Lead | Fixture data must be non-sensitive. |
| AI generates selected project description sections based on materials and grant requirements. | confirmed | docs | 2026-07-07 | https://learn.postdocs.ai/guides | QA Lead | Quality assertions require human-defined criteria. |
| Users can generate submission form texts from the project description. | confirmed | docs | 2026-07-07 | https://learn.postdocs.ai/features | QA Lead | Includes abstract, popular science summary, sex- and gender perspectives. |
| Users can invite collaborators by email to view, comment, or edit proposals. | confirmed | docs | 2026-07-07 | https://learn.postdocs.ai/ | QA Lead | Permission model needs confirmation. |
| Users can see eligibility requirements with checkboxes. | confirmed | docs | 2026-07-07 | https://learn.postdocs.ai/features | QA Lead | Checkbox persistence and semantics unknown. |
| Users can view assessment criteria and run an assessment for category feedback. | confirmed | docs | 2026-07-07 | https://learn.postdocs.ai/features | QA Lead | Output determinism unknown. |
| Users can export proposal content to Microsoft Word `.docx`. | confirmed | docs | 2026-07-07 | https://learn.postdocs.ai/ | QA Lead | Guide also says exported content can be pasted into funder portals. |

## Proposed Expectations

| Behavior | Current status | Source | Evidence | Question |
| --- | --- | --- | --- | --- |
| The first smoke test should authenticate and reach a stable authenticated landing page. | proposed | QA setup | `project-context.md` | Which account and landing page should define smoke success? |
| AI generation tests should validate workflow completion and presence of output, not scientific quality. | proposed | QA setup | `feature-inventory.md` | What output checks are acceptable without over-asserting AI content? |

## Approval Notes

When a human confirms expected behavior for test assertions, record the decision in `decisions.md`.
