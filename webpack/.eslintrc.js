/**
 * Eslint config file
 * as configured in package.json under eslintConfig.extends
 *
 * @docs BabelJS: https://babeljs.io/
 * @docs Webpack babel-loader: https://webpack.js.org/loaders/babel-loader/
 * @docs @wordpress/eslint-plugin : https://www.npmjs.com/package/@wordpress/eslint-plugin
 * @since 1.0.0
 */
module.exports = {
  env: {
    es2017: true,
    browser: true,
    node: true,
    jquery: true,
    amd: true,
  },
  extends: "eslint:recommended",
  parser: "@babel/eslint-parser",
  parserOptions: {
    sourceType: "module",
    requireConfigFile: false,
  },
  rules: {
    semi: ["error", "always"],
    "no-unused-vars": "off",
  },
  globals: {
    wp: "readonly",
    jQuery: "readonly",
    $: "readonly",
  },
  ignorePatterns: [
    "tests/**/*.js",
    "temp.js",
    "/vendor/**/**/*.js",
    "/node_modules/**/**/*.js",
  ],
};
