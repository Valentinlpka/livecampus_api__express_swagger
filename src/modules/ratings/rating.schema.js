const { z } = require("zod");

const ratingSchema = z.object({
  note: z.number().int().min(1, "La note minimum est 1").max(5, "La note maximum est 5"),
  comment: z.string().trim().optional(),
  userId: z.string().uuid("L'ID utilisateur doit être un UUID valide"),
  productId: z.string().uuid("L'ID produit doit être un UUID valide"),
}).strict();

const ratingPatchSchema = ratingSchema.partial();

module.exports = { ratingSchema, ratingPatchSchema };
