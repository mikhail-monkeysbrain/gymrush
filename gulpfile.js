var env             = require('minimist')(process.argv.slice(2)),
    gulp            = require('gulp'),
    plumber         = require('gulp-plumber'),
    jade            = require('gulp-jade'),
    browserify      = require('gulp-browserify'),
    browserSync     = require('browser-sync'),
    gulpif          = require('gulp-if'),
    stylus          = require('gulp-stylus'),
    concat          = require('gulp-concat'),
    jeet            = require('jeet'),
    imagemin        = require('gulp-imagemin'),
    cache           = require('gulp-cache');

// Compile Jade
gulp.task('jade', function () {
    return gulp.src('app/src/jade/*.jade')
        .pipe(plumber())
        .pipe(jade({pretty: !env.p}))
        .pipe(gulp.dest('app/dist/'));
});

// Compile Stylus
gulp.task('stylus', function(){
    return gulp.src('app/src/stylus/**/*.styl')
        .pipe(stylus({
          'include css': true,
          use: [jeet()],
    }))
        .pipe(gulp.dest('app/dist/css/'))
});

// Concatination JS
gulp.task('js', function () {
    return gulp.src('app/src/js/**/*.js')
        .pipe(plumber())
        .pipe(concat('main.js'))
        .pipe(gulp.dest('app/dist/js'));
});

// Minify images
gulp.task('imagemin', function () {
    return gulp.src('app/src/img/**/*')
        .pipe(plumber())
        .pipe(cache(imagemin({optimizationLevel: 3, progressive: true, interlaced: true})))
        .pipe(gulp.dest('app/dist/img'));
});

// Run watcher
gulp.task('watch', function () {
    gulp.watch('app/src/jade/**/*.jade', ['jade']);
    gulp.watch('app/src/stylus/**/*.styl', ['stylus']);
    gulp.watch('app/src/js/**/*.js', ['js']);
    gulp.watch('app/src/img/**/*.{jpg,jpeg,png,gif}', ['imagemin']);
});

// Run live-review
gulp.task('browser-sync', function () {
    var files = [
       'app/dist/**/*.html',
       'app/dist/css/**/*.css',
       'app/dist/img/**/*',
       'app/dist/js/**/*.js',
    ];
    browserSync.init(files, {
        server: {
            baseDir: 'app/dist/',
        },
    });
});

// Dev task
gulp.task('default', [(env.fy) ? 'browserify' :'jade', 'stylus', 'watch', 'js', 'browser-sync' ]);

// Deploy task
gulp.task('build', [(env.fy) ? 'browserify' : 
            'jade',
            'stylus',
            'js',
            'imagemin',
            'browser-sync'
        ]);