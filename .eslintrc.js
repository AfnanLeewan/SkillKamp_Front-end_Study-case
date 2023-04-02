module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/jsx-runtime',
    'eslint:recommended',
    'plugin:react/recommended',
    'standard',
    'plugin:react-hooks/recommended'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    // 'react/jsx-uses-react': 'error',
    // 'react/jsx-uses-vars': 'error',
    // 'react/prop-types': 'error',
    // 'react/jsx-no-undef': 'error',
    // 'react/self-closing-comp': 'error'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
