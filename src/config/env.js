const requiredVars = ["PORT", "DATABASE_URL"];

for (const varName of requiredVars) {
  if (!process.env[varName]) {
    console.error(`Variable d'environnement manquante : ${varName}`);
    process.exit(1);
  }
}

module.exports = {
  PORT: process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL,
  NODE_ENV: process.env.NODE_ENV || "development",
};