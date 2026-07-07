# Test Data — postdocs-ai

Accounts, fixtures, and data needed to exercise real scenarios including concurrency, permissions, and invitations. **No secrets in this file.** Source: https://learn.postdocs.ai/; approved scope in D-003.

## Approved email allowlist

All collaborator invites and test correspondence must use only these addresses. Values live in `config/.env` (see `config/.env.example`); emails may also be listed here for discoverability.

| Env var | Role |
|---------|------|
| `POSTDOCS_OWNER_EMAIL` | Proposal owner (primary); Microsoft sign-in, passkey/Touch ID |
| `POSTDOCS_COLLABORATOR_EMAIL` | Registered collaborator (editor/commenter/viewer scenarios) |
| `POSTDOCS_INVITE_EMAIL` | Not registered — invite-acceptance flow |

## Account Matrix

| Role / Type | Env var | Purpose / Scenarios | Status |
|-------------|---------|---------------------|--------|
| Proposal owner | `POSTDOCS_OWNER_EMAIL` | Create proposal, upload, generate, invite, export | approved (D-002); passkey — human-in-the-loop auth |
| Registered collaborator | `POSTDOCS_COLLABORATOR_EMAIL` | Co-edit, comments, permission boundaries (R-005) | approved (D-003); password in `config/.env` only |
| Invite-acceptance (cold) | `POSTDOCS_INVITE_EMAIL` | Invitation email → accept → first access | approved (D-003); not yet registered |
| University SSO account | — | Alternative auth path | not provisioned |

## Data Sets / Fixtures

- Synthetic/mock/generated content only — approved for exploratory uploads (D-003). No real research, unpublished papers, or personal data.
- Supported file types per docs: PDF, Word, PowerPoint. Fixtures to be created under `projects/postdocs-ai/fixtures/` when needed. Size limits unknown (Q-007).
- **Stable grant fixture (observed):** Innovative startups 2026 (Vinnova) — use for create-proposal tests.
- **Existing proposal (read-only tours):** Brain health 2026 in owner workspace (`/proposals/7ea4317d-7203-400b-9079-335a7afff591`).

## Creation & Cleanup Strategy

- Creation: approved accounts above; mock fixtures generated in-repo.
- Cleanup: delete test proposals and pending invites from owner workspace after sessions; do not invite addresses outside the allowlist.

## Race / Concurrency / Permission Scenarios

- Owner + `omulyar.work@gmail.com` editing the same section simultaneously (lost-update / conflict handling).
- Viewer/commenter permission enforcement using `omulyar.work@gmail.com` with reduced access level.
- Invite sent to `lena.m.coaching@gmail.com` → accept as new/existing user.
- Revoked collaborator loses access (once UI confirmed in exploration).

## Auth notes

- Primary owner: Microsoft → `POSTDOCS_OWNER_EMAIL` → passkey (Touch ID on Mac). Not Playwright-automatable unattended.
- Collaborator: `POSTDOCS_COLLABORATOR_EMAIL` — password in `config/.env` only (`POSTDOCS_COLLABORATOR_PASSWORD`).
- Do not store passwords, passkeys, or session tokens in this repo or git history.

## Constraints

- Invites and test emails: **allowlist only** (three addresses above).
- Uploads: mock/synthetic data only in production (D-003).
- Never use confidential research or invite real colleagues outside the allowlist.
