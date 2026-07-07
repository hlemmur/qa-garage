---
name: scope-proposal
description: Harness wrapper for synthesizing a client-facing testing scope proposal from project artifacts. Use when drafting engagement scope for a client or stakeholder.
---

# Scope Proposal

Thin harness wrapper. Synthesis craft uses vendored `test-strategy`, `test-planning`, `risk-based-testing`; this skill produces the **outward-facing** document.

Before acting, read:

- `core/ai/scope-proposal-workflow.md`
- `core/ai/test-design-principles.md`
- `core/ai/human-decides-loop.md`
- The target project's `reference/`, `risk-matrix.md`, `strategy.md`, `plan.md`, `journeys/`, `questions.md`

## Goal

Produce a clear, scannable 2–4 page proposal the QA Lead can present to a client — grounded in real project data, honest about blockers, never abstract or invented.

## Steps

1. Confirm engagement **goal** and **constraints** with the QA Lead.
2. Read all prerequisite artifacts (see scope-proposal-workflow.md).
3. Scaffold with `npm run qa:proposal -- "<goal>"` or copy `core/templates/scope-proposal.md`.
4. Fill each section from artifacts:
   - Product understanding → `reference/features.md`, `use-cases.md`, top `journeys/`
   - Top risks → `risk-matrix.md` (max 5, no-go first)
   - Scope in → `plan.md` coverage map with priorities
   - Scope out → `strategy.md` deferred phases
   - How we test → strategy levels + test-design-principles (incl. AI eval if applicable)
   - Client dependencies → blocking `questions.md` reframed as decisions needed
   - Deliverables → reports, scenarios, automation, session logs
   - Evidence basis → inline doc URLs and session paths
5. Flag GAPs explicitly — untested requirements with accept/defer note.
6. Human reviews; record approval in `decisions.md` before external send.
7. Optional: run `qa-report-humanizer` for tone — never add facts not in source artifacts.

## Document rules

- **Short** — 2–4 pages; bullets and tables over prose.
- **Traceable** — every scope line links to F-, R-, UC-, or journey ID.
- **Honest** — blocked work = client dependency, not failure.
- **No ISO bloat** — no compliance template padding.

## Guardrails

- Do not invent features, risks, or coverage not in `reference/` or `risk-matrix.md`.
- Do not promise deterministic AI quality assertions without human-approved eval criteria.
- Do not mark proposal approved or send externally without QA Lead sign-off.
