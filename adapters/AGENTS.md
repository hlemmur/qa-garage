# Agent Instructions

This repository is a portable AI-native QA Garage: a thin harness layer over vendored QA skills in `.agents/skills/`.

Before QA-related work, read:

- `core/ai/qa-principles.md`
- `core/ai/qa-garage-operating-model.md`
- `core/ai/qa-project-context-model.md`
- `core/ai/daily-qa-loop.md`
- `core/ai/task-tracking-workflow.md`
- The target project's `.agents/qa-project-context.md`
- Relevant `journeys/`, `risk-matrix.md`, scenarios, and `tasks/qa-tasks.md`

Use the vendored skills in `.agents/skills/` for QA craft; the skill-routing table lives in `core/ai/qa-garage-operating-model.md`.

## Rules

- Each target project is its own QA root at `projects/<project>/`, with a single source of truth at `.agents/qa-project-context.md`. Targets are black-box: source from docs and exploration.
- Use Playwright output, traces, screenshots, videos, and reports as the deterministic source of truth.
- Treat exploratory findings as leads until reproduced with evidence.
- Classify failures before proposing fixes.
- Honor the readiness gate: do not start execution work while blocking items remain in `open-items.md` unless `decisions.md` sets an override. Check with `QA_PROJECT=<project> npm run qa:review -- --gate`.
- Do not silently change assertions, delete/skip tests, update baselines, or redefine expected behavior.
- Do not promote observed/inferred knowledge to confirmed, or mark human review approved, without approval.

## Commands

- Smoke: `npm run qa:smoke`
- Regression: `npm run qa:regression`
- Validate context: `npm run qa:knowledge`
- Open items / gate: `npm run qa:review` (`-- --gate`)
- Report: `npm run qa:report`
- Explore: `npm run qa:explore`
