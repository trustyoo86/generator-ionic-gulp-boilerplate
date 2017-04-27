'use strict';

var path = require('path');

/**
 * @name scriptFilter
 * @description
 * 	1) gulp task에 대한 script 유효성 검사
 * 	2) js 파일만 가능
 * @param {String} name gulp task script name
 * @return {Boolean} onlyScripts js파일 인지 아닌지의 여부
 */
module.exports = function (name) {
    return /(\.(js)$)/i.test(path.extname(name));
};
