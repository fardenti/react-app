module.exports = {
  env: {
    browser: true,
    es6: true,
    commonjs: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
  },
};
