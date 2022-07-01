import { Linter } from "eslint";

const config: Linter.Config = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
  },
  plugins: ["eslint-plugin-import", "eslint-plugin-react-hooks"],
  rules: {
    "no-var": "error",
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: "import",
        next: "*",
      },
      {
        blankLine: "never",
        prev: "import",
        next: "import",
      },
      {
        blankLine: "always",
        prev: "*",
        next: "export",
      },
      {
        blankLine: "any",
        prev: "export",
        next: "export",
      },
      {
        blankLine: "always",
        prev: "*",
        next: ["class", "function", "block", "block-like", "multiline-expression", "multiline-const", "multiline-let"],
      },
      {
        blankLine: "always",
        prev: ["class", "function", "block", "block-like", "multiline-expression", "multiline-const", "multiline-let"],
        next: "*",
      },
      {
        blankLine: "never",
        prev: "*",
        next: ["case", "default"],
      },
      {
        blankLine: "never",
        prev: ["case", "default"],
        next: "*",
      },
    ],
    "sort-imports": [
      "error",
      {
        ignoreDeclarationSort: true,
      },
    ],
    "import/no-absolute-path": "error",
    "import/no-dynamic-require": "error",
    "import/no-self-import": "error",
    "import/no-useless-path-segments": "error",
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "parent", "sibling", "index"],
        alphabetize: {
          order: "asc",
        },
      },
    ],
    "react-hooks/exhaustive-deps": "error",
    "react-hooks/rules-of-hooks": "error",
  },
};

export default config;
