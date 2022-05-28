var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/mock-server", function (req, res, next) {
  res
    .status(200)
    .json({
      success: true,
      message: "Server is running as intended",
      data: {},
    });
});

module.exports = router;
