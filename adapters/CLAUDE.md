# Claude Code Project Memory

Use the portable QA harness in this repository.

Before QA work, read:

- `core/ai/qa-principles.md`
- `core/ai/agent-operating-model.md`
- `core/ai/exploratory-workflow.md`
- `core/ai/bug-repro-workflow.md`
- `core/ai/test-authoring-workflow.md`

Do not treat exploratory observations as confirmed bugs without evidence.

Do not change assertions, delete tests, skip tests, update visual baselines, or redefine expected behavior unless the human explicitly approves that testing-intent change.

Prefer Playwright for deterministic regression coverage and use AI-assisted exploration for discovery.
