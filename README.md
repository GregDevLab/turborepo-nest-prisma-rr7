# Full Stack Monorepo Application

Il s'agit d'un starter monorepo construit avec Turborepo

## Structure

- Un package partagé contenant Prisma ORM
- Deux applications :
  1. Une application React Router 7 (framework)
  2. Une application NestJS

## Technologies utilisées

- Turborepo
- Prisma
- React Router 7 (framework)
- NestJS

---

# Démarrage

## installer le dépendances

```bash
pnpm install
```

## Monter la base de données

- Configurer le schema prisma

```javascript
//FILE: packages/database/prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
  output = "../generated/client" //ne pas modifier
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// vos models
```

- Modifier `.env.example` et renommer en `.env`

```php
//FILE: packages/database/.env.example
DATABASE_URL="postgresql://<user>:<password>@<host>:<port>/<db_name>?schema=public"
```

- Inititialiser la BDD

```
turbo db:migrate
```

- Générer les exports du package:

```
turbo db:generate
```

- Builder le package:

```
turbo db:build
```

## Démarrer le developpement

```
turbo dev
```
