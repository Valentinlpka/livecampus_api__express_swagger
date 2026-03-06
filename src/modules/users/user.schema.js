const { z } = require("zod");

const userSchema = z.object({
  email: z.string().email("L'email n'est pas valide").trim(),
  name: z.string().min(2, "Le nom doit faire au moins 2 caractères").trim(),
  password: z.string().min(6, "Le mot de passe doit faire au moins 6 caractères"),
}).strict();

const userPatchSchema = userSchema.partial();

module.exports = { userSchema, userPatchSchema };
