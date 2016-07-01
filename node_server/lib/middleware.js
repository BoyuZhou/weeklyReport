
var path = require('path');
var parseUrl = require('url').parse;
var connect = require('connect');
var bodyParser = require('body-parser');
var multipart = require('connect-multiparty');
var utils = require('./lib/utils');

// 解析请求Body部分
var postBody = connect();
postBody.use(bodyParser.json());
postBody.use(bodyParser.urlencoded({extended: true}));
postBody.use(multipart());
exports.postBody = postBody;

//验证token是否正确
exports.verifyAccessToken = function(req, res, next){
    var access_token = (req.body && req.body.access_token) || req.query.access_token;
    var userId = (req.body && req.body.userId) || req.query.userId;
    if(!access_token) return next(utils.missingParameterError('access_token'));
    if(!userId) return next(utils.missingParameterError('userId'));
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



// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});