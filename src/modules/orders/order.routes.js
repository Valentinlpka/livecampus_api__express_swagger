const { Router } = require("express");
const controller = require("./order.controller");
const { validateBody } = require("../../middlewares/validate");
const { orderSchema, orderPatchSchema } = require("./order.schema");

const router = Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.post("/", validateBody(orderSchema), controller.create);
router.patch("/:id", validateBody(orderPatchSchema), controller.update);
router.delete("/:id", controller.remove);

module.exports = router;
