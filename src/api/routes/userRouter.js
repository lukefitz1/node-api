const router = require("express").Router();
const userController = require("../controllers/users");

router.get("/users", userController.list);
router.post("/user", userController.create);
router.put("/user/:id", userController.update);
router.delete("/user/:id", userController.destroy);

module.exports = router;
