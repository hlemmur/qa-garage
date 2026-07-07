# Testability

Automation blockers, selector notes, nondeterminism, and data needs. Populated from docs pass; updated after exploration and test runs.

| ID | Area / flow | Automatable | Blockers | Selector notes | AI assertion level | Status | Source | Last verified | Evidence | Links |
|----|-------------|-------------|----------|----------------|-------------------|--------|--------|---------------|----------|-------|
| T-001 | Sign-in (university SSO / Microsoft) | partial | Institutional SSO varies by org; no test accounts; MFA possible | Login buttons likely role+name; IdP handoff external | n/a | unknown | docs:https://learn.postdocs.ai/guides | 2026-07-07 | Guides Step 1; Q-002 | F-021, R-007 |
| T-002 | Grants search and filters | partial | Requires auth; grant data may change over time | Sidebar "Grants" link; filter controls TBD | n/a | unknown | docs:https://learn.postdocs.ai/features | 2026-07-07 | Features › Browse | F-001, F-002 |
| T-003 | Bookmark persistence | partial | Requires auth; needs stable grant fixture | Bookmark UI TBD | n/a | unknown | docs:https://learn.postdocs.ai/features | 2026-07-07 | Features › Bookmark | F-003 |
| T-004 | Create proposal + template load | partial | Requires auth; needs known grant call fixture | Create proposal flow TBD | completion | unknown | docs:https://learn.postdocs.ai/guides | 2026-07-07 | Guides Step 3 | F-005, R-002 |
| T-005 | File upload (PDF/Word/PPT) | partial | Privacy sign-off required (R-001); size limits unknown | File input TBD | n/a | unknown | docs:https://learn.postdocs.ai/tips-and-tricks | 2026-07-07 | Tips › Upload; Q-003, Q-007 | F-007, R-008 |
| T-006 | AI section generation | partial | Nondeterministic output; long-running; no mock mode documented | Generate button TBD | completion | unknown | docs:https://learn.postdocs.ai/guides | 2026-07-07 | Guides Step 5; Q-004, Q-010 | F-010, R-006, R-009 |
| T-007 | Regenerate after setup change | partial | Same as T-006; needs baseline section | Setup + editor navigation TBD | completion | unknown | docs:https://learn.postdocs.ai/guides | 2026-07-07 | Guides Step 5; Tips | F-012 |
| T-008 | Submission-form text generation | partial | Nondeterministic; depends on project description | Form generator TBD | completion | unknown | docs:https://learn.postdocs.ai/features | 2026-07-07 | Features workflow step 3 | F-013 |
| T-009 | Eligibility checkboxes | yes (once auth) | Checkbox semantics unverified in app | Checkbox labels from funder reqs | n/a | unknown | docs:https://learn.postdocs.ai/features | 2026-07-07 | Features › Eligibility | F-014 |
| T-010 | Run assessment | partial | AI feedback nondeterministic | Assessment trigger TBD | completion | unknown | docs:https://learn.postdocs.ai/features | 2026-07-07 | Features › Assessment | F-015 |
| T-011 | Invite collaborator (view/comment/edit) | partial | Needs multiple accounts + email delivery; permission UI unverified | Share dialog TBD | n/a | unknown | docs:https://learn.postdocs.ai/ (FAQ) | 2026-07-07 | FAQ collaboration; Q-002, Q-009 | F-016, F-019, R-005 |
| T-012 | Real-time co-edit + comments | partial | Concurrency; excluded from flake tracking; needs 2+ sessions | Editor + presence TBD | n/a | unknown | docs:https://learn.postdocs.ai/features | 2026-07-07 | Features › Team collaboration | F-017, F-018, R-005 |
| T-013 | Export .docx | yes (once auth) | Binary file validation approach TBD (Q-011) | Export toolbar button TBD | n/a | unknown | docs:https://learn.postdocs.ai/ (FAQ) | 2026-07-07 | FAQ export; Guides Step 6 | F-020, R-004 |
| T-014 | Grant database accuracy spot-check | partial | Requires authoritative funder source; no in-app discrepancy UI documented | Grant detail fields TBD | n/a | unknown | docs:https://learn.postdocs.ai/ (FAQ) | 2026-07-07 | FAQ grant accuracy; Q-008 | F-022, R-003 |

**AI assertion levels:** `completion` (workflow finishes + output present), `schema` (structured output validates), `property` (bounds, forbidden content), `eval` (scored against golden set), `safety` (red-team probes), `n/a`.

## Notes

- All rows remain `unknown` automatibility until Phase 0B app exploration fills selector notes and confirms UI paths.
- Docs confirm upload types (PDF, Word, PowerPoint) but not size limits or error messages — keep upload matrix blocked on Q-007.
- Production-only target documented; no staging — environment blocker (Q-001).
- Institutional access only (research office / timothy@postdocs.ai); no self-serve signup path for test account provisioning.
