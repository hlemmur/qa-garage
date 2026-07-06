# Template QA Project

Copy this directory to create a project-specific black-box QA harness target.

## Setup

1. Copy `_template` to `projects/<project-name>`.
2. Update `project-context.md`.
3. Update `config/target.env.example` and keep real secrets outside git.
4. Track requested QA work in `tasks/qa-tasks.md`.
5. Add scenarios under `scenarios/`.
6. Add Playwright tests under `tests/e2e/`.

## Commands

```bash
QA_PROJECT=_template npm run qa:smoke
QA_PROJECT=_template npm run qa:regression
QA_PROJECT=_template npm run qa:explore -- "template exploratory charter"
QA_PROJECT=_template npm run qa:report
```
