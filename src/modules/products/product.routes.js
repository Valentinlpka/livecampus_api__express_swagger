const { Router } = require("express");
const controller = require("./product.controller");
const { validateBody } = require("../../middlewares/validate");
const { productSchema, productPatchSchema } = require("./product.schema");

const router = Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.post("/", validateBody(productSchema), controller.create);
router.put("/:id", validateBody(productSchema), controller.update);
router.patch("/:id", validateBody(productPatchSchema), controller.patch);
router.delete("/:id", controller.remove);

module.exports = router;