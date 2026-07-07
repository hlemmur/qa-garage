# Complex Flows, Negative Branches & Ongoing Quality Strategy

Postdocs-ai Phase 1 test design supplement. Complements `smoke-proposal.md` and `regression-proposal.md`.

**Context:** Production-only access; ~300 registered users, ~50 active; **1000+ new users expected by autumn**; typical engagement **3–4 weeks/year** during grant application season. Priority: **coverage, stability, scale readiness**.

---

## 1. Complex end-to-end flows (exploratory → regression candidates)

These exceed smoke minimal path. Run as **time-boxed charters** first; promote to SCN-* after human approves expected behavior.

### Flow A — Full win-a-grant (seasonal critical path)

```text
Sign in → Grants filter (Open + agency) → bookmark call → Create proposal
→ Setup (upload mock PDF + synopsis + section pick) → Generate all sections
→ Edit Objectives → Form & attachments generate → Review eligibility checkboxes
→ Run assessment → Download .docx → spot-check in Word
```

| Checkpoint | Risk | Negative branches to probe |
|------------|------|---------------------------|
| Template load | R-002 | Wrong funder template; missing character limits |
| Upload + parse | R-001, R-008 | Corrupt PDF; empty file; wrong MIME |
| Generation | R-006, R-009 | Long hang; duplicate Generate clicks; navigate away mid-gen |
| Export | R-004 | Partial sections; Swedish/English mixed; tables/lists formatting |
| Session | R-007 | Token expiry mid-journey; back button from workspace |

### Flow B — Grant pipeline (repeat visitor)

```text
Search → filter → bookmark into custom group → filter Bookmarked
→ open detail → start proposal from grant card (if available)
```

| Negative branches |
|-------------------|
| Bookmark group rename/delete with bookmarks inside |
| Filter combo yields zero results |
| Stale Open status on past-deadline grant (KI-001) |
| EU vs Swedish agency filter edge cases |

### Flow C — Collaboration (multi-account, human-assisted)

```text
Owner creates proposal → Invite allowlisted editor → collaborator signs in
→ concurrent edit same paragraph → comment thread → owner revokes access
```

| Negative branches |
|-------------------|
| Viewer attempts toolbar edit |
| Invite to non-allowlisted domain |
| Revoked user deep-links old proposal URL |
| Two editors undo/redo race |

### Flow D — Profile & personalization

```text
Edit profile → tone of voice toggle → Generate from file (mock)
→ add research area → Save → verify home profile card
→ Zotero Connect entry (stop before OAuth)
```

| Negative branches |
|-------------------|
| Save with invalid institution |
| Tone of voice off → generation style change (subjective; exploratory) |
| Delete uploaded file from File Management |

### Flow E — AI Collaborator as co-pilot

```text
Ask grant requirements → ask to draft synopsis bullet → request section edit
→ attach mock file in chat → Reset chat → verify context cleared
```

| Negative branches |
|-------------------|
| Empty send disabled (observed) |
| Prompt injection / policy probes (`@ai-eval` later) |
| Very long prompt truncation |
| Stop generating mid-stream |

### Flow F — Pre-autumn scale readiness (non-functional charter)

Not functional assertions — **operational checklist** before 1000-user onboarding:

- Smoke green 5 consecutive days on production
- P0 regression suite duration baseline recorded
- Auth storageState renewal runbook documented
- Grant fixture grant still Open with valid deadline
- Support chatbot + Learn links reachable
- Monitor error rate / AI timeout complaints with product (no load test without approval)

---

## 2. Negative branch matrix (by area)

| Area | Negative case | Expected behavior (to confirm) | Level |
|------|---------------|-------------------------------|-------|
| Auth | Invalid session / expired cookie | Redirect to `/auth` | regression |
| Auth | Log out mid-proposal | Save state or warn | exploratory |
| Grants | Search gibberish | Empty state, no crash | regression |
| Grants | All status filters off | Sensible empty or validation | exploratory |
| Create proposal | Close modal without select | Stay on home; no orphan proposal | smoke/regression |
| Create proposal | Duplicate create same grant | Second proposal allowed? (confirm) | exploratory |
| Setup | Generate without synopsis | Button disabled (observed) | regression SCN-005 |
| Setup | Upload .exe / .zip | Rejected with message (Q-007) | regression |
| Editor | Delete all content in section | Export still works? | exploratory |
| Export | Download with only placeholders | File still generated | regression |
| Invite | Same email twice | Error or idempotent | exploratory |
| AI | Stop generating | Partial response handled | regression |
| Profile | XSS in research area field | Sanitized display | security charter |
| Notifications | No notifications | Empty panel (observed heading only) | smoke SMK-008 |

---

## 3. Ongoing quality maintenance strategy

### Layers of defense

```text
Daily smoke (SMK-*)
    ↓ fail → block release / investigate
Weekly P0 regression subset (SCN-001–020 rotation)
    ↓
Bi-weekly exploratory charter (one complex flow)
    ↓ findings → known-issues / regression candidates
Doc watch (learn.postdocs.ai) + reference hygiene
    ↓
Pre-season release readiness (Flow F checklist)
```

### Cadence (see `cadence.md`)

| Job | Frequency | Owner | Purpose |
|-----|-----------|-------|---------|
| Smoke run | Daily (pre-autumn: 3×/week) | Executor + human auth | Liveness |
| P0 regression rotation | Weekly | Executor | Stability |
| Exploratory charter | Bi-weekly | Executor | New risks before grant season |
| Reference / ui-inventory update | After each charter | knowledge-curator | Living map |
| Grant fixture validation | Monthly | Analyst | R-003; catch stale fixtures |
| Selector drift review | After UI deploy | test-reliability | Fix broken locators |
| open-items / qa:review | End of every session | Analyst | Human loop |

### Artifact hygiene rules

1. **Observed → confirmed:** only via `decisions.md` — never silent promotion.
2. **Failures:** classify per harness (product bug / test bug / env / flake / unknown).
3. **AI tests:** `@ai-smoke` excluded from flake %; track completion rate separately.
4. **Production safety:** cleanup test proposals; allowlist-only invites; mock uploads only.
5. **Autumn ramp:** freeze new scenario scope 2 weeks before onboarding; smoke-only hotfix window.

### Metrics to track (qa-metrics)

| Metric | Target | Action if breached |
|--------|--------|-------------------|
| Smoke pass rate | 100% | Block release |
| P0 regression pass rate | ≥98% | Triage within 24h |
| Smoke duration | ≤15 min | Split AI to nightly |
| AI completion rate | ≥95% | Escalate R-009 to product |
| Open no-go risks unmitigated | 0 at release | release-readiness fail |

### Tooling roadmap

| Now | Pre-autumn |
|-----|------------|
| Manual auth + storageState | Dedicated non-passkey test account (ask product) |
| Local Playwright runs | CI cron (`ci-cd-integration`) when staging unavailable |
| Session logs gitignored | Trace artifacts on failure in `evidence/traces/` |
| No perf tests | Optional k6/Playwright perf on read-only grants browse |

---

## 4. Recommended charter sequence (next 4 sessions)

1. **Form & attachments + eligibility UI location** — close F-014 gap from Phase 0B.
2. **Invite + permission levels** — answer Q-009; SCN-030/031 evidence.
3. **Upload matrix** — mock PDF/DOCX/PPT + oversize; answer Q-007 partially.
4. **Export fidelity** — SCN-020 golden checks; answer Q-011 approach.

---

## Evidence

- Phase 0C session: `evidence/sessions/2026-07-07T19-19-01-441Z-session-log.md` (local)
- UI inventory: `reference/ui-inventory.md`
- Human decisions: D-004, D-005, D-006, D-007
