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
                    'src/destijl.css': 'scss/main.scss'
                }
            },
            dist: {
                options: {
                    outputStyle: 'compressed'
                },
                files: {
                    'dist/destijl.min.css': 'scss/main.scss'
                }
            },
            test: {
                options: {
                    outputStyle: 'nested'
                },
                files: {
                    'test/destijl.css': 'scss/main.scss'
                }
            }
        },
        watch: {
            options: {
                livereload: true,
            },
            css: {
                files: ['scss/**/*.scss'],
                tasks: ['sass']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass']);
};