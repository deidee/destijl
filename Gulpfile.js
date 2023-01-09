
'use strict';

let gulp = require('gulp');
let pipeline = require('readable-stream').pipeline;
let header = require('gulp-header');
let rename = require('gulp-rename');
let sass = require('gulp-sass')(require('sass'));
let sourcemaps = require('gulp-sourcemaps');
let twig = require('gulp-twig');

gulp.task('sass', function () {
    // TODO: Bring back sourcemap without breaking the pipeline.
    return gulp.src('./scss/**/*.scss')
        .pipe(header('$debug: true;\n'))
        .pipe(sass({includePaths: ['node_modules'], outputStyle: 'expanded'}))
        .pipe(gulp.dest('./demo'))
        .pipe(header('$debug: false;\n'))
        .pipe(sass({includePaths: ['node_modules'], outputStyle: 'compressed'}))
        .pipe(rename({ basename: 'de2023', suffix: '.min' }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('twig', function () {
    return gulp.src(['./templates/[^_]*.twig', 'templates'])
        .pipe(twig({extname: false}))
        .pipe(gulp.dest('demo'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./scss/**/*.scss', gulp.series('sass'));
});
