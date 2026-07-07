# QA Project Context

Single source of truth for postdocs-ai. Black-box target: facts are sourced from public documentation (https://learn.postdocs.ai/) and exploration. Confirmed expected behavior still requires QA Lead approval before it becomes a deterministic assertion. Status of each non-obvious fact is marked inline as confirmed, inferred, or unknown.

## Product

- Name: postdocs.ai
- Type: AI-assisted grant-discovery and research-proposal drafting web app (SPA).
- Description: Helps researchers find grant calls and draft research proposals in the relevant grant-call template using AI-assisted generation, review, eligibility checks, and export.
- Primary audience: experienced principal investigators applying for national research grants in Sweden (EU expansion mentioned in FAQ). Source: docs, confirmed.
- URLs:
  - Production app: https://app.postdocs.ai/
  - Documentation: https://learn.postdocs.ai/
  - Staging: none available (confirmed by QA Lead, 2026-07-07).
- Product pillars (docs): Browse (grant discovery), Write (drafting workflow), Review (eligibility + assessment). Source: docs, inferred.
- Key user flows (drive coverage priority; full maps in `journeys/` and `reference/`):
  - Sign in at app.postdocs.ai via university SSO or Microsoft.
  - Discover, filter, and bookmark grant calls into custom groups.
  - Create a proposal from a grant call; pre-loaded template and limits load automatically.
  - Complete Setup: upload background materials (PDF, Word, PowerPoint), describe usage, write synopsis, select sections and language.
  - Generate and edit project-description sections; regenerate after setup changes.
  - Generate submission-form texts (abstract, popular science summary, sex- and gender perspectives).
  - Review eligibility (checkboxes) and run assessment against criteria.
  - Invite collaborators by email with view, comment, or edit access; co-edit and comment in real time.
  - Export the proposal to Microsoft Word (.docx) for funder portal submission.

## Tech Stack

Black-box: the target's implementation is not directly observable. Recorded at the confidence level available.

- Frontend: SPA (framework unknown; to confirm by exploration).
- Rich-text / collaborative editor: inferred TipTap-style collaborative editor (unconfirmed; requires engineering or repo access).
- AI drafting backend: confirmed an AI generation service produces sections and form texts; provider/model unknown (inferred candidates such as Vercel AI SDK are unconfirmed).
- Auth/data platform: inferred (candidates such as Supabase are unconfirmed; requires engineering access).
- Confirmed external integrations (docs): university SSO, Microsoft sign-in, AI drafting service, file upload and document parsing (PDF, Word, PowerPoint), email invitations, Microsoft Word .docx export, funding-agency data sources (VR, Formas, Vinnova, Energimyndigheten).
- Data handling (docs FAQ, inferred): stored in EU; not shared with third parties except invited collaborators; user retains content ownership; no AI model training on user-provided data.
- Access model (docs FAQ, inferred): institutional partnerships via research office; not self-serve subscription (contact timothy@postdocs.ai).
- EU grants (Horizon Europe, ERC): planned expansion; not yet available (docs FAQ, inferred).
- Concrete technical integrations (Supabase, TipTap, Vercel AI, etc.): unknown until repo or engineering access is granted; tracked as a blocking question for the technical QA phase.

## Test Stack

- E2E / smoke / regression: Playwright (this qa-garage), projects/postdocs-ai/tests/e2e/.
- Exploration: Playwright MCP (agent-driven, accessibility-tree first).
- AI-feature testing: ai-system-testing skill (workflow completion and output presence, not scientific quality).
- Visual / accessibility / API: none selected yet.

## CI/CD

- Platform: none yet (qa-garage-driven runs, local/manual). CI cron is planned in docs/roadmap-infra.md.
- When tests run: manually via qa:* commands during Phase 1.
- Artifacts saved: Playwright traces, screenshots, videos, HTML report, session logs.

## Environments

- Target under test: production app at https://app.postdocs.ai/ — approved for exploratory testing (D-001). No staging available.
- Access model: institutional partnerships; access via research office or product contact (timothy@postdocs.ai).
- Approved test account: Microsoft sign-in `leka.mulyar@gmail.com` (D-002). Passkey/Touch ID — human-in-the-loop required for auth; not Playwright-automatable yet.
- Mock vs real integrations: product mock mode for AI generation, SSO, email, and document parsing is unknown (Q-004).

## Quality Goals

- Coverage first: authenticated smoke (sign-in reaches a stable landing) then the create-and-generate-proposal journey.
- Flakiness threshold: under 2 percent for deterministic suites (AI-output and collaboration checks excluded from flake tracking).
- Suite duration budget: smoke under 5 minutes.
- Key metrics: zero broken critical journeys; AI-generation workflow completes and returns output; no data-privacy regression in upload/collaboration flows.

## Risk Areas

Product and delivery risk. Full scored matrix in risk-matrix.md.

| Area | Risk Level | Business Impact | Notes |
|------|-----------|-----------------|-------|
| Data privacy of uploads | Critical | Confidential research/personal data exposure; trust and compliance | Use mock files only until privacy validated with product/security |
| Template / limit accuracy | Critical | Wrong template or limits can invalidate a real grant application | Validate selected templates and character/word limits vs authoritative funder source |
| Grant database freshness | High | Users rely on status/eligibility for real deadlines | Validate visible source/refresh and discrepancy behavior |
| Export fidelity (.docx) | High | Lost structure breaks funder-portal submission | Validate exported content and formatting against approved scenarios |
| Collaboration correctness | High | Permission leakage or lost edits across institutions | Test invite, permission levels, concurrent edit, comments |
| AI output quality | High | Plausible-but-wrong content misleads researchers | Keep quality exploratory unless human sets acceptance criteria |
| Authentication (SSO) | High | Passkey blocks unattended automation; human must sign in | Microsoft account approved; smoke path TBD (Q-005) |

## Team

- QA: solo QA Lead plus AI agents operating this qa-garage.
- Ownership model: QA Lead owns strategy, expected behavior, and approvals; agents execute under the human-decides guardrails.
- QA involvement: black-box, post-release testing of production; shift-left not yet possible without repo access.

## Conventions

- Selectors (E2E): prefer stable user-facing locators; pin ARIA roles by name where data-testid is unavailable (black-box target).
- Test data: non-sensitive mock research materials only; never confidential proposals or personal data. Distinct accounts per collaboration role (see test-data.md).
- Naming: Playwright specs as *.spec.ts, tagged @smoke and @regression.
- AI assertions: assert workflow completion and output presence, not scientific correctness, unless the QA Lead defines acceptance criteria.
