module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'plugin:react-native/all',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-native',
  ],
  rules: {
    'react/jsx-filename-extension': [
      "error",
      { "extensions": [".js", ".jsx"] }
    ],
    "import/prefer-default-export": "off",
    'react-native/no-raw-text': 'off',
    'react/prop-types': 'off',
    "react/jsx-props-no-spreading": 'off'
  },
};
