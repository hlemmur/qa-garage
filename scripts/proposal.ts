import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { formatTimestamp, loadRuntimeConfig } from './utils/config';

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 48) || 'scope';
}

function renderProposal(goal: string, project: string): string {
  const date = new Date().toISOString().slice(0, 10);
  const templatePath = path.join(process.cwd(), 'core', 'templates', 'scope-proposal.md');

  if (existsSync(templatePath)) {
    const template = readFileSync(templatePath, 'utf8');
    return template
      .replace('[engagement goal from QA Lead]', goal)
      .replace('[product name]', project)
      .replace('[YYYY-MM-DD]', date);
  }

  return `# Testing Scope Proposal

> **Status:** draft
> **Goal:** ${goal}
> **Project:** ${project}
> **Date:** ${date}

Fill using \`core/templates/scope-proposal.md\` and harness \`scope-proposal\` skill.
`;
}

function main(): void {
  const config = loadRuntimeConfig();
  const goal = process.argv.slice(2).join(' ') || 'Testing scope proposal';
  const proposalsDir = path.join(config.projectDir, 'proposals');
  mkdirSync(proposalsDir, { recursive: true });

  const filename = `${formatTimestamp().slice(0, 10)}-${slugify(goal)}.md`;
  const proposalPath = path.join(proposalsDir, filename);
  writeFileSync(proposalPath, renderProposal(goal, config.project));

  console.log(`Scope proposal scaffold written to ${path.relative(config.rootDir, proposalPath)}`);
  console.log('Fill sections using harness scope-proposal skill and project artifacts.');
}

main();
