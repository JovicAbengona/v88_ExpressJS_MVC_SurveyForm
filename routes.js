const Express = require("express");
const Router = Express.Router();
const bodyParser = require("body-parser");
const Controller = require("./controllers/Users");

Router.use(bodyParser.urlencoded({ extended: true }));

Router.get("/", Controller.index);
Router.post("/result", Controller.result);

module.exports = Router;