module.exports = function (app) {
  app.get('/bb', function (req, res, next) {
    res.end('hahahahaha');
  });
  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
};