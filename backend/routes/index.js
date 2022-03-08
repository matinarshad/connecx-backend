const express = require("express");
const timeController = require("../controllers/time");
const checkToken = require("../middleware/validateToken");
const router = express.Router();

//routes
router.post("/time", checkToken, timeController.getEpoch);

module.exports = router;
