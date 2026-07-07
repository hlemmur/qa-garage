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

## Smoke testing

Black-box smoke definition and authoring gate: `core/ai/smoke-test-model.md`.

Draft scope in `scenarios/smoke-proposal.md` via harness `smoke-test-design` — **never** author `*.spec.ts` until human approves the proposal and every `observation`-sourced case.

Smoke covers auth shell, authed surfaces, navigation, controls, context-aware account state, and primary-journey minimal path — not AI quality, export fidelity, or negative matrices.

## Source tiers (all automation)

Every smoke case (SMK-*) and regression scenario (SCN-*) must declare a **Source**:

| Source | Meaning | Gate |
|--------|---------|------|
| `observation` | From exploration/session | Individual human approval |
| `docs` | From user/dev documentation | Approve if docs trusted |
| `human` | QA Lead decision | Already approved |
| `issue` | Known issue / bug report | Approve disposition |

**No code before approval:** Playwright authoring requires approved `smoke-proposal.md` or `scenarios/approved/*.md` plus `decisions.md` entry.

## Scenario spec standard

Approved scenarios use `core/templates/scenario-spec.md`:

- **Source** tier on every spec
- Links to `F-`, `UC-`, `R-`, `SMK-` IDs
- Happy path + negative cases + oracles
- Approval status before Playwright promotion

## Design coverage workflow

1. Read `reference/` and `risk-matrix.md`.
2. Map highest risks to test levels (smoke, regression, exploratory, AI eval).
3. Draft smoke proposal (`smoke-test-design`) or regression scenarios with happy + negative cases.
4. Human approves smoke proposal / scenarios → Playwright (`playwright-automation`).
5. Update `reference/testability.md` after automation attempts.

## Guardrails

- Gaps in coverage mapping are explicit in `plan.md` — never hidden.
- Exploratory findings inform scope; they become regression gates only after human accepts expected behavior and a deterministic test exists.
- AI quality thresholds require human approval — agents propose, humans set the bar.
