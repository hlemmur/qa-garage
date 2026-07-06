---
name: bug-repro
description: Use when reproducing a suspected product defect or failed QA observation.
---

# Bug Reproduction

Before acting, read:

- `core/ai/qa-principles.md`
- `core/ai/bug-repro-workflow.md`
- Relevant scenario or original finding

## Goal

Classify a suspected issue as reproduced, intermittent, not reproduced, or blocked.

## Steps

1. Restate the suspected issue.
2. Identify the expected behavior source.
3. Reproduce the shortest path.
4. Capture trace, screenshot, video, and logs as needed.
5. Repeat once when the result may be intermittent.
6. Draft a bug report only when evidence supports it.

## Output

Use `core/templates/bug-report.md` for confirmed or intermittent issues.
