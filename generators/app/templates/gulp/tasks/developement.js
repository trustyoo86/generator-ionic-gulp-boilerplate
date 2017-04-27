var gulp = require('gulp');
var runSequence = require('run-sequence');

/**
 * @name dev
 * @description gulp development task load
 */
gulp.task('dev', ['clean'], function (cb) {
  cb = cb || function () {};

  global.isProd = false;

  runSequence(['compile-sass', 'build-vendor', 'combine-js', 'views', 'images', 'fonts'], 'watch', cb);
});
