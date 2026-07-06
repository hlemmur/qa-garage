# Project Knowledge Base

This directory is the durable source of project understanding for QA work. Agents should read it before discovery, exploratory testing, bug reproduction, scenario updates, or test authoring.

## Knowledge Status

Use one status for every durable item:

- `confirmed`: approved by a human or authoritative source.
- `observed`: seen during exploration or testing, not yet approved.
- `inferred`: reasoned from UI, docs, or behavior, not directly confirmed.
- `outdated`: likely stale and needs review.
- `unknown`: explicitly unresolved.

## Entry Metadata

Each durable item should include:

- Status:
- Source:
- Last verified:
- Evidence:
- Owner:
- Notes:

## Approval Rule

AI may add observations and proposed updates. AI must not promote observed or inferred behavior to confirmed expected behavior without human approval.

## Files

- `product-map.md`: surfaces, pages, navigation, and major states.
- `glossary.md`: product terms and canonical names.
- `personas.md`: users, roles, and permissions.
- `user-journeys.md`: observed and confirmed workflows.
- `feature-inventory.md`: features and confidence level.
- `expected-behavior.md`: human-approved expected behavior only.
- `test-data.md`: accounts, data setup, fixtures, and constraints.
- `integrations.md`: external systems and dependencies.
- `risks.md`: quality risks and testing response.
- `known-issues.md`: confirmed issues and reproduction status.
- `release-notes.md`: change history that affects QA scope.
- `decisions.md`: human decisions that define testing intent.
- `questions.md`: unresolved questions for humans or product owners.
