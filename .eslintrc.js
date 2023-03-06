module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'prettier',
    'plugin:react/jsx-runtime',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
  ],
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      impliedStrict: true,
    },
    ecmaVersion: 12,
  },
  plugins: ['prettier', 'react', 'react-hooks'],
  rules: {
    'react/jsx-filename-extension': 0,
    'no-param-reassign': 0,
    'react/prop-types': 1,
    'react/require-default-props': 0,
    'react/no-array-index-key': 0,
    'react/jsx-props-no-spreading': 0,
    'react/forbid-prop-types': 0,
    'import/order': 0,
    'no-console': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'prefer-destructuring': 0,
    'no-shadow': 0,

    'prettier/prettier': 0,
    ' react/prop-types': 0,
    ' no-undef': 0,
  },
};
