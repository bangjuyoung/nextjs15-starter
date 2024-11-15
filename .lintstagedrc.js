const path = require('path');

const buildEslintCommand = (filenames) =>
  `next lint --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')}`;

module.exports = {
  '*.{js,jsx,mjs,ts,tsx,mts}': [buildEslintCommand, 'npm run format'],
  '*.{json,md,mdx,css,html,yml,yaml,scss}': ['npm run format'],
};
