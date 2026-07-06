# QA Principles

This harness exists to let a professional QA engineer operate as QA Lead and Test Architect while AI agents accelerate execution under supervision.

## Source Of Truth

Deterministic automation is the source of truth.

AI findings are leads until they are backed by reproducible evidence: Playwright output, trace, screenshot, video, console log, network observation, or a clear manual reproduction path.

## Human-Decides Boundary

AI may:

- Explore the product and scenario library.
- Reproduce suspected defects.
- Draft bug reports, test cases, and regression candidates.
- Classify failures and summarize evidence.
- Recommend product, test, and harness improvements.

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

Cursor rules, Claude memory files, Codex agent files, and skills are adapters. They point to these canonical files and should stay thin.

## Lightweight Expansion

Prefer small, composable workflows over a large framework. Add structure when it reduces repeated human judgment or makes agent work safer to review.

## Testing Philosophy

Use Playwright for confirmed regressions, smoke checks, and release gates. Use AI-led exploration for discovery, not as a replacement for deterministic tests.

Regression tests should describe observable behavior through the browser. Avoid coupling tests to implementation details unless the target project explicitly exposes a supported testing API.
