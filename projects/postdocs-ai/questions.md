# Open Questions — postdocs-ai

Questions awaiting a human answer. `qa:review` aggregates these into `open-items.md`; blocking questions gate execution work. Source: https://learn.postdocs.ai/ and QA setup.

## Questions

### Q-001: What target environment should QA use for authenticated testing?

- Status: open
- Blocking: yes
- Raised by: agent
- Date: 2026-07-07
- Why it matters: no staging is documented; testing production needs explicit approval and a safe workspace.
- Answer:

### Q-002: Which test accounts and sign-in path are approved for automation?

- Status: open
- Blocking: yes
- Raised by: agent
- Date: 2026-07-07
- Why it matters: institutional SSO may block automation; smoke and all authenticated tests depend on this.
- Proposed answer / options: dedicated SSO test account, Microsoft sign-in account, or both.
- Answer:

### Q-003: What privacy/security sign-off exists for upload and collaboration tests?

- Status: open
- Blocking: yes
- Raised by: agent
- Date: 2026-07-07
- Why it matters: R-001 is a no-go risk; do not exercise uploads with any real data before sign-off.
- Answer:

### Q-004: Is there a product mock mode for AI generation, SSO, email, and document parsing?

- Status: open
- Blocking: no
- Raised by: agent
- Date: 2026-07-07
- Why it matters: enables local deterministic testing without live integrations.
- Answer:

### Q-005: What should the first smoke test assert beyond successful authentication?

- Status: open
- Blocking: no
- Raised by: agent
- Date: 2026-07-07
- Why it matters: defines the smoke success criterion (which landing page/element).
- Answer:

### Q-006: Which fixture materials are approved for upload and generation tests?

- Status: open
- Blocking: no
- Raised by: agent
- Date: 2026-07-07
- Why it matters: uploads must use non-sensitive mock content only.
- Answer:

### Q-007: What upload file types, size limits, and validation errors should QA expect?

- Status: open
- Blocking: no
- Raised by: agent
- Date: 2026-07-07
- Why it matters: needed to build the upload matrix (R-008).
- Proposed answer / options: docs confirm PDF, Word, and PowerPoint (`docs:https://learn.postdocs.ai/tips-and-tricks`). Size limits and validation error messages remain unknown.
- Answer:

### Q-008: How should QA validate grant-database accuracy and refresh behavior?

- Status: open
- Blocking: no
- Raised by: agent
- Date: 2026-07-07
- Why it matters: R-003 is a no-go risk; need visible metadata or product validation rules.
- Answer:

### Q-009: What collaborator permission levels are selectable in the UI?

- Status: open
- Blocking: no
- Raised by: agent
- Date: 2026-07-07
- Why it matters: shapes collaboration and permission-boundary scenarios (R-005).
- Proposed answer / options: docs FAQ states invitees can **view**, **comment**, or **edit** (`docs:https://learn.postdocs.ai/`). Revocation behavior and UI labels unverified in app.
- Answer:

### Q-010: What AI-output checks are acceptable without over-asserting scientific quality?

- Status: open
- Blocking: no
- Raised by: agent
- Date: 2026-07-07
- Why it matters: defines regression-candidate design for generation (R-006).
- Answer:

### Q-011: How should .docx export fidelity be validated?

- Status: open
- Blocking: no
- Raised by: agent
- Date: 2026-07-07
- Why it matters: R-004 export fidelity coverage.
- Answer:

### Q-012: What is the concrete technical stack (auth/db, editor, AI provider)?

- Status: open
- Blocking: no
- Raised by: agent
- Date: 2026-07-07
- Why it matters: unblocks Phase 2 technical QA; candidates (Supabase, TipTap, Vercel AI) are inferred and unconfirmed. Needs repo or engineering access.
- Answer:

### Q-013: Is "Setup" the same surface as "Outline step" in Tips & Tricks?

- Status: open
- Blocking: no
- Raised by: agent
- Date: 2026-07-07
- Why it matters: docs use both terms; test navigation and selectors need one canonical label.
- Proposed answer / options: likely the same page (Guides Step 4 "Complete the setup" vs Tips "Go back to Outline step").
- Answer:
