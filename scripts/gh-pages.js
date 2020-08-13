var ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export/sapper',// <-- replace yourproject with your repo name
    {
        branch: 'master',
        repo: 'https://github.com/carolina0200/sapper.git',
        user: {
            name: 'Carolina',
            email: 'caroliina20003@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)