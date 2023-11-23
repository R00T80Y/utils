import { assert, it } from 'vitest';

import { numberWithSpaces } from './number-with-spaces';

it('PASS', () => {
  assert.equal(numberWithSpaces(1234), '1 234');
  assert.equal(numberWithSpaces(1000000), '1 000 000');
  assert.equal(numberWithSpaces(1234.56), '1 234.56');

  assert.equal(numberWithSpaces(1000000.561223), '1 000 000.561223');
});
