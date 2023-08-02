module.exports = {
  extends: ['eslint-config'].map(require.resolve),
  ignorePatterns: ['!.storybook'],
}
