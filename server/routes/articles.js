var express = require("express");
var router = express.Router();
var { USERS, ARTICLES } = require("../config/db/models");
var { getJSONFromIpfs } = require("../services/fetchIPFS");

router.post("/create", async (req, res, next) => {
  try {
    const cid = req.body.cid;

    const article_data = await getJSONFromIpfs(cid);

    console.log(article_data);

    const user = await USERS.findOne({
      wallet_address: article_data.author_address,
    });

    const data = {
      author_name: user.name,
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

    res.status(200).json({
      success: true,
      message: "Article Fetched Successfully",
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

router.post("/bookmark", async (req, res, next) => {
  try {
    const { cid, address } = req.body;

    // const articles = await ARTICLES.findOne({cid: cid});

    const user = await USERS.findOne({ wallet_address: address });

    console.log(user);

    user.bookmarked_articles.push(cid);

    await user.save();

    res.status(200).json({
      success: true,
      message: "Bookmarked Successfully",
      data: { articles: user.bookmarked_articles },
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

router.post("/like", async (req, res, next) => {
  try {
    const { cid, address } = req.body;

    const user = await USERS.findOne({ wallet_address: address });

    if (!user)
      return res
        .status(400)
        .send({ success: false, message: "Invalid user address", data: {} });

    const articles = await ARTICLES.findOne({ cid: cid });

    articles.likes = articles.likes + 1;

    await articles.save();

    res.status(200).json({
      success: true,
      message: "Bookmarked Successfully",
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
