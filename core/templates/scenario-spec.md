# Scenario Spec

Testable specification linking reference IDs to observable behavior. Use for scenarios pending or approved for automation.

## Metadata

- **ID:** SCN-001
- **Title:** [short name]
- **Status:** proposed | approved | obsolete
- **Source:** observation | docs | human | issue
- **Tags:** `@smoke` `@regression` `@exploratory` `@ai-eval`
- **Links:** F-001, UC-001, R-001, SMK-* (if from smoke proposal)
- **Approved by:** [human, date — required before Playwright promotion]

## Goal

What user or business risk this scenario protects.

## Preconditions

- Environment:
- Account / role:
- Data / fixtures:
- Feature flags / mock mode:

## Happy path

1. [step]
2. [step]
3. [step]

**Oracles (positive):**

- [observable outcome that must be true]
- [data or UI state check]

## Negative cases

| Case | Steps (brief) | Expected outcome |
|------|---------------|------------------|
| Invalid input | [trigger] | [error message, validation, no corrupt state] |
| Permission denied | [trigger] | [403/hidden/disabled — per product] |
| Empty / missing data | [trigger] | [empty state, not crash] |

**Oracles (negative):**

- [what must NOT happen]
- [forbidden states]

## AI-specific checks (if applicable)

- Assertion level: completion | schema | property | eval | safety
- Property checks: [length bounds, required sections, forbidden phrases]
- Eval threshold: [human-approved score, if eval level]

## Evidence

- Last verified:
- Session log / trace:

## Automation notes

- Selectors:
- Fixtures:
- Flake policy:

## Source tier

| Source | Meaning | Gate |
|--------|---------|------|
| `observation` | From exploration/session | Individual human approval required |
| `docs` | From user/dev documentation | Approve if docs trusted |
| `human` | QA Lead decision | Already approved |
| `issue` | Known issue / bug report | Approve disposition |

## Review

- Human review: pending | approved | rejected
- Notes:
