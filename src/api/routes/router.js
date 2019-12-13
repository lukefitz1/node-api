const router = require("express").Router();

const healthcheckRouter = require("./healthCheckRouter");

router.use("/", healthcheckRouter);

module.exports = router;
