# Codex Setup

Codex and other general coding agents should use `AGENTS.md` as a thin adapter to the portable QA core.

## Adapter

Copy or reference:

- `adapters/AGENTS.md`

For a target project, place the file at the project root and adjust paths if the harness is external.

## Required Reading

Before QA work, agents should read:

- `core/ai/qa-principles.md`
- `core/ai/agent-operating-model.md`
- `core/ai/daily-qa-loop.md`
- Relevant project scenarios under `projects/<project>/scenarios/`

## Skills

Portable skill-like workflows live under `core/skills/`. Formal skill systems vary by tool, so wrappers should stay thin and point back to these files.

## Commands

Codex can operate through the same CLI layer as other agents:

```bash
npm run qa:smoke
npm test
npm run qa:explore -- "charter name"
npm run qa:report
```

## Guardrail

Do not automatically change assertions, delete tests, skip tests, update baselines, or redefine expected behavior.
