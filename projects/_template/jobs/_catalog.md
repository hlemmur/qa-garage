# Job Catalog — [project]

Which standard job types are enabled. Detail and instances in `jobs/*.md`. Overrides in `cadence.md`.

| Type | Enabled | Default schedule | Gate |
|------|---------|------------------|------|
| smoke | no | daily | execution |
| regression | no | weekly | execution |
| explore-charter | no | weekly | soft |
| reference-hygiene | no | weekly | none |
| review-open-items | yes | daily | none |
| report | yes | after test jobs | none |
| ai-eval | no | weekly | execution |
| doc-watch | no | weekly manual | none |

Update when QA Lead approves new scheduled work.
