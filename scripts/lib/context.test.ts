import { test } from 'node:test';
import assert from 'node:assert/strict';
import { validateContext, REQUIRED_SECTIONS } from './context';

const complete = `# QA Project Context

${REQUIRED_SECTIONS.map((s) => `## ${s}\n- filled in with real content`).join('\n\n')}
`;

test('a complete context with all sections and no placeholders passes', () => {
  assert.deepEqual(validateContext(complete, { allowPlaceholders: false }), []);
});

test('a missing section is reported', () => {
  const withoutTeam = complete.replace('## Team\n- filled in with real content', '');
  const errors = validateContext(withoutTeam, { allowPlaceholders: false });
  assert.ok(errors.some((e) => /Team/.test(e)), 'missing Team section reported');
});

test('unfilled placeholders fail unless allowed', () => {
  const withPlaceholder = complete.replace(
    '## Product\n- filled in with real content',
    '## Product\n- [product name]'
  );
  assert.ok(
    validateContext(withPlaceholder, { allowPlaceholders: false }).some((e) => /placeholder/i.test(e)),
    'placeholder reported when not allowed'
  );
  assert.deepEqual(
    validateContext(withPlaceholder, { allowPlaceholders: true }),
    [],
    'placeholders tolerated for templates'
  );
});
