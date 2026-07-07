# Test Data — postdocs-ai

Accounts, fixtures, and data needed to exercise real scenarios including concurrency, permissions, and invitations. No secrets in this file. Source: https://learn.postdocs.ai/.

## Account Matrix

Collaboration and permission testing needs multiple distinct accounts. All unknown/unprovisioned until the QA Lead approves access.

| Role / Type | Count needed | Purpose / Scenarios | Status |
|-------------|--------------|---------------------|--------|
| Proposal owner (PI, SSO) | 1 | Create proposal, upload, generate, invite, export | unknown |
| Editor collaborator | 1 | Concurrent editing, comments (R-005) | unknown |
| Commenter/viewer collaborator | 1 | Permission-boundary checks (read/comment only) | unknown |
| Invited-not-yet-accepted | 1 | Invitation acceptance flow | unknown |
| Cross-institution collaborator | 1 | Cross-institution access + SSO variation | unknown |
| Microsoft sign-in account | 1 | Alternative auth path | unknown |

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

## Constraints

- No confidential research, unpublished papers, or personal data in fixtures.
- Collaborator invites only to approved test addresses.
