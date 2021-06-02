/** @type {import("eslint").Linter.Config} */
module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
  },
  plugins: ["import"],
  rules: {
    "import/order": [
      "error",
      {
        alphabetize: {
          order: "asc",
        },
      },
    ],
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "import", next: "*" },
      { blankLine: "any", prev: "import", next: "import" },
      { blankLine: "always", prev: "*", next: "export" },
      { blankLine: "any", prev: "export", next: "export" },
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
    ],
  },
};
