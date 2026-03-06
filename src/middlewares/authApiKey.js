const { checkClientApiKey } = require("../modules/apikeys/apikey.service");

const authApiKey = (req, res, next) => {
  const apiKey = req.headers["x-api-key"];

  if (!apiKey) {
    return res.status(401).json({ error: "Clef API manquante dans le header x-api-key" });
  }

  const client = checkClientApiKey(apiKey);

  if (!client) {
    return res.status(403).json({ error: "Clef API invalide" });
  }

  // On attache les infos du client à la requête
  req.client = client;
  next();
};

module.exports = authApiKey;
