var gulp = require('gulp');
var browserify = require('gulp-browserify');
var minify = require('gulp-uglify');
var rename = require('gulp-rename');

var slidedown = "./src/slidedown.js";

gulp.task('build', function() {
  return gulp.src(slidedown)
    .pipe(browserify())
    .pipe(minify())
    .pipe(rename('slidedown.build.js'))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
  gulp.watch(slidedown, ['build']);
});
