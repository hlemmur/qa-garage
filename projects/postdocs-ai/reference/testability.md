# Testability

Automation blockers, selector notes, nondeterminism, and data needs. Updated after Phase 0B app exploration.

| ID | Area / flow | Automatable | Blockers | Selector notes | AI assertion level | Status | Source | Last verified | Evidence | Links |
|----|-------------|-------------|----------|----------------|-------------------|--------|--------|---------------|----------|-------|
| T-001 | Sign-in (university SSO / Microsoft) | partial | Passkey/human OAuth (D-002); Supabase callback external | `/auth` → `getByRole('button', { name: /Continue with Microsoft/i })` | n/a | observed | app:2026-07-07 | 2026-07-07 | session log | F-021, R-007 |
| T-002 | Grants search and filters | partial | Requires auth; grant data changes over time | `getByRole('link', { name: 'Grants' })`; search `getByPlaceholder(/Search grant call/i)`; Bookmarked switch; Status checkboxes Open/Forthcoming/Closed | n/a | observed | app:2026-07-07 | 2026-07-07 | session log | F-001, F-002 |
| T-003 | Bookmark persistence | partial | Requires auth; needs stable grant fixture | Per-row **Bookmark grant** button | n/a | observed | app:2026-07-07 | 2026-07-07 | session log | F-003 |
| T-004 | Create proposal + template load | partial | Requires auth; use Vinnova fixture grant | **Create proposal** → modal **Select a grant call** → search | completion | observed | app:2026-07-07 | 2026-07-07 | session log | F-005, R-002 |
| T-005 | File upload (PDF/Word/PPT) | partial | Mock data only (D-003); size limits unknown; human auth | Setup `/steps/quiz` → File(s) area (input TBD) | n/a | partial | docs + app | 2026-07-07 | session log; Q-007 | F-007, R-008 |
| T-006 | AI section generation | partial | Nondeterministic; long-running; no mock mode | **Generate project description** on Setup | completion | observed | app:2026-07-07 | 2026-07-07 | session log; Q-004, Q-010 | F-010, R-006, R-009 |
| T-007 | Regenerate after setup change | partial | Same as T-006 | Navigate Setup ↔ Project Description via step switcher | completion | inferred | docs | 2026-07-07 | Guides Step 5 | F-012 |
| T-008 | Submission-form text generation | partial | Nondeterministic; Form step not fully toured | Form & attachments step | completion | partial | app + docs | 2026-07-07 | session log | F-013 |
| T-009 | Eligibility checkboxes | unknown | UI location not confirmed in Phase 0B | TBD | n/a | unknown | docs | 2026-07-07 | Features › Eligibility | F-014 |
| T-010 | Run assessment | partial | AI feedback nondeterministic | Review panel → **Review proposal** | completion | observed | app:2026-07-07 | 2026-07-07 | session log | F-015 |
| T-011 | Invite collaborator (view/comment/edit) | partial | Allowlist emails only (D-003); dialog not opened | Open menu → **Invite** | n/a | partial | app + docs | 2026-07-07 | session log; Q-009 | F-016, F-019, R-005 |
| T-012 | Real-time co-edit + comments | partial | Concurrency; excluded from flake tracking | Comments panel tab | n/a | partial | app | 2026-07-07 | session log | F-017, F-018, R-005 |
| T-013 | Export .docx | partial | Requires auth; binary validation TBD (Q-011) | **Download Project Description** toolbar button | n/a | observed | app:2026-07-07 | 2026-07-07 | session log | F-020, R-004 |
| T-014 | Grant database accuracy spot-check | partial | Stale statuses suspected (KI-001) | Grant cards show status badge + deadline | n/a | observed | app:2026-07-07 | 2026-07-07 | session log; Q-008 | F-022, R-003 |

**AI assertion levels:** `completion` (workflow finishes + output present), `schema` (structured output validates), `property` (bounds, forbidden content), `eval` (scored against golden set), `safety` (red-team probes), `n/a`.

## Notes

- Auth: use Playwright `storageState` saved after human sign-in, or `@smoke` tagged tests run manually with QA Lead auth.
- Smoke candidate (Q-005 proposed): post-auth `/home` + sidebar Grants/Proposals links visible.
- Upload scope approved for synthetic mock data in production (D-003). Size limits still unknown (Q-007).
- Production-only target (D-001). Test account allowlist in `test-data.md` / `config/.env` (D-003).
