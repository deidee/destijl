
'use strict';

const gulp = require('gulp');
const header = require('gulp-header');
const rename = require('gulp-rename');
const gulpSass = require('gulp-sass')(require('sass'));
const twig = require('gulp-twig');

const sassOptions = {
    loadPaths: ['node_modules']
};

const sassInput = ['./scss/**/*.scss', '!./scss/**/_*.scss'];

gulp.task('sass:demo', function () {
    return gulp.src(sassInput)
        .pipe(header('$debug: true;\n'))
        .pipe(gulpSass.sync({
            ...sassOptions,
            style: 'expanded'
        }).on('error', gulpSass.logError))
        .pipe(gulp.dest('./demo'));
});

gulp.task('sass:dist', function () {
    return gulp.src(sassInput)
        .pipe(header('$debug: false;\n'))
        .pipe(gulpSass.sync({
            ...sassOptions,
            style: 'compressed'
        }).on('error', gulpSass.logError))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('sass', gulp.parallel('sass:demo', 'sass:dist'));

gulp.task('sass:watch', function () {
    return gulp.watch('./scss/**/*.scss', gulp.series('sass'));
});

gulp.task('twig', function () {
    return gulp.src(['./templates/[^_]*.twig', '!templates'])
        .pipe(twig({extname: false, data: {
                link: {
                    a22b: "https://alexanderchristiaanjacob.com/",
                    deidee: "https://deidee.nl/",
                    facebook: 'https://www.facebook.com/deideecom',
                    linkedin: 'https://www.linkedin.com/company/deidee',
                    twitter: 'https://twitter.com/deideenl'
                },
                dejade: (function() {
                    let r = Math.round(127 * Math.random());
                    let g = Math.round(Math.random() * 128 + 127);
                    let b = Math.round(191 * Math.random());
                    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
                }),
                fonts: {
                    defont: 'defont',
                    x5: '×5',
                    periodictype: 'Periodic Type',
                    mmxx: 'MMXX',
                    unst: 'unst',
                    distribution: 'Distribution',
                    primitives: 'Primitives',
                    ligatureluurs: 'Ligatureluurs'
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
                    mimesia: [[0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0],[0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0],[0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0],[0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0],[0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],[0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0],[0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0],[0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0],[0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0],[0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0]],
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
                    delogo: {},
                    demoji: {},
                    hetwachtwoord: {}
                },
                nav: {
                    web: 'Web',
                    beeldmerken: 'beeldmerken',
                    diensten: 'diensten',
                    products: 'producten',
                    vragen: 'vragen',
                    clients: 'opdrachtgevers',
                    contact: 'contact'
                },
                client_logos: [
                    'vv',
                    'galeriehelder',
                    'dpi',
                    'soemo-fine-arts',
                    'thefashionweek'
                ]
            }}))
        .pipe(gulp.dest('demo'));
});

gulp.task('default', gulp.series('sass', 'twig'));
