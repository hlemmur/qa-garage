# Questions

## Purpose

Track unresolved questions that block reliable discovery, scenario design, or deterministic test authoring.

| Question | Area | Status | Source | Evidence | Owner | Needed for |
| --- | --- | --- | --- | --- | --- | --- |
| What target environment should QA use for authenticated app testing? | Environment | unknown | QA setup | `project-context.md` | QA Lead | Smoke and exploratory testing. |
| Which test accounts are approved, and which sign-in path should automation use? | Authentication | unknown | docs | https://learn.postdocs.ai/guides | QA Lead | Smoke and regression tests. |
| What should the first smoke test assert beyond successful authentication? | Smoke | unknown | QA setup | `knowledge/user-journeys.md` | QA Lead | Smoke scenario approval. |
| What mock mode exists for AI generation, document parsing, email, and SSO? | Mock mode | unknown | QA setup | `knowledge/integrations.md` | Engineering/Product | Local deterministic testing. |
| What fixture materials are approved for upload and generation tests? | Test data | unknown | docs | https://learn.postdocs.ai/tips-and-tricks | QA Lead/Product | Upload and AI-generation coverage. |
| What upload file types, size limits, and validation errors should QA expect? | File upload | unknown | docs | https://learn.postdocs.ai/tips-and-tricks | Product/Engineering | Upload matrix. |
| How should QA validate grant database accuracy and refresh behavior? | Grant data | unknown | docs | https://learn.postdocs.ai/ | Product/Engineering | Grant browse regression and exploratory checks. |
| What permission levels are selectable when inviting collaborators? | Collaboration | unknown | docs | https://learn.postdocs.ai/ | Product | Collaboration scenarios. |
| What should be asserted for AI output without redefining scientific quality? | AI generation | unknown | docs | https://learn.postdocs.ai/guides | QA Lead/Product | Regression candidate design. |
| What privacy and security evidence is available for EU storage, third-party sharing, and model training claims? | Security/privacy | unknown | docs | https://learn.postdocs.ai/ | Product/Security | Security review and risk assessment. |
| How should `.docx` export fidelity be validated? | Export | unknown | docs | https://learn.postdocs.ai/ | QA Lead/Product | Export regression coverage. |
| Are there existing bug reports, support issues, or internal release notes to import? | Project history | unknown | QA setup | `knowledge/known-issues.md` | QA Lead | Known issue tracking. |

## Question Status

- `unknown`: open and unresolved.
- `answered`: answer exists and should be linked to `decisions.md` or `expected-behavior.md`.
- `blocked`: cannot be answered with current access.
- `outdated`: no longer relevant.

## Review Notes

Move answered questions into `decisions.md` or the relevant knowledge file.
