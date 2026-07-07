# QA Cadence

Standard job types and collaboration model for scheduled QA work. Cron/CI is an **executor** for approved jobs — the primary interface is QA Lead + agent negotiating in `cadence.md` and `jobs/`.

See `docs/roadmap-infra.md` for future GitHub Actions wiring.

## Standard job catalog

| Job type | Default cadence | Gate | Purpose |
|----------|-----------------|------|---------|
| `smoke` | Daily | Execution (`qa:review --gate`) | Run **approved** SMK-* cases via `qa:smoke`; refresh `smoke-proposal.md` after exploration |
| `regression` | Weekly | Execution | Deterministic suite via `qa:regression` |
| `explore-charter` | Weekly (rotate risk) | Soft (discovery) | Exploratory session; update `reference/` |
| `reference-hygiene` | Weekly | None | Reconcile docs, sessions, tests via `knowledge-curator` |
| `review-open-items` | Daily | None | Regenerate `open-items.md`; nudge human |
| `report` | After test jobs | None | `qa:report` summary |
| `ai-eval` | Weekly / on model change | Execution when AI in scope | `ai-system-testing` eval pass |
| `doc-watch` | Weekly / manual | None | Check user docs for changes → `reference/` update |

## Job lifecycle

```text
proposed → approved → scheduled → running → done | skipped
```

- **proposed** — agent or human suggests the job
- **approved** — QA Lead enables in `cadence.md` or approves the job file
- **scheduled** — has a target date/cron (manual or CI)
- **running** — executor in progress
- **done** — outcome linked (evidence, report, reference updates)
- **skipped** — cancelled with reason

## Collaboration channel

```text
QA Lead ↔ agent (Cursor chat)
    → proposes jobs in jobs/ or cadence.md
    → human approves
    → Executor (agent or CI) runs
    → knowledge-curator updates reference/
    → qa:review → open-items.md
```

Agents propose jobs; humans approve. Executor must not promote knowledge to `confirmed` or change assertions.

## Role hats

| Hat | Trigger | Writes reference? |
|-----|---------|-------------------|
| **Architect** | Human request, scope drafting | Proposes only |
| **Executor** | Approved job, CI cron | `observed`/`outdated` proposals only |
| **Analyst** | After test runs | Reports, open-items |

## Scaffolding

```bash
QA_PROJECT=<project> npm run qa:discover -- "charter"   # session log + explore job stub
```

Job instances live in `projects/<project>/jobs/`. Enabled types in `cadence.md` and `jobs/_catalog.md`.

## Gates

| Gate | Blocks |
|------|--------|
| Soft (discovery jobs) | Nothing — access blockers → `questions.md` |
| Execution | `qa:review --gate` before smoke/regression/release-gating work |

Override via `decisions.md` — see `human-decides-loop.md`.
