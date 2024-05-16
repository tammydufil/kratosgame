const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).send("Welcome to kratos game api");
});

module.exports = router;
