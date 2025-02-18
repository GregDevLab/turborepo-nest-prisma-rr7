- [Français](#fr)
- [English](#en)

## <a id="fr">FRANCAIS</a>

# Problématique de partage d'une instance Prisma dans un monorepo Turbo (NestJS + Remix)

## Contexte

J'ai un monorepo TurboRepos avec la structure suivante :

- **apps/**
  - **nestjs** : Application backend basée sur NestJS (CommonJS)
  - **remix** : Application frontend basée sur Remix (ESM)
- **packages/**
  - **db** : Package dédié à Prisma

L'objectif est de centraliser la gestion du schéma Prisma et de partager une seule instance de `PrismaClient` entre ces deux applications, malgré leurs systèmes de modules différents (CommonJS vs. ESM).

## Problématique

Lors de l'intégration du package `@repo/db` dans l'app NestJS, j'obtiens l'erreur suivante :

```
┌ nest#build > cache miss, executing fe4d766427a3979b
│
│
│ > nest@0.0.1 build /home/anonyme/project/turbo/apps/nest
│ > nest build
│
│ src/main.ts:2:24 - error TS2307: Cannot find module '@repo/db' or its corresponding type declarations.
│   There are types at '/home/anonyme/project/turbo/apps/nest/node_modules/@repo/db/src/index.ts', but this result could not be resolved
│  under your current 'moduleResolution' setting. Consider updating to 'node16', 'nodenext', or 'bundler'.
│
│ 2 import { prisma } from '@repo/db';
│                          ~~~~~~~~~~
│
│ Found 1 error(s).
│
│  ELIFECYCLE  Command failed with exit code 1.
│ command finished with error: command (/home/anonyme/project/turbo/apps/nest) /home/anonyme/.nvm/versions/node/v22.13.0/bin/pnpm run build
│  exited (1)
└────>
```

## J'ai fait plusieurs tentatives différentes sans succès, je suis donc repartie de zéro et je bloque à ce stade.

## <a id="en">ENGLISH</a>

# Sharing a Prisma Instance in a Turbo Monorepo (NestJS + Remix)

## Context

I have a TurboRepos monorepo with the following structure:

- **apps/**
  - **nestjs**: Backend application based on NestJS (CommonJS)
  - **remix**: Frontend application based on Remix (ESM)
- **packages/**
  - **db**: Package dedicated to Prisma

The goal is to centralize the management of the Prisma schema and share a single `PrismaClient` instance between these two applications, despite their different module systems (CommonJS vs. ESM).

## Issue

When integrating the `@repo/db` package into the NestJS app, I get the following error:

```
┌ nest#build > cache miss, executing fe4d766427a3979b
│
│
│ > nest@0.0.1 build /home/anonyme/project/turbo/apps/nest
│ > nest build
│
│ src/main.ts:2:24 - error TS2307: Cannot find module '@repo/db' or its corresponding type declarations.
│   There are types at '/home/anonyme/project/turbo/apps/nest/node_modules/@repo/db/src/index.ts', but this result could not be resolved
│  under your current 'moduleResolution' setting. Consider updating to 'node16', 'nodenext', or 'bundler'.
│
│ 2 import { prisma } from '@repo/db';
│                          ~~~~~~~~~~
│
│ Found 1 error(s).
│
│  ELIFECYCLE  Command failed with exit code 1.
│ command finished with error: command (/home/anonyme/project/turbo/apps/nest) /home/anonyme/.nvm/versions/node/v22.13.0/bin/pnpm run build
│  exited (1)
└────>
```

I've tried several different approaches without success, so I'm starting from scratch and I'm stuck at this stage.
