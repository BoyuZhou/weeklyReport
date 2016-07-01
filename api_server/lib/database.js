var waterline = require('waterline');
var utils = require('./utils');

var dataAccessToken = [];

module.exports = waterline.Collection.extend({
   identity: 'bear',   //对应表名
    connection: 'nyKocalMysql', //数据库连接
    schema: true,
    attributes: {   //存入的数据
        name: 'String'
    }
});


exports.generateAccessToken = function (userId, callback) {
    var token = utils.randomString(20);
    dataAccessToken[token] = userId;

    callback(null, token);
};

exports.getAccessToken = function (token, callback) {
  var _userId = dataAccessToken[token];
    if(!_userId) return callback();

    callback(null, _userId);
};