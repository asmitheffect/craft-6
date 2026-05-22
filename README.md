# Nuxt + Craft CMS POC

A headless CMS proof-of-concept using **Nuxt 4** as the frontend and **Craft CMS 6** (Laravel-backed) as the content API, communicating over GraphQL.

---

## Architecture

```
Frontend (Nuxt 4)  →  /server/api/craft  →  Craft CMS GraphQL API
    :3000                                    https://backend.ddev.site:8443
```

The frontend never calls Craft directly from the browser — all GraphQL requests are proxied through a Nuxt server route to avoid CORS issues and keep the API token server-side.

---

## Prerequisites

Before you can run this project locally you need the following installed:

| Tool | Version | Notes |
|------|---------|-------|
| [Bun](https://bun.sh) | 1.2+ | Frontend package manager |
| [PHP](https://www.php.net) | 8.5 | Backend runtime |
| [Composer](https://getcomposer.org) | 2.x | PHP package manager |
| [DDEV](https://ddev.readthedocs.io) | Latest | Docker-based dev environment for the backend |
| [Docker Desktop](https://www.docker.com/products/docker-desktop/) | Latest | Required by DDEV |

### Installing DDEV

DDEV manages the PHP/MySQL/nginx environment for the backend. Follow the [official DDEV installation guide](https://ddev.readthedocs.io/en/stable/users/install/ddev-installation/) for your OS.

Make sure Docker Desktop is running before starting DDEV.

---

## Initial Setup

### 1. Install root dependencies

```bash
bun install
```

### 2. Set up the backend

```bash
# Start the DDEV environment (spins up PHP, MySQL, nginx)
bun run backend:start

# Install PHP dependencies
cd backend
ddev composer install

# Run database migrations
ddev artisan migrate

# (Optional) Seed initial content
ddev artisan db:seed
```

The backend will be available at `https://backend.ddev.site:8443`.

The Craft CMS admin panel is at `https://backend.ddev.site:8443/admin`.

### 3. Configure the frontend environment

Create a `.env` file in the `frontend/` directory:

```bash
cp frontend/.env.example frontend/.env
```

If no `.env.example` exists, create `frontend/.env` with:

```env
CRAFT_API_URL=https://backend.ddev.site:8443/actions/graphql/api
CRAFT_API_TOKEN=your_craft_graphql_token_here
```

To get the `CRAFT_API_TOKEN`:
1. Log into the Craft admin panel at `https://backend.ddev.site:8443/admin`
2. Go to **Settings → GraphQL → Tokens**
3. Copy the token or create a new one with the required permissions

### 4. Install frontend dependencies

```bash
cd frontend
bun install
```

### 5. Generate GraphQL types

This step introspects the Craft GraphQL schema and generates TypeScript types into `frontend/types/graphql.ts`:

```bash
cd frontend
bun run codegen
```

> The backend must be running and `CRAFT_API_URL`/`CRAFT_API_TOKEN` must be set before running codegen.

---

## Running the Project

### Start everything together

From the project root:

```bash
bun run start
```

This concurrently starts the DDEV backend and the Nuxt dev server.

### Or start individually

```bash
# Backend only
bun run backend:start

# Frontend only (backend must already be running)
bun run dev
```

| Service | URL |
|---------|-----|
| Frontend (Nuxt) | http://localhost:3000 |
| Backend (Craft CMS) | https://backend.ddev.site:8443 |
| Craft Admin | https://backend.ddev.site:8443/admin |

### Stop everything

```bash
bun run stop
```

---

## Development

### Frontend

```bash
cd frontend

bun run dev          # Start dev server
bun run build        # Production build
bun run preview      # Preview production build
bun run typecheck    # TypeScript type checking
bun run lint         # Run ESLint
bun run format       # Run Prettier
bun run check        # Run all checks (lint + format + typecheck)
bun run codegen      # Regenerate GraphQL types from schema
```

### Backend

All backend commands run inside the DDEV container via `ddev`:

```bash
cd backend

ddev artisan <command>     # Run any Artisan command
ddev composer <command>    # Run any Composer command
ddev php <file>            # Execute a PHP file
ddev describe              # Show DDEV service URLs and status
```

---

## Project Structure

```
nuxt-craft-poc/
├── frontend/
│   ├── app/
│   │   ├── components/       # Vue components
│   │   ├── composables/      # Reusable Vue composables
│   │   ├── pages/            # Page components (file-based routing)
│   │   ├── queries/          # GraphQL query files (.gql)
│   │   └── assets/           # CSS and static assets
│   ├── server/
│   │   └── api/craft.post.ts # GraphQL proxy route
│   ├── types/
│   │   └── graphql.ts        # Auto-generated GraphQL types (don't edit)
│   ├── codegen.ts            # GraphQL codegen config
│   └── nuxt.config.ts        # Nuxt configuration
│
├── backend/
│   ├── app/                  # Laravel application code
│   ├── config/craft/         # Craft CMS configuration
│   ├── database/             # Migrations and seeders
│   ├── public/               # Web root
│   └── .ddev/                # DDEV environment config
│
├── package.json              # Root scripts (orchestration only)
└── README.md
```

---

## Adding GraphQL Queries

1. Create a `.gql` file in `frontend/app/queries/`
2. Write your GraphQL query against the Craft schema
3. Run `bun run codegen` to generate TypeScript types
4. Import and use the generated types in your components

---

## Troubleshooting

**DDEV won't start**
- Ensure Docker Desktop is running
- Run `ddev doctor` to diagnose issues

**SSL certificate errors in browser**
- Run `mkcert -install` (DDEV installs mkcert — run this once per machine)
- Or run `ddev poweroff && ddev start` to regenerate certs

**`NODE_TLS_REJECT_UNAUTHORIZED=0` warning**
- Expected in local dev — DDEV uses self-signed certs
- This flag is set automatically in the `dev` script, do not remove it

**GraphQL codegen fails**
- Confirm the backend is running: `ddev describe`
- Confirm `CRAFT_API_URL` and `CRAFT_API_TOKEN` are set in `frontend/.env`
- Check the token has schema read permissions in the Craft admin

**Blank page / no content**
- Check the Craft admin has published content
- Verify the GraphQL schema matches your query field names
- Re-run `bun run codegen` if the schema changed
