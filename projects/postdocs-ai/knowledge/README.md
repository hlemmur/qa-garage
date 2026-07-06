# Project Knowledge Base

This directory is the durable source of project understanding for QA work on postdocs.ai.

## Sources Reviewed

| Source | Status | Last verified | Evidence | Notes |
| --- | --- | --- | --- | --- |
| Public documentation home | confirmed | 2026-07-07 | https://learn.postdocs.ai/ | Product overview, use cases, target audience, FAQ. |
| Features documentation | confirmed | 2026-07-07 | https://learn.postdocs.ai/features | Browse, Write, Review feature areas. |
| Guide documentation | confirmed | 2026-07-07 | https://learn.postdocs.ai/guides | Idea-to-draft workflow. |
| Tips documentation | confirmed | 2026-07-07 | https://learn.postdocs.ai/tips-and-tricks | Usage guidance for synopsis and uploaded materials. |

## Knowledge Status

Use one status for every durable item:

- `confirmed`: approved by a human or backed by an authoritative source such as current product docs.
- `observed`: seen during exploration or testing, not yet approved.
- `inferred`: reasoned from UI, docs, or behavior, not directly confirmed.
- `outdated`: likely stale and needs review.
- `unknown`: explicitly unresolved.

## Approval Rule

Docs-backed product facts may be recorded here, but deterministic Playwright assertions should still be created only after the QA Lead approves the intended expected behavior or scenario.

## Files

- `product-map.md`: surfaces, pages, navigation, and major states.
- `glossary.md`: product terms and canonical names.
- `personas.md`: users, roles, and permissions.
- `user-journeys.md`: observed and confirmed workflows.
- `feature-inventory.md`: features and confidence level.
- `expected-behavior.md`: docs-backed and human-approved expected behavior.
- `test-data.md`: accounts, data setup, fixtures, and constraints.
- `integrations.md`: external systems and dependencies.
- `risks.md`: quality risks and testing response.
- `known-issues.md`: confirmed issues and reproduction status.
- `release-notes.md`: change history that affects QA scope.
- `decisions.md`: human decisions that define testing intent.
- `questions.md`: unresolved questions for humans or product owners.
