# QA Project Context

Single source of truth for this project. Every vendored skill reads this file first. Fill every section; leave no `[bracketed placeholder]` behind. This target is black-box: source facts from documentation and exploration, not codebase detection. Confirmed expected behavior requires human approval before it becomes assertion truth.

## Product
- **Name:** [product name]
- **Type:** [SaaS, editor, marketplace, internal tool, ...]
- **Description:** [one sentence: what it does and for whom]
- **URLs:**
  - Production: [url]
  - Staging: [url]
  - Development: [url or N/A]
- **Key User Flows:** [5-10 specific, testable flows. "If this breaks we get paged." These drive coverage priority. Detailed maps live in `journeys/`.]

## Tech Stack
Black-box: record what is known or observed about the target, not this repo's stack.
- **Frontend:** [framework / language if known]
- **Backend / API:** [style: REST, GraphQL, tRPC, ...]
- **Data / Infra:** [database, hosting, CDN if known]
- **Integrations:** [concrete third-party services, e.g. Supabase, TipTap, Vercel AI, Stripe]

## Test Stack
- **E2E:** Playwright (this qa-garage), `projects/<project>/tests/e2e/`
- **Exploration:** Playwright MCP (agent-driven)
- **Visual / a11y / API:** [None selected yet, or tool]

## CI/CD
- **Platform:** [None yet / GitHub Actions / ...]
- **When tests run:** [manual / on push / nightly]
- **Artifacts saved:** [traces, screenshots, HTML report]

## Environments
- **Target under test:** [staging URL and how it differs from production]
- **Mock vs real integrations:** [what is mocked, what is live]

## Quality Goals
- **Coverage:** [top critical flows to cover first]
- **Flakiness threshold:** [e.g. <2%]
- **Suite duration budget:** [e.g. smoke <5 min]
- **Key metrics:** [pass rate, MTTD regression, zero P0 in area X]

## Risk Areas
Product and delivery risk, scored Impact x Likelihood. See `risk-matrix.md` for the full matrix. At least 3 entries.

| Area | Risk Level | Business Impact | Notes |
|------|-----------|-----------------|-------|
| [area] | [Critical/High/Medium] | [impact] | [why] |

## Team
- **QA:** [headcount or "solo QA Lead + AI agents"]
- **Dev:QA ratio / ownership model:** [who owns which tests]
- **QA involvement:** [shift-left / after dev]

## Conventions
- **Selectors (E2E):** [data-testid preferred; or ARIA roles with pinned name/level]
- **Test data:** [factories / seeded accounts / API-per-test]
- **Naming:** [*.spec.ts]
