# Daily QA Loop

Use this loop for regular supervised QA sessions.

## Inputs

- Project context.
- Target environment and URL.
- Scenario files.
- Recent changes, release notes, or risk areas.
- Known blockers and test account constraints.

## Workflow

1. Confirm the target and scope for the session.
2. Run smoke tests with `npm run qa:smoke`.
3. Review failures and classify them before exploring further.
4. Run the relevant regression suite or targeted tests.
5. Execute exploratory charters for high-risk areas.
6. Collect traces, screenshots, videos, console logs, and notes.
7. Summarize findings with confidence levels.
8. Draft bug reports for confirmed issues.
9. Suggest regression tests for approved bug reports.
10. Update scenarios after human review.

## Output

Each session should produce:

- A session log.
- Evidence artifact paths.
- Confirmed issues.
- Open questions.
- Suggested regressions.
- Scenario-library update suggestions.

## Release Gate Guidance

Smoke and regression tests can gate releases. Exploratory findings should inform release risk, but they become gates only after the human accepts the expected behavior and a deterministic regression exists.
