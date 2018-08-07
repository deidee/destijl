'use strict';
const sass = require('node-sass');

module.exports = grunt => {
    const sass = require('node-sass');

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        sass: {
            options: {
                implementation: sass,
                sourceMap: true
            },
            dist: {
                files: {
                    'dist/main.css': 'scss/main.scss'
                }
            }
        }
    });

    grunt.registerTask('default', ['sass']);
};