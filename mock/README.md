# Mock Mode

Mock mode supports local and deterministic QA runs when real integrations are unavailable or unsafe to use.

Enable it with:

```bash
MOCK_MODE=true npm test
```

When enabled, Playwright prints:

```text
[MOCK MODE]
```

Use route helpers in `mock/interceptors/` from tests or fixtures. Keep mock behavior explicit and visible; do not use mock mode to hide real product failures.

## Badge

When documenting a run, include this badge when `MOCK_MODE=true`:

```text
[MOCK MODE]
```

## Guidance

- Mock external integrations, not the behavior under test.
- Keep fixtures small and named after the scenario they support.
- Record mock mode in session logs and reports.
- Do not promote mock-only behavior to expected production behavior without human approval.
