'use strict';

module.exports = {
    base_path: {
        src: ['dist/index.html',
              'dist/scripts/*.scripts.js',
              'dist/styles/*.main.css',
              'dist/templates/operation.html',
              'dist/views/header/header.html',
              'dist/views/main.html',
              'dist/views/preview/preview.html'],
        overwrite: true,
        replacements: [{
            from: /(styles|scripts|config|images|templates|spec-files|bower_components|views)\//g,
            to: '<%= web_context %>$1/'
        }]
    }
};
