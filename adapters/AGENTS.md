# Agent Instructions

This repository is a portable AI-native QA Garage: a thin harness layer over vendored QA skills in `.agents/skills/`.

Before QA-related work, read the **Read Order** in `core/ai/qa-garage-operating-model.md`, especially:

- `core/ai/discovery-workflow.md`
- `core/ai/knowledge-maintenance.md`
- `core/ai/test-design-principles.md`
- `core/ai/human-decides-loop.md`
- `core/ai/qa-cadence.md`
- `core/ai/scope-proposal-workflow.md`

Also read the target project's `.agents/qa-project-context.md`, `reference/`, `journeys/`, `risk-matrix.md`, scenarios, `tasks/qa-tasks.md`, and `cadence.md`.

Harness wrappers: `core/skills/` (project-discovery, knowledge-curator, scope-proposal, task-tracker). Vendored craft: `.agents/skills/`.

## Rules

- Each target project is its own QA root at `projects/<project>/`. Black-box: source from docs and exploration.
- Living knowledge in `reference/` — update via `knowledge-curator` every session.
- Use Playwright output as deterministic source of truth.
- Discovery gate is soft; execution gate via `qa:review -- --gate`.
- Do not promote knowledge to confirmed, change assertions, or send client proposals without human approval.

## Commands

- Validate: `npm run qa:knowledge`
- Open items / gate: `npm run qa:review` (`-- --gate`)
- Discover: `npm run qa:discover -- "charter"`
- Proposal: `npm run qa:proposal -- "goal"`
- Smoke / regression: `npm run qa:smoke`, `npm run qa:regression`
- Report: `npm run qa:report`
- Tasks: `npm run qa:tasks`
