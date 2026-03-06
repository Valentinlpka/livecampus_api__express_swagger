const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./config/swagger");
const productRoutes = require("./modules/products/product.routes");
const userRoutes = require("./modules/users/user.routes");
const ratingRoutes = require("./modules/ratings/rating.routes");
const orderRoutes = require("./modules/orders/order.routes");
const apikeyRoutes = require("./modules/apikeys/apikey.routes");
const authApiKey = require("./middlewares/authApiKey");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

app.use(express.json());

// Documentation Swagger (publique)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Route publique : création de clef API (pas besoin d'être authentifié)
app.use("/api/v1/api-keys", apikeyRoutes);

// Middleware d'authentification par clef API sur toutes les routes suivantes
app.use(authApiKey);

app.use("/api/v1/products", productRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/ratings", ratingRoutes);
app.use("/api/v1/orders", orderRoutes);

// Middleware d'erreur en dernier obligatoirement
app.use(errorHandler);

module.exports = app;