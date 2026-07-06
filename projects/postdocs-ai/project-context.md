# Project Context

## Product

postdocs.ai helps researchers find grants and draft research proposals in the relevant grant-call template. Users describe a project, upload background materials, and use AI-assisted drafting, review, eligibility checks, and export workflows.

## Target Environments

- Documentation: https://learn.postdocs.ai/
- Production app: https://app.postdocs.ai/
- Local:
- Staging:

## Personas

- Role: Experienced principal investigator (PI)
- Permissions: Authenticated researcher with access through institution or Microsoft sign-in.
- Key journeys: browse grants, create proposal, upload background materials, generate proposal sections, review eligibility and assessment criteria, collaborate, export to Word.

## Test Accounts

Document account roles and setup notes without storing passwords or secrets.

- Institutional SSO account: unknown.
- Microsoft sign-in account: unknown.
- Collaborator account: unknown.

## Known Constraints

- MFA: unknown; institutional SSO may require organization-specific authentication.
- CAPTCHA: unknown.
- Feature flags: unknown.
- Test data: research proposals and uploaded files may contain sensitive data; use mock or approved non-sensitive fixtures only.
- Destructive actions: proposal creation, collaborator invites, uploads, and edits should be treated as non-destructive only in approved test workspaces.
- Access model: docs say access is available through institutional partnerships.

## Current QA Priorities

1. Establish project knowledge from public documentation.
2. Confirm access, roles, and account constraints.
3. Define smoke coverage after QA Lead approval.
4. Design core journey scenarios before writing tests.

## Knowledge Base

Read and maintain `knowledge/` as the durable project memory. Discovery agents may add observed or inferred knowledge with evidence, but confirmed expected behavior requires docs-backed authority or human approval.
