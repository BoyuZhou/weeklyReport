var waterline = require('waterline');

module.exports = waterline.Collection.extend({
   identity: 'bear',   //��Ӧ����
    connection: 'nyKocalMysql', //���ݿ�����
    schema: true,
    attributes: {   //���������
        name: 'String'
    }
});
