import { assert, it } from 'vitest';

import { isString } from './is-string';

it('Тесты со строками', () => {
  assert.isTrue(isString(''));
  assert.isTrue(isString(String(123)));
  assert.isTrue(isString(new String('')));
});

it('Тесты c остальными типами', () => {
  assert.isFalse(isString(-0));
  assert.isFalse(isString(0));

  assert.isFalse(isString(null));
  assert.isFalse(isString(NaN));

  assert.isFalse(isString(undefined));

  assert.isFalse(isString(true));
  assert.isFalse(isString(false));

  assert.isFalse(isString({}));
  assert.isFalse(isString([]));

  assert.isFalse(isString(() => {}));
});
