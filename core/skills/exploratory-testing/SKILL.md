---
name: exploratory-testing
description: Use when running AI-assisted exploratory testing against a web app.
---

# Exploratory Testing

Before acting, read:

- `core/ai/qa-principles.md`
- `core/ai/exploratory-workflow.md`
- Relevant scenario and charter files

## Goal

Discover risks and suspicious behaviors while preserving the distinction between observation and confirmed defect.

## Steps

1. State the charter and timebox.
2. Run the happy path first.
3. Explore variants around data, navigation, refresh, permissions, error states, and recovery.
4. Capture evidence for any suspicious behavior.
5. Attempt a clean reproduction for high-signal issues.
6. Summarize findings by confidence.

## Output

Use `core/templates/session-log.md` and draft bug reports only for evidenced issues.
