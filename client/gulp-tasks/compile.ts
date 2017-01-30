module.exports = function (gulp, $, config) {

const sourcemaps = require('gulp-sourcemaps');
const typescript = require('gulp-typescript');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require("gulp-rename");
const tslint = require('gulp-tslint');
const systemjsBuilder = require('systemjs-builder');
const tscConfig = require('./../tsconfig.json');

    gulp.task('tslint', () => {
        return gulp.src(config.srcPath + "/**/*.ts")
            .pipe(tslint({
                formatter: 'verbose'
            }))
            .pipe(tslint.report());
    });

    // TypeScript compile
    gulp.task("compile", ["tslint"], () => {
        let tsResult = gulp.src(tscConfig.filesGlob)
            .pipe(sourcemaps.init())
            .pipe(typescript(tscConfig.compilerOptions));
        return tsResult.js
            .pipe(sourcemaps.write(".", {sourceRoot: '/' + config.srcPath}))
            .pipe(gulp.dest(config.distPath));
    });


 // TypeScript compile
    gulp.task("compile:prod", ["tslint"], () => {
        let tsResult = gulp.src(tscConfig.filesGlob)
            .pipe(sourcemaps.init())
            .pipe(typescript(tscConfig.compilerOptions));
        return tsResult.js
            .pipe(sourcemaps.write("."))
            .pipe(gulp.dest('public'));
    });


}