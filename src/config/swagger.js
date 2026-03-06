const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: "LiveCampus API",
    version: "1.0.0",
    description: "API REST pour la gestion de produits, utilisateurs, ratings et commandes.",
  },
  servers: [
    {
      url: "http://localhost:3002/api/v1",
      description: "Serveur local",
    },
  ],
  components: {
    securitySchemes: {
      ApiKeyAuth: {
        type: "apiKey",
        in: "header",
        name: "x-api-key",
        description: "Clef API obtenue via POST /api/v1/api-keys",
      },
    },
    schemas: {
      Product: {
        type: "object",
        properties: {
          id: { type: "string", format: "uuid" },
          name: { type: "string", example: "Clavier Mécanique" },
          price: { type: "number", example: 89.99 },
          category: {
            type: "string",
            enum: ["informatique", "bureau", "peripherique", "autre"],
          },
          createdAt: { type: "string", format: "date-time" },
          updatedAt: { type: "string", format: "date-time" },
        },
      },
      User: {
        type: "object",
        properties: {
          id: { type: "string", format: "uuid" },
          email: { type: "string", format: "email", example: "jean@example.com" },
          name: { type: "string", example: "Jean Dupont" },
          createdAt: { type: "string", format: "date-time" },
          updatedAt: { type: "string", format: "date-time" },
        },
      },
    },
  },
  security: [{ ApiKeyAuth: [] }],
  paths: {
    "/products": {
      get: {
        tags: ["Products"],
        summary: "Récupérer tous les produits",
        responses: {
          200: {
            description: "Liste des produits",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: { $ref: "#/components/schemas/Product" },
                },
              },
            },
          },
          401: { description: "Clef API manquante" },
          403: { description: "Clef API invalide" },
        },
      },
      post: {
        tags: ["Products"],
        summary: "Créer un produit",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["name", "price", "category"],
                properties: {
                  name: { type: "string", minLength: 3, example: "Souris Gaming" },
                  price: { type: "number", minimum: 0, example: 49.99 },
                  category: {
                    type: "string",
                    enum: ["informatique", "bureau", "peripherique", "autre"],
                  },
                },
              },
            },
          },
        },
        responses: {
          201: {
            description: "Produit créé",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Product" },
              },
            },
          },
          400: { description: "Données invalides" },
          401: { description: "Clef API manquante" },
        },
      },
    },
    "/users": {
      get: {
        tags: ["Users"],
        summary: "Récupérer tous les utilisateurs",
        responses: {
          200: {
            description: "Liste des utilisateurs",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: { $ref: "#/components/schemas/User" },
                },
              },
            },
          },
          401: { description: "Clef API manquante" },
          403: { description: "Clef API invalide" },
        },
      },
      post: {
        tags: ["Users"],
        summary: "Créer un utilisateur",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["email", "name", "password"],
                properties: {
                  email: { type: "string", format: "email", example: "jean@example.com" },
                  name: { type: "string", minLength: 2, example: "Jean Dupont" },
                  password: { type: "string", minLength: 6, example: "secret123" },
                },
              },
            },
          },
        },
        responses: {
          201: {
            description: "Utilisateur créé",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/User" },
              },
            },
          },
          400: { description: "Données invalides" },
          401: { description: "Clef API manquante" },
        },
      },
    },
    "/api-keys": {
      post: {
        tags: ["API Keys"],
        summary: "Créer une clef API",
        security: [],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["clientName"],
                properties: {
                  clientName: { type: "string", example: "mon-application" },
                },
              },
            },
          },
        },
        responses: {
          201: {
            description: "Clef API créée",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: { type: "string" },
                    apiKey: { type: "string", example: "lc_live_abc123..." },
                  },
                },
              },
            },
          },
          400: { description: "clientName manquant" },
        },
      },
    },
  },
};

module.exports = swaggerDocument;
