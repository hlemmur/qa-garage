# Test Data

Produced/maintained with the `test-data-management` skill. Records the accounts, roles, and data sets needed to exercise real scenarios - including concurrency, permissions, collaboration, and invitations. No secrets in this file.

## Account Matrix

Enumerate how many accounts of each type are needed and why. Concurrency and collaboration scenarios need multiple distinct accounts.

| Role / Type | Count needed | Purpose / Scenarios | Notes |
|-------------|--------------|---------------------|-------|
| [owner] | [n] | [e.g. create + share resource] | [no secrets] |
| [collaborator] | [n] | [race conditions on shared edit] | |
| [invited-not-yet-accepted] | [n] | [invitation flow] | |
| [viewer / restricted] | [n] | [permission boundaries] | |

## Data Sets / Fixtures

- [named fixture] - [what it represents, where it lives, mock vs real]

## Creation & Cleanup Strategy

- **Creation:** [factories / API-per-test / seeded]
- **Cleanup:** [per-test isolation / shared state risks]

## Race / Concurrency / Permission Scenarios

- [scenario requiring N simultaneous actors] - [accounts involved]
