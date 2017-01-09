module.exports = function (gulp, $, config) {

        gulp.task('watch', function () {
            gulp.watch([config.srcPath + "/**/*.ts"], ['compile']).on('change', function (e) {
                console.log('TypeScript file ' + e.path + ' has been changed. Compiling.');
            });
            gulp.watch([config.srcPath + "/**/*.html", config.srcPath + "/**/*.css"], ['copy:resources']).on('change', function (e) {
                console.log('Resource file ' + e.path + ' has been changed. Updating.');
            });
        });
}