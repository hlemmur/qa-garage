# Knowledge Base Workflow

The project knowledge base is the durable memory for a QA target. It preserves product understanding, evidence, decisions, risks, and open questions across AI sessions without relying on tool-specific memory.

## Purpose

Use project knowledge to:

- Avoid rediscovering the same product facts every session.
- Ground discovery, scenario design, and regression promotion.
- Separate confirmed expected behavior from observations and hypotheses.
- Track what changed as features, releases, and access levels evolve.

## Location

Project knowledge lives under:

```text
projects/<project>/knowledge/
```

The knowledge base is per project because product facts, users, data, integrations, and risks differ by target.

## Knowledge Status

Every durable knowledge item should use one status:

- `confirmed`: approved by a human or backed by an authoritative source.
- `observed`: seen during exploration or testing, but not yet approved as expected behavior.
- `inferred`: reasoned from UI, docs, or behavior, but not directly confirmed.
- `outdated`: previously true or useful, now suspected stale.
- `unknown`: explicitly unresolved.

## Source Types

Record where each item came from:

- `human`
- `docs`
- `app exploration`
- `test evidence`
- `repo`
- `release notes`
- `support report`

## Entry Standard

Every durable item should include:

- Status.
- Source.
- Last verified date.
- Evidence path, URL, trace, screenshot, report, or session log.
- Owner when known.
- Notes.

## AI Permissions

AI may:

- Add `observed`, `inferred`, `unknown`, or `outdated` entries.
- Propose updates to existing entries.
- Link observations to evidence and session logs.
- Draft questions for human review.
- Suggest that an observed behavior be promoted to `confirmed`.

AI must not automatically:

- Promote observed or inferred behavior to `confirmed`.
- Mark expected behavior as obsolete.
- Remove knowledge entries.
- Rewrite product decisions.
- Use unapproved knowledge as the basis for deterministic assertions.

Those actions require human approval.

## Contradictions

When new evidence conflicts with existing knowledge:

1. Keep the existing entry.
2. Add a contradiction note with the new evidence.
3. Mark the status as `outdated` only if the human approves or an authoritative source proves it.
4. Add a question in `questions.md` if expected behavior is unclear.

## Discovery Update Loop

1. Read `project-context.md`.
2. Read `knowledge/README.md` and relevant knowledge files.
3. Explore the app or review docs.
4. Add observations with status `observed` or `inferred`.
5. Link evidence.
6. Add questions for human/product review.
7. Propose scenario and regression updates.
8. Wait for approval before confirming expected behavior.

## Release Update Loop

1. Read release notes, docs, or product change context.
2. Compare changed areas against `feature-inventory.md`, `expected-behavior.md`, and `risks.md`.
3. Mark potentially stale entries as proposed updates, not silent truth changes.
4. Suggest new smoke, regression, exploratory, visual, accessibility, API, or performance coverage.
5. Ask for human approval before changing confirmed expectations.

## Relationship To Tests

Deterministic Playwright tests should assert only confirmed expected behavior. Tests may link back to:

- `expected-behavior.md`
- `decisions.md`
- Approved bug reports
- Approved scenarios

Exploratory findings can suggest tests, but they do not define expected behavior by themselves.
