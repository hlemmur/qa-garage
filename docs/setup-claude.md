# Claude Code Setup

Claude Code should use this QA Garage through a thin project memory file that points to the canonical core workflows.

## Adapter

Copy or reference:

- `adapters/CLAUDE.md`

For a target project, place it where Claude Code expects project memory, then adjust paths if the garage is external.

## Required Reading

Claude should read before QA work:

- `core/ai/qa-principles.md`
- `core/ai/qa-garage-operating-model.md`
- `core/ai/qa-project-context-model.md`
- `core/ai/daily-qa-loop.md`

QA craft lives in the vendored skills under `.agents/skills/`; the skill-routing table is in `core/ai/qa-garage-operating-model.md`.

## MCP

Use `config/mcp.playwright.json` as the canonical Playwright MCP server config. If Claude Code requires a different config location, copy the contents without changing the qa-garage-level source.

## Guardrail

Claude may draft tests, reports, and bug reports. It must not change assertions, delete tests, skip tests, update baselines, redefine expected behavior, promote observed/inferred knowledge to confirmed, or mark human review approved without human approval. Honor the readiness gate (`npm run qa:review -- --gate`).
