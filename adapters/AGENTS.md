# Agent Instructions

This repository uses a portable AI-native QA harness.

Before QA-related work, read:

- `core/ai/qa-principles.md`
- `core/ai/agent-operating-model.md`
- `core/ai/daily-qa-loop.md`
- Relevant scenario files under `projects/<project>/scenarios/`

## Rules

- Use Playwright output, traces, screenshots, videos, and reports as the deterministic source of truth.
- Treat exploratory findings as leads until reproduced with evidence.
- Classify failures before proposing fixes.
- Do not silently change assertions, delete tests, skip tests, update baselines, or redefine expected behavior.
- Ask for human approval before promoting exploratory findings into regressions.

## Commands

- Smoke: `npm run qa:smoke`
- All tests: `npm test`
- Report: `npm run qa:report`
- Explore: `npm run qa:explore`
