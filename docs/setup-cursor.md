# Cursor Setup

Cursor can use this harness directly in this repository or as an adapter copied into a target project.

## In This Harness

The active rules live in:

- `.cursor/rules/qa-garage.mdc`
- `.cursor/rules/playwright.mdc`

Cursor agents should read the core files before QA work:

- `core/ai/qa-principles.md`
- `core/ai/agent-operating-model.md`
- `core/ai/daily-qa-loop.md`

## In A Target Project

Copy the adapter rules into the target project:

```bash
mkdir -p .cursor/rules
cp path/to/qa-garage/adapters/cursor/*.mdc .cursor/rules/
```

If the harness remains external, update paths in the copied rules so they point back to the harness checkout.

## Playwright MCP

Use `config/mcp.playwright.json` as the canonical Playwright MCP reference. Cursor may require project-specific MCP configuration; keep that file as a thin copy of the canonical config.

## Daily Commands

```bash
npm run qa:smoke
npm run qa:explore -- "charter name"
npm run qa:report
```
