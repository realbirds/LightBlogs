var gulp = require('gulp'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify');

var $ = require('gulp-load-plugins')();

gulp.task('es6', function () {

    return gulp.src('wwwroot/src/js/**/*.t.js')
        .pipe($.plumber())
        .pipe($.babel({
            presets: ['es2015']
        }))
        .pipe(rename(function(path) {
            path.basename = path.basename.replace(".t", "");
            path.extname = ".js";
        }))
        .pipe(uglify())
        .pipe(gulp.dest('wwwroot/dist/js/'));

});

gulp.task('watch', ['es6'], function () {
    gulp.watch(['wwwroot/src/js/**/*.t.js'], ['es6']);
});