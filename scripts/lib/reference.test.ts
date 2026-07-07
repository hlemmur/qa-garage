import { test } from 'node:test';
import assert from 'node:assert/strict';
import { validateReferenceDir, REQUIRED_REFERENCE_FILES } from './reference';

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
