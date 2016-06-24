var path = require('path');
var express = require('express');
var url = require('url');
var routes = require('./routes/router');

var app = express();

routes(app);

app.listen(3000, function(){
    console.log('api_server is start');
});