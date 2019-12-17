const router = require("express").Router();

router.get("/healthcheck", (req, res) => {
  res.send({ status: "UP9" });
});

module.exports = router;
