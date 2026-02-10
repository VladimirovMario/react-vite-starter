import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
      reportUnusedInlineConfigs: 'error',
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'prefer-const': ['error', { ignoreReadBeforeAssign: true }],
      'no-duplicate-imports': ['error', { allowSeparateTypeImports: true }],
      'no-unassigned-vars': 'error',
      'arrow-body-style': ['error', 'as-needed'],
      'block-scoped-var': 'error',
      curly: 'error',
      'no-empty': 'error',
      'no-empty-function': 'error',
      'no-nested-ternary': 'error',
      'no-undefined': 'error',
      'no-useless-return': 'error',
      // You can continue to use deprecated rules indefinitely if they are working for you.
      // However, keep in mind that deprecated rules will effectively be unmaintained and may be removed at some point.
      semi: ['error', 'always'],
      quotes: ['warn', 'single'],
    },
  },
]);
