module.exports = function (gulp, $, config) {

    gulp.task("copy:libs", () => {
        return gulp.src([
                'core-js/client/shim.min.js',
                'systemjs/dist/system-polyfills.js',
                'systemjs/dist/system.src.js',
                'reflect-metadata/Reflect.js',
                'angular2-in-memory-web-api/**/*.js',
                'ng2-bootstrap/**/*.js',
                'bootstrap/dist/**',
                'rxjs/**/*.js',
                'zone.js/dist/**',
                '@angular/**/bundles/**'
            ], {cwd: config.node_modules_base_path}) /* Glob required here. */
            .pipe(gulp.dest(config.distPath + "/lib"));
    });

    gulp.task("copy:testdata", () => {
        return gulp.src([
                '*.json',
            ], {cwd: 'data/**'}) /* Glob required here. */
            .pipe(gulp.dest(config.distPath + "/data"));
    });

    gulp.task("copy:resources", () => {
        return gulp.src([config.srcPath + "/**/*", "!**/*.ts"])
            .pipe(gulp.dest(config.distPath));
    });

}