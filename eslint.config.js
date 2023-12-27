import { antfu } from "@antfu/eslint-config";

/** @type { Promise<import("eslint").Linter.FlatConfig[]> } */
export default antfu(
  { stylistic: false },
  {
    rules: {
      "unused-imports/no-unused-imports": "off",
      "import/order": ["error", { alphabetize: { order: "asc" } }],
      "ts/consistent-type-imports": ["error", { prefer: "no-type-imports" }],
      "ts/consistent-type-definitions": ["error", "type"],
      "ts/padding-line-between-statements": [
        "error",
        {
          blankLine: "always",
          prev: "*",
          next: [
            "import",
            "export",
            "class",
            "function",
            "block",
            "block-like",
            "multiline-expression",
            "multiline-const",
            "multiline-let",
          ],
        },
        {
          blankLine: "always",
          prev: [
            "import",
            "export",
            "class",
            "function",
            "block",
            "block-like",
            "multiline-expression",
            "multiline-const",
            "multiline-let",
          ],
          next: "*",
        },
        { blankLine: "never", prev: "import", next: "import" },
        { blankLine: "never", prev: "export", next: "export" },
        { blankLine: "never", prev: "*", next: ["case", "default"] },
        { blankLine: "never", prev: ["case", "default"], next: "*" },
      ],
    },
  },
);
