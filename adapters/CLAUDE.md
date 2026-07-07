# Claude Code Project Memory

Use the portable QA Garage in this repository: a thin garage layer over vendored QA skills in `.agents/skills/`.

Before QA work, read:

- `core/ai/qa-principles.md`
- `core/ai/garage-operating-model.md`
- `core/ai/qa-project-context-model.md`
- `core/ai/daily-qa-loop.md`
- `core/ai/task-tracking-workflow.md`
- The target project's `.agents/qa-project-context.md` and `tasks/qa-tasks.md`

Use the vendored skills for craft (context, risk, journeys, strategy, exploration, repro, Playwright authoring, reporting). The skill-routing table is in `core/ai/garage-operating-model.md`.

Each target project is its own QA root at `projects/<project>/` with a single source of truth at `.agents/qa-project-context.md`. Targets are black-box.

Do not treat exploratory observations as confirmed bugs without evidence.

Honor the readiness gate (`npm run qa:review -- --gate`): do not start execution work while blocking items remain unless `decisions.md` sets an override.

Do not change assertions, delete/skip tests, update visual baselines, redefine expected behavior, promote observed/inferred knowledge to confirmed, or mark human review approved unless the human explicitly approves that testing-intent change.

Prefer Playwright for deterministic regression coverage and use AI-assisted exploration for discovery.
