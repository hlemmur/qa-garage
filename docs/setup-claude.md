# Claude Code Setup

Claude Code should use this harness through a thin project memory file that points to the canonical core workflows.

## Adapter

Copy or reference:

- `adapters/CLAUDE.md`

For a target project, place it where Claude Code expects project memory, then adjust paths if the harness is external.

## Required Reading

Claude should read before QA work:

- `core/ai/qa-principles.md`
- `core/ai/agent-operating-model.md`
- `core/ai/exploratory-workflow.md`
- `core/ai/bug-repro-workflow.md`
- `core/ai/test-authoring-workflow.md`

## MCP

Use `config/mcp.playwright.json` as the canonical Playwright MCP server config. If Claude Code requires a different config location, copy the contents without changing the harness-level source.

## Guardrail

Claude may draft tests, reports, and bug reports. It must not change assertions, delete tests, skip tests, update baselines, or redefine expected behavior without human approval.
