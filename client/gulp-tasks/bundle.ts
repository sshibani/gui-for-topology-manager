module.exports = function (gulp, $, config) {
    const sourcemaps = require('gulp-sourcemaps');
    const typescript = require('gulp-typescript');
    const concat = require('gulp-concat');
    const uglify = require('gulp-uglify');
    const rename = require("gulp-rename");
    const tslint = require('gulp-tslint');
    const systemjsBuilder = require('systemjs-builder');
    const tscConfig = require('./../tsconfig.json');

    // Copy and bundle dependencies into one file (vendor/vendors.js)
    // system.config.js can also bundled for convenience
    gulp.task('bundle:vendor', () => {
        return gulp.src([
                'node_modules/core-js/client/shim.min.js',
                'node_modules/systemjs/dist/system-polyfills.js',
                'node_modules/systemjs/dist/system.src.js',
                'node_modules/reflect-metadata/Reflect.js',
                'node_modules/angular2-in-memory-web-api/**/*.js',
                'node_modules/ng2-bootstrap/**/*.js',
                'node_modules/bootstrap/dist/**',
                'node_modules/rxjs/**/*.js',
                'node_modules/zone.js/dist/**',
                'node_modules/@angular/**/bundles/**'
        ],{cwd: config.node_modules_base_path})
            .pipe(concat('vendors.min.js'))
            .pipe(uglify())
            .pipe(gulp.dest('public/lib'));
    });


    // Generate systemjs-based builds
    gulp.task('bundle:app', function() {
    var builder = new systemjsBuilder('dist', './src/system.config.js');
    return builder.buildStatic('app', 'public/dist/js/app.min.js')
    });

    // Generate systemjs-based bundle (app/app.js)
    gulp.task('bundle:app', function() {
        var builder = new systemjsBuilder('dist', './src/systemjs.config.js');
        return builder.buildStatic('app', 'dist/js/app.min.js');
    });

    // Minify JS bundle
    gulp.task('minify:app', function() {
    return gulp
        .src('dist/js/app.min.js')
        .pipe(uglify())
        .pipe(gulp.dest('public/lib'));
    });
}