# Journey: Create a proposal for a grant

Generic harness example journey. Replace persona, goal, and phases for the target product.

- Persona: Primary user
- Goal: Start a new item from a catalog entry using the default workflow.
- Scope: end-to-end core journey (minimal smoke path: Access + Start phases).

| Phase | Steps | Touchpoints | Goal | Thoughts / Emotions | Pain points | QA focus (risk) |
|-------|-------|-------------|------|---------------------|-------------|-----------------|
| Access | Open app; authenticate | Login | Reach authenticated landing | "Will sign-in work?" | SSO / MFA blocks automation | Smoke sign-in |
| Find item | Open catalog; search/filter; open detail | List, filters, detail | Confirm item fits | Time-pressured | Stale data misleads | Data freshness |
| Start workflow | Click create; select template; form loads | Create flow, template | Begin with correct structure | Relief if prefilled | Wrong template invalidates work | Template accuracy |
| Provide inputs | Upload files; fill required fields | Setup page, uploader | Give system enough context | Uncertain what to attach | Upload limits / errors | Upload handling |
| Generate + edit | Run generation; review output | Editor | Get a usable first draft | Critical of quality | Long waits; plausible errors | AI quality (out of smoke) |
| Review | Run checks; confirm readiness | Review area | De-risk before handoff | Reassured or worried | Unclear check semantics | Regression |
| Export | Export artifact; hand off externally | Export, external system | Produce deliverable | Anxious about format | Lost formatting | Export fidelity (out of smoke) |

## QA notes

- **Smoke (minimal path):** Access phase — sign-in reaches stable landing; optionally Start workflow — template loads.
- **Regression:** Full generate/edit/review/export phases.
- **Exploratory:** AI output quality until human sets acceptance criteria.
- Filename convention: action-oriented (`create-proposal-for-a-grant`), not outcome-oriented (`win-a-grant-…`).
