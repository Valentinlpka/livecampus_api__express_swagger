const { Router } = require("express");
const controller = require("./rating.controller");
const { validateBody } = require("../../middlewares/validate");
const { ratingSchema, ratingPatchSchema } = require("./rating.schema");

const router = Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.post("/", validateBody(ratingSchema), controller.create);
router.put("/:id", validateBody(ratingSchema), controller.update);
router.patch("/:id", validateBody(ratingPatchSchema), controller.patch);
router.delete("/:id", controller.remove);

module.exports = router;
