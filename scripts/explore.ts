import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { formatTimestamp, loadRuntimeConfig } from './utils/config';

function renderSessionLog(charter: string): string {
  const config = loadRuntimeConfig();
  const mockBadge = config.mockMode ? '[MOCK MODE]' : 'off';

  return `# QA Session Log

## Session

- Project: ${config.project}
- Target URL: ${config.targetUrl ?? 'not configured'}
- Environment: ${config.environment ?? 'not configured'}
- Created: ${new Date().toISOString()}
- Scope: ${charter}
- Mock mode: ${mockBadge}

## Required Reading

- \`core/ai/qa-principles.md\`
- \`core/ai/qa-garage-operating-model.md\`
- \`core/ai/discovery-workflow.md\`
- \`core/ai/knowledge-maintenance.md\`
- The \`exploratory-testing\` and \`agentic-browser-testing\` skills in \`.agents/skills/\`

## Operator Notes

Run exploratory testing with browser automation, capture evidence, and classify every observation before drafting bugs. End with harness \`knowledge-curator\` to update \`reference/\`.

## Timeline

| Time | Action | Observation | Evidence |
| --- | --- | --- | --- |
|  |  |  |  |

## Findings

### Confirmed

### Suspected

### Blocked

## Suggested Follow-Ups

1. Reproduce high-signal suspected issues.
2. Draft bug reports for confirmed issues.
3. Propose regression tests for human approval.
4. Update \`reference/\` via knowledge-curator.
`;
}

function renderJobStub(charter: string, sessionRelPath: string): string {
  const ts = formatTimestamp();
  return `# JOB-${ts}: Explore charter

- Status: proposed
- Type: explore-charter
- Cadence: one-shot
- Proposed by: agent
- Approved by:
- Charter: ${charter}
- Skills: exploratory-testing, agentic-browser-testing
- Gate: soft
- Session log: ${sessionRelPath}
- Outcome:

## Notes

Scaffolded by \`npm run qa:discover\`. Approve in this file or \`cadence.md\` before scheduling.
`;
}

function main(): void {
  const config = loadRuntimeConfig();
  const charter = process.argv.slice(2).join(' ') || 'General exploratory session';
  const timestamp = formatTimestamp();

  const sessionsDir = path.join(config.projectDir, 'evidence', 'sessions');
  mkdirSync(sessionsDir, { recursive: true });

  const sessionFilename = `${timestamp}-session-log.md`;
  const sessionPath = path.join(sessionsDir, sessionFilename);
  writeFileSync(sessionPath, renderSessionLog(charter));

  const sessionRelPath = path.relative(config.rootDir, sessionPath);
  console.log(`Session log written to ${sessionRelPath}`);

  const jobsDir = path.join(config.projectDir, 'jobs');
  mkdirSync(jobsDir, { recursive: true });

  const jobFilename = `${timestamp}-explore.md`;
  const jobPath = path.join(jobsDir, jobFilename);
  writeFileSync(jobPath, renderJobStub(charter, sessionRelPath));
  console.log(`Job stub written to ${path.relative(config.rootDir, jobPath)}`);
}

main();
