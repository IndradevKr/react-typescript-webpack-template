import js from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import globals from "globals";

export default tseslint.config({
  extends: [
    js.configs.recommended,
    tseslint.configs.strict,
    tseslint.configs.stylistic,
  ],
  files: ["**/*.{jsx,ts,tsx}"],
  rules: {
    "no-unused-vars": "error",
    "prefer-const": "error",
    ...eslintPluginReactHooks.configs.recommended.rules,
  },
  plugins: { eslintPluginReact, "react-hooks": eslintPluginReactHooks },
  languageOptions: {
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
});
