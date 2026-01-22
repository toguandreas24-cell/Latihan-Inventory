const router = require("express").Router();
const auth = require("../controllers/authController");

router.get("/login", auth.loginPage);
router.post("/login", auth.login);

module.exports = router;
