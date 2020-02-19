var ghpages = require('gh-pages');
 
ghpages.publish('build', {
    branch: 'master',
}, function(err) {
    if (err) {
        console.log('Something went wrong', err);
    }
    console.log('Done');
});