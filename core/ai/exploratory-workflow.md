# Exploratory Workflow

Exploratory testing discovers risk. It does not redefine expected behavior by itself.

## Charter Format

Every exploratory run should state:

- Mission: what question the run answers.
- Area: product surface or user journey.
- Persona: user role and permissions.
- Data: account, workspace, fixture, or setup requirements.
- Risks: what could go wrong.
- Timebox: recommended session length.

## Agent Steps

1. Read the charter and project context.
2. Map the main happy path before testing variants.
3. Probe edges around data entry, navigation, refresh, permissions, errors, and recovery.
4. Record observations as notes, not confirmed bugs.
5. Capture evidence for anything suspicious.
6. Attempt one clean reproduction for high-signal issues.
7. Summarize findings with confidence and suggested next steps.

## Evidence To Capture

- Screenshots for visual or state issues.
- Trace and video for workflow issues.
- Console errors when relevant.
- Network errors for API or loading issues.
- Exact input values for form, editor, and AI-generation issues.

## Stop Conditions

Stop and ask the human when:

- Login or MFA blocks access.
- A destructive action is required.
- Expected behavior is ambiguous.
- Test data could affect real users.
- The agent cannot reproduce a suspected issue after a reasonable attempt.
