# Claude Code Project Memory

Use the portable QA Garage in this repository: a thin harness layer over vendored QA skills in `.agents/skills/`.

Before QA work, read the **Read Order** in `core/ai/qa-garage-operating-model.md` and the target project's `.agents/qa-project-context.md`, `reference/`, and `tasks/qa-tasks.md`.

Harness wrappers in `core/skills/`; vendored craft in `.agents/skills/`.

Each target project is its own QA root. Targets are black-box.

End every session with `knowledge-curator`. Answer open items per `human-decides-loop.md`.

Discovery gate is soft; execution gate via `npm run qa:review -- --gate`.

Do not change assertions, promote knowledge to confirmed, send client proposals, or mark human review approved without explicit human approval.

Prefer Playwright for deterministic regression; AI-assisted exploration for discovery.

Commands: `qa:knowledge`, `qa:review`, `qa:discover`, `qa:proposal`, `qa:smoke`, `qa:regression`, `qa:report`.
