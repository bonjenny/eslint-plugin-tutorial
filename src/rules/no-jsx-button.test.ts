/* src/rules/no-jsx-button.test.ts */

import { RuleTester } from "eslint";

import rule from "./no-jsx-button";

// Specify parser
const tester = new RuleTester({
  parser: require.resolve("@typescript-eslint/parser"),
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
});

tester.run("no-jsx-button", rule, {
  valid: [
    {
      code: `(props: Props) => <div />`,
    },
  ],
  invalid: [
    {
      code: `(props: Props) => <button />`,
      errors: [{ message: "Don't use <button>" }],
    },
  ],
});