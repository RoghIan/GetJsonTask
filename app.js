const path = require("path");

const express = require("express");

const app = express();

const routes = require("./routes/json-posts");

app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
