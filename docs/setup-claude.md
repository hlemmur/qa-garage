# Claude Code Setup

Claude Code should use this QA Garage through a thin project memory file that points to the canonical core workflows.

## Adapter

Copy or reference `adapters/CLAUDE.md`.

## Required Reading

Read the **Read Order** in `core/ai/qa-garage-operating-model.md`, including discovery, knowledge maintenance, test design, human-decides, cadence, and scope proposal workflows.

## MCP

Use `config/mcp.playwright.json` as the canonical Playwright MCP server config.

## Commands

```bash
npm run qa:knowledge
npm run qa:review -- --gate
npm run qa:discover -- "charter"
npm run qa:proposal -- "goal"
npm run qa:smoke
npm run qa:report
```

## Guardrail

Claude may draft tests, reports, proposals, and job schedules. It must not change assertions, promote knowledge to confirmed, send client proposals, or mark human review approved without human approval. Honor the execution gate. End sessions with `knowledge-curator`.
