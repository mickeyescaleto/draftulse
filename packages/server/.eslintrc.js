/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['@draftulse/eslint-config/library.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true
  }
};
