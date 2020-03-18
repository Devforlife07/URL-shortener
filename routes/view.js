const router = require("express").Router();
const controllers = require("../controllers/controllers")


router.route("/:code", controllers.get)

module.exports = router;