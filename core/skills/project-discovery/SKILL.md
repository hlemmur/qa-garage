---
name: project-discovery
description: Use when starting QA for a new black-box web project or target environment.
---

# Project Discovery

Before acting, read:

- `core/ai/qa-principles.md`
- `core/ai/agent-operating-model.md`
- `core/ai/knowledge-base-workflow.md`
- The target project's `project-context.md`
- The target project's `knowledge/README.md`
- Relevant files under the target project's `knowledge/`

## Goal

Build enough context for safe exploratory and regression work without assuming product intent.

## Steps

1. Identify target URLs, environments, roles, and account constraints.
2. Map core user journeys from available docs and visible UI.
3. Add discovered facts as `observed` or `inferred` knowledge with evidence.
4. List unknowns that require human input.
5. Draft initial smoke scenarios and exploratory charters.
6. Record setup blockers separately from product findings.
7. Propose, but do not confirm, expected behavior updates.

## Output

Use `core/templates/discovery-report.md` and `core/templates/knowledge-update-report.md` when durable knowledge changes are proposed.
