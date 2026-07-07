# UI Inventory

Granular complement to `product-map.md`. Records testable widget bundles, state logic, and smoke candidacy — not every DOM node.

Populated during Phase 0B app discovery and updated after exploratory sessions. See `core/ai/smoke-test-model.md`.

## Entry standard

| Column | Description |
|--------|-------------|
| ID | Stable ref: `UI-001`, `UI-002`, … |
| Page / PM link | `PM-001` from `product-map.md` |
| Widget / bundle | Testable group, e.g. "Main nav", "Item filters", "Recent items table" |
| Elements | Key controls, links, labels in the bundle |
| Expected when | State tag: `new_user`, `has_items`, `filters_default`, `role_admin`, … |
| Interaction | click / navigate / modal opens / submit |
| Status | `confirmed`, `observed`, `inferred`, `unknown`, `outdated` |
| Source | Inline: `exploration:evidence/sessions/…`, `docs:https://…`, `human:decisions.md#D-001` |
| Smoke candidate | `yes` / `no` / `deferred` |
| Evidence | Session log, screenshot, trace path |
| Links | Journey phase, scenario SMK-*, risk R-* |

## Inventory

| ID | Page / PM | Widget / bundle | Elements | Expected when | Interaction | Status | Source | Smoke | Evidence | Links |
|----|-----------|-------------------|----------|---------------|-------------|--------|--------|-------|----------|-------|
| UI-001 | PM-001 | [example nav] | Home, Settings links | `authed` | navigate | unknown | — | yes | — | — |

## Notes

- Prefer bundles over individual selectors — detail selectors in `testability.md` after automation attempts.
- Mark `observation` facts from exploration; promote to `confirmed` only via `decisions.md`.
- Rows marked `Smoke candidate: yes` feed `scenarios/smoke-proposal.md`.
