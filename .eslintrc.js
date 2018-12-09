module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'react-tools'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
    /* Allow long lines since this project includes long body text. Wrap if necessary. */
    'max-len': 'off',
    /* Override Airbnb no-restricted-syntax to allow ForOfStatement to iterate over NodeLists returned by querySelectorAll */
    'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
    'arrow-parens': ['error', 'as-needed'],
    'no-use-before-define': ['error', { functions: false, classes: true }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    /* Overwrite the default forbidden entities array ['>', '"', '\'', '}'] */
    'react/no-unescaped-entities': ['error', { forbid: ['>', '}'] }],
    'react/jsx-one-expression-per-line': 'off'
  }
};
