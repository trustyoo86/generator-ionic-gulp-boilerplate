/**
 * @name imageConfig
 * @description image 관련 파일 이동
 * @type {Object}
 */
module.exports = {
  //ionic
  ionic : {
    src :[
      'bower_components/ionic/fonts/**/*'
    ],
    dest : 'www/fonts/ionic'
  },
  //dev
  dev :{
   src : [
     'public/fonts/**/*'
   ],
   dest : 'www/fonts'
  }
};
