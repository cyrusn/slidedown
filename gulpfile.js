var gulp       = require('gulp');
var browserify = require('gulp-browserify');
var minify     = require('gulp-uglify');
var rename     = require('gulp-rename');
var concatCss  = require('gulp-concat-css');
var minifyCss = require('gulp-minify-css');

var slidedown = "./src/js/slidedown.js";

gulp.task('js', function() {
  return gulp.src(slidedown)
    .pipe(browserify())
    .pipe(minify())
    .pipe(rename('slidedown.build.js'))
    .pipe(gulp.dest('./build'));
});

gulp.task('css', function () {
  return gulp.src('src/css/*.css')
    .pipe(concatCss("slidedown.build.css"))
    .pipe(minifyCss())
    .pipe(gulp.dest('build/'));
});

gulp.task('watch', function() {
  gulp.watch(slidedown, ['js']);
  gulp.watch('src/css/*.css', ['css']);
});
