module.exports = function (app) {
  app.get('/aa', function(req, res, next){
      res.end('hello world aa');
  });
};