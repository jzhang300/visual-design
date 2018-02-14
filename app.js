var express = require("express"),
  path = require("path"),
  os = require("os"),
  logger = require("morgan"),
  errorHandler = require("errorhandler"),
  markdownServe = require("markdown-serve"),
  wrench = require("wrench"),
  moment = require("moment"),
  Promise = require("bluebird"),
  parser = require("./node_modules/markdown-serve/lib/parser.js"),
  resolver = require("./node_modules/markdown-serve/lib/resolver.js");

var app = express();

// all environments
app.set("port", process.env.PORT || 3000);
app.use(logger("dev"));
app.use(express.static(path.resolve(__dirname, "public")));

// development only
if ("development" == app.get("env")) {
  app.use(errorHandler());
  app.set("host", "http://localhost");
}

app.get("/", function(req, res, next) {
  res.render("index");
});

app.listen(app.get("port"), function() {
  var h =
    (app.get("host") || os.hostname() || "unknown") + ":" + app.get("port");
  console.log("Express server listening at " + h);
});
