'use strict';

var fs = require('fs');
var onlyScripts = require('./util/scriptFilter'); //script filter
var gulp = require('gulp');
/**
 * @type {Array} tasks onlyscripts를 통해 필터링된 task list
 */
var tasks = fs.readdirSync('./gulp/tasks/').filter(onlyScripts);

//task array들을 루프를 돌아 gulp task를 로딩한다.
tasks.forEach(function (task) {
  require('./tasks/' + task);
});

gulp.task('default', ['dev']);
