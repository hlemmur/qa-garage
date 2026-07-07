---
name: knowledge-curator
description: Guardrail wrapper for maintaining project context and durable knowledge during QA discovery or release maintenance. Use alongside the vendored context/risk/journey skills.
---

# Knowledge Curator

This is a thin guardrail wrapper. The craft lives in the vendored skills (`qa-project-context`, `journey-mapping`, `risk-based-testing`); this wrapper enforces the human-decides loop when writing to durable artifacts.

Before acting, read:

- `core/ai/qa-principles.md`
- `core/ai/garage-operating-model.md`
- `core/ai/qa-project-context-model.md`
- The target project's `.agents/qa-project-context.md`

## Goal

Preserve durable project understanding with clear confidence, source, evidence, and human-review status - in the single source of truth and its skill-owned artifacts, with no duplication.

## Steps

1. Read the existing project context before exploration or report updates.
2. Route facts to their owner: journeys -> `journeys/`, risk -> `risk-matrix.md`, everything else -> `.agents/qa-project-context.md`.
3. Mark new facts `observed`, `inferred`, `unknown`, or `outdated`, each with a source or evidence path.
4. Record contradictions instead of silently replacing existing knowledge; mark the old entry `outdated` and raise a question.
5. Add questions to `questions.md` (flagged blocking/non-blocking) when expected behavior is unclear.
6. Suggest coverage (scenario, regression, visual, a11y, API, data, performance) affected by the update.

## Guardrails

Do not automatically:

- Promote `observed` or `inferred` behavior to `confirmed`.
- Rewrite decisions.
- Remove entries.
- Mark expected behavior obsolete.
- Use unapproved knowledge as deterministic test truth.

Those actions require human approval.
