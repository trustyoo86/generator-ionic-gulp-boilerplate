'use strict';

var gulp = require('gulp');
var changed = require('gulp-changed');
var gulpif = require('gulp-if');

var fontConfig = require('../config/fontConfig');

gulp.task('fonts', function () {
  //ionic
  gulp.src(fontConfig.ionic.src)
    .pipe(changed(fontConfig.ionic.dest))
    .pipe(gulp.dest(fontConfig.ionic.dest));
  //dev
  gulp.src(fontConfig.dev.src)
    .pipe(changed(fontConfig.dev.dest))
    .pipe(gulp.dest(fontConfig.dev.dest));
});
