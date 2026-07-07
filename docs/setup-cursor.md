# Cursor Setup

Cursor can use this QA Garage directly in this repository or as an adapter copied into a target project.

## In This QA Garage

The active rules live in:

- `.cursor/rules/qa-garage.mdc`
- `.cursor/rules/playwright.mdc`

Cursor agents should read the core files before QA work:

- `core/ai/qa-principles.md`
- `core/ai/qa-garage-operating-model.md`
- `core/ai/qa-project-context-model.md`
- `core/ai/daily-qa-loop.md`

QA craft lives in the vendored skills under `.agents/skills/` (Cursor surfaces them automatically). The QA garage layer never edits skill bodies; it routes them via the table in `core/ai/qa-garage-operating-model.md`.

## In A Target Project

Copy the adapter rules into the target project:

```bash
mkdir -p .cursor/rules
cp path/to/qa-garage/adapters/cursor/*.mdc .cursor/rules/
```

If the qa-garage remains external, update paths in the copied rules so they point back to the qa-garage checkout.

## Playwright MCP

Use `config/mcp.playwright.json` as the canonical Playwright MCP reference. Cursor may require project-specific MCP configuration; keep that file as a thin copy of the canonical config.

## Daily Commands

```bash
npm run qa:smoke
npm run qa:review -- --gate
npm run qa:explore -- "charter name"
npm run qa:report
```
