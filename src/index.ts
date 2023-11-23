// Режимы:
// 1. С помощью nodemon "pnpm dev"
// 2. С помощью vitest "pnpm test"
//
// Посмотреть что получилось "pnpm build", будет создана папка "dist"

import { isString } from './packages/utils/is/is-string';

const message = 'Happy Coding!';

console.log(`"${message}"`, 'is a string', isString(message));
