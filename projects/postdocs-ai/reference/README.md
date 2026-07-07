# Reference Layer — postdocs-ai

Structured product knowledge for test design and scope proposals. One home per fact type — no duplication with `journeys/` (stories), `risk-matrix.md` (scored risk), or `scenarios/` (testable specs).

## Entry standard

Every durable row includes:

| Field | Description |
|-------|-------------|
| ID | Stable ref: `F-001`, `UC-001`, `PM-001`, `G-001`, `T-001` |
| Summary | Short description |
| Status | `confirmed`, `observed`, `inferred`, `unknown`, `outdated` |
| Source | Inline: `docs:https://…`, `exploration:evidence/sessions/…`, `human:decisions.md#D-001` |
| Last verified | Date |
| Evidence | Trace, screenshot, doc section, session log |
| Links | Journey, risk ID, scenario candidate |

## Files

| File | Holds |
|------|-------|
| `features.md` | Capability inventory — what the product does |
| `use-cases.md` | Actor + goal + preconditions + success criteria |
| `product-map.md` | Surfaces, navigation, major states |
| `glossary.md` | Canonical product terms (keep small) |
| `testability.md` | Automation blockers, selectors, nondeterminism, data needs |

## Update protocol

See `core/ai/knowledge-maintenance.md`. Run harness `knowledge-curator` at the end of every session.

## Promotion

`confirmed` requires human approval in `decisions.md`. Deterministic assertions require approved scenarios — not unapproved reference rows alone.

## Provenance

Populated 2026-07-07 from public documentation at https://learn.postdocs.ai/ (Introduction, Features, Guides, Tips & Tricks, FAQ). No authenticated app exploration yet.
