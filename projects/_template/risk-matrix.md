# Risk Matrix

Produced by the `risk-based-testing` skill. Product and delivery risk scored by Impact x Likelihood, used to prioritize what to test first. This is the highest-leverage artifact: it decides where limited testing effort goes. Run risk assessment before strategy and planning.

## Scoring

- **Critical (test first):** high impact + high likelihood.
- **Important:** high impact + low likelihood.
- **Monitor:** low impact + high likelihood.
- **Backlog:** low impact + low likelihood.

## Matrix

| ID | Risk (what could break) | Area / Feature | Impact | Likelihood | Score | Failure mode | Coverage today | Owner |
|----|-------------------------|----------------|--------|------------|-------|--------------|----------------|-------|
| R-001 | [what could go wrong] | [area] | [High/Med/Low] | [High/Med/Low] | [Critical/Important/Monitor/Backlog] | [how it fails] | [none/smoke/regression] | [name] |

## No-Go Risks

Risks that, if they surface in production, are a release blocker. Prioritize coverage here.

- [risk] - [why it is a no-go]

## Reassessment Triggers

- New feature or integration shipped.
- Post-incident.
- Sprint refresh of changed areas.
