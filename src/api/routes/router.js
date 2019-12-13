const router = require("express").Router();

const healthcheckRouter = require("./healthCheckRouter");
const userRouter = require("./userRouter");

router.use("/", healthcheckRouter);
router.use("/", userRouter);

module.exports = router;
