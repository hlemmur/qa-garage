# Codex Setup

Codex and other general coding agents should use `AGENTS.md` as a thin adapter to the portable QA Garage core.

## Adapter

Copy or reference:

- `adapters/AGENTS.md`

For a target project, place the file at the project root and adjust paths if the qa-garage is external.

## Required Reading

Before QA work, agents should read:

- `core/ai/qa-principles.md`
- `core/ai/qa-garage-operating-model.md`
- `core/ai/qa-project-context-model.md`
- `core/ai/daily-qa-loop.md`
- Relevant project scenarios under `projects/<project>/scenarios/`

## Skills

QA craft lives in vendored skills under `.agents/skills/` (pinned in `skills-lock.json`, updatable with `npx skills update`). The qa-garage-specific wrappers under `core/skills/` stay thin and point back to the core workflows. The skill-routing table is in `core/ai/qa-garage-operating-model.md`.

## Commands

Codex can operate through the same CLI layer as other agents:

```bash
npm run qa:smoke
npm run qa:review -- --gate
npm test
npm run qa:explore -- "charter name"
npm run qa:report
```

## Guardrail

Do not automatically change assertions, delete/skip tests, update baselines, redefine expected behavior, promote observed/inferred knowledge to confirmed, or mark human review approved. Honor the readiness gate.
