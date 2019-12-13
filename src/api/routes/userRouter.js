const router = require("express").Router();
const userController = require("../controllers/users");

router.get("/users", userController.list);
router.post("/users", userController.create);
router.put("/users/:id", userController.update);

module.exports = router;
