var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    htmlmin = require('gulp-htmlmin'),
    sass = require('gulp-sass'),
    template = require('gulp-template-html'),
    minify = require('gulp-minify-css'),
    prefix = require('gulp-autoprefixer');


gulp.task('css', function() {
  return gulp.src('./src/css/main.scss')
    .pipe(sass())
    .pipe(prefix())
    .pipe(minify())
    .pipe(gulp.dest('./build/css/'));
});

gulp.task('html', function() {
  return gulp.src('./src/content/*.html')
    .pipe(template('./src/templates/template.html'))
    .pipe(htmlmin({
      removeComments: true,
      collapseWhitespace: true,
      collapseBooleanAttributes: true,
      removeAttributeQuotes: true,
      removeRedundantAttributes: true,
      useShortDoctype: true,
      removeEmptyAttributes: true,
      removeOptionalTags: true
    }))
    .pipe(gulp.dest('./build/'));
});

gulp.task('copy', function() {
  gulp.src('./src/css/*.css')
    .pipe(gulp.dest('./build/css/'));
  gulp.src('./src/js/*.js')
    .pipe(gulp.dest('./build/js/'));
  gulp.src('./src/images/**/*')
    .pipe(gulp.dest('./build/images/'));
  gulp.src(['./src/favicon.ico', './src/mail.php'])
    .pipe(gulp.dest('./build/'));
});

gulp.task('reload', function() {
  setTimeout(function() { livereload.changed('/'); }, 1000);
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('./css/*.scss', ['css']);
  gulp.watch(['./src/css/*.css', './src/js/*.js', './src/images/*'], ['copy']);
  gulp.watch('./**/*', ['reload']);
});

gulp.task('default', ['css', 'html', 'copy']);
