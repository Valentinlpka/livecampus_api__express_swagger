// Doit être enregistré EN DERNIER dans app.js (vu en cours)
const errorHandler = (err, req, res, next) => {
    console.log("Erreur attrapée :", err.message);
  
    // Si c'est une erreur qu'on a nous meme lancée avec un statusCode
    if (err.statusCode) {
      return res.status(err.statusCode).json({ error: err.message });
    }
  
    // Sinon c'est une erreur inattendue -> 500
    // On renvoie pas le vrai message pour pas leaker des infos (vu en cours)
    res.status(500).json({ error: "Erreur interne du serveur" });
  };
  
  module.exports = errorHandler;