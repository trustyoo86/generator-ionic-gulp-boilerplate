var gulp = require('gulp');
var angularProtractor = require('gulp-angular-protractor');

gulp.task('test:e2e', function (callback) {
  gulp.src(['test/spec/e2e/**/*.js'])
    .pipe(angularProtractor({
      'configFile' : 'protractor.conf.js',
      'debug' : true,
      'autoStartStopServer' : true
    }))
    .on('error', function (e) {
      console.log('protractor error is : ', e);
    }).
    on('end', callback);
})
