
var parseUrl = require('url').parse;
var formatUrl = require('url').format;

var utils = {};
/**
 * 生成随机字符串
 * @param size
 * @param chars
 * @returns {string}
 */
utils.randomString = function (size, chars) {
    size = size || 6;
    var code_string = chars || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var max_num = code_string.length + 1;
    var new_pass = '';
    while (size > 0) {
        new_pass += code_string.charAt(Math.floor(Math.random() * max_num));
        size--;
    }
    return new_pass;
};

/**
 * 添加参数到url
 * @param url
 * @param params
 * @returns {string|ServerResponse|*}
 */
utils.addParamToUrl = function (url, params) {
    var info = parseUrl(url, true);
    for(var key in params){
        info.query[key] = params[key];
    }
    return formatUrl(info);
};

utils.createApiError = function (code, message) {
  var err = new Error(message);
    err.error_code = code;
    err.error_message = message;
    return err;
};


module.exports = utils;