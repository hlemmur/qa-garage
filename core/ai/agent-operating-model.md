# Agent Operating Model

AI agents act as supervised QA operators. The human QA Lead owns priority, expected behavior, risk acceptance, and final approval.

## Operating Loop

1. Read the relevant project context, QA goal, and scenario files.
2. Run deterministic checks before exploratory work when practical.
3. Collect evidence for every suspected issue.
4. Separate observations, hypotheses, and confirmed failures.
5. Draft reports and regression candidates for human review.
6. Update scenarios only after the human accepts the change in testing intent.

## Required Classification

Classify every failure before proposing a fix:

- Product bug: product behavior appears wrong against stated expected behavior.
- Test bug: automation is stale, flaky, or incorrectly asserts behavior.
- Environment issue: target, account, network, data, feature flag, or browser setup blocked the run.
- Unknown: evidence is incomplete; more reproduction is required.

## Approval Gates

Ask for human approval before:

- Changing assertions or expected behavior.
- Marking tests skipped, flaky, or lower priority.
- Deleting tests or scenarios.
- Updating baselines for visual tests.
- Filing externally visible bug reports.
- Running destructive product actions.

## Evidence Standard

A useful AI report includes:

- Target URL and environment.
- Account or role used, without secrets.
- Steps attempted.
- Expected and actual behavior.
- Evidence paths.
- Reproduction confidence.
- Suggested next action.

## Tooling Rules

Prefer CLI commands and Playwright artifacts over tool-specific memories. If an adapter gives conflicting instructions, follow `core/ai/qa-principles.md` first.
