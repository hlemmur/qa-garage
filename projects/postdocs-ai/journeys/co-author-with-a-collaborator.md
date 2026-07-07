# Journey: Co-author with a collaborator

- Personas: Experienced PI (owner) + Research collaborator (possibly at another institution)
- Goal: Draft a proposal together in real time with the right access level.
- Scope: collaboration slice of the core journey. Source: https://learn.postdocs.ai/features (docs, confirmed). Permission-level UI is unconfirmed (open question).

| Phase | Steps | Touchpoints | Goal | Thoughts / Emotions | Pain points | QA focus (risk) |
|-------|-------|-------------|------|---------------------|-------------|-----------------|
| Invite | Owner invites a collaborator by email; picks access level | Share dialog, email | Bring in a co-author safely | "Will they see only what I intend?" | Permission levels unclear/ungated | R-005 permission leakage |
| Accept | Collaborator receives email, signs in, opens the proposal | Email, login, editor | Join the shared proposal | Keen to contribute | Cross-institution SSO friction | R-007, R-005 |
| Co-edit | Both edit sections concurrently; presence is visible | Editor (real-time) | Draft together without clobbering | Flow when smooth; frustration on conflicts | Lost edits, stale state, race conditions | R-005 concurrent edit |
| Comment | Comment on specific passages; resolve threads | Comments UI | Discuss and refine in place | Collaborative, focused | Comments lost or mis-anchored | R-005 |
| Boundaries | Viewer/commenter cannot edit; revoked user loses access | Permission enforcement | Enforce least privilege | Trust that access is correct | Revocation not enforced | R-005 no-go if leakage |

## QA notes

- Needs at least four distinct accounts (see test-data.md): owner, editor, commenter/viewer, invited-not-yet-accepted.
- Highest-value checks: permission enforcement and concurrent-edit integrity - both map to R-005.
- Concurrency and real-time correctness are excluded from flake tracking but must be exercised deliberately.
