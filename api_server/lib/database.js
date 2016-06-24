var waterline = require('waterline');

module.exports = waterline.Collection.extend({
   identity: 'bear',   //对应表名
    connection: 'nyKocalMysql', //数据库连接
    schema: true,
    attributes: {   //存入的数据
        name: 'String'
    }
});
