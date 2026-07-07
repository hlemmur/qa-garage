# Journey: Win a grant with a drafted proposal

- Persona: Experienced PI
- Goal: Turn a relevant grant call into a submittable, funder-compliant proposal with less manual drafting.
- Scope: end-to-end core journey. Source: https://learn.postdocs.ai/guides and /features (docs, confirmed).

| Phase | Steps | Touchpoints | Goal | Thoughts / Emotions | Pain points | QA focus (risk) |
|-------|-------|-------------|------|---------------------|-------------|-----------------|
| Access | Go to app.postdocs.ai; choose university SSO or Microsoft; authenticate | Login, institution IdP | Get in with institutional identity | "Will my institution work?" mild anxiety | SSO varies per org; may block automation | Smoke sign-in; R-007 |
| Find the call | Open Grants; search/filter by agency and status; open call details | Grants list, filters, detail | Confirm this call fits and is open | Hopeful, time-pressured near deadlines | Stale status/eligibility misleads | R-003 grant freshness |
| Start proposal | Click Create proposal; select the target grant call; template loads | Proposals, template loader | Begin in the correct funder template | Relief that structure is prefilled | Wrong template/limits invalidate work | R-002 template accuracy |
| Set up inputs | Upload background materials; write synopsis; pick sections + language | Setup page, uploader | Give the AI the right context | Uncertain what to upload | Upload limits/errors; privacy of files | R-001 privacy, R-008 uploads |
| Generate + edit | Generate selected sections; review and edit each; regenerate after tweaks | Project-description editor | Get a strong first draft to refine | Curious, then critical of quality | Plausible-but-wrong content; long waits | R-006 AI quality, R-009 AI UX |
| Form texts | Generate abstract, popular-science summary, sex/gender perspectives | Submission-form generator | Fill funder form answers fast | Satisfied if consistent with draft | Inconsistency with main draft | R-006 |
| Review | Check eligibility checkboxes; run assessment vs criteria | Review area | De-risk before submission | Reassured or worried by feedback | Checkbox semantics/persistence unclear | Eligibility regression |
| Export + submit | Export to Word .docx; paste into funder portal | Export toolbar, external portal | Produce a submittable document | Anxious it must be perfect | Lost formatting breaks the portal copy | R-004 export fidelity |

## QA notes

- Smoke: Access phase (sign-in reaches a stable landing).
- First regression candidates: Start proposal (template loads for a known call), Export (.docx contains expected sections).
- Keep AI generation exploratory (assert completion + output presence) until the QA Lead sets acceptance criteria.
- External funder portal is out of scope beyond the export handoff.
