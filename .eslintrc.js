module.exports = {
  parser: 'babel-eslint',
  extends: 'react-tools',
  extends: 'airbnb',
  rules: {
    /* Allow long lines since this project includes long body text. Wrap if necessary. */
    'max-len': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'no-use-before-define': ['error', { functions: false, classes: true }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    /* Overwrite the default forbidden entities array ['>', '"', '\'', '}'] */
    'react/no-unescaped-entities': ['error', { forbid: ['>', '}'] }],
    'react/jsx-one-expression-per-line': 'off',
  },
};
