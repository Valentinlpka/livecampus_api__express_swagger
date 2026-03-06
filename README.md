# LiveCampus API

API REST construite avec Express.js, Prisma et PostgreSQL.

## Installation

```bash
npm install
```

## Configuration

Copier le fichier `.env.example` en `.env` et renseigner les variables :

```bash
cp .env.example .env
```

Variables nécessaires :
- `PORT` : port du serveur (ex: 3002)
- `DATABASE_URL` : URL de connexion PostgreSQL
- `NODE_ENV` : environnement (development / production)

## Base de données

```bash
npx prisma migrate dev --name init
```

## Lancement

```bash
npm run dev
```

## Documentation Swagger

Accessible sur : `http://localhost:3002/api-docs`
