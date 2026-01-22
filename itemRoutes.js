const router = require("express").Router();
const item = require("../controllers/itemController");
const verify = require("../middlewares/verifyToken");
const { managerOnly } = require("../middlewares/roleMiddleware");

router.get("/dashboard", verify, item.dashboard);
router.get("/items/add", verify, managerOnly, item.addForm);
router.post("/items/add", verify, managerOnly, item.create);
router.get("/items/edit/:id", verify, item.editForm);
router.post("/items/edit/:id", verify, item.update);
router.post("/items/delete/:id", verify, managerOnly, item.remove);

module.exports = router;
