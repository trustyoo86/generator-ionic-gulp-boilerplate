/**
 * @name bowerConfig
 * @description bower를 통해 설치한 component 리스트 관리
 * @type {Array}
 */

module.exports = {
  src : [
    //jquery
    'bower_components/jquery/dist/jquery.min.js',
    //ionic
    'bower_components/ionic/js/ionic.bundle.min.js'
  ],
  //concat
  concat : 'vendor.js',
  //dest
  dest : 'www/js'
};
