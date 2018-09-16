module.exports = {
  extends: 'react-tools',
  extends: 'airbnb',
  rules: {
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    /* Overwrite the default forbidden entities array ['>', '"', '\'', '}'] */
    'react/no-unescaped-entities': ['error', { 'forbid': ['>', '}'] }],
  }
}
