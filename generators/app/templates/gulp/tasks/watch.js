var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('watch', function () {
  watch('public/**/*.js', function () {
    gulp.start('combine-js');
  });

  watch('public/styles/*.scss', function () {
    gulp.start('compile-sass');
  });

  watch('public/pages/**/**/*.html', function () {
    gulp.start('views');
  });

  watch('public/images/**/*', function () {
    gulp.start('images');
  });

  watch('public/fonts/**/*', function () {
    gulp.start('fonts');
  });
});
