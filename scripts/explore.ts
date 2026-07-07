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

function renderJobStub(charter: string, sessionRelPath: string, jobId: string): string {
  const templatePath = path.join(process.cwd(), 'core', 'templates', 'job.md');

  if (existsSync(templatePath)) {
    return readFileSync(templatePath, 'utf8')
      .replace('JOB-001', jobId)
      .replace('[short job title]', `Explore: ${charter.slice(0, 60)}`)
      .replace('proposed | approved | scheduled | running | done | skipped', 'proposed')
      .replace('smoke | regression | explore-charter | reference-hygiene | review-open-items | report | ai-eval | doc-watch', 'explore-charter')
      .replace('one-shot | daily | weekly | [cron expression when CI wired]', 'one-shot')
      .replace('agent | human', 'agent')
      .replace('[human, date]', '')
      .replace('soft | execution', 'soft')
      .replace('[what to run, e.g. explore charter text or `npm run qa:smoke`]', charter)
      .replace('[harness or vendored skills to use]', 'exploratory-testing, agentic-browser-testing')
      .replace('[R-001, journey name, …]', '')
      .replace('- Session log:', `- Session log: ${sessionRelPath}`)
      .replace('[Summary when done; link artifacts.]', '')
      .replace('[Blockers, skip reason, follow-up jobs.]', `Scaffolded by npm run qa:discover. Approve before scheduling.`);
  }

  return `# ${jobId}: Explore charter

- Status: proposed
- Type: explore-charter
- Charter: ${charter}
- Session log: ${sessionRelPath}
`;
}

function main(): void {
  const config = loadRuntimeConfig();
  const charter = process.argv.slice(2).join(' ') || 'General exploratory session';
  const timestamp = formatTimestamp();
  const jobId = `JOB-${timestamp}`;

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
  writeFileSync(jobPath, renderJobStub(charter, sessionRelPath, jobId));
  console.log(`Job stub written to ${path.relative(config.rootDir, jobPath)}`);
}

main();
