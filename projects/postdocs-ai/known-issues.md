# Known Issues — postdocs-ai

Confirmed or suspected product issues found during QA, with evidence. Distinct from open questions and decisions.

## Issues

### KI-001: EU Horizon grants show Open status with past deadlines

- Status: suspected
- Severity: medium
- Raised: 2026-07-07 (Phase 0B)
- Area: Grants database / R-003
- Description: EU Horizon Europe and EIC grant calls from 2023 appear in production grants browse with **Open** status and deadlines in 2023. May mislead users about current opportunities.
- Steps to reproduce:
  1. Sign in at https://app.postdocs.ai/
  2. Navigate to Grants
  3. Browse or search for Horizon Europe / EIC calls
  4. Observe status badge **Open** with 2023 dates
- Expected: Closed or Forthcoming status for past-deadline calls, or removal from Open filter.
- Actual: Calls listed as Open with expired deadlines (observed).
- Evidence: `evidence/sessions/2026-07-07T17-06-18-525Z-session-log.md`, `evidence/discovery/2026-07-07-app-report.md`
- Notes: Docs FAQ says EU expansion is upcoming — contradicts presence of EU calls. Kept as suspected per D-006; included in client scope proposal for product review. Do not file external bug until confirmed unknown.
