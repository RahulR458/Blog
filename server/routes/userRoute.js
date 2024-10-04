const express = require("express")
const router = express.Router()
const userController = require("../controllers/userController")
const { checkAuth } = require("../middleware/checkAuth");

router.post("/signup", userController.signup);
router.post("/login", userController.login);


router.get("/blog",checkAuth, userController.blog);






module.exports = router;