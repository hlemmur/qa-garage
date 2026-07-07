# Scenario

Lightweight scenario outline. For full test specs with negative cases, AI checks, and ID traceability, use `core/templates/scenario-spec.md`.

## Name

Human-readable scenario name.

## Tags

`@smoke` `@regression` `@exploratory` `@visual` `@ai-eval`

## Purpose

What user risk this scenario protects.

## Links

Reference IDs: F-, UC-, R- (from `reference/`).

## Persona

User role, permissions, and relevant state.

## Preconditions

Target environment, data, feature flags, or account setup.

## Journey

1.
2.
3.

## Expected Outcomes

- Observable outcome:
- Evidence to collect:

## Negative Cases

- Invalid input:
- Permission denied:
- Empty / error recovery:

## Exploratory Variants

- Data variation:
- Navigation variation:
- Error/recovery variation:
- Refresh/save/reload variation:

## Automation Notes

Stable selectors, fixtures, or setup requirements for future Playwright tests.

## Review Notes

Expected behavior owner and approval date. Use `scenario-spec.md` template before Playwright promotion.
