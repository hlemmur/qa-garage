---
name: task-tracker
description: Use when creating, updating, reviewing, or summarizing per-project QA task progress.
---

# Task Tracker

Before acting, read:

- `core/ai/qa-principles.md`
- `core/ai/qa-garage-operating-model.md`
- `core/ai/task-tracking-workflow.md`
- The target project's `tasks/qa-tasks.md`

## Goal

Keep project QA work visible, linked, and reviewable across agent sessions.

## Steps

1. Locate the relevant task or create a new proposed task.
2. Mark the task `in_progress` when work starts.
3. Link relevant knowledge, scenarios, evidence, reports, tests, and commits.
4. Record progress notes and verification commands.
5. Mark the task `done`, `blocked`, or `cancelled` when work stops.
6. Add follow-up tasks when new work is discovered.

## Guardrails

Do not:

- Delete task history.
- Mark human review as approved without approval.
- Hide blockers or failed checks.
- Rewrite outcomes to obscure what happened.

## Output

Use:

- `core/templates/qa-task.md` for task entries.
- `core/templates/task-summary.md` for summaries.
