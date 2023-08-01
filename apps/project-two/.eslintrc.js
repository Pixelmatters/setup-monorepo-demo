module.exports = {
  extends: ['eslint-config', 'eslint-config/jest'].map(require.resolve),
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  ignorePatterns: ['cypress/**/*', 'dist', '.eslintrc.js'],
}