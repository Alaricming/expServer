var express = require("express");
var router = express.Router();
var async = require("async");
var request = require("request");
var API = require("../js/api");

console.log(API.BASE_URL + API.apis.newsList)
router.get("/", function(req, res, next) {
  async.auto({
        newsList: function(cb) {
          request(API.BASE_URL + API.apis.newsList, function(error, response, body) {
            if (!error && response.statusCode == 200) {
                res.render("data/index.html", {
                    result: body
                });
            }
          });
        }
  }, function(error,result){
      
  });
//   res.render("data/index.html", {
//     title: "123"
//   });
});

module.exports = router;
