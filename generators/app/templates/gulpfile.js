'use strict';

/**
 * 	gulpfile.js
 * 	===================
 * 	gulp에 관련된 task는 ./gulp 에서 관리
 * 	여기서는 gulp task를 require 함.
 */
/**
 * development, production 모드에 따라 global 변수 변경
 * @type {Boolean} isProd production모드인지 확인 true : production mode / false : development mode
 */
global.isProd = false;

require('./gulp');
