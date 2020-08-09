const path = require("path");

const express = require("express");

const rootDir = require("../util/path");
const { getPosts } = require("../controller/feed");

const router = express.Router();

router.get("/getPosts", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "json-posts.html"));
});

router.get("/dataPull", getPosts);

module.exports = router;
