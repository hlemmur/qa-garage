# User Journeys

Produced by the `journey-mapping` skill. One file per journey (or segment). A journey is the end-to-end experience of a real user pursuing a goal across touchpoints - NOT a feature list.

Each journey map should capture, as lanes across phases:

- **Phases:** major stages (e.g. Discover, Onboard, Create, Collaborate, Export).
- **Steps:** what the user actually does in each phase.
- **Touchpoints:** where they interact (web app, email, editor, share link, ...).
- **Goals:** what they are trying to accomplish.
- **Thoughts / Emotions:** their mental and emotional state (friction curve).
- **Pain points:** where it breaks or frustrates.
- **Opportunities / QA focus:** what to test and which risk (link to `risk-matrix.md`).

Tie each journey to the personas in the Product section of `.agents/qa-project-context.md` and to risks in `risk-matrix.md`, so testing follows real user value, not feature enumeration.

Template for a single journey: `.agents/skills/journey-mapping/references/journey-map-template.md`.

## Filename convention

Use **action-oriented** names — what the user does, not an aspirational outcome.

| Avoid (outcome) | Prefer (action) |
|-----------------|-----------------|
| `win-a-grant-with-a-drafted-proposal.md` | `create-proposal-for-a-grant.md` |

## Journeys

- [ ] `create-proposal-for-a-grant.md` - [persona] creates [artifact] from [catalog/source] (harness example)
- [ ] [journey-name].md - [persona] pursuing [goal]
