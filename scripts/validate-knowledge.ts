import { existsSync, readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { loadRuntimeConfig } from './utils/config';
import { validateContext } from './lib/context';

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
  const contextPath = path.join(projectDir, '.agents', 'qa-project-context.md');

  if (!existsSync(projectDir)) {
    return [`Project "${project}" does not exist at ${path.relative(rootDir, projectDir)}`];
  }

  if (!existsSync(contextPath)) {
    return [`Project "${project}" is missing ${path.relative(rootDir, contextPath)}`];
  }

  // Templates are allowed to keep [placeholders]; real projects must fill them.
  const allowPlaceholders = project === '_template';
  const markdown = readFileSync(contextPath, 'utf8');

  return validateContext(markdown, { allowPlaceholders }).map(
    (error) => `Project "${project}": ${error}`
  );
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
    console.error('Context validation failed:');
    for (const error of errors) {
      console.error(`- ${error}`);
    }
    process.exitCode = 1;
    return;
  }

  console.log(`Context validation passed for ${projects.length} project(s): ${projects.join(', ')}`);
}

main();
