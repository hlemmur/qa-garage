import { existsSync, readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { loadRuntimeConfig } from './utils/config';
import { validateContext } from './lib/context';
import { validateReferenceDir } from './lib/reference';

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
  const referenceDir = path.join(projectDir, 'reference');

  if (!existsSync(projectDir)) {
    return [`Project "${project}" does not exist at ${path.relative(rootDir, projectDir)}`];
  }

  const errors: string[] = [];

  if (!existsSync(contextPath)) {
    errors.push(`Project "${project}" is missing ${path.relative(rootDir, contextPath)}`);
  } else {
    const allowPlaceholders = project === '_template';
    const markdown = readFileSync(contextPath, 'utf8');
    errors.push(
      ...validateContext(markdown, { allowPlaceholders }).map(
        (error) => `Project "${project}": ${error}`
      )
    );
  }

  if (project === '_template' || existsSync(referenceDir)) {
    errors.push(
      ...validateReferenceDir(path.relative(rootDir, referenceDir), (relPath) =>
        existsSync(path.join(rootDir, relPath))
      ).map((error) => `Project "${project}": ${error}`)
    );
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
