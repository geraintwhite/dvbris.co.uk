var gulp = require('gulp'),
    sass = require('gulp-sass'),
    prefix = require('gulp-autoprefixer'),
    livereload = require('gulp-livereload');


gulp.task('css', function () {
  return gulp.src('./css/main.scss')
    .pipe(sass())
    .pipe(prefix())
    .pipe(gulp.dest('./css/'));
});

gulp.task('reload', function () {
  setTimeout(function () { livereload.changed('/'); }, 1000);
});

gulp.task('watch', function () {
  livereload.listen();
  gulp.watch('./css/*.scss', ['css']);
  gulp.watch('./**/*', ['reload']);
});

gulp.task('default', ['css']);
