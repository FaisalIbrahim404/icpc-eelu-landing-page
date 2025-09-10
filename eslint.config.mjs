// eslint.config.mjs
import js from '@eslint/js';
import astro from 'eslint-plugin-astro';
import jsoncPlugin from 'eslint-plugin-jsonc';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import globals from 'globals';
import jsoncParser from 'jsonc-eslint-parser';
import tseslint from 'typescript-eslint';

export default [
  { ignores: ['dist', '.astro', 'node_modules', 'coverage', '.turbo', '.parcel-cache', '.cache'] },

  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,

  // Browser globals for your app/client code (fixes no-undef for document/window/etc.)
  {
    files: ['src/**/*.{js,jsx,ts,tsx,astro}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        // optional: if you use service workers or web workers
        // ...globals.serviceworker,
        // ...globals.worker,
      },
    },
  },

  // Node globals for config and scripts (avoids no-undef for __dirname, process, etc.)
  {
    files: [
      '**/*.{config,conf}.{js,ts,cjs,mjs}',
      'eslint.config.{js,cjs,mjs,ts}',
      'astro.config.{js,ts,mjs,cjs}',
      'vite.config.{js,ts,mjs,cjs}',
      'scripts/**/*.{js,ts}',
    ],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },

  // React + A11y for JSX/TSX files
  {
    files: ['**/*.{jsx,tsx}'],
    plugins: { react, 'jsx-a11y': jsxA11y },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: { jsx: true },
    },
    settings: { react: { version: 'detect' } },
    rules: {
      ...react.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
    },
  },

  // Ensure .astro scripts can parse TS
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astro.parser,
      parserOptions: {
        parser: tseslint.parser,
        extraFileExtensions: ['.astro'],
      },
    },
  },

  // JSON (strict)
  {
    files: ['**/*.json'],
    plugins: { jsonc: jsoncPlugin },
    languageOptions: { parser: jsoncParser },
    rules: {},
  },

  // JSONC/JSON5 (allow comments and trailing commas)
  {
    files: ['**/*.jsonc', '**/*.json5'],
    plugins: { jsonc: jsoncPlugin },
    languageOptions: {
      parser: jsoncParser,
      parserOptions: {
        allowComments: true,
        allowTrailingCommas: true,
      },
    },
    rules: {},
  },
];
