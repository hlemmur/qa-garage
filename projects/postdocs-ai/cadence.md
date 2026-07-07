# Cadence — postdocs-ai

Scheduled QA jobs for this project. Instances land in `jobs/`. Execution requires `qa:review --gate` clear.

## Schedule

| Job ID | Type | Frequency | Command / charter | Gate | Notes |
|--------|------|-----------|-------------------|------|-------|
| CAD-001 | smoke | Daily (3×/week pre-autumn) | `QA_PROJECT=postdocs-ai npm run qa:smoke` | Approved SMK-* only | Human auth or storageState |
| CAD-002 | regression | Weekly (P0 rotation) | `npm run qa:regression -- --grep @regression` | After SCN approval | Split AI to nightly if slow |
| CAD-003 | explore-charter | Bi-weekly | `npm run qa:discover -- "<charter>"` | Soft | Rotate flows A–E from complex-flows doc |
| CAD-004 | reference-hygiene | After every session | knowledge-curator + `qa:knowledge` | Soft | Update ui-inventory, testability |
| CAD-005 | review-open-items | Weekly | `npm run qa:review` | Soft | ACTION REQUIRED summary |
| CAD-006 | grant-fixture-check | Monthly | Manual: verify Innovative startups 2026 still Open | Soft | Replace fixture if closed |
| CAD-007 | release-readiness | Pre-deploy / pre-autumn | release-readiness skill | Execution gate | Flow F checklist |

## Pre-autumn ramp (2026)

| Week offset | Action |
|-------------|--------|
| T-8 weeks | Approve + automate P0 regression |
| T-6 weeks | Daily smoke; fix all P0 failures |
| T-4 weeks | Run Flow F scale readiness checklist |
| T-2 weeks | Scope freeze; smoke-only hotfixes |
| T-0 | Monitor smoke + user-reported issues daily |

## Charter backlog

1. Form & attachments + eligibility UI
2. Invite + permission levels (Q-009)
3. Upload matrix (Q-007)
4. Export fidelity golden file (Q-011)

## Last updated

2026-07-07
