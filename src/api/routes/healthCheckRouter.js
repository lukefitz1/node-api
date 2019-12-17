const router = require("express").Router();

router.get("/healthcheck", (req, res) => {
  res.send({ status: "UP4" });
});

module.exports = router;
