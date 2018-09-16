module.exports = {
  extends: 'react-tools',
  extends: 'airbnb',
  rules: {
    /* Allow long lines since this project includes long body text. Wrap if necessary. */
    'max-len': 'off',
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    /* Overwrite the default forbidden entities array ['>', '"', '\'', '}'] */
    'react/no-unescaped-entities': ['error', { 'forbid': ['>', '}'] }],
  }
}
