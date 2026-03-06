require("./config/env");

const app = require("./app");
const env = require("./config/env");

app.listen(env.PORT, () => {
  console.log(`🚀 Serveur démarré sur http://localhost:${env.PORT}`);
});