const express = require("express")
const router = express.Router()
const adminController = require("../controllers/adminController")
const { checkAuth } = require("../middleware/checkAuth");
const { upload } = require("../uploads/multer")

// router.post("/login", adminController.login);


router.post("/file/upload",upload.fields([{ name: 'images', maxCount: 5 }, { name: 'pdfs', maxCount: 5 }]), adminController.createBlog);
router.delete("/blog/:id", adminController.remove);
router.put("/block/:id", adminController.block);
router.get("/edit-blog/:id",adminController.editBlog)
router.put("/edit-blog/:id",adminController.edited)
router.get("/blog",checkAuth, adminController.blog);
router.get("/user", adminController.user);


router.get("/refresh-token",checkAuth, adminController.refreshToken);






module.exports = router;