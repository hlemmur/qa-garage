# Codex Setup

Codex and other general coding agents should use `AGENTS.md` as a thin adapter to the portable QA Garage core.

## Adapter

Copy or reference `adapters/AGENTS.md`.

## Required Reading

Read the **Read Order** in `core/ai/qa-garage-operating-model.md`. Also read the target project's `reference/`, `journeys/`, and `risk-matrix.md`.

## Skills

Vendored craft: `.agents/skills/`. Harness wrappers: `core/skills/`.

## Commands

```bash
npm run qa:knowledge
npm run qa:review -- --gate
npm run qa:discover -- "charter name"
npm run qa:proposal -- "engagement goal"
npm run qa:smoke
npm run qa:regression
npm run qa:report
npm run qa:tasks
```

## Guardrail

Do not automatically change assertions, promote knowledge to confirmed, send client proposals, or mark human review approved. Honor the execution gate. Update `reference/` via `knowledge-curator` after substantive work.
