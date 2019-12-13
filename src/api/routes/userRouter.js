const router = require("express").Router();
const userController = require("../controllers/users");

router.get("/users", (req, res) =>
  res.status(200).send({
    message: "Welcome to the Users API!"
  })
);

router.post("/users", userController.create);

module.exports = router;
