import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const root = join(__dirname, '../..');
const web = join(root, 'apps/web/src');
const ui = join(root, 'packages/ui/src');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [join(web, './**/*.tsx'), join(ui, './**/*.tsx')],
  theme: {},
  plugins: [require('tailwindcss-animate')]
};
