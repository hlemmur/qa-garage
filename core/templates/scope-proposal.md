# Testing Scope Proposal

> **Status:** draft — requires QA Lead approval before sending to client.
> **Goal:** [engagement goal from QA Lead]
> **Project:** [product name]
> **Date:** [YYYY-MM-DD]
> **Prepared by:** [QA Lead / team]

---

## Goal and context

[3–5 sentences: what this engagement covers, why now, and what success looks like for the client.]

---

## What we understand about the product

[Synthesized from `reference/features.md` and `use-cases.md` — bullet list, not feature dump.]

- [capability 1] (F-001)
- [capability 2] (F-002)
- [primary user journey summary] (see journeys/[name].md)

---

## What matters most

Top risks from `risk-matrix.md` (max 5):

| Risk | Area | Level | Why it matters |
|------|------|-------|----------------|
| R-001 | [area] | Critical/High | [business impact] |

---

## Proposed scope — in

From `plan.md` coverage map:

| Priority | Area / journey | Test level | Rationale |
|----------|----------------|------------|-----------|
| P0 | [item] | smoke / regression / exploratory / AI eval | [risk or journey link] |

---

## Out of scope (this engagement)

From `strategy.md` deferred phases and explicit exclusions:

- [deferred item] — [reason / phase]
- [exclusion] — [reason]

---

## How we will test

| Level | What it means for this project |
|-------|-------------------------------|
| Smoke | [e.g. sign-in reaches stable landing] |
| Regression | [human-approved deterministic checks] |
| Exploratory | [high-risk areas, negative flows] |
| AI eval | [if applicable — completion/property/eval level] |

Approach: [black-box / FE-first / … from strategy.md]

---

## What we need from you

Blocking dependencies from `questions.md`:

| Decision needed | Why | Options (if known) |
|-----------------|-----|-------------------|
| [Q-001 summary] | [why it matters] | [options] |

---

## Deliverables

- [ ] Discovery reports and session logs
- [ ] Updated product reference (`reference/`)
- [ ] Risk matrix and test plan
- [ ] Approved scenarios and Playwright automation (where access allows)
- [ ] Periodic QA reports (`reports/`)
- [ ] Release readiness summary (when applicable)

---

## Assumptions and timeline

**Assumptions:**

- [access, environment, data, privacy sign-off, …]

**Indicative phasing:**

1. [Phase 1 — …]
2. [Phase 2 — …]

**Effort note:** [realistic capacity from plan; include buffer; do not over-promise]

---

## Evidence basis

This proposal is grounded in:

- Documentation: [inline URLs from reference rows]
- Exploration: [session log paths, if any]
- Human decisions: [decisions.md refs, if any]

---

## Approval

- [ ] QA Lead reviewed for accuracy
- [ ] Recorded in `decisions.md` before client send
