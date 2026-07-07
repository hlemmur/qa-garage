# Open Questions — postdocs-ai

Questions awaiting a human answer. `qa:review` aggregates these into `open-items.md`; blocking questions gate execution work. Source: https://learn.postdocs.ai/ and QA setup.

## Questions

### Q-001: What target environment should QA use for authenticated testing?

- Status: answered
- Blocking: yes
- Raised by: agent
- Date: 2026-07-07
- Why it matters: no staging is documented; testing production needs explicit approval and a safe workspace.
- Answer: Production only for now — https://app.postdocs.ai/ — approved for exploratory testing (QA Lead, 2026-07-07). No staging available.

### Q-002: Which test accounts and sign-in path are approved for automation?

- Status: answered
- Blocking: yes
- Raised by: agent
- Date: 2026-07-07
- Why it matters: institutional SSO may block automation; smoke and all authenticated tests depend on this.
- Proposed answer / options: dedicated SSO test account, Microsoft sign-in account, or both.
- Answer: Microsoft sign-in with QA Lead personal account `leka.mulyar@gmail.com` (approved 2026-07-07). Auth uses passkey (Touch ID on Mac) — not automatable; human must complete sign-in for exploratory sessions and any auth-gated Playwright runs until a non-passkey test account is provisioned.

### Q-003: What privacy/security sign-off exists for upload and collaboration tests?

- Status: answered
- Blocking: yes
- Raised by: agent
- Date: 2026-07-07
- Why it matters: R-001 is a no-go risk; do not exercise uploads with any real data before sign-off.
- Answer: QA Lead approved (2026-07-07): (1) synthetic/mock/generated fixtures OK for exploratory upload and generation tests in production; (2) collaborator invites OK to approved addresses only — `lena.m.coaching@gmail.com` (not yet registered at postdocs, for invite-acceptance flow) and `omulyar.work@gmail.com` (registered at postdocs, for collaboration); (3) no other scope boundaries yet; all test emails must stay within the three approved addresses (`leka.mulyar@gmail.com`, `lena.m.coaching@gmail.com`, `omulyar.work@gmail.com`). Credentials managed out-of-band — never in repo.

### Q-004: Is there a product mock mode for AI generation, SSO, email, and document parsing?

- Status: open
- Blocking: no
- Raised by: agent
- Date: 2026-07-07
- Why it matters: enables local deterministic testing without live integrations.
- Answer:

### Q-005: What should the first smoke test assert beyond successful authentication?

- Status: answered
- Blocking: no
- Raised by: agent
- Date: 2026-07-07
- Why it matters: defines the smoke success criterion (which landing page/element).
- Proposed answer / options: After human-assisted Microsoft auth, assert (1) URL is `/home`, (2) sidebar links **Grants** and **Proposals** are visible, (3) user display name visible. Does not exercise AI or uploads. Source: Phase 0B app report.
- Answer: QA Lead approved expanded smoke scope (2026-07-07): (1) user successfully authenticated, (2) dashboard `/home` shows grants summary, profile card, recent proposals; **Create proposal** active and opens grant-picker modal, **Explore** on grants card navigates to `/grants`, profile **Edit** opens user profile, left sidebar Home/Grants/Proposals all clickable, bottom-left Learn/Notifications/username all open expected surfaces, support chatbot button opens chat, (3) minimal primary journey: create proposal → search grant → export; AI Collaborator smoke: sends prompt and receives response (completion-level, not quality). See `scenarios/smoke-proposal.md` v1.

### Q-006: Which fixture materials are approved for upload and generation tests?

- Status: answered
- Blocking: no
- Raised by: agent
- Date: 2026-07-07
- Why it matters: uploads must use non-sensitive mock content only.
- Proposed answer / options: Synthetic mock PDF/Word/PPT under `fixtures/` (to be created). Stable grant fixture: **Innovative startups 2026** (Vinnova). Existing proposal **Brain health 2026** available in owner workspace for read-only tours.
- Answer: QA Lead approved (2026-07-07): **Innovative startups 2026** (Vinnova) as primary grant fixture; any equivalent open grant acceptable. Synthetic mock fixtures only (D-003).

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
- Proposed answer / options: Spot-check grant status/deadline vs authoritative funder page; investigate KI-001 (EU Horizon 2023 calls marked Open). No in-app "last updated" metadata observed.
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
- Proposed answer / options: **Supabase auth confirmed** (OAuth callback `supabase.postdocs.ai`). Editor framework, AI provider, and DB/realtime layer still unknown.
- Answer:

### Q-013: Is "Setup" the same surface as "Outline step" in Tips & Tricks?

- Status: answered
- Blocking: no
- Raised by: agent
- Date: 2026-07-07
- Why it matters: docs use both terms; test navigation and selectors need one canonical label.
- Proposed answer / options: likely the same page (Guides Step 4 "Complete the setup" vs Tips "Go back to Outline step").
- Answer: **Same surface.** UI label is **Setup**; URL slug is `/steps/quiz`. Docs "Outline" maps to the Synopsis/structured fields on Setup (observed Phase 0B).
