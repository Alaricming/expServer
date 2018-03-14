var express = require("express");
var router = express.Router();

module.exports = function(app) {
  // 准许跨域请求
  // app.all("*", function(req, res, next) {
  //   res.header("Access-Control-Allow-Origin", "*");
  //   res.header("Access-Control-Allow-Methods", "PUT,GET,POST,DELETE,OPTIONS");
  //   res.header("Access-Control-Allow-Headers", "X-Requested-With");
  //   res.header("Access-Control-Allow-Headers", "Content-Type");
  //   next();
  // });

  app.use("/", require("./index.js"));
  app.use("/", function() {
    console.log("dajaoidajids");
  });
};
