# Personas

## Purpose

Record users, roles, permissions, and account constraints that affect QA scope.

| Persona | Role or permissions | Status | Source | Last verified | Evidence | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Experienced PI | Authenticated researcher creating and reviewing grant proposals | confirmed | docs | 2026-07-07 | https://learn.postdocs.ai/ | Primary documented audience is experienced PIs applying for national grants in Sweden. |
| Research collaborator | Invited user with view, comment, or edit access | confirmed | docs | 2026-07-07 | https://learn.postdocs.ai/features | Can be invited by email, including colleagues at other institutions. |
| Research office or institutional admin | Access provider or point of contact | inferred | docs | 2026-07-07 | https://learn.postdocs.ai/ | FAQ says access is available through institutional partnerships and users should contact their research office. |
| Unauthenticated visitor | Public documentation access only | observed | docs exploration | 2026-07-07 | https://learn.postdocs.ai/ | Can read learning docs without signing in. |

## Account Constraints

- MFA: unknown.
- CAPTCHA: unknown.
- Test accounts: unknown.
- Paid or gated features: access is currently through institutional partnerships.
- Destructive actions: collaborator invitations, uploads, generation, proposal edits, and exports should be run only against approved test proposals.

## Open Questions

1. What institutions and sign-in providers are available in the test environment?
2. Does collaborator access support separate view-only, comment-only, and edit permission selection in the UI?
3. Are there admin or institutional-owner roles that QA should cover?
