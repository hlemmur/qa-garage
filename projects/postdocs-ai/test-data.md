# Test Data — postdocs-ai

Accounts, fixtures, and data needed to exercise real scenarios including concurrency, permissions, and invitations. No secrets in this file. Source: https://learn.postdocs.ai/.

## Account Matrix

Collaboration and permission testing needs multiple distinct accounts.

| Role / Type | Count needed | Purpose / Scenarios | Status |
|-------------|--------------|---------------------|--------|
| Proposal owner (Microsoft) | 1 | Create proposal, upload, generate, invite, export | approved — `leka.mulyar@gmail.com` (D-002); passkey/Touch ID, human-in-the-loop auth |
| Editor collaborator | 1 | Concurrent editing, comments (R-005) | unknown — needs second account |
| Commenter/viewer collaborator | 1 | Permission-boundary checks (read/comment only) | unknown — needs second account |
| Invited-not-yet-accepted | 1 | Invitation acceptance flow | unknown — needs second account |
| Cross-institution collaborator | 1 | Cross-institution access + SSO variation | unknown |
| University SSO account | 0–1 | Alternative auth path | not provisioned |

At least 4-5 distinct accounts are required to cover collaboration, permission boundaries, and concurrency without reusing identities.

## Data Sets / Fixtures

- Non-sensitive mock research synopsis and background materials — docs-supported types: PDF, Word, PowerPoint (`docs:https://learn.postdocs.ai/tips-and-tricks`). Fixtures to be created; never real confidential proposals. Size limits unknown (Q-007).
- Known open grant call (e.g. a VR/Formas/Vinnova/Energimyndigheten call) for template-load and discovery checks - identify a stable example.

## Creation & Cleanup Strategy

- Creation: manual/approved accounts (no self-serve signup documented).
- Cleanup: generated proposals and invites must be cleaned from approved test workspaces; do not invite real users.

## Race / Concurrency / Permission Scenarios

- Two accounts editing the same section simultaneously (lost-update / conflict handling).
- Viewer attempts an edit (must be denied).
- Revoked collaborator loses access immediately.
- Invitation accepted from a different institution.

## Auth notes

- Sign-in path: Microsoft → `leka.mulyar@gmail.com` → passkey (Touch ID on Mac).
- Do not store credentials, passkeys, or session tokens in this repo.
- Playwright cannot complete passkey auth unattended; use saved storage state after manual login, or human-in-the-loop for exploration.

## Constraints

- No confidential research, unpublished papers, or personal data in fixtures.
- Collaborator invites only to approved test addresses.
- Upload and collaboration tests in production blocked until Q-003 answered (R-001).
