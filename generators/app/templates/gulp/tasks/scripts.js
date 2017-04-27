var gulp = require('gulp');
var gulpif = require('gulp-if');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var stripDebug = require('gulp-strip-debug');
var sourcemaps = require('gulp-sourcemaps');
var ngAnnotate = require('gulp-ng-annotate');

//config file
var bowerConfig = require('../config/bowerConfig');
var scriptConfig = require('../config/scriptConfig');

gulp.task('build-vendor', function (cb) {
  //bower plugin file들을 build한다.
  var stream = gulp.src(bowerConfig.src)
    .pipe(gulpif(global.isProd, uglify()))
    .pipe(concat(bowerConfig.concat))
    .pipe(gulp.dest(bowerConfig.dest));

  stream.on('end', function () {
    cb();
  });
});

/**
 * @name combine-js
 * @description javascript file을 하나로 합치고 압축한다.
 */
gulp.task('combine-js', function (cb) {
  //개발용 script file을 build한다.
  var stream = gulp.src(scriptConfig.src)
    .pipe(gulpif(global.isProd, stripDebug()))
    .pipe(ngAnnotate())
    .pipe(gulpif(global.isProd, uglify()))
    .pipe(jshint())
    .pipe(gulpif(!global.isProd, sourcemaps.init()))
    .pipe(concat(scriptConfig.concat))
    .pipe(gulpif(!global.isProd, sourcemaps.write()))
    .pipe(gulp.dest(scriptConfig.dest));

  stream.on('end', function () {
    cb();
  });
});
