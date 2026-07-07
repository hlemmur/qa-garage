# QA Principles

This QA Garage exists to let a professional QA engineer operate as QA Lead and Test Architect while AI agents accelerate execution under supervision. QA craft lives in vendored skills under `.agents/skills/`; the thin QA Garage harness layer keeps the human in control.

## Source Of Truth

Deterministic automation is the source of truth.

AI findings are leads until they are backed by reproducible evidence: Playwright output, trace, screenshot, video, console log, network observation, or a clear manual reproduction path.

## Human-Decides Boundary

AI may:

- Explore the product and scenario library.
- Reproduce suspected defects.
- Draft bug reports, test cases, and regression candidates.
- Classify failures and summarize evidence.
- Recommend product, test, and qa-garage improvements.

AI must not automatically:

- Change assertions.
- Delete, skip, or weaken tests.
- Redefine expected behavior.
- Hide failures in reporting.
- Convert exploratory findings into confirmed bugs without evidence.

Those actions require explicit human approval.

## Portability

The portable layer is:

- Files.
- Markdown workflows.
- CLI commands.
- Playwright tests and reports.
- Evidence artifacts.

Cursor rules, Claude memory files, and Codex agent files are adapters. They point to these canonical files and should stay thin. Vendored skills in `.agents/skills/` are the QA craft library; the QA garage layer orchestrates them and never edits their bodies.

## Lightweight Expansion

Prefer small, composable workflows over a large framework. Add structure when it reduces repeated human judgment or makes agent work safer to review.

## Testing Philosophy

Use Playwright for confirmed regressions, smoke checks, and release gates. Use AI-led exploration for discovery, not as a replacement for deterministic tests.

Regression tests should describe observable behavior through the browser. Avoid coupling tests to implementation details unless the target project explicitly exposes a supported testing API.

## Test Design

Complete coverage requires happy paths and key negative flows. See `core/ai/test-design-principles.md`.

Products with AI-generated output need a separate assertion posture (completion, property, eval) from Phase 1 when AI is core value. See `reference/testability.md` and vendored `ai-system-testing`.
