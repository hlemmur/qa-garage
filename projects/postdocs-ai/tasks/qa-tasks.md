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

- Status: proposed
- Type: discovery, maintenance
- Requested by: GPT-5.5 in Cursor
- Assigned agent/tool:
- Created: 2026-07-07
- Updated: 2026-07-07

#### Goal

Confirm the authenticated QA target, approved test accounts, and integration/mock-mode constraints before app exploration or test authoring.

#### Acceptance Criteria

- [ ] Target environment documented in `.agents/qa-project-context.md`.
- [ ] Test accounts documented without secrets.
- [ ] Mock-mode availability documented for AI generation, email, SSO, document parsing, and grant data.
- [ ] First smoke scenario proposed for QA Lead approval.

#### Links

- Questions: `projects/postdocs-ai/questions.md`
- Open items: `projects/postdocs-ai/open-items.md`
- Scenario:
- Evidence:
- Report:
- Test:
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
