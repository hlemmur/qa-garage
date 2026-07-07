# Proposals

Client-facing testing scope documents synthesized from project artifacts.

## Purpose

- **Internal:** `plan.md` tracks execution week to week.
- **External:** `proposals/*.md` presents agreed scope to clients or stakeholders.

## Creating a proposal

```bash
QA_PROJECT=<project> npm run qa:proposal -- "Phase 1 black-box QA"
```

Then run harness `scope-proposal` skill to fill sections from `reference/`, `risk-matrix.md`, `strategy.md`, `plan.md`, and `questions.md`.

See `core/ai/scope-proposal-workflow.md`.

## Versioning

- Filename: `<date>-<slug>.md` (e.g. `2026-07-08-phase1-black-box.md`)
- Amendments: new file or explicit revision section — do not silently edit sent proposals.

## Approval

Record client-ready approval in `decisions.md` before external distribution. Agents draft; QA Lead approves.

## Rules

- 2–4 pages, scannable tables and bullets
- Every scope line traceable to reference or risk IDs
- Blockers framed as client dependencies
- No invented coverage or effort
