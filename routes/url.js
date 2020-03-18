const router = require("express").Router();
const shortid = require("shortid");
const controllers = require("../controllers/controllers")
const url = require("../model/url");
const mongoose = require("mongoose");
const urlmodel = require("../model/url")
const validUrl = require("valid-url");
// router.route("/shorten").post(controllers.shorturl)
router.post("/shorten", controllers.shorturl)

module.exports = router;