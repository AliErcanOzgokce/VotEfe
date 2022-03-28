const routes = require("next-routes")();

routes
  .add("/elections/new", "/elections/new")
  .add("/elections/:address", "/elections/show")
  .add("/elections/:address/create-canditates", "/elections/create-canditates")
  .add("/elections/:address/view-status", "/elections/status")
  .add("/elections/:address/show-winner", "/elections/show-winner")
;

module.exports = routes;
