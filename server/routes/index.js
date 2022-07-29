const express = require("express");
const router = express.Router();

function routes(app) {
  router.get("/hello", (req, res) => {
    res.status(200).json({ msg: "Hello world, This is from next + express" });
  });

  router.get("/hello/:id", (req, res) => {
    return res.status(200).json({ id: req.params.id });
  });

  return router;
}

module.exports = routes;
