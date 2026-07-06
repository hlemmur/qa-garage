# Claude Code Project Memory

Use the portable QA harness in this repository.

Before QA work, read:

- `core/ai/qa-principles.md`
- `core/ai/agent-operating-model.md`
- `core/ai/exploratory-workflow.md`
- `core/ai/bug-repro-workflow.md`
- `core/ai/test-authoring-workflow.md`
- `core/ai/knowledge-base-workflow.md`
- `core/ai/task-tracking-workflow.md`
- Relevant task ledger under `projects/<project>/tasks/qa-tasks.md`
- Relevant files under `projects/<project>/knowledge/`

Do not treat exploratory observations as confirmed bugs without evidence.

Do not change assertions, delete tests, skip tests, update visual baselines, redefine expected behavior, promote observed/inferred knowledge to confirmed, or mark human review as approved unless the human explicitly approves that testing-intent change.

Prefer Playwright for deterministic regression coverage and use AI-assisted exploration for discovery.
