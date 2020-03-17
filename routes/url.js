const router = require("express").Router();
const shortid = require("shortid");
const controllers = require("../controllers/controllers")

const url = require("../model/url");
router.route("/shorten").post(controllers.shorturl)

module.exports = router;