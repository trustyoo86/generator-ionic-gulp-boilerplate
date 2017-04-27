'use strict';

var gulp = require('gulp');
var changed = require('gulp-changed');
var gulpif = require('gulp-if');
//config
var viewConfig = require('../config/viewConfig');

gulp.task('views', function () {
  //root
  gulp.src(viewConfig.root.src)
    .pipe(changed(viewConfig.root.dest))
    .pipe(gulp.dest(viewConfig.root.dest));
  //dev
  gulp.src(viewConfig.views.src)
    .pipe(changed(viewConfig.views.dest))
    .pipe(gulp.dest(viewConfig.views.dest));
});
