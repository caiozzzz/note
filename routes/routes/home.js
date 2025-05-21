module.export = function(app){
  var home = app.controllers.home;
  app.get('/',home.index)
}
module.exports = function(app){
  var  homeController = {
    index: function (req,res){
      res.render('home/index');
    }
  };
  return homeController;
}