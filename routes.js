const routes = require("next-routes")();

routes
  .add("/elections/new", "/elections/new")
  .add("/elections/:address", "/elections/show")
  .add("/elections/:address/create-canditates", "/elections/create-canditates")
;

module.exports = routes;
