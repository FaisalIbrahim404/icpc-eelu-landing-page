// eslint.config.mjs
import astro from 'eslint-plugin-astro';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  // ignore build outputs, caches, deps
  { ignores: ['dist', '.astro', 'node_modules', 'coverage', '.turbo', '.parcel-cache', '.cache'] },

  // Astro rules
  ...astro.configs.recommended,

  // Ensure .astro scripts can parse TypeScript and have browser globals
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astro.parser,
      parserOptions: {
        parser: tseslint.parser,
        extraFileExtensions: ['.astro'],
      },
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      // put any Astro-specific customizations here
    },
  },
];
