

var utils = {};

utils.createApiError = function (code, message) {
    var err = new Error(message);
    err.error_code = code;
    err.error_message = message;
    return err;
};

//参数为空的报错
utils.missingParameterError = function (name) {
    return utils.createApiError('20001', 'param' + name + ' is null');
};