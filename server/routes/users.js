var express = require("express");
var router = express.Router();
var { USERS, ARTICLES } = require("../config/db/models");

router.post("/create", async (req, res, next) => {
  try {
    const user = new USERS(req.body);

    await user.save();

    res.status(201).json({
      success: true,
      message: "User Created Successfully",
      data: { user },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      data: { error },
    });
  }
});

router.post("/get-name", async (req, res, next) => {
  try {
    const user = await USERS.findOne({ wallet_address: req.body.address });

    if (user)
      res.status(200).json({
        success: true,
        message: "User name fetched successfully",
        data: { username: user.name },
      });
    else
      res.status(200).json({
        success: false,
        message: "No such user with the address ",
        data: {},
      });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      data: { error },
    });
  }
});

router.post("/bookmarked", async (req, res, next) => {
  try {
    const user = await USERS.findOne({ wallet_address: req.body.address });

    if (user)
      res.status(200).json({
        success: true,
        message: "",
        data: { articles: user.bookmarked_articles },
      });
    else
      res.status(200).json({
        success: false,
        message: "No such user with the address ",
        data: {},
      });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      data: { error },
    });
  }
});

router.post("/articles", async (req, res, next) => {
  try {
    const articles = await ARTICLES.find({ author_address: req.body.address });

    if (articles)
      res.status(200).json({
        success: true,
        message: "",
        data: { articles },
      });
    else
      res.status(200).json({
        success: false,
        message: "",
        data: {},
      });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      data: { error },
    });
  }
});

module.exports = router;
