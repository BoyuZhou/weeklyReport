var path = require('path');
var parseUrl = require('url').parse;
var connect = require('connect');
var bodyParser = require('body-parser');
var multipart = require('connect-multiparty');

// 解析请求Body部分
var postBody = connect();
postBody.use(bodyParser.json());
postBody.use(bodyParser.urlencoded({extended: true}));
postBody.use(multipart());
exports.postBody = postBody;

//确认是否登陆
exports.ensureLogin = function(req, res, next){

};

//拓展api
exports.extendAPIOutput = function(req, res, next){

    function output (data) {
        var type = path.extname(parseUrl(req.url).pathname);
        if (!type) type = '.'+req.accepts(['json']);
        return res.json(data);
    }

    res.apiSuccess = function (data) {
        output({
            status: 'OK',
            result: data
        });
    };

    res.apiError = function (err) {
        output({
            status: 'Error',
            error_code: err.error_code || 'UNKNOWN',
            error_message: err.error_message || err.toString()
        });
    };

    next();
};


exports.apiErrorHandle = function (err, req, res, next) {
  console.log((err && err.stack) || err.toString());

    if(typeof res.apiError == 'function') {
        return res.apiError(err);
    }

    next();

};

