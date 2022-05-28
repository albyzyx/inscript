require("dotenv").config();
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var connect_db = require("./config/db");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

connect_db();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);

module.exports = app;
