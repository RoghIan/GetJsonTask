const axios = require("axios");

const getJson = (callback, err) => {
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then(function (response) {
      callback(response);
    })
    .catch(function (error) {
      err(error);
    });
};

exports.getPosts = (req, res) => {
  getJson(
    (data) => {
      res.status(200).json(data.data);
    },
    (err) => {
      res.status(500).json(err.message);
    }
  );
};
