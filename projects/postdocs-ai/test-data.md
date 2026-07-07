# Test Data — postdocs-ai

Accounts, fixtures, and data needed to exercise real scenarios including concurrency, permissions, and invitations. **No secrets in this file.** Source: https://learn.postdocs.ai/; approved scope in D-003.

## Approved email allowlist

All collaborator invites and test correspondence must use only these addresses:

| Email | postdocs.ai status | Role |
|-------|-------------------|------|
| `leka.mulyar@gmail.com` | registered | Proposal owner (primary); Microsoft sign-in, passkey/Touch ID |
| `omulyar.work@gmail.com` | registered | Collaborator (editor/commenter/viewer scenarios) |
| `lena.m.coaching@gmail.com` | not registered | Invite-acceptance flow (pending invite → sign up/sign in) |

## Account Matrix

| Role / Type | Account | Purpose / Scenarios | Status |
|-------------|---------|---------------------|--------|
| Proposal owner | `leka.mulyar@gmail.com` | Create proposal, upload, generate, invite, export | approved (D-002); passkey — human-in-the-loop auth |
| Registered collaborator | `omulyar.work@gmail.com` | Co-edit, comments, permission boundaries (R-005) | approved (D-003); credentials out-of-band |
| Invite-acceptance (cold) | `lena.m.coaching@gmail.com` | Invitation email → accept → first access | approved (D-003); not yet registered |
| University SSO account | — | Alternative auth path | not provisioned |

## Data Sets / Fixtures

- Synthetic/mock/generated content only — approved for exploratory uploads (D-003). No real research, unpublished papers, or personal data.
- Supported file types per docs: PDF, Word, PowerPoint. Fixtures to be created under `projects/postdocs-ai/fixtures/` when needed. Size limits unknown (Q-007).
- Known open grant call (e.g. VR/Formas/Vinnova/Energimyndigheten) — identify a stable example during Phase 0B exploration.

## Creation & Cleanup Strategy

- Creation: approved accounts above; mock fixtures generated in-repo.
- Cleanup: delete test proposals and pending invites from owner workspace after sessions; do not invite addresses outside the allowlist.

## Race / Concurrency / Permission Scenarios

- Owner + `omulyar.work@gmail.com` editing the same section simultaneously (lost-update / conflict handling).
- Viewer/commenter permission enforcement using `omulyar.work@gmail.com` with reduced access level.
- Invite sent to `lena.m.coaching@gmail.com` → accept as new/existing user.
- Revoked collaborator loses access (once UI confirmed in exploration).

## Auth notes

- Primary owner: Microsoft → `leka.mulyar@gmail.com` → passkey (Touch ID on Mac). Not Playwright-automatable unattended.
- Collaborator: `omulyar.work@gmail.com` — credentials managed by QA Lead out-of-band only.
- Do not store passwords, passkeys, or session tokens in this repo or git history.

## Constraints

- Invites and test emails: **allowlist only** (three addresses above).
- Uploads: mock/synthetic data only in production (D-003).
- Never use confidential research or invite real colleagues outside the allowlist.
