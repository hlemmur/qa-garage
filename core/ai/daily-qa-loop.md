# Daily QA Loop

Use this loop for regular supervised QA sessions.

## Inputs

- Project context.
- Project knowledge base.
- Target environment and URL.
- Scenario files.
- Recent changes, release notes, or risk areas.
- Known blockers and test account constraints.

## Workflow

1. Confirm the target and scope for the session.
2. Read `project-context.md` and relevant `knowledge/*.md` files.
3. Run smoke tests with `npm run qa:smoke`.
4. Review failures and classify them before exploring further.
5. Run the relevant regression suite or targeted tests.
6. Execute exploratory charters for high-risk areas.
7. Collect traces, screenshots, videos, console logs, and notes.
8. Summarize findings with confidence levels.
9. Add proposed knowledge updates with source and evidence.
10. Draft bug reports for confirmed issues.
11. Suggest regression tests for approved bug reports.
12. Update confirmed expectations and scenarios only after human review.

## Output

Each session should produce:

- A session log.
- Evidence artifact paths.
- Confirmed issues.
- Open questions.
- Knowledge updates proposed.
- Suggested regressions.
- Scenario-library update suggestions.

## Release Gate Guidance

Smoke and regression tests can gate releases. Exploratory findings should inform release risk, but they become gates only after the human accepts the expected behavior and a deterministic regression exists.
