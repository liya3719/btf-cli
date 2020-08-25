const which = require('which');
which('npm', (err, resolvedPath) => {
    if(err) {
        console.log(err);
    };
    console.log(resolvedPath);
});
var resolved = which.sync('node');
resolved = which.sync('node', {nothrow: true})
console.log(`resolved__________${resolved}`);