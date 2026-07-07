# Smoke Proposal

Agile backlog of proposed smoke cases. Source-labeled; human approves before Playwright authoring.

See `core/ai/smoke-test-model.md` and `core/skills/smoke-test-design/SKILL.md`.

## Metadata

- **Version:** v1
- **Status:** proposed | approved | obsolete
- **Primary journey:** [journeys/create-proposal-for-a-grant.md](../journeys/create-proposal-for-a-grant.md) (or project-specific path)
- **Last updated:**
- **Approved by:** [human, date — required before `*.spec.ts`]

## Assumptions

| Item | Value | Source |
|------|-------|--------|
| Environment | | |
| Account / role | | |
| Seed data | | |
| Auth method | | human-in-the-loop / automated |
| Mock mode | on / off | |

Unknowns → `questions.md`. Do not automate against undocumented assumptions.

## Primary journey smoke path (minimal)

Shortest credible path through the #1 journey. Link journey file and phases covered.

1. [phase / step]
2. [phase / step]
3. [phase / step]

**Phases in smoke:** Access, […]  
**Phases deferred:** [AI generation, export, …]

## Proposed smoke cases

| ID | Description | Source | Refs | Needs human review | Status |
|----|-------------|--------|------|--------------------|--------|
| SMK-001 | | `observation` | UI-001, session log | yes | proposed |
| SMK-002 | | `docs` | F-001, docs URL | no | proposed |
| SMK-003 | | `human` | decisions D-001 | no | proposed |
| SMK-004 | | `issue` | KI-001 | yes | proposed |

### Source tiers

| Source | Meaning | Automation gate |
|--------|---------|-----------------|
| `observation` | From exploration/session | Approve case individually |
| `docs` | From user/dev documentation | Approve if docs trusted |
| `human` | QA Lead decision | Already approved |
| `issue` | Known issue / bug report | Approve disposition |

**Status values:** `proposed` → `approved` → `automated` | `rejected` | `deferred`

## Out of smoke (explicit)

- [concern deferred to regression / exploratory / AI eval]

## Approval

- [ ] Assumptions reviewed
- [ ] All `observation` cases individually approved
- [ ] Recorded in `decisions.md`
- [ ] Ready for `playwright-automation`

## Automation notes

Filled after approval — selectors, fixtures, flake policy in `reference/testability.md`.
