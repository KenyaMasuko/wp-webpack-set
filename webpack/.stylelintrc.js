/**
 * Stylelint config file
 * as configured in package.json under stylelint.extends
 *
 * @docs Stylelint https://stylelint.io/user-guide/
 * @docs StylelintWebpackPlugin: https://webpack.js.org/plugins/stylelint-webpack-plugin/
 * @docs stylelint-scss : https://github.com/kristerkari/stylelint-scss
 * @since 1.0.0
 */

module.exports = {
  extends: "stylelint-config-standard-scss",
  plugins: ["stylelint-scss"],
  rules: {
    "max-line-length": null,
    single: { avoidEscape: false },
    "no-empty-source": null,
    indentation: 2,
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
  },
};
