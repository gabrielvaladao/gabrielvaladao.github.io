module.exports = {
  extends: 'react-tools',
  extends: 'airbnb',
  rules: {
    /* Allow long lines since this project includes long body text. Wrap if necessary. */
    'max-len': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    /* Overwrite the default forbidden entities array ['>', '"', '\'', '}'] */
    'react/no-unescaped-entities': ['error', { 'forbid': ['>', '}'] }],
    'react/jsx-one-expression-per-line': 'off',
  }
}
