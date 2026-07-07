# Task Tracking Workflow

Per-project task tracking records what humans asked agents to do, what happened, what artifacts changed, and what still needs review.

## Purpose

Use task tracking to:

- Preserve QA work progress outside chat history.
- Connect agent work to knowledge, scenarios, evidence, reports, and tests.
- Make blocked work and human review points visible.
- Keep future agents from repeating completed discovery or maintenance work.

## Location

Each project should keep one lightweight task ledger:

```text
projects/<project>/tasks/qa-tasks.md
```

## Task Status

Use one status:

- `proposed`: suggested but not accepted.
- `approved`: accepted and ready to start.
- `in_progress`: actively being worked.
- `blocked`: cannot continue without input, access, data, or a decision.
- `done`: completed with linked outputs.
- `cancelled`: no longer needed.

## Task Types

Use one or more types:

- `discovery`
- `knowledge`
- `bug-repro`
- `test-authoring`
- `smoke`
- `regression`
- `visual`
- `accessibility`
- `performance`
- `api`
- `data`
- `maintenance`
- `reporting`

## Entry Standard

Each task should include:

- ID.
- Status.
- Type.
- Requested by.
- Assigned agent/tool.
- Created date.
- Updated date.
- Goal.
- Acceptance criteria.
- Links to knowledge, scenarios, evidence, reports, and tests.
- Progress notes.
- Outcome.
- Human review status.

## Agent Rules

AI may:

- Add new proposed tasks.
- Mark a task `in_progress` when starting work.
- Mark a task `blocked` with a clear blocker.
- Mark a task `done` when outputs are linked and checks are recorded.
- Add follow-up tasks.

AI must not:

- Mark human review as approved without approval.
- Hide failed or blocked work.
- Delete task history.
- Rewrite task outcomes to make progress look better.

## Recommended Flow

1. Create or update a task before substantive project work.
2. Link the task to `.agents/qa-project-context.md` and relevant artifacts (journeys, risk matrix, scenarios).
3. Work the task using the appropriate QA workflow.
4. Link outputs: evidence, reports, knowledge updates, scenarios, tests, and commits.
5. Record verification commands.
6. Mark the task `done`, `blocked`, or `cancelled`.
7. Add follow-up tasks when needed.

## Relationship To Other Garage Layers

- Project context (`.agents/qa-project-context.md`): what we know.
- Scenario library: what we intend to test.
- Task ledger: what agents were asked to do and what happened.
- Reports and evidence: what was observed.
- Playwright tests: deterministic automation truth.
