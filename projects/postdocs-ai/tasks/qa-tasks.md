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

- Knowledge: `projects/postdocs-ai/knowledge/`
- Project context: `projects/postdocs-ai/project-context.md`
- Scenario:
- Evidence: https://learn.postdocs.ai/
- Report:
- Test: none; tests intentionally not written for this task.
- Commit:

#### Progress Notes

- 2026-07-07: Read required QA-harness workflows.
- 2026-07-07: Reviewed public docs pages: Introduction, Features, Guides, Tips & Tricks, and FAQ.
- 2026-07-07: Created required knowledge files and captured open questions for access, test data, mock mode, AI output, grant data, collaboration, and export.

#### Outcome

Initial knowledge base created from public documentation. Authenticated app behavior has not been explored, and no tests were written.

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

- [ ] Target environment documented in `project-context.md`.
- [ ] Test accounts documented without secrets.
- [ ] Mock-mode availability documented for AI generation, email, SSO, document parsing, and grant data.
- [ ] First smoke scenario proposed for QA Lead approval.

#### Links

- Knowledge: `projects/postdocs-ai/knowledge/questions.md`
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
