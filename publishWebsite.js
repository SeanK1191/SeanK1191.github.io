var ghpages = require('gh-pages');
const simpleGit = require('simple-git');
 
ghpages.publish('build', {
    branch: 'master',
}, function(err) {
    if (err) {
        console.log('Something went wrong', err);
    }
    console.log('Done');
});