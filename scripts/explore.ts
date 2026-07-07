import { mkdirSync, writeFileSync } from 'node:fs';
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
- \`core/ai/garage-operating-model.md\`
- The \`exploratory-testing\` and \`agentic-browser-testing\` skills in \`.agents/skills/\`

## Operator Notes

Run exploratory testing with browser automation, capture evidence, and classify every observation before drafting bugs.

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
`;
}

function main(): void {
  const config = loadRuntimeConfig();
  const charter = process.argv.slice(2).join(' ') || 'General exploratory session';
  const sessionsDir = path.join(config.projectDir, 'evidence', 'sessions');
  mkdirSync(sessionsDir, { recursive: true });

  const sessionPath = path.join(sessionsDir, `${formatTimestamp()}-session-log.md`);
  writeFileSync(sessionPath, renderSessionLog(charter));
  console.log(`Exploratory session log written to ${path.relative(config.rootDir, sessionPath)}`);
}

main();
