/**
 * @name scriptConfig
 * @description 개발된 js 파일 관리
 * @type {Array}
 */

module.exports = {
  //src
  src : [
    'public/app.js',
    'public/config.js',
    'public/run.js',
    'public/common/**/*.js',
    'public/pages/**/*.js',
  ],
  //concat target
  concat : 'app.js',
  //dest target
  dest : 'www/js'
};
