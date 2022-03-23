const postcssScss = require('postcss-scss');

const rules = {
  'meowtec/no-px': [
    true,
    {
      ignore: ['1px', '-1px'],
    },
  ],
  'color-no-hex': true,
  'no-descending-specificity': null,
  'no-duplicate-selectors': null,
  'at-rule-no-unknown': null,
  'scss/at-rule-no-unknown': true,
  'selector-type-no-unknown': [
    true,
    {
      ignoreTypes: ['/^cds-/', '/^_/'],
    },
  ],
  'max-nesting-depth': 3,
  'rule-empty-line-before': [
    'always-multi-line',
    {
      except: ['first-nested'],
      ignore: ['after-comment'],
    },
  ],
};

const config = {
  extends: 'stylelint-config-recommended',
  defaultSeverity: 'error',
  customSyntax: postcssScss,
  plugins: ['stylelint-scss', 'stylelint-no-px'], // removed stylelint-declaration-use-variable, todo: https://github.com/AndyOGo/stylelint-declaration-strict-value
  ignoreFiles: ['./src/styles/tokens/generated/*.scss', './src/styles/shim.clr-ui.scss', './dist/**/*.scss'],
  rules,
};

module.exports = config;
