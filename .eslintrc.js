module.exports = {
    parser: '@typescript-eslint/parser',  // Use the TypeScript parser
    parserOptions: {
      ecmaVersion: 2020,  // Modern ECMAScript features
      sourceType: 'module',  // Enable ECMAScript modules
      project: './tsconfig.json',  // Path to your tsconfig.json file
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',  // Enable TypeScript linting
      'next/core-web-vitals',  // Enable Next.js recommended linting
    ],
    plugins: ['@typescript-eslint'],  // Include TypeScript plugin
    rules: {
      // You can add or customize your rules here
      '@next/next/no-img-element': 'off',  // Disable no-img-element rule
    },
  };
  