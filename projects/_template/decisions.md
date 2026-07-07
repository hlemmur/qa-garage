# Decisions

Durable log of human decisions that shape testing intent: confirmed expected behavior, scope calls, risk acceptance, and explicit overrides. Append-only unless correcting a factual error. Agents propose; humans decide.

## Decision Log

### D-001: [title]

- Date: [YYYY-MM-DD]
- Decided by: [human]
- Context: [what prompted it, link to question/risk]
- Decision: [what was decided]
- Impact: [what testing/expected-behavior this unlocks or changes]

## Overrides

Explicit permissions that relax a guardrail. The readiness gate checks here.

- **Allow proceed with open questions:** [no] - set to `yes` (with date + who) to let execution work start while non-blocking questions remain open.
