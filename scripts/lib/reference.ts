import { existsSync, readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';

export const REQUIRED_REFERENCE_FILES = [
  'features.md',
  'use-cases.md',
  'product-map.md',
  'glossary.md',
  'testability.md'
] as const;

export const RECOMMENDED_REFERENCE_FILES = ['ui-inventory.md'] as const;

export function validateReferenceDir(
  referenceDir: string,
  existsFn: (path: string) => boolean
): string[] {
  const errors: string[] = [];

  if (!existsFn(referenceDir)) {
    errors.push(`missing reference directory at ${referenceDir}`);
    return errors;
  }

  for (const file of REQUIRED_REFERENCE_FILES) {
    const filePath = `${referenceDir}/${file}`;
    if (!existsFn(filePath)) {
      errors.push(`missing required reference file: ${file}`);
    }
  }

  return errors;
}

function hasExplorationSessions(projectDir: string): boolean {
  const sessionsDir = path.join(projectDir, 'evidence', 'sessions');
  if (!existsSync(sessionsDir)) {
    return false;
  }

  return readdirSync(sessionsDir).some(
    (name) => name.endsWith('-session-log.md') && !name.startsWith('.')
  );
}

function isUiInventoryEmpty(uiInventoryPath: string): boolean {
  if (!existsSync(uiInventoryPath)) {
    return true;
  }

  const content = readFileSync(uiInventoryPath, 'utf8');
  const dataRows = content
    .split('\n')
    .filter((line) => /^\| UI-\d+ /.test(line.trim()));

  return dataRows.length === 0;
}

export function warnUiInventoryIfNeeded(project: string, projectDir: string): string[] {
  if (project === '_template') {
    return [];
  }

  if (!hasExplorationSessions(projectDir)) {
    return [];
  }

  const uiInventoryPath = path.join(projectDir, 'reference', 'ui-inventory.md');

  if (!existsSync(uiInventoryPath)) {
    return [
      'Phase 0B session logs exist but reference/ui-inventory.md is missing — add widget bundles and smoke candidates'
    ];
  }

  if (isUiInventoryEmpty(uiInventoryPath)) {
    return [
      'Phase 0B session logs exist but reference/ui-inventory.md has no UI-* rows — populate from exploration'
    ];
  }

  return [];
}
