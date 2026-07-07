# Knowledge Maintenance

The reference layer and related artifacts are **living** — update them whenever new evidence appears. This is mandatory at the end of every QA session, not optional curation.

Before acting, read `core/ai/qa-project-context-model.md` and run the harness `knowledge-curator` skill.

## When to update

| Trigger | Update |
|---------|--------|
| Docs read / release notes | `reference/features.md`, `use-cases.md`, `product-map.md`, `glossary.md` — mark changed items `outdated` if superseded |
| Exploratory session | `reference/product-map.md`, `reference/ui-inventory.md`, `features.md`, `testability.md`, `journeys/` — status `observed` + evidence path |
| Playwright run (pass or fail) | `reference/testability.md` (selectors, flakiness); `features.md` if behavior differs from docs |
| Test authoring | `testability.md`; link scenario ↔ feature/use-case IDs |
| Bug repro | `known-issues.md`; propose `reference/` update |
| Human decision | `decisions.md` → promote linked reference rows to `confirmed` |
| Contradiction | Mark old entry `outdated`; raise `questions.md`; do not overwrite silently |

## Routing (single owner per fact)

| Fact type | Owner artifact |
|-----------|----------------|
| Capabilities, use cases, surfaces, terms | `reference/` |
| Widget bundles, state logic, smoke candidacy | `reference/ui-inventory.md` |
| End-to-end user story | `journeys/*.md` |
| Product/delivery risk | `risk-matrix.md` |
| Stack, envs, goals, team | `.agents/qa-project-context.md` |
| Testable spec ready for approval | `scenarios/` |
| Human-approved expected behavior | `decisions.md` + approved scenarios |

## End-of-session checklist

1. List every new or changed fact from the session.
2. Route each to its owner artifact with status, inline source, date, and evidence path.
3. Raise `questions.md` entries for anything unclear or conflicting.
4. Suggest coverage impact (scenario, regression, exploratory, AI eval).
5. Link updates in the task ledger or job outcome if applicable.
6. Run `qa:review` if open items changed.

## Promotion rules

- Agents add `observed`, `inferred`, `unknown`, or `outdated` only.
- `confirmed` requires human approval in `decisions.md`.
- Deterministic Playwright assertions require approved scenarios or confirmed decisions — never unapproved reference rows alone.
