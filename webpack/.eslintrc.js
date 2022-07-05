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
    parser:  "babel-eslint",
    env: {
        "es2017":  true,
        "browser": true,
        "node":    true,
        "jquery":  true,
        "amd":     true
    },
    extends: "eslint:recommended",
    rules:   {
        "semi": ["error", "always"]
    },
    globals: {
        "wp": "readonly",
        "jQuery": "readonly",
        "$": "readonly"
    },
    ignorePatterns: [
        "tests/**/*.js",
        "temp.js",
        "/vendor/**/**/*.js",
        "/node_modules/**/**/*.js"
    ],
}