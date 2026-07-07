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

### TASK-001: Create Initial Project Knowledge Base

- Status: done
- Type: knowledge, discovery
- Requested by: QA Lead
- Assigned agent/tool: GPT-5.5 in Cursor
- Created: 2026-07-07
- Updated: 2026-07-07

#### Goal

Analyze public user documentation at https://learn.postdocs.ai/ and create the initial `postdocs-ai` project knowledge base. Do not write tests.

#### Acceptance Criteria

- [x] Product map updated.
- [x] Personas and roles captured.
- [x] User journeys captured.
- [x] Risks and questions captured.
- [x] Expected behavior marked only when confirmed by docs or human approval.
- [x] `QA_PROJECT=postdocs-ai npm run qa:knowledge` passes.

#### Links

- Project context: `projects/postdocs-ai/.agents/qa-project-context.md`
- Journeys: `projects/postdocs-ai/journeys/`
- Risk matrix: `projects/postdocs-ai/risk-matrix.md`
- Strategy/plan: `projects/postdocs-ai/strategy.md`, `projects/postdocs-ai/plan.md`
- Scenario:
- Evidence: https://learn.postdocs.ai/
- Report:
- Test: none; tests intentionally not written for this task.
- Commit:

#### Progress Notes

- 2026-07-07: Read required QA Garage workflows.
- 2026-07-07: Reviewed public docs pages: Introduction, Features, Guides, Tips & Tricks, and FAQ.
- 2026-07-07: Created initial knowledge and captured open questions for access, test data, mock mode, AI output, grant data, collaboration, and export.
- 2026-07-07: Migrated to the single-source model (see TASK-003).

#### Outcome

Initial knowledge created from public documentation, then migrated to the qa-project-context single-source model. Authenticated app behavior has not been explored, and no tests were written.

#### Human Review

- Required: yes
- Status: pending
- Reviewer:
- Notes: QA Lead should approve target environment, accounts, first smoke scenario, and which docs-backed expectations may become deterministic assertions.

### TASK-002: Confirm Target Environment And Access

- Status: done
- Type: discovery, maintenance
- Requested by: GPT-5.5 in Cursor
- Assigned agent/tool: Claude in Cursor
- Created: 2026-07-07
- Updated: 2026-07-07

#### Goal

Confirm the authenticated QA target, approved test accounts, and integration/mock-mode constraints before app exploration or test authoring.

#### Acceptance Criteria

- [x] Target environment documented in `.agents/qa-project-context.md`.
- [x] Test accounts documented without secrets (`config/.env.example`, `test-data.md` env vars).
- [ ] Mock-mode availability documented for AI generation, email, SSO, document parsing, and grant data.
- [x] First smoke scenario proposed for QA Lead approval (Q-005).

#### Links

- Questions: `projects/postdocs-ai/questions.md`
- Config: `projects/postdocs-ai/config/.env.example`

#### Outcome

D-001–D-003 answered; config/.env in use; smoke proposed pending approval.

#### Human Review

- Required: yes
- Status: pending
- Reviewer:
- Notes: Approve Q-005 smoke assertions.

### TASK-003: Migrate Knowledge To Single-Source Model

- Status: done
- Type: knowledge, maintenance
- Requested by: QA Lead
- Assigned agent/tool: Claude in Cursor
- Created: 2026-07-07
- Updated: 2026-07-07

#### Goal

Migrate the postdocs-ai project from the 14-file `knowledge/` layout to the qa-project-context single-source model with skill-owned artifacts.

#### Acceptance Criteria

- [x] `.agents/qa-project-context.md` created (nine sections, no placeholders).
- [x] Real user journeys in `journeys/` (not feature lists).
- [x] Scored `risk-matrix.md` with no-go risks.
- [x] `strategy.md`, `plan.md`, `test-data.md` created.
- [x] `questions.md`, `decisions.md`, `known-issues.md` in the new format.
- [x] Old `knowledge/` and `project-context.md` removed.
- [x] `QA_PROJECT=postdocs-ai npm run qa:knowledge` passes.

#### Links

- Project context: `projects/postdocs-ai/.agents/qa-project-context.md`
- Journeys: `projects/postdocs-ai/journeys/`
- Risk matrix: `projects/postdocs-ai/risk-matrix.md`

#### Outcome

Migration complete. Content preserved from documentation-based discovery; integrations that require engineering access (Supabase/TipTap/Vercel AI) are tracked as inferred with a Phase 2 question.

#### Human Review

- Required: yes
- Status: pending
- Reviewer:
- Notes: Approve target environment, test accounts, privacy sign-off, and the first smoke scenario (blocking items in open-items.md).

### TASK-004: Populate Reference Layer From Docs

- Status: done
- Type: knowledge, discovery
- Requested by: QA Lead
- Assigned agent/tool: Claude in Cursor
- Created: 2026-07-07
- Updated: 2026-07-07

#### Goal

After harness redesign, re-analyze https://learn.postdocs.ai/ and fill the missing `reference/` knowledge layer for postdocs-ai.

#### Acceptance Criteria

- [x] `reference/` contains all five required files plus README.
- [x] Features, use cases, product map, glossary, and testability populated from docs with inline provenance.
- [x] Discovery report written to `evidence/discovery/`.
- [x] `QA_PROJECT=postdocs-ai npm run qa:knowledge` passes.

#### Links

- Reference: `projects/postdocs-ai/reference/`
- Discovery report: `projects/postdocs-ai/evidence/discovery/2026-07-07-docs-report.md`
- Evidence: https://learn.postdocs.ai/

#### Outcome

Reference layer created from Introduction, Features, Guides, Tips & Tricks, and FAQ. 23 features, 16 use cases, 14 product-map surfaces, 13 glossary terms, 14 testability rows. All marked `inferred` or `unknown` pending app exploration and human confirmation.

#### Human Review

- Required: yes
- Status: pending
- Reviewer:
- Notes: Review proposed confirmations (EU data residency, export .docx only, collaborator permissions, grant DB SLA) before promoting to `confirmed`.

### TASK-005: Phase 0B Authenticated App Discovery

- Status: done
- Type: discovery, knowledge
- Requested by: QA Lead
- Assigned agent/tool: Claude in Cursor
- Created: 2026-07-07
- Updated: 2026-07-07

#### Goal

Tour authenticated production app: navigation, grants, proposals, proposal workspace. Update reference layer and discovery evidence.

#### Acceptance Criteria

- [x] Session log filled with timeline and findings.
- [x] App discovery report written.
- [x] `reference/product-map.md` and `reference/testability.md` updated with observed status.
- [x] Suspected issues logged (KI-001).
- [x] Smoke scenario proposed (Q-005).
- [x] `QA_PROJECT=postdocs-ai npm run qa:knowledge` passes.

#### Links

- Session: `projects/postdocs-ai/evidence/sessions/2026-07-07T17-06-18-525Z-session-log.md`
- Report: `projects/postdocs-ai/evidence/discovery/2026-07-07-app-report.md`
- Job: `projects/postdocs-ai/jobs/2026-07-07T17-06-18-525Z-explore.md`

#### Outcome

Phase 0B complete. Confirmed nav shell, Supabase auth, grants/proposals lists, proposal workspace steps (Setup/quiz, project, Form & attachments), Review panel, Download Project Description. Doc contradictions and KI-001 logged.

#### Human Review

- Required: yes
- Status: pending
- Reviewer:
- Notes: Approve smoke scenario (Q-005), fixture grant (Q-006), and KI-001 disposition.

### TASK-006: Phase 0C Deep Exploration + Test Proposals

- Status: done
- Type: discovery, test-design
- Requested by: QA Lead
- Assigned agent/tool: Claude in Cursor
- Created: 2026-07-07
- Updated: 2026-07-07

#### Goal

Deep exploratory session; draft smoke proposal, regression proposal, complex flows, and autumn readiness strategy per D-004/D-007.

#### Acceptance Criteria

- [x] Phase 0C session log with findings.
- [x] `reference/ui-inventory.md` created.
- [x] `scenarios/smoke-proposal.md` v1 approved (D-004).
- [x] `scenarios/regression-proposal.md` v1 drafted.
- [x] Complex flows + maintenance strategy documented.
- [x] Client scope proposal drafted.
- [x] `strategy.md`, `plan.md`, `cadence.md` updated.

#### Links

- Report: `evidence/discovery/2026-07-07-deep-explore-report.md`
- Smoke: `scenarios/smoke-proposal.md`
- Regression: `scenarios/regression-proposal.md`
- Client: `proposals/testing-scope-2026-07-07.md`

#### Outcome

All D-004 smoke touchpoints validated except chatbot (manual follow-up). Test design artifacts ready for Playwright phase.

#### Human Review

- Required: yes
- Status: pending
- Notes: Approve regression P0; client proposal send; storageState auth for automation.
