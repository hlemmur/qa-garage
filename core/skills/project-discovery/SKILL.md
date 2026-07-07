---
name: project-discovery
description: Harness wrapper for Phase 0 discovery on black-box targets. Use when starting QA for a new project, refreshing product understanding from docs, or running initial app exploration.
---

# Project Discovery

Thin harness wrapper. Craft lives in vendored skills (`qa-project-context`, `journey-mapping`, `risk-based-testing`, `exploratory-testing`, `agentic-browser-testing`).

Before acting, read:

- `core/ai/qa-principles.md`
- `core/ai/qa-garage-operating-model.md`
- `core/ai/discovery-workflow.md`
- `core/ai/qa-project-context-model.md`
- The target project's `.agents/qa-project-context.md` and `reference/README.md`

## Goal

Build enough product understanding for safe exploratory work, realistic test scope, and client proposals — without assuming unverified product intent.

## Docs pass (Phase 0A)

1. Identify documentation URLs and target environments from the QA Lead.
2. Populate `reference/features.md`, `use-cases.md`, `product-map.md`, `glossary.md` from user docs.
3. Draft `journeys/` and `risk-matrix.md` from docs-sourced understanding.
4. Update `.agents/qa-project-context.md` Product and Tech Stack sections.
5. Write `evidence/discovery/<date>-docs-report.md` from `core/templates/discovery-report.md`.
6. Raise blocking questions in `questions.md`.

## App pass (Phase 0B)

1. Read existing `reference/`, `journeys/`, and `risk-matrix.md`.
2. Run charters via `npm run qa:discover -- "charter"`; use Playwright MCP or exploratory-testing skill.
3. Update `reference/` with `observed` facts and evidence paths; build or update `reference/ui-inventory.md`.
4. Fill `reference/testability.md`.
5. Propose journey and risk updates; list smoke candidates for `scenarios/smoke-proposal.md`.
6. Write `evidence/discovery/<date>-app-report.md`.

## Reconcile (Phase 0C)

Run harness `knowledge-curator` after each pass. Resolve contradictions via `questions.md`; never silently overwrite.

## Outputs

- `reference/` — product facts with inline provenance
- `evidence/discovery/` — discovery reports
- `evidence/sessions/` — session logs
- `questions.md` — unresolved items
- Proposed updates to `journeys/`, `risk-matrix.md`, `scenarios/smoke-proposal.md`

## Guardrails

- Mark docs-sourced facts `inferred` until exploration or human confirms.
- Do not promote to `confirmed` or write deterministic assertions without human approval.
- Record setup blockers separately from product findings.
