import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  parseQuestions,
  parseOverride,
  isBlocked,
  renderOpenItems,
  type ReviewResult
} from './review';

test('parseQuestions collects open questions and reads the blocking flag', () => {
  const md = `# Open Questions

### Q-001: Can an unauthenticated collaborator edit a proposal?

- Status: open
- Blocking: yes
- Why it matters: gates the collaboration test scope

### Q-002: Preferred export format?

- Status: open
- Blocking: no

### Q-003: Already answered

- Status: answered
- Blocking: yes
`;
  const items = parseQuestions(md, 'questions.md');
  assert.equal(items.length, 2, 'answered questions are excluded');
  assert.equal(items[0].id, 'Q-001');
  assert.equal(items[0].blocking, true);
  assert.equal(items[1].id, 'Q-002');
  assert.equal(items[1].blocking, false);
  assert.equal(items[0].source, 'questions.md');
});

test('parseOverride detects an explicit human override', () => {
  assert.equal(
    parseOverride('- **Allow proceed with open questions:** yes'),
    true
  );
  assert.equal(
    parseOverride('- **Allow proceed with open questions:** no'),
    false
  );
  assert.equal(parseOverride('nothing here'), false);
});

test('isBlocked is true only when blocking items exist without an override', () => {
  const base: ReviewResult = {
    project: 'demo',
    items: [
      { id: 'Q-001', kind: 'question', blocking: true, summary: 's', source: 'questions.md' }
    ],
    overrideAllowed: false
  };
  assert.equal(isBlocked(base), true);
  assert.equal(isBlocked({ ...base, overrideAllowed: true }), false);
  assert.equal(
    isBlocked({ ...base, items: [{ ...base.items[0], blocking: false }] }),
    false
  );
});

test('renderOpenItems shows counts, both sections, and the ACTION REQUIRED banner', () => {
  const result: ReviewResult = {
    project: 'demo',
    items: [
      { id: 'Q-001', kind: 'question', blocking: true, summary: 'blocker one', source: 'questions.md' },
      { id: 'I-002', kind: 'known-issue-review', blocking: false, summary: 'review issue', source: 'known-issues.md' }
    ],
    overrideAllowed: false
  };
  const out = renderOpenItems(result);
  assert.match(out, /ACTION REQUIRED/);
  assert.match(out, /Blocking \(1\)/);
  assert.match(out, /Non-blocking \(1\)/);
  assert.match(out, /Q-001/);
  assert.match(out, /blocker one/);
  assert.match(out, /questions\.md/);
});
