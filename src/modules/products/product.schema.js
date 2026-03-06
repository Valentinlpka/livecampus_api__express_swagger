const { z } = require("zod");

const productSchema = z.object({
  name: z.string().min(3, "Le nom doit faire au moins 3 caractères").trim(),
  price: z.number().positive("Le prix doit être positif"),
  category: z.enum(["informatique", "bureau", "peripherique", "autre"]),
}).strict();

const productPatchSchema = productSchema.partial();

module.exports = { productSchema, productPatchSchema };