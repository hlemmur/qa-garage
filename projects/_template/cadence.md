# Cadence — [project]

Per-project schedule overrides. Standard catalog in `core/ai/qa-cadence.md`.

## Active jobs

| Job type | Enabled | Schedule | Gate | Notes |
|----------|---------|----------|------|-------|
| smoke | no | daily 07:00 UTC | execution | Enable when accounts/env ready |
| regression | no | weekly Mon | execution | |
| explore-charter | no | weekly rotate risk | soft | |
| reference-hygiene | no | weekly Fri | none | |
| review-open-items | yes | daily | none | |
| report | yes | after test jobs | none | |
| ai-eval | no | weekly | execution | Enable when AI features in scope |
| doc-watch | no | weekly manual | none | |

## Doc watch

URLs to check for product changes (manual until diff automation):

- [documentation URL]

## Notifications (future)

- v1: `open-items.md` + Cursor chat
- v2: GitHub Issue / Telegram (see `docs/roadmap-infra.md`)

## Collaboration notes

_Agent proposes job changes here or in `jobs/`; QA Lead approves by setting Enabled=yes and updating job Status._
