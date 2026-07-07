# Scope Proposal Workflow

Produce a **client-facing testing scope proposal** by synthesizing project artifacts. Internal execution tracking stays in `plan.md`; proposals are outward-facing and require human approval before sending.

## Prerequisites

Minimum inputs before drafting:

- `reference/` populated (at least docs pass)
- `risk-matrix.md` with scored risks
- `strategy.md` and `plan.md` (even draft)
- `questions.md` for honest dependency listing

Optional but valuable: `journeys/`, exploration session logs, `test-data.md`.

## Inputs from QA Lead

- **Goal** — e.g. "Phase 1 black-box QA for production launch"
- **Constraints** — timeline, access level, budget/capacity, black-box vs white-box
- **Audience** — client stakeholder name/role (for tone, not stored as PII in template)

## Skill chain

1. Read all artifacts listed above.
2. Harness `scope-proposal` skill — synthesize into `proposals/<date>-<slug>.md` from `core/templates/scope-proposal.md`.
3. Optional: `qa-report-humanizer` for client tone (no invented facts).
4. Human reviews and records approval in `decisions.md` before external send.

## Evidence rules

- Every in-scope row traces to a reference ID, risk ID, or journey name.
- GAPs and blocked items stay visible — frame as client dependencies, not hidden failures.
- Do not invent coverage, effort, or timelines without basis in `plan.md` or QA Lead input.
- Inline source links only — no separate sources-index file.

## CLI scaffold

```bash
QA_PROJECT=<project> npm run qa:proposal -- "Phase 1 black-box QA"
```

Creates a dated proposal file under `proposals/` for the agent to fill from artifacts.

## Approval

Before sending to a client:

1. QA Lead reviews proposal for accuracy and commercial terms.
2. Record in `decisions.md`: "Proposal approved for client [name/date]."
3. Do not auto-send or auto-commit client-specific pricing without human edit.

## Relationship to plan.md

| Artifact | Audience | Updates |
|----------|----------|---------|
| `plan.md` | Internal QA team | Weekly during execution |
| `proposals/*.md` | Client / stakeholder | Versioned at engagement milestones |

When scope changes after client approval, create a new proposal version or amendment — do not silently drift `plan.md` away from the agreed proposal without client communication.
