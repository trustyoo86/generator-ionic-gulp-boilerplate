var gulp = require('gulp');
var runSequence = require('run-sequence');

/**
 * @name prod
 * @description gulp production task load
 */
gulp.task('prod', ['clean'], function (cb) {
  cb = cb || function () {};

  global.isProd = true;

  runSequence(['compile-sass', 'build-vendor', 'combine-js', 'views', 'images', 'fonts'], cb);
});
