'use strict';

module.exports = {
    base_path: {
        src: ['dist/index.html'],
        overwrite: true,
        replacements: [{
            from: '<body>',
            to: '<body><!-- test replace -->'
        }]
    }
};
