# Risks

## Purpose

Track quality risks and the testing response they require.

| Area | Risk | Impact | Likelihood | Status | Source | Evidence | Testing response |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Authentication | Institutional SSO may block automation or vary by organization. | high | medium | inferred | docs | https://learn.postdocs.ai/guides | Confirm test accounts and define smoke path. |
| Data privacy | Uploaded proposal materials may include confidential research or personal data. | high | high | confirmed | docs | https://learn.postdocs.ai/ | Use mock files only; validate privacy claims with product/security owner before live data tests. |
| AI output quality | Generated sections may be plausible but scientifically incorrect or misaligned with synopsis. | high | medium | inferred | docs | https://learn.postdocs.ai/tips-and-tricks | Keep quality review exploratory unless human defines acceptance criteria. |
| Grant database freshness | Users may rely on status, eligibility, and requirements for deadlines and compliance. | high | medium | confirmed | docs | https://learn.postdocs.ai/ | Validate visible source, refresh, and discrepancy behavior where possible. |
| Template accuracy | Incorrect grant templates, character limits, or word limits could invalidate applications. | high | medium | confirmed | docs | https://learn.postdocs.ai/features | Compare selected templates against authoritative funder source after approval. |
| File handling | Unsupported, large, corrupted, or mislabeled uploads may degrade generation. | medium | high | inferred | docs | https://learn.postdocs.ai/tips-and-tricks | Add upload matrix after limits are known. |
| Collaboration | Real-time editing and comments can introduce conflicts, stale state, or permission leakage. | high | medium | confirmed | docs | https://learn.postdocs.ai/features | Test invite, permission, concurrent editing, comments, and cross-institution access. |
| Export fidelity | Word export may lose structure or formatting needed for funder portals. | high | medium | confirmed | docs | https://learn.postdocs.ai/ | Validate `.docx` content and formatting against approved scenarios. |
| External submission | Final submission happens outside postdocs.ai in funder portals. | medium | high | confirmed | docs | https://learn.postdocs.ai/guides | Treat external portal copy/paste as out of scope unless explicitly included. |

## Risk Categories

- Functional: grant browse, proposal setup, generation, review, collaboration, export.
- UX: writer workflow, iteration guidance, long-running AI states.
- Visual: editor layout, Word formatting, comments, checkboxes.
- Accessibility: docs and authenticated app accessibility unknown.
- Data: confidential uploads, generated content retention, grant database freshness.
- Integration: SSO, Microsoft, email, AI, document parsing, Word export.
- Performance: upload, generation, collaboration, and export timing.
- Security/privacy: EU storage, third-party sharing, model training claims.
- Release: upcoming expansion to EU grants is mentioned in FAQ.

## Open Questions

1. Which risks are highest priority for the first exploratory charter?
2. Is there a product-approved mock mode for AI generation, email, SSO, and document parsing?
3. What privacy or security evidence should QA collect for upload and collaboration flows?
