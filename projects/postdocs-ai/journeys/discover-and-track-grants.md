# Journey: Discover and track grants

- Persona: Experienced PI
- Goal: Build and organize a pipeline of relevant, still-open grant calls.
- Scope: pre-proposal discovery. Source: https://learn.postdocs.ai/features and /guides (docs, confirmed).

| Phase | Steps | Touchpoints | Goal | Thoughts / Emotions | Pain points | QA focus (risk) |
|-------|-------|-------------|------|---------------------|-------------|-----------------|
| Search | Search grants by name or funding agency | Grants search | Find candidate calls | Exploratory, hopeful | Missing/duplicate results | Grant search regression |
| Filter | Filter by Open / Forthcoming / Closed and by agency | Filter controls | Narrow to actionable calls | Focused | Wrong status shown (freshness) | R-003 grant freshness |
| Inspect | Open a call; read requirements, eligibility, deadline | Grant detail | Judge fit and timing | Careful, deadline-aware | Inaccurate eligibility/deadline | R-003 no-go |
| Bookmark | Bookmark calls; organize into custom groups | Bookmarks, groups | Build a tracked pipeline | Organized, in control | Bookmarks/groups not persisted | Bookmark regression |

## QA notes

- Regression candidates: search returns known agency results; filters change the set correctly; bookmark persists across reload.
- Grant-data accuracy (R-003) needs product-provided validation rules or visible metadata; keep exploratory until then.
