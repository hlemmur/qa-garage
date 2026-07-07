# Risk Matrix — postdocs-ai

Product and delivery risk scored Impact x Likelihood, sourced from docs and reasoning. Drives what to test first. Source evidence: https://learn.postdocs.ai/.

## Scoring

- Critical (test first): high impact + high likelihood.
- Important: high impact + low likelihood.
- Monitor: low impact + high likelihood.
- Backlog: low impact + low likelihood.

## Matrix

| ID | Risk (what could break) | Area / Feature | Impact | Likelihood | Score | Failure mode | Coverage today | Owner |
|----|-------------------------|----------------|--------|------------|-------|--------------|----------------|-------|
| R-001 | Confidential upload data leaks or is retained/shared unexpectedly | Uploads, privacy | High | High | Critical | Sensitive research/personal data exposed | none | Product/Security |
| R-002 | Wrong grant template or incorrect character/word limits | Proposal setup | High | Medium | Critical | User submits an invalid application | none | Product |
| R-003 | Stale/incorrect grant status, eligibility, or deadlines | Grant database | High | Medium | Critical | User misses or misjudges a real deadline | none | Product/Eng |
| R-004 | Word .docx export loses structure/formatting | Export | High | Medium | Important | Content unusable in funder portal | none | QA/Product |
| R-005 | Collaboration permission leakage or lost concurrent edits | Collaboration | High | Medium | Important | Cross-institution data leak or overwritten work | none | Eng/Product |
| R-006 | AI generates plausible but scientifically wrong content | AI generation | High | Medium | Important | Researcher misled by confident output | none | QA/Product |
| R-007 | Institutional SSO blocks automation or varies by org | Authentication | High | Medium | Important | No authenticated testing possible | none | QA Lead |
| R-008 | Unsupported/large/corrupted uploads degrade generation | File handling | Medium | High | Monitor | Generation fails or produces poor output | none | Eng |
| R-009 | Long-running AI generation states confuse users / time out | AI UX | Medium | Medium | Monitor | Perceived hang, duplicate submissions | none | Product |

## No-Go Risks

Release blockers if they surface in production. Prioritize coverage here.

- R-001 Data privacy of uploads - confidential/personal data must never leak or be retained/shared without consent.
- R-002 Template and limit accuracy - an invalid template or limit can invalidate a real grant application.
- R-003 Grant database freshness - wrong deadlines/eligibility cause real-world harm to applicants.

## Reassessment Triggers

- EU-grants expansion ships (new funders, templates, eligibility rules).
- New integration or AI-provider change.
- Any confirmed privacy or export-fidelity incident.
