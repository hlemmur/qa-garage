# Portable AI-Native QA Garage

QA Garage lets a QA Lead or Test Architect supervise AI agents while deterministic automation remains the source of truth.

It is lightweight, expandable, and tool-agnostic:

- A thin garage layer (Markdown rules, operating model, CLI scripts) keeps the human in control.
- A vendored library of QA skills in `.agents/skills/` supplies the QA craft (context, risk, strategy, journeys, exploration, repro, Playwright authoring, reporting).
- Cursor, Claude Code, Codex, and future tools use thin adapters that point at the same core.
- Playwright provides deterministic smoke and regression coverage; Playwright MCP supports AI-assisted exploration.
- Humans decide expected behavior, assertion changes, and regression promotion.

## Human-Decides Boundary

AI may explore, reproduce bugs, draft tests, suggest fixes, classify failures, write reports, track task progress, and recommend improvements.

AI must not automatically change assertions, delete tests, skip tests, redefine expected behavior, promote observed/inferred knowledge to confirmed, mark human review as approved, update visual baselines, or hide failures. Those actions require human approval.

## Skills Layer

QA craft lives in vendored skills under `.agents/skills/` (installed from the open skills ecosystem, pinned in [skills-lock.json](skills-lock.json)). These stay pristine so they can be updated with `npx skills update`. The garage layer never edits skill bodies; it adapts them through conventions and guardrails in `core/ai/garage-operating-model.md`, which also contains the skill-routing table (which skill owns which step).

## Knowledge Model

Each target project is its own QA root at `projects/<project>/`, with a single source of truth:

```text
projects/<project>/.agents/qa-project-context.md
```

Every vendored skill reads that file first and does not duplicate it. Around it sit a few skill-native durable artifacts: `strategy.md`, `plan.md`, `risk-matrix.md`, `journeys/`, `test-data.md`, `decisions.md`, `questions.md`, and `known-issues.md`. See `core/ai/qa-project-context-model.md` for the model and its guardrails.

Targets are black-box: skills skip codebase detection and source context from documentation and exploration.

Validate the model with:

```bash
QA_PROJECT=<project> npm run qa:knowledge
```

## Approval Gate

`qa:review` aggregates everything awaiting a human decision into `projects/<project>/open-items.md` (cross-linked to its sources). Agents must not begin execution work while blocking items exist unless `decisions.md` records an explicit override:

```bash
QA_PROJECT=<project> npm run qa:review           # regenerate open-items.md
QA_PROJECT=<project> npm run qa:review -- --gate # non-zero exit if blocking items remain
```

## Task Ledger

Each project tracks QA work under `projects/<project>/tasks/qa-tasks.md`: what agents were asked to do, status, blockers, linked outputs, verification commands, and human review points.

```bash
QA_PROJECT=<project> npm run qa:tasks
```

## Quick Start

```bash
npm install
npx playwright install chromium
npm run qa:smoke
npm run qa:regression
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

When active, Playwright prints a `[MOCK MODE]` banner. Include the same badge in session logs and reports when the run depends on mock integrations.

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
npm run qa:regression
npm run qa:headed
npm run qa:trace
npm run qa:codegen
npm run qa:explore -- "charter name"
npm run qa:report
npm run qa:knowledge   # validate qa-project-context.md
npm run qa:review      # aggregate open items (add -- --gate to fail on blockers)
npm run qa:tasks
npm test
```

## Structure

- `core/ai/`: garage vision, operating model, knowledge model, loops.
- `core/skills/`: garage-specific skill wrappers (task tracking).
- `core/templates/`: reusable report, bug, scenario, and session templates.
- `.agents/skills/`: vendored QA craft skills (pristine, updatable).
- `adapters/`: thin wrappers for Codex/general agents, Claude Code, and Cursor.
- `.cursor/rules/`: active Cursor rules for this workspace.
- `config/`: target and Playwright MCP examples.
- `mock/`: mock-mode docs, fixtures, and interceptors.
- `scripts/`: portable CLI helpers.
- `projects/_template/`: starter project with the single-source context model, task ledger, scenarios, and tests.
- `docs/roadmap-infra.md`: designed-but-not-built infra (sync, CI cron, notifications, dashboard).

## Portability Options

Option A: copy the garage into a target repository.

Option B: keep the garage as a separate repository and point it at target URLs. Best for early black-box QA without code access.

Option C: use it as a Git submodule, package, or project template once usage patterns stabilize.

## First Target Setup

1. Copy `projects/_template` to `projects/<project-name>`.
2. Run `qa-project-context` (from `.agents/skills/`) to fill `projects/<project-name>/.agents/qa-project-context.md` from docs and exploration.
3. Run `journey-mapping` and `risk-based-testing` to produce `journeys/` and `risk-matrix.md`.
4. Run `test-strategy` and `test-planning` to produce `strategy.md` and `plan.md`.
5. Track requested QA work in `projects/<project-name>/tasks/qa-tasks.md`.
6. Add target details to an untracked `config/targets.yaml` or export `TARGET_URL`.
7. Run `QA_PROJECT=<project-name> npm run qa:knowledge` and `npm run qa:review`.
8. Write smoke, regression, and exploratory scenarios; run them via the `qa:*` commands.

Only after human review should confirmed behavior become scenario or Playwright assertion truth.

## Canonical Rules

Before QA work, agents should read:

- `core/ai/qa-principles.md`
- `core/ai/garage-operating-model.md`
- `core/ai/qa-project-context-model.md`
- `core/ai/daily-qa-loop.md`
- `core/ai/task-tracking-workflow.md`

Adapters point to these files instead of duplicating policy.
