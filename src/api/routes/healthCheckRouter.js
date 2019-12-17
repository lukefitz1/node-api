const router = require("express").Router();

router.get("/healthcheck", (req, res) => {
  res.send({ status: "UP1" });
});

module.exports = router;
