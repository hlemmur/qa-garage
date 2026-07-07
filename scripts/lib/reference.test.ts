import { mkdtempSync, mkdirSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { validateReferenceDir, REQUIRED_REFERENCE_FILES, warnUiInventoryIfNeeded } from './reference';

test('validateReferenceDir reports missing directory', () => {
  const errors = validateReferenceDir('reference', () => false);
  assert.equal(errors.length, 1);
  assert.match(errors[0], /missing reference directory/);
});

test('validateReferenceDir reports missing required files', () => {
  const present = new Set(['features.md']);
  const errors = validateReferenceDir('reference', (p) => {
    if (p === 'reference') return true;
    const file = p.replace('reference/', '');
    return present.has(file);
  });
  assert.equal(errors.length, REQUIRED_REFERENCE_FILES.length - 1);
  assert.ok(errors.every((e) => /missing required reference file/.test(e)));
});

test('validateReferenceDir passes when all files exist', () => {
  const errors = validateReferenceDir('reference', (p) => {
    if (p === 'reference') return true;
    return REQUIRED_REFERENCE_FILES.some((f) => p === `reference/${f}`);
  });
  assert.deepEqual(errors, []);
});

test('warnUiInventoryIfNeeded skips _template', () => {
  const warnings = warnUiInventoryIfNeeded('_template', '/any/path');
  assert.deepEqual(warnings, []);
});

test('warnUiInventoryIfNeeded warns when sessions exist but ui-inventory missing', () => {
  const root = mkdtempSync(path.join(tmpdir(), 'qa-garage-'));
  const sessionsDir = path.join(root, 'evidence', 'sessions');
  mkdirSync(sessionsDir, { recursive: true });
  writeFileSync(path.join(sessionsDir, '2026-01-01T00-00-00-session-log.md'), '# log');

  const warnings = warnUiInventoryIfNeeded('demo', root);
  assert.equal(warnings.length, 1);
  assert.match(warnings[0], /ui-inventory\.md is missing/);
});
