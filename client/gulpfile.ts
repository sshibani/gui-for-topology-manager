const gulp = require('gulp');
const del = require('del');
const sourcemaps = require('gulp-sourcemaps');
const typescript = require('gulp-typescript');
const systemjsBuilder = require('systemjs-builder');
const concat = require('gulp-concat');
const tslint = require('gulp-tslint');
const tscConfig = require('./tsconfig.json');
const browserSync = require('browser-sync');
const reload = browserSync.reload;

var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'del', 'wrench']
});

var config = {
    node_modules_base_path: "node_modules/**",
    srcPath:  "src",
    distPath: "dist"
}

//Require() all files in the gulp-tasks directory
$.wrench.readdirSyncRecursive('./gulp-tasks').filter(function(file) {
    return (/\.(ts)$/i).test(file);
}).map(function(file) {
    require('./gulp-tasks/' + file)(gulp, $, config);
});


gulp.task('clean', require('del').bind(null, ['.tmp/**/*', config.distPath + '/**/*']));

gulp.task("build", ['compile', 'copy:resources', 'copy:libs', 'copy:testdata'], () => {
    console.log("Building the project ...");
});