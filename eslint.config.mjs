import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
import vitest from "@vitest/eslint-plugin";
import eslintConfigPrettier from "eslint-config-prettier";

const compat = new FlatCompat({});

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    ignores: ["next.config.ts", "vitest.config.mts", ".next"],
  },
  js.configs.recommended,
  ...compat.extends("next/core-web-vitals"),
  {
    plugins: {
      "@typescript-eslint": typescriptEslintPlugin,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "_" },
      ],
      "@typescript-eslint/no-use-before-define": "error",
    },
  },
  eslintConfigPrettier,
  {
    rules: {
      // eslint-plugin-import
      "import/newline-after-import": [
        "error",
        {
          count: 1,
        },
      ],
      "import/no-anonymous-default-export": "warn",
      "import/no-unresolved": "off",
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "parent", "sibling", "index"],
          "newlines-between": "always",

          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
    },
  },
  {
    rules: {
      // eslint-plugin-react
      "react/jsx-uses-react": "off",
      "react/jsx-no-target-blank": [
        "off",
        {
          allowReferrer: true,
        },
      ],
    },
  },
  {
    rules: {
      // eslint-plugin-next
      "@next/next/no-img-element": "off",
      "@next/next/no-html-link-for-pages": "off",
      "@next/next/next-script-for-ga": "off",
      "@next/next/no-sync-scripts": "off",
    },
  },
  {
    rules: {
      curly: "error",
      eqeqeq: "warn",
      "no-else-return": "warn",
      radix: "warn",
      "no-console": "warn",
      camelcase: [
        "warn",
        {
          ignoreDestructuring: true,
          ignoreImports: true,
          ignoreGlobals: true,
        },
      ],
      "func-style": ["error", "declaration"],
      "arrow-body-style": ["warn", "always"],
      "no-restricted-imports": [
        "error",
        {
          patterns: ["../"],
        },
      ],
      "no-unused-vars": "off",
    },
    languageOptions: {
      globals: {
        // https://stackoverflow.com/a/76908483
        RequestInit: true,
      },
    },
  },
  {
    plugins: {
      vitest,
    },
    rules: {
      ...vitest.configs.recommended.rules,
      "vitest/consistent-test-it": ["error", { fn: "test" }],
    },
    languageOptions: {
      globals: {
        ...vitest.environments.env.globals,
      },
    },
  },
];
