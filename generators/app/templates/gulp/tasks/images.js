'use strict';

var gulp = require('gulp');
var changed = require('gulp-changed');
var gulpif = require('gulp-if');
var imagemin = require('gulp-imagemin');
//config file
var imageConfig = require('../config/imageConfig');

/**
 * @name images
 * @description image file들을 build한다.
 */
gulp.task('images', function () {
  gulp.src(imageConfig.dev.src)
    .pipe(changed(imageConfig.dev.dest))
    .pipe(gulpif(global.isProd, imagemin()))
    .pipe(gulp.dest(imageConfig.dev.dest));
});
