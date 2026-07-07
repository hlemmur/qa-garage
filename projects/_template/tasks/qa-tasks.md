# QA Tasks

This ledger tracks QA work requested for this project. Keep entries concise, linked, and append-only unless correcting a factual error.

## Status Values

- `proposed`
- `approved`
- `in_progress`
- `blocked`
- `done`
- `cancelled`

## Task Ledger

### TASK-001: Docs Discovery

- Status: proposed
- Type: knowledge, discovery
- Requested by: QA Lead
- Assigned agent/tool:
- Created:
- Updated:

#### Goal

Analyze available user documentation and populate the initial `reference/` layer. Do not write tests.

#### Acceptance Criteria

- [ ] `reference/features.md`, `use-cases.md`, `product-map.md`, `glossary.md` populated from docs.
- [ ] Draft `journeys/` and `risk-matrix.md` from docs.
- [ ] `.agents/qa-project-context.md` Product section updated.
- [ ] `evidence/discovery/<date>-docs-report.md` written.
- [ ] Open questions raised in `questions.md`.
- [ ] `QA_PROJECT=<project> npm run qa:knowledge` passes.

#### Links

- Reference: `reference/`
- Scenario:
- Evidence: `evidence/discovery/`
- Report:
- Test: none
- Commit:

#### Progress Notes

-

#### Outcome

Pending.

#### Human Review

- Required: yes
- Status: pending
- Reviewer:
- Notes:

### TASK-002: App Discovery

- Status: proposed
- Type: discovery
- Requested by: QA Lead
- Assigned agent/tool:
- Created:
- Updated:

#### Goal

Run exploratory charters against the live app; update `reference/testability.md` and validate docs-sourced facts.

#### Acceptance Criteria

- [ ] At least one session log in `evidence/sessions/`.
- [ ] `reference/` updated with `observed` facts and evidence paths.
- [ ] `reference/testability.md` filled with automation notes.
- [ ] `evidence/discovery/<date>-app-report.md` written.
- [ ] Contradictions raised in `questions.md` (not silently overwritten).

#### Links

- Reference: `reference/`
- Evidence: `evidence/sessions/`
- Report: `evidence/discovery/`
- Test: none
- Commit:

#### Progress Notes

-

#### Outcome

Pending.

#### Human Review

- Required: yes
- Status: pending
- Reviewer:
- Notes:

### TASK-003: Reconcile Sources

- Status: proposed
- Type: knowledge, maintenance
- Requested by: QA Lead
- Assigned agent/tool:
- Created:
- Updated:

#### Goal

Reconcile docs vs exploration via `knowledge-curator`; human reviews proposed confirmations.

#### Acceptance Criteria

- [ ] No silent conflicts between docs and app evidence.
- [ ] Proposed confirmations listed; human decisions recorded in `decisions.md` where approved.
- [ ] `npm run qa:review` regenerated `open-items.md`.

#### Links

- Reference: `reference/`
- Decisions: `decisions.md`
- Commit:

#### Progress Notes

-

#### Outcome

Pending.

#### Human Review

- Required: yes
- Status: pending
- Reviewer:
- Notes:
