# Bug Reproduction Workflow

The goal is to turn a suspected issue into a clear confirmed bug, a known non-bug, or an unresolved investigation note.

## Inputs

- Original observation or failure.
- Target URL and environment.
- Account or role used.
- Evidence from the first run.
- Relevant scenario and expected behavior.

## Reproduction Steps

1. Restate the suspected problem in one sentence.
2. Identify the expected behavior source.
3. Recreate the shortest path to the observed behavior.
4. Capture trace, screenshot, video, and logs as appropriate.
5. Repeat once when the result could be timing or data related.
6. Classify the result.
7. Draft a bug report only when evidence supports it.

## Classification

- Reproduced: the issue occurs consistently or on a clear trigger.
- Intermittent: the issue occurs more than once but not reliably.
- Not reproduced: the agent could not trigger it with available inputs.
- Blocked: access, data, environment, or ambiguity prevented reproduction.

## Bug Report Standard

A suggested bug report must include:

- Title.
- Environment and target URL.
- Preconditions.
- Steps to reproduce.
- Expected behavior.
- Actual behavior.
- Evidence paths.
- Reproduction confidence.
- Suggested regression coverage.

## Guardrails

Do not edit tests, assertions, or expected behavior during reproduction unless the human approves the testing intent change.
