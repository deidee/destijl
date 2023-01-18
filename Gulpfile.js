
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
        .pipe(twig({extname: false, data: {
                link: {
                    a22b: "https://alexanderchristiaanjacob.com/",
                    deidee: "https://deidee.nl/",
                    facebook: 'https://www.facebook.com/deideecom',
                    linkedin: 'https://www.linkedin.com/company/deidee',
                    twitter: 'https://twitter.com/deideenl'
                },
                heticoon: {
                    data: [
                        [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0],
                        [0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0],
                        [0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0],
                        [0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0],
                        [0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                        [1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0],
                        [0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
                        [0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0],
                        [0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0],
                        [0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0],
                        [0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0],
                        [1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
                    ],
                    size: 48,
                    random: 3
                },
                logos: [
                    'mimesia',
                    'allrgb',
                    'e-overheid',
                    'morerecoffee',
                    'dopewebsites',
                    'dova',
                    'sentrading',
                    'periodicsystem',
                    'nederland',
                    'internet',
                    'netplasticism',
                    'utterlyrandom',
                    'unst',
                    'deidee'
                ],
                product_groups: [
                    {
                        title: 'Publiek',
                        description: 'Informatieve en/of commerciële producten die een eigen website hebben en door consumenten te gebruiken zijn.',
                        products: [
                            'delogo',
                            'detint',
                            'devlag',
                            'hetwachtwoord',
                            'demoji'
                        ]
                    },
                    {
                        title: 'Opensource',
                        description: 'Producten die wij als opensourcepakket aanbieden zijn te vinden op GitHub. Hier is geen speciale toegang, maar wel technische kennis voor nodig.',
                        products: [
                            'deimage',
                            'hetpalet',
                            'hetthema',
                            'hetcanvas',
                            'dejade',
                            'dedate',
                            'detijd',
                            'desass',
                            'deflex',
                            'dehtml'
                        ]
                    },
                    {
                        title: 'Intern',
                        description: 'Sommige producten gebruiken wij (vooralsnog) alleen intern. Deze staan op GitLab en kunnen door aangewezen personen worden benaderd.',
                        products: [
                            'decake',
                            'dedocumentatie'
                        ]
                    }
                ],
                products: {
                    demoji: {},
                    hetwachtwoord: {}
                }
            }}))
        .pipe(gulp.dest('demo'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./scss/**/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.series('sass', 'twig'));
