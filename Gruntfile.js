'use strict';
const sass = require('node-sass');

module.exports = grunt => {
    const sass = require('node-sass');

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        sass: {
            options: {
                implementation: sass,
                sourceMap: false
            },
            src: {
                options: {
                    outputStyle: 'expanded'
                },
                files: {
                    'src/main.css': 'scss/main.scss'
                }
            },
            dist: {
                options: {
                    outputStyle: 'compressed'
                },
                files: {
                    'dist/main.min.css': 'scss/main.scss'
                }
            },
            test: {
                options: {
                    outputStyle: 'nested'
                },
                files: {
                    'test/main.css': 'scss/main.scss'
                }
            }
        }
    });

    grunt.registerTask('default', ['sass']);
};