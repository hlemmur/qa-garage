# Test Design Principles

Harness-level guidance for complete, realistic test design. Detailed craft lives in vendored skills — this doc steers agents toward the right skills and artifact homes.

Before designing coverage, read:

- `core/ai/qa-project-context-model.md`
- The target project's `reference/` and `risk-matrix.md`
- `core/ai/test-design-principles.md` (this file)

## Happy path is not enough

Every feature and use case needs:

1. **Happy path** — primary success flow
2. **Key negative flows** — invalid input, permission denied, empty state, timeout/network loss, recovery after error, concurrent conflict

Record negatives in:

- `reference/features.md` (key negative flows column)
- `reference/use-cases.md` (alt / negative flows column)
- `scenarios/` (explicit negative cases section)
- Exploratory charters (error-handling heuristics)

Do not duplicate the same negative in five files — link by ID.

## Coverage routing

| Need | Vendored skill | Artifact |
|------|----------------|----------|
| Risk prioritization | `risk-based-testing` | `risk-matrix.md` |
| Scenario decomposition | `ai-test-generation`, `test-planning` | `scenarios/`, `plan.md` |
| Exploratory negatives | `exploratory-testing` | session logs, `reference/` |
| Review happy-path-only tests | `ai-qa-review` | review notes |
| Failure mode analysis | `risk-based-testing` | `risk-matrix.md` gaps |

## AI-powered product features

When the product's value includes AI-generated output, treat AI testing as **first-class from Phase 1**, not a late-phase afterthought.

### Assertion levels (escalate as human approves)

| Level | What it checks | When to use |
|-------|------------------|-------------|
| `completion` | Workflow finishes; output present; no error state | Default smoke for AI flows |
| `schema` | Structured output validates against schema | JSON/constrained extraction |
| `property` | Bounds, required topics, forbidden content | Nondeterministic text |
| `eval` | Scored against golden dataset with human-set threshold | Quality regression |
| `safety` | Red-team / injection / policy probes | Pre-release |

Record per feature in `reference/testability.md`. Human approves eval thresholds and quality gates in `decisions.md`.

### Vendored skill

Use `ai-system-testing` for craft: prompt regression, eval frameworks, grounding, nondeterminism strategies. Harness rule: never assert exact LLM strings; use properties, schemas, or eval scores.

## Scenario spec standard

Approved scenarios use `core/templates/scenario-spec.md`:

- Links to `F-`, `UC-`, `R-` IDs
- Happy path + negative cases + oracles
- Approval status before Playwright promotion

## Design coverage workflow

1. Read `reference/` and `risk-matrix.md`.
2. Map highest risks to test levels (smoke, regression, exploratory, AI eval).
3. Draft scenarios with happy + negative cases.
4. Human approves scenarios → Playwright (`playwright-automation`).
5. Update `reference/testability.md` after automation attempts.

## Guardrails

- Gaps in coverage mapping are explicit in `plan.md` — never hidden.
- Exploratory findings inform scope; they become regression gates only after human accepts expected behavior and a deterministic test exists.
- AI quality thresholds require human approval — agents propose, humans set the bar.
