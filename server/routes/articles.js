var express = require("express");
var router = express.Router();
var { USERS, ARTICLES } = require("../config/db/models");
var { getJSONFromIpfs } = require("../services/fetchIPFS");

router.post("/create", async (req, res, next) => {
  try {
    const cid = req.body.cid;

    const article_data = await getJSONFromIpfs(cid);

    console.log(article_data);

    const userName = await USERS.findOne({
      wallet_address: article_data.author_address,
    });

    const data = {
      author_name: userName,
      author_address: article_data.author_address,
      title: article_data.title,
      content: req.body.content || "This is a test string",
      cid: req.body.cid,
      image_url: req.body.image,
    };

    const article = new ARTICLES(data);

    await article.save();

    res.status(201).json({
      success: true,
      message: "Article Created Successfully",
      data: { article },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      data: { error },
    });
  }
});

router.get("/get", async (req, res, next) => {
  try {
    const articles = await ARTICLES.find();

    res.status(201).json({
      success: true,
      message: "Article Created Successfully",
      data: { articles },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      data: { error },
    });
  }
});

module.exports = router;
