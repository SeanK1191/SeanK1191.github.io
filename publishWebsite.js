var ghpages = require('gh-pages');
const simpleGit = require('simple-git');
 
ghpages.publish('build', {
    branch: 'master',
}, function(err) {
    console.log('Something went wrong', err);
});