const router = require("express").Router();

router.get("/healthcheck", (req, res) => {
  res.send({ status: "UP" });
});

module.exports = router;
