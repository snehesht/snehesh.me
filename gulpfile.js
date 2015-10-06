var gulp = require('gulp');
var minifyHTML = require('gulp-minify-html');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
 
gulp.task('minify-css', function() {
  return gulp.src('./src/*.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('./build'));
});

gulp.task('minify-js', function() {
  return gulp.src('./src/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build'));
});
 
gulp.task('minify-html', function() {
  var opts = {
  };
  return gulp.src('./src/*.html')
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('./build/'));
});

gulp.task('build',['minify-css','minify-html']);