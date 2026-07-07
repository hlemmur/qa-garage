# Smoke Proposal

See `core/ai/smoke-test-model.md`. Copy structure from `core/templates/smoke-proposal.md`.

**Status:** proposed — do not author `tests/e2e/*.spec.ts` until human approves this document and records approval in `decisions.md`.

## Assumptions

| Item | Value | Source |
|------|-------|--------|
| Environment | [TARGET_URL from config] | |
| Account / role | | |
| Seed data | | |
| Auth method | | |

## Primary journey smoke path (minimal)

Link: `journeys/create-proposal-for-a-grant.md` (replace with project primary journey).

1. Access — sign in, reach stable landing
2. [minimal next phase]

## Proposed smoke cases

| ID | Description | Source | Refs | Needs human review | Status |
|----|-------------|--------|------|--------------------|--------|
| SMK-001 | Target loads with non-empty title (placeholder until proposal filled) | `docs` | qa-project-context | no | proposed |

## Out of smoke

- AI output quality, export fidelity, negative flows — regression / exploratory

## Approval

- [ ] Assumptions reviewed
- [ ] Observation cases approved
- [ ] Recorded in `decisions.md`
