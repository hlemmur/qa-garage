# Human-Decides Loop

The harness keeps humans in control of expected behavior, scope, and risk acceptance. AI proposes; humans decide. There is no separate web UI — the interface is **Markdown in the repo**, optionally mediated through Cursor chat.

## Inbox (read-only aggregate)

```bash
QA_PROJECT=<project> npm run qa:review
```

Writes `projects/<project>/open-items.md`. **Do not hand-edit** this file. It lists blocking and non-blocking items aggregated from source files.

Check execution gate:

```bash
QA_PROJECT=<project> npm run qa:review -- --gate
```

Non-zero exit means blocking items remain and execution work should not start (unless overridden).

## Reply form (where humans act)

### Answer a question

Edit `projects/<project>/questions.md`:

1. Fill the `Answer:` field.
2. Change `Status:` from `open` to `answered` (any value other than `open` removes the item from `open-items.md`).

Valid statuses: `open`, `answered`, `withdrawn`.

### Record a durable decision

Append to `projects/<project>/decisions.md` under Decision Log:

- Link to the question ID (e.g. Q-002) in Context.
- State Decision and Impact (what testing or scope this unlocks).

Update downstream artifacts as needed: `test-data.md`, `plan.md`, `reference/`, `scenarios/`.

### Proceed despite blockers (override)

Edit `projects/<project>/decisions.md` under Overrides:

```markdown
- **Allow proceed with open questions:** yes
```

Add date and who approved. The readiness gate reads this field.

### Approve a known issue for external filing

Edit `known-issues.md` — set `Human review: approved`.

### Regenerate inbox

```bash
QA_PROJECT=<project> npm run qa:review
```

## Chat-as-interface

In Cursor, tell the agent your answers in plain language:

> "Answer Q-002: use Microsoft account X for automation. Record as D-001 and update test-data.md."

The agent edits source files; you review the diff. `open-items.md` is the inbox; `questions.md` and `decisions.md` are the reply form.

## Agent rules after human answers

Agents may:

- Update `reference/`, `test-data.md`, `plan.md`, and propose scenarios based on answered questions.
- Mark tasks `unblocked` and propose cadence jobs.
- Regenerate `open-items.md`.

Agents must not:

- Mark human review as approved without explicit human instruction.
- Promote `observed`/`inferred` to `confirmed` without a `decisions.md` entry.
- Change assertions or expected behavior without approval.

## Source files aggregated by qa:review

| Source | Open when |
|--------|-----------|
| `questions.md` | `Status: open` |
| `known-issues.md` | `Human review: pending` |
