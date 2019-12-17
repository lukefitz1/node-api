const router = require("express").Router();

router.get("/healthcheck", (req, res) => {
  res.send({ status: "UP7" });
});

module.exports = router;
