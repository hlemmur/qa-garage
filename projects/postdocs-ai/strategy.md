# Test Strategy — postdocs-ai

Reads `.agents/qa-project-context.md` and `risk-matrix.md`. Black-box, FE-first. Clear decisions only.

## Scope & Phasing

1. Phase 1 - FE / e2e black-box (now): authenticated smoke + highest-risk journeys via Playwright and Playwright MCP exploration. Blocked on approved test accounts and target environment.
2. Phase 2 - Backend / data (when access granted): grant-data accuracy, upload/parsing, and integration checks (api-testing, database-testing, contract-testing). Requires confirming the technical stack (Supabase/TipTap/Vercel AI or actual services).
3. Phase 3 - Non-functional: AI-output evaluation (ai-system-testing), collaboration concurrency, export fidelity, accessibility, and performance as risk dictates.

## Levels

- Smoke: sign-in reaches a stable authenticated landing.
- Journey: the three mapped journeys, highest-risk first.
- Regression: only human-approved, deterministic expectations (template loads, bookmark persists, .docx export contains expected sections).
- Exploratory: AI generation quality, grant freshness, collaboration edge cases, upload matrix.

## Entry / Exit Criteria

- Entry to execution: readiness gate clear (`qa:review -- --gate`) - test accounts, environment, and mock-mode questions answered or overridden.
- Exit for a level: evidence captured, failures classified, confirmed expectations approved before becoming assertions.

## Quality Gates

- Release-relevant gates: smoke green; no open no-go risk (R-001, R-002, R-003) unaddressed for the area under change.

## Tooling

- Deterministic: Playwright. Exploration: Playwright MCP. AI features: ai-system-testing. Reporting: qa-report-humanizer / release-readiness.
