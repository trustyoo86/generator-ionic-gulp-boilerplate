var gulp = require('gulp');
var del = require('del');
/**
 * @name clean
 * @description 빌드 전 root 폴더를 삭제하고 다시 업데이트
 */
gulp.task('clean', function (cb) {
  del(['www'], cb);
});
