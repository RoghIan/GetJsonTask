const path = require("path");

const express = require("express");

//helper that returns the root dir
const rootDir = require("../util/path");

const { getPosts } = require("../controller/feed");

const router = express.Router();

//return html view
router.get("/getPosts", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "json-posts.html"));
});

//getPost route that returns json data
router.get("/dataPull", getPosts);

module.exports = router;
