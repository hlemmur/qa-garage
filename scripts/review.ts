import { existsSync, readdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { loadRuntimeConfig } from './utils/config';
import { isBlocked, renderOpenItems, reviewProject } from './lib/review';

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

function main(): void {
  const gate = process.argv.includes('--gate');
  const config = loadRuntimeConfig();
  const projects = listProjects(config.rootDir, process.env.QA_PROJECT);

  if (projects.length === 0) {
    console.error('No projects found under projects/.');
    process.exitCode = 1;
    return;
  }

  let anyBlocked = false;

  for (const project of projects) {
    const projectDir = path.join(config.rootDir, 'projects', project);
    if (!existsSync(projectDir)) {
      console.error(`Project "${project}" does not exist.`);
      process.exitCode = 1;
      return;
    }

    const result = reviewProject(projectDir);
    writeFileSync(path.join(projectDir, 'open-items.md'), renderOpenItems(result), 'utf8');

    const blocked = isBlocked(result);
    anyBlocked = anyBlocked || blocked;

    const blockingCount = result.items.filter((item) => item.blocking).length;
    const status = blocked ? 'BLOCKED' : result.overrideAllowed ? 'override active' : 'clear';
    console.log(
      `${project}: ${result.items.length} open item(s), ${blockingCount} blocking [${status}] -> projects/${project}/open-items.md`
    );
  }

  if (gate && anyBlocked) {
    console.error('Readiness gate: blocking open items remain. Resolve them or set an override in decisions.md.');
    process.exitCode = 1;
  }
}

main();
