# Daily QA Loop

Use this loop for regular supervised QA sessions. It sits on top of the vendored skills; see `garage-operating-model.md` for the skill-routing table.

## Inputs

- `projects/<project>/.agents/qa-project-context.md`.
- `reference/` (features, use cases, product map, testability).
- Current `plan.md`, relevant `journeys/`, and `risk-matrix.md`.
- Target environment and URL.
- Scenario files.
- Recent changes, release notes, or risk areas.
- Known blockers and test account constraints (`test-data.md`).

## Workflow

1. Confirm the target and scope for the session.
2. Read the project context, plan, journeys, and relevant scenarios.
3. Check the readiness gate: `QA_PROJECT=<project> npm run qa:review -- --gate`. Resolve or override blockers before execution work.
4. Run smoke tests with `npm run qa:smoke`.
5. Review failures and classify them before exploring further.
6. Run the relevant regression suite or targeted tests.
7. Execute exploratory charters for high-risk areas (`exploratory-testing`, `agentic-browser-testing`).
8. Collect traces, screenshots, videos, console logs, and notes.
9. Summarize findings with confidence levels.
10. Record issues in `known-issues.md` and open questions in `questions.md` with source and evidence.
11. Draft bug reports for confirmed issues; suggest regression tests for approved ones.
12. Update confirmed expectations, `qa-project-context.md`, and scenarios only after human review.
13. Run harness `knowledge-curator` — propose `reference/` and related artifact updates (mandatory; see `knowledge-maintenance.md`).
14. Regenerate `open-items.md` (`npm run qa:review`) and end with an ACTION REQUIRED summary if anything awaits a human.

## Output

Each session should produce: a session log; evidence artifact paths; confirmed issues; open questions; proposed context/risk updates; suggested regressions; scenario-library update suggestions.

## Release Gate Guidance

Smoke and regression tests can gate releases. Exploratory findings inform release risk, but they become gates only after the human accepts the expected behavior and a deterministic regression exists.
