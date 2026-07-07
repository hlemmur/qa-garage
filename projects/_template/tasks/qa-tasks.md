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
- Evidence: `evidence/discovery/`
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
- [ ] `reference/ui-inventory.md` updated with widget bundles and smoke candidates.
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

### TASK-004: Reference Maintenance (recurring)

- Status: proposed
- Type: knowledge, maintenance
- Requested by: QA Lead
- Assigned agent/tool:
- Created:
- Updated:

#### Goal

Reconcile `reference/` with latest docs, session logs, and test results via `knowledge-curator`.

#### Acceptance Criteria

- [ ] Stale entries marked `outdated` where evidence conflicts.
- [ ] New facts added with status, inline source, and evidence.
- [ ] Contradictions raised in `questions.md`.
- [ ] `npm run qa:knowledge` passes.

#### Links

- Reference: `reference/`
- Evidence: `evidence/sessions/`
- Commit:

#### Progress Notes

-

#### Outcome

Pending.

#### Human Review

- Required: no
- Status: not required
- Reviewer:
- Notes:

### TASK-005: Draft Client Scope Proposal

- Status: proposed
- Type: knowledge, reporting
- Requested by: QA Lead
- Assigned agent/tool:
- Created:
- Updated:

#### Goal

Synthesize a client-facing testing scope proposal from project artifacts for a stated engagement goal.

#### Acceptance Criteria

- [ ] `npm run qa:proposal -- "<goal>"` scaffold created or updated.
- [ ] All sections filled from `reference/`, `risk-matrix.md`, `plan.md`, `questions.md`.
- [ ] Every in-scope row traceable to ID; blockers framed as client dependencies.
- [ ] Human approval recorded in `decisions.md` before external send.

#### Links

- Proposal: `proposals/`
- Reference: `reference/`
- Plan: `plan.md`
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

### TASK-006: Draft Smoke Proposal

- Status: proposed
- Type: test design
- Requested by: QA Lead
- Assigned agent/tool:
- Created:
- Updated:

#### Goal

Draft source-labeled smoke scope in `scenarios/smoke-proposal.md` after Phase 0B — no Playwright until human approves.

#### Acceptance Criteria

- [ ] `scenarios/smoke-proposal.md` drafted from `core/templates/smoke-proposal.md`.
- [ ] Assumptions documented (account, seed data, environment, auth).
- [ ] Every SMK-* case has a source tier (`observation` | `docs` | `human` | `issue`).
- [ ] Primary journey minimal path linked to `journeys/` file.
- [ ] Out-of-smoke deferrals listed explicitly.
- [ ] No `*.spec.ts` changes until `decisions.md` records approval.

#### Links

- Model: `core/ai/smoke-test-model.md`
- Skill: `core/skills/smoke-test-design/SKILL.md`
- Reference: `reference/ui-inventory.md`
- Proposal: `scenarios/smoke-proposal.md`
- Test: none (until approved)
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
