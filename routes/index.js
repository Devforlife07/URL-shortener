const router = require("express").Router();
const url = require("../model/url");
const controllers = require("../controllers/controllers");


router.route("/:code").get(controllers.index);

module.exports = router;