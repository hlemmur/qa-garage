# Jobs

Scheduled and one-shot QA job instances. Standard types in `core/ai/qa-cadence.md`.

## Conventions

- One file per job instance: `<timestamp>-<type>.md` or `JOB-NNN-<slug>.md`
- Template: `core/templates/job.md`
- Explore charters: scaffolded by `npm run qa:discover -- "charter"`
- Approve by setting `Status: approved` and `Approved by:` in the job file, or enable in `cadence.md`

## Lifecycle

`proposed → approved → scheduled → running → done | skipped`

## Executor rules

- Run only **approved** jobs (or types enabled in `cadence.md` when CI is wired)
- Respect gates: execution jobs require `qa:review --gate` clear or override
- End with `knowledge-curator` when the job produces new product facts
- Link outcome (evidence, reports, reference updates) before marking `done`

## Collaboration

Primary channel: Cursor chat with agent. Agent proposes → human approves in this directory or `cadence.md` → executor runs.
