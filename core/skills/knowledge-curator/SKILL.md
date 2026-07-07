---
name: knowledge-curator
description: Guardrail wrapper for maintaining project context and durable knowledge during QA discovery or release maintenance. Use alongside the vendored context/risk/journey skills.
---

# Knowledge Curator

This is a thin guardrail wrapper. The craft lives in the vendored skills (`qa-project-context`, `journey-mapping`, `risk-based-testing`); this wrapper enforces the human-decides loop when writing to durable artifacts.

Before acting, read:

- `core/ai/qa-principles.md`
- `core/ai/qa-garage-operating-model.md`
- `core/ai/qa-project-context-model.md`
- `core/ai/knowledge-maintenance.md`
- The target project's `.agents/qa-project-context.md` and `reference/README.md`

## Goal

Preserve durable project understanding with clear confidence, source, evidence, and human-review status — in the reference layer, single source of truth, and skill-owned artifacts, with no duplication.

## Steps

1. Read existing `reference/`, project context, and relevant journeys before exploration or report updates.
2. Route facts to their owner:
   - Capabilities, use cases, surfaces, terms, testability → `reference/`
   - Journeys → `journeys/`
   - Risk → `risk-matrix.md`
   - Stack, envs, goals, team → `.agents/qa-project-context.md`
   - Testable specs → `scenarios/`
3. Mark new facts `observed`, `inferred`, `unknown`, or `outdated`, each with inline source and evidence path.
4. Record contradictions instead of silently replacing existing knowledge; mark the old entry `outdated` and raise a question.
5. Add questions to `questions.md` (blocking/non-blocking) when expected behavior is unclear.
6. Suggest coverage impact (scenario, regression, exploratory, AI eval, visual, a11y, API).

## End-of-session checklist

Mandatory at the end of every QA session (see `knowledge-maintenance.md`):

- [ ] All new/changed facts routed to owner artifacts
- [ ] Status, source, date, and evidence on every new row
- [ ] Questions raised for conflicts or unknowns
- [ ] Task or job outcome linked if applicable
- [ ] `qa:review` run if open items changed

## Guardrails

Do not automatically:

- Promote `observed` or `inferred` behavior to `confirmed`.
- Rewrite decisions.
- Remove entries.
- Mark expected behavior obsolete.
- Use unapproved knowledge as deterministic test truth.

Those actions require human approval.
