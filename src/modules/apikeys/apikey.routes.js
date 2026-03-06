const { Router } = require("express");
const { createApiKey } = require("./apikey.service");

const router = Router();

// Route pour créer une clef d'API
router.post("/", (req, res) => {
  const { clientName } = req.body;

  if (!clientName) {
    return res.status(400).json({ error: "Le champ clientName est requis" });
  }

  const apiKey = createApiKey(clientName);

  res.status(201).json({
    message: "Clef API créée avec succès. Conservez-la, elle ne sera plus affichée.",
    apiKey,
  });
});

module.exports = router;
