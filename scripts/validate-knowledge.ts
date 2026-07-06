import { existsSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { loadRuntimeConfig } from './utils/config';

const requiredKnowledgeFiles = [
  'README.md',
  'product-map.md',
  'glossary.md',
  'personas.md',
  'user-journeys.md',
  'feature-inventory.md',
  'expected-behavior.md',
  'test-data.md',
  'integrations.md',
  'risks.md',
  'known-issues.md',
  'release-notes.md',
  'decisions.md',
  'questions.md'
];

function listProjects(rootDir: string, requestedProject: string | undefined): string[] {
  if (requestedProject) {
    return [requestedProject];
  }

  const projectsDir = path.join(rootDir, 'projects');

  if (!existsSync(projectsDir)) {
    return [];
  }

  return readdirSync(projectsDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
}

function validateProject(rootDir: string, project: string): string[] {
  const projectDir = path.join(rootDir, 'projects', project);
  const knowledgeDir = path.join(projectDir, 'knowledge');
  const errors: string[] = [];

  if (!existsSync(projectDir)) {
    return [`Project "${project}" does not exist at ${path.relative(rootDir, projectDir)}`];
  }

  if (!existsSync(knowledgeDir)) {
    return [`Project "${project}" is missing ${path.relative(rootDir, knowledgeDir)}`];
  }

  for (const file of requiredKnowledgeFiles) {
    const filePath = path.join(knowledgeDir, file);

    if (!existsSync(filePath)) {
      errors.push(`Project "${project}" is missing ${path.relative(rootDir, filePath)}`);
    }
  }

  return errors;
}

function main(): void {
  const requestedProject = process.env.QA_PROJECT;
  const config = loadRuntimeConfig();
  const projects = listProjects(config.rootDir, requestedProject);

  if (projects.length === 0) {
    console.error('No projects found under projects/.');
    process.exitCode = 1;
    return;
  }

  const errors = projects.flatMap((project) => validateProject(config.rootDir, project));

  if (errors.length > 0) {
    console.error('Knowledge validation failed:');
    for (const error of errors) {
      console.error(`- ${error}`);
    }
    process.exitCode = 1;
    return;
  }

  console.log(`Knowledge validation passed for ${projects.length} project(s): ${projects.join(', ')}`);
}

main();
