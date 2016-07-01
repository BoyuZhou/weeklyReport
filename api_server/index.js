var path = require('path');
var express = require('express');
var url = require('url');
var routes = require('./routes/router');
var middleware = require('./lib/middleware');
var app = express();

app.use(middleware);
routes(app);

app.listen(3000, function(){
    console.log('api_server is start');
});