const express = require("express");
const ProductController = require("../controllers/ProductController");
const { authentication, isAdmin } = require("../middleware/authentication");
const router = express.Router();

router.post("/", authentication,isAdmin, ProductController.create);
router.get("/", ProductController.getAll);
router.get("/id/:_id", ProductController.getById);
router.get("/name/:name",ProductController.getProductsByName)
router.delete("/id/:_id",authentication,ProductController.delete)
router.put("/id/:_id",authentication,ProductController.update)
router.post("/id/:_id",authentication, ProductController.insertComment)
router.put("/like/:_id",authentication,ProductController.like)

module.exports = router;
