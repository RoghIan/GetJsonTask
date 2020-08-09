const path = require("path");

const express = require("express");

const app = express();

const routes = require("./routes/json-posts");

//grant access to public folder.
app.use(express.static(path.join(__dirname, "public")));

//add route to middleware
app.use(routes);

//redirect to 404 page if route is not found
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
