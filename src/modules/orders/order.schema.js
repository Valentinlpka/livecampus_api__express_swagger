const { z } = require("zod");

const orderSchema = z.object({
  userId: z.string().uuid("L'ID utilisateur doit être un UUID valide"),
  products: z.array(z.object({
    productId: z.string().uuid("L'ID produit doit être un UUID valide"),
    quantity: z.number().int().positive("La quantité doit être positive").default(1),
  })).min(1, "La commande doit contenir au moins un produit"),
}).strict();

const orderPatchSchema = z.object({
  status: z.enum(["en attente", "confirmée", "expédiée", "livrée", "annulée"]),
}).strict();

module.exports = { orderSchema, orderPatchSchema };
