const ghpages = require('gh-pages');

ghpages.publish(
  'dist',
  {
    branch: 'master',
    repo: 'https://github.com/gabrielvaladao/gabrielvaladao.github.io.git',
  },
  () => {
    console.log('Deploy Complete!');
  }
);