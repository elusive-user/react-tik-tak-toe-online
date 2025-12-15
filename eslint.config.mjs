import { defineConfig, globalIgnores } from "eslint/config";
import js from "@eslint/js";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

export default defineConfig([
  js.configs.recommended,

  ...nextCoreWebVitals,

  {
    rules: {
      "no-console": "warn",
      "no-debugger": "error",
      "no-var": "error",
      "prefer-const": "error",
      eqeqeq: ["error", "always"],
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],

      "react/jsx-key": "error",
      "react/self-closing-comp": "error",
      "react/jsx-no-target-blank": "error",
    },
  },

  globalIgnores([".next/**", "out/**", "build/**", "node_modules/**"]),
]);
