# Test Strategy

Produced by the `test-strategy` skill. Reads `.agents/qa-project-context.md` and `risk-matrix.md`. Defines HOW this project approaches quality. Keep it to clear decisions, not a sprawling template.

## Scope & Phasing

Phased by stage, risk, and access. Example progression:

1. **Phase 1 - FE / e2e black-box:** smoke + highest-risk journeys via Playwright + MCP exploration.
2. **Phase 2 - Backend / data:** when Supabase/API access exists (contract, DB, api-testing).
3. **Phase 3 - Non-functional:** performance, accessibility, visual, security as risk dictates.

## Test Pyramid & Levels

- What proportion of smoke / journey / regression / exploratory fits this product and why.

## Entry / Exit Criteria

- Entry: what must be true to start a level.
- Exit: what "done" means per level.

## Quality Gates

- What blocks a release (smoke green, no open no-go risks, ...).

## Tooling

- Deterministic: Playwright. Exploration: Playwright MCP. Others as risk requires.
