var express = require("express");
var router = express.Router();

content = require("../public/items");

router.get('/', function(req, res, next) {
    console.log(content);
    res.send(content);
});

module.exports = router;