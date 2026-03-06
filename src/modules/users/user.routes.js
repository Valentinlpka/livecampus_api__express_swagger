const { Router } = require("express");
const controller = require("./user.controller");
const { validateBody } = require("../../middlewares/validate");
const { userSchema, userPatchSchema } = require("./user.schema");

const router = Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.post("/", validateBody(userSchema), controller.create);
router.put("/:id", validateBody(userSchema), controller.update);
router.patch("/:id", validateBody(userPatchSchema), controller.patch);
router.delete("/:id", controller.remove);

module.exports = router;
