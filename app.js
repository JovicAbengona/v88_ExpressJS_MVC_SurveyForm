const Express = require("express");
const App = Express();
const Routes = require("./routes");

App.use(Express.static(__dirname + "/static"));
App.set('views', __dirname + '/views'); 
App.set('view engine', 'ejs');

//Use Routes
App.use(Routes);

App.listen(8080, function(){
    console.log("Listening on 8080");
});