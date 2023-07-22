module.exports = {
  "env": {
    browser: true,
    es2021: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    semi: ['error'],
    "@typescript-eslint/no-explicit-any": "warn",
  }
}