# Portable AI-Native QA Garage

QA Garage lets a QA Lead or Test Architect supervise AI agents while deterministic automation remains the source of truth.

It is lightweight, expandable, and tool-agnostic:

- A thin QA Garage harness layer (Markdown rules, operating model, CLI scripts) keeps the human in control.
- A vendored library of QA skills in `.agents/skills/` supplies the QA craft (context, risk, strategy, journeys, exploration, repro, Playwright authoring, reporting).
- Cursor, Claude Code, Codex, and future tools use thin adapters that point at the same core.
- Playwright provides deterministic smoke and regression coverage; Playwright MCP supports AI-assisted exploration.
- Humans decide expected behavior, assertion changes, and regression promotion.

## Human-Decides Boundary

AI may explore, reproduce bugs, draft tests, suggest fixes, classify failures, write reports, track task progress, and recommend improvements.

AI must not automatically change assertions, delete tests, skip tests, redefine expected behavior, promote observed/inferred knowledge to confirmed, mark human review as approved, update visual baselines, or hide failures. Those actions require human approval.

See `core/ai/human-decides-loop.md` for how to answer `open-items.md`.

## Skills Layer

QA craft lives in vendored skills under `.agents/skills/` (pinned in [skills-lock.json](skills-lock.json)). These stay pristine. The harness adapts them through `core/ai/qa-garage-operating-model.md` (skill-routing table) and thin wrapper skills in `core/skills/`.

## Knowledge Model

Each target project is its own QA root at `projects/<project>/`:

```text
projects/<project>/.agents/qa-project-context.md   # read-first SSOT
projects/<project>/reference/                    # features, use cases, product map, testability
projects/<project>/journeys/                     # end-to-end user journeys
projects/<project>/risk-matrix.md                # scored product risk
projects/<project>/strategy.md, plan.md          # how and what to test now
projects/<project>/scenarios/                    # testable specs
projects/<project>/proposals/                    # client-facing scope
projects/<project>/jobs/, cadence.md             # scheduled work
```

Phase 0 discovery (`core/ai/discovery-workflow.md`) populates `reference/` from docs and app exploration. Knowledge is **living** — update after every session (`core/ai/knowledge-maintenance.md`).

Validate:

```bash
QA_PROJECT=<project> npm run qa:knowledge
```

## Test Design

Complete coverage requires happy paths and negative flows. AI-powered products need a separate assertion posture from Phase 1. See `core/ai/test-design-principles.md`.

**Smoke** uses a proposal-first workflow: draft `scenarios/smoke-proposal.md` after Phase 0B, human approves, then author Playwright. See `core/ai/smoke-test-model.md`. Do not jump straight to `smoke.spec.ts`.

## Scope Proposals

Synthesize a client-facing testing scope from project artifacts:

```bash
QA_PROJECT=<project> npm run qa:proposal -- "Phase 1 black-box QA"
```

See `core/ai/scope-proposal-workflow.md`. Human approves before sending externally.

## Approval Gate

```bash
QA_PROJECT=<project> npm run qa:review           # regenerate open-items.md
QA_PROJECT=<project> npm run qa:review -- --gate # non-zero exit if blocking items remain
```

Discovery work is not blocked; execution-gated work is. See `human-decides-loop.md`.

## Cadence & Jobs

Standard job types and collaboration model in `core/ai/qa-cadence.md`. Agent proposes jobs; QA Lead approves in `jobs/` or `cadence.md`; executor runs (local or future CI cron per `docs/roadmap-infra.md`).

## Task Ledger

```bash
QA_PROJECT=<project> npm run qa:tasks
```

Substantive work in `tasks/qa-tasks.md`; routine scheduled instances in `jobs/`.

## Quick Start

```bash
npm install
npx playwright install chromium
npm run qa:smoke
TARGET_URL='data:text/html,<title>Smoke Target</title><h1>OK</h1>' npm run qa:smoke
```

## Commands

```bash
npm run qa:smoke
npm run qa:regression
npm run qa:discover -- "charter name"
npm run qa:proposal -- "engagement goal"
npm run qa:knowledge
npm run qa:review              # add -- --gate for execution gate
npm run qa:tasks
npm run qa:report
npm test
```

## Structure

- `core/ai/`: principles, operating model, discovery, knowledge maintenance, test design, human-decides, cadence, scope proposals.
- `core/skills/`: harness wrapper skills (project-discovery, knowledge-curator, scope-proposal, smoke-test-design, task-tracker).
- `core/templates/`: reports, scenarios, proposals, jobs, discovery.
- `.agents/skills/`: vendored QA craft (pristine).
- `projects/_template/`: starter project with reference layer, jobs, proposals, scenarios.
- `docs/roadmap-infra.md`: future CI cron, notifications, dashboard.

## First Target Setup

1. Copy `projects/_template` to `projects/<project-name>`.
2. Phase 0 discovery: TASK-001 docs → TASK-002 app → TASK-003 reconcile → TASK-006 smoke proposal (`discovery-workflow.md`, `smoke-test-model.md`).
3. Run `qa-start` sequence or individual vendored skills for strategy and plan.
4. Draft client scope: `npm run qa:proposal -- "goal"`.
5. Configure `cadence.md` and approve jobs with the agent.
6. Run `qa:knowledge` and `qa:review`.

## Canonical Rules

Before QA work, agents should read the list in `core/ai/qa-garage-operating-model.md` (Read Order section).

Adapters point to these files instead of duplicating policy.
