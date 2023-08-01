module.exports = {
  env: {
    node: true,
  },
  overrides: [
    {
      files: ['src/**/*.test.ts', 'src/**/*.test.tsx'],
      extends: ['plugin:jest/recommended'],
      plugins: ['jest'],
      env: {
        'jest/globals': true,
      },
    },
  ],
}
