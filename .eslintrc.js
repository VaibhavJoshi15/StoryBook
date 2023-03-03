module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // 0 = off, 1 = warn, 2 = error
        'react-native/no-unused-styles': 2,
        'react-native/split-platform-components': 0,
        'react-native/no-inline-styles': 2,
        'react-native/no-color-literals': 1,
        'react-native/no-raw-text': 0,
        'no-console': 2,
        'react/prop-types': 0,
        'no-restricted-syntax': [
          'error',
          {
            selector:
              "CallExpression[callee.object.name='console'][callee.property.name!=/^(log|warn|error|info|trace)$/]",
            message: 'Unexpected property on console object was called',
          },
        ],
      },
    },
  ],
};
