var fs = require('fs');

module.exports = function(files, config, cb) {
    var src = files.map(function(file) {
        return fs.readFileSync(file, 'utf8');
    });
    cb(null, src.join(''));
};
