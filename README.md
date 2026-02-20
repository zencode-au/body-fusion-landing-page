# Body Fusion Landing Page

Static marketing website for **Body Fusion**, built with **Next.js 16 (App Router)** and **Tailwind CSS v4**.

The project is structured to make UI sections reusable and easy to extend as new landing page blocks are added from design/HTML references.

## What this repository contains

- A componentized landing page implementation in Next.js.
- Reusable UI building blocks (`components/ui`, `components/layout`, `components/sections`).
- Ready-to-use brand/media assets in `public/assets` (logo, store buttons, app/web screenshots).
- Code quality setup with **Biome**.
- Commit message enforcement with **Commitlint + Husky** (Conventional Commits).

## Tech stack

- `next@16`
- `react@19`
- `tailwindcss@4`
- `typescript`
- `@biomejs/biome`
- `@commitlint/cli` + `@commitlint/config-conventional`
- `husky`
- Package manager: `yarn@4`

## Project structure

```text
app/
  layout.tsx
  page.tsx
  globals.css
components/
  layout/
  sections/
  ui/
public/
  assets/
```

## Prerequisites

- Node.js 20+
- Corepack enabled (`corepack enable`)
- Yarn 4 (provided via `packageManager`)

## Getting started

1. Install dependencies:

```bash
yarn install
```

2. Start development server:

```bash
yarn dev
```

3. Open:

```text
http://localhost:3000
```

## Available scripts

- `yarn dev`: run local development server
- `yarn build`: create production build
- `yarn start`: run production server
- `yarn lint`: run Biome checks
- `yarn lint:fix`: run Biome checks and apply fixes
- `yarn format`: format files with Biome
- `yarn format:check`: check formatting without writing changes
- `yarn prepare`: install Husky hooks

## Code quality

### Linting and formatting

This repo uses **Biome** only (ESLint has been removed).

Run before opening a PR:

```bash
yarn lint
yarn format:check
```

### Conventional commits

Commit messages are enforced by Commitlint through a Husky `commit-msg` hook.

Examples:

- `feat: add hero section CTA`
- `fix: correct store button spacing on mobile`
- `chore: update dependencies`

## Working with landing page sections

- Keep sections componentized and reusable.
- Prefer composing from `components/sections` + shared primitives in `components/ui` and `components/layout`.
- Use Next.js best practices for static pages:
  - Keep components server-first unless client interactivity is needed.
  - Use `next/image` for image assets in `public/assets`.
  - Keep styling in Tailwind utility classes.

## Notes

- Assets used by the landing page are already available at `public/assets`.
- If hooks are not active in your local clone, run:

```bash
yarn prepare
```
