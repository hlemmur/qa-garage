# Cursor Setup

Cursor can use this QA Garage directly in this repository or as an adapter copied into a target project.

## In This QA Garage

The active rules live in:

- `.cursor/rules/qa-garage.mdc`
- `.cursor/rules/playwright.mdc`

Cursor agents should read the **Read Order** in `core/ai/qa-garage-operating-model.md` before QA work.

QA craft lives in `.agents/skills/`. Harness wrappers in `core/skills/`.

## In A Target Project

```bash
mkdir -p .cursor/rules
cp path/to/qa-garage/adapters/cursor/*.mdc .cursor/rules/
```

## Playwright MCP

Use `config/mcp.playwright.json` as the canonical Playwright MCP reference.

## Daily Commands

```bash
npm run qa:smoke
npm run qa:review -- --gate
npm run qa:discover -- "charter name"
npm run qa:proposal -- "engagement goal"
npm run qa:knowledge
npm run qa:report
```

Answer open items by editing `questions.md` and `decisions.md` — see `core/ai/human-decides-loop.md`.

Propose and approve scheduled work in `jobs/` and `cadence.md` — see `core/ai/qa-cadence.md`.
