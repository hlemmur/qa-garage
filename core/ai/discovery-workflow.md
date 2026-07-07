# Discovery Workflow

Phase 0 runs before execution work (smoke, regression authoring, release gating). It builds product understanding from docs and app exploration. See `human-decides-loop.md` for how humans answer blockers.

## Gates

| Gate | Blocks | Does not block |
|------|--------|----------------|
| **Discovery** (soft) | Nothing — access blockers become `questions.md` entries | Docs discovery, reference updates, app exploration attempts |
| **Execution** (`qa:review --gate`) | Test authoring, regression runs that gate release | Discovery, reference maintenance, scope proposal drafting |

## Phase 0A — Docs discovery (no app access required)

**Skill:** harness `project-discovery` (docs pass) + vendored `qa-project-context`, `journey-mapping`, `risk-based-testing`

1. Collect user documentation URLs from the QA Lead.
2. Extract features, use cases, product map, and glossary into `reference/`.
3. Draft high-level journeys and risks from docs.
4. Populate `.agents/qa-project-context.md` Product and Tech Stack sections.
5. Write `evidence/discovery/<date>-docs-report.md` from `core/templates/discovery-report.md`.
6. Raise blocking questions (access, accounts, privacy) in `questions.md`.

**Done when:** `reference/` populated from docs; `qa:knowledge` passes; open questions recorded.

## Phase 0B — App discovery (hands-on)

**Skills:** `agentic-browser-testing`, `exploratory-testing`, harness `project-discovery` (app pass)

Prerequisite: read `reference/`, `journeys/`, and `risk-matrix.md` before touching the app.

1. Run time-boxed charters (45–90 min each) against `TARGET_URL`.
2. Scaffold sessions: `QA_PROJECT=<project> npm run qa:discover -- "charter description"`.
3. Record in `evidence/sessions/<timestamp>-session-log.md`.
4. Update `reference/` entries to `observed` with evidence paths; fill `reference/testability.md`.
5. Propose journey refinements, new risks, and smoke candidates.
6. Write `evidence/discovery/<date>-app-report.md`.

**Done when:** At least one session log exists; `testability.md` has automation notes; contradictions raised as questions.

Blocked access is expected — record under Setup Blockers in the discovery report, not as failure.

## Phase 0C — Reconcile sources

**Skill:** harness `knowledge-curator`

1. Compare docs vs exploration — contradictions → `questions.md`; mark old entries `outdated`.
2. Human reviews proposed confirmations in `reference/`.
3. Approved items → `decisions.md` and `scenarios/approved/` when ready for assertions.
4. Regenerate `open-items.md` with `qa:review`.

**Done when:** No silent conflicts; human has reviewed high-signal proposed confirmations.

## After Phase 0

Proceed to `qa-start` sequence (strategy → plan) or ongoing cadence jobs. Do not begin execution-gated work until the execution gate clears or `decisions.md` records an override.

## Outputs

| Output | Location |
|--------|----------|
| Product reference | `reference/` |
| Discovery reports | `evidence/discovery/` |
| Session logs | `evidence/sessions/` |
| Open questions | `questions.md` |
| Task ledger entries | `tasks/qa-tasks.md` (TASK-001–003) |
