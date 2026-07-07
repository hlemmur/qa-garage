import { existsSync, readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { loadRuntimeConfig } from './utils/config';
import { validateContext } from './lib/context';
import { validateReferenceDir, warnUiInventoryIfNeeded } from './lib/reference';

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

function validateProject(rootDir: string, project: string): { errors: string[]; warnings: string[] } {
  const projectDir = path.join(rootDir, 'projects', project);
  const contextPath = path.join(projectDir, '.agents', 'qa-project-context.md');
  const referenceDir = path.join(projectDir, 'reference');

  if (!existsSync(projectDir)) {
    return { errors: [`Project "${project}" does not exist at ${path.relative(rootDir, projectDir)}`], warnings: [] };
  }

  const errors: string[] = [];
  const warnings: string[] = [];

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

    warnings.push(
      ...warnUiInventoryIfNeeded(project, projectDir).map(
        (warning) => `Project "${project}": ${warning}`
      )
    );
  }

  return { errors, warnings };
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

  const results = projects.map((project) => validateProject(config.rootDir, project));
  const errors = results.flatMap((result) => result.errors);
  const warnings = results.flatMap((result) => result.warnings);

  if (warnings.length > 0) {
    console.warn('Context validation warnings:');
    for (const warning of warnings) {
      console.warn(`- ${warning}`);
    }
  }

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
