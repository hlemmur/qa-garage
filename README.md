# Portable AI-Native QA Harness

This harness lets a QA Lead or Test Architect supervise AI agents while deterministic automation remains the source of truth.

It is lightweight, expandable, and tool-agnostic:

- Core logic lives in Markdown, scripts, Playwright tests, and evidence files.
- Cursor, Claude Code, Codex, and future tools use thin adapters.
- Playwright provides deterministic smoke and regression coverage.
- Playwright MCP supports AI-assisted browser exploration.
- AI accelerates exploration, reproduction, reporting, and maintenance.
- Humans decide expected behavior, assertion changes, and regression promotion.

## Human-Decides Boundary

AI may explore, reproduce bugs, draft tests, suggest fixes, classify failures, write reports, and recommend improvements.

AI must not automatically change assertions, delete tests, skip tests, redefine expected behavior, update visual baselines, or hide failures. Those actions require human approval.

## Quick Start

```bash
npm install
npx playwright install chromium
npm run qa:smoke
TARGET_URL='data:text/html,<title>Smoke Target</title><h1>OK</h1>' npm run qa:smoke
npm run qa:report
```

For a real target:

```bash
TARGET_URL=https://staging.example.com npm run qa:smoke
```

## Mock Mode

Enable mock mode with:

```bash
MOCK_MODE=true npm test
```

When active, Playwright prints:

```text
[MOCK MODE]
```

Include the same badge in session logs and reports when the run depends on mock integrations.

## Daily QA Loop

1. Run smoke tests.
2. Run exploratory scenarios.
3. Collect evidence.
4. Summarize findings.
5. Suggest bug reports.
6. Suggest regression tests.
7. Human reviews.
8. Approved regressions become Playwright tests.
9. Scenario library evolves.

## Commands

```bash
npm run qa:smoke
npm run qa:headed
npm run qa:trace
npm run qa:codegen
npm run qa:explore -- "charter name"
npm run qa:report
npm test
```

## Structure

- `core/ai/`: canonical QA principles and workflows.
- `core/skills/`: portable skill-like workflows.
- `core/templates/`: reusable report, bug, scenario, and session templates.
- `adapters/`: thin wrappers for Codex/general agents, Claude Code, and Cursor.
- `.cursor/rules/`: active Cursor rules for this workspace.
- `config/`: target and Playwright MCP examples.
- `mock/`: mock-mode docs, fixtures, and interceptors.
- `scripts/`: portable CLI helpers.
- `projects/_template/`: starter project with smoke scenario and test.

## Portability Options

Option A: copy the harness into a target repository.

Option B: keep the harness as a separate repository and point it at target URLs. This is best for early black-box QA without code access.

Option C: use it as a Git submodule, package, or project template once usage patterns stabilize.

## First Target Setup

1. Copy `projects/_template` to `projects/<project-name>`.
2. Update `projects/<project-name>/project-context.md`.
3. Add target details to an untracked `config/targets.yaml` or export `TARGET_URL`.
4. Write smoke and exploratory scenarios.
5. Run `npm run qa:smoke`.
6. Use `npm run qa:explore -- "charter"` to create session logs.
7. Use `npm run qa:report` to summarize results.

## Canonical Rules

Before QA work, agents should read:

- `core/ai/qa-principles.md`
- `core/ai/agent-operating-model.md`
- `core/ai/daily-qa-loop.md`

Adapters should point to these files instead of duplicating policy.
