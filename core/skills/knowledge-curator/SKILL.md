---
name: knowledge-curator
description: Use when creating, updating, reviewing, or reconciling project knowledge during QA discovery or release maintenance.
---

# Knowledge Curator

Before acting, read:

- `core/ai/qa-principles.md`
- `core/ai/agent-operating-model.md`
- `core/ai/knowledge-base-workflow.md`
- The target project's `project-context.md`
- The target project's `knowledge/README.md`
- Relevant files under `projects/<project>/knowledge/`

## Goal

Preserve durable project understanding with clear confidence, source, evidence, and human-review status.

## Steps

1. Read existing project knowledge before exploration or report updates.
2. Add new observations as `observed`, `inferred`, `unknown`, or `outdated`.
3. Link every durable entry to a source or evidence path.
4. Record contradictions instead of silently replacing existing knowledge.
5. Add questions for human/product review when expected behavior is unclear.
6. Suggest scenario, regression, visual, accessibility, API, data, or performance coverage affected by the update.
7. Produce a knowledge update report when the changes are substantial.

## Guardrails

Do not automatically:

- Promote observed or inferred behavior to `confirmed`.
- Rewrite decisions.
- Remove entries.
- Mark expected behavior obsolete.
- Use unapproved knowledge as deterministic test truth.

Those actions require human approval.

## Output

Use:

- `core/templates/knowledge-entry.md` for individual entries.
- `core/templates/knowledge-update-report.md` for session-level updates.
