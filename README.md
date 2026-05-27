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
| [DDEV](https://ddev.readthedocs.io) | Latest | Dev environment for the backend |
| [OrbStack](https://orbstack.dev) | Latest | Required by DDEV (recommended over Docker Desktop) |
| [1Password CLI](https://developer.1password.com/docs/cli/) | Latest | Required for `db:pull` / `db:push` scripts |

### Installing DDEV

DDEV manages the PHP/MySQL/nginx environment for the backend. Follow the [official DDEV installation guide](https://ddev.readthedocs.io/en/stable/users/install/ddev-installation/) for your OS.

This project uses **OrbStack** as the container runtime. Make sure OrbStack is running before starting DDEV.

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

### 3. Configure environment files

Pull both `.env` files (frontend and backend) from 1Password in one step:

```bash
bun run env:pull
```

This writes `frontend/.env` and `backend/.env` from the shared secure notes in 1Password.

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

## Environment Variables

Both env files are managed via 1Password secure notes. Use the scripts below instead of editing them manually.

### Pull env files

Writes `frontend/.env` and `backend/.env` from 1Password:

```bash
bun run env:pull
```

### Push env files

Updates the 1Password secure notes from your local files:

```bash
bun run env:push
```

### Manual method

If the 1Password CLI isn't available, you can copy the values directly from the secure notes in the 1Password app:

- **`Nuxt/Craft - Frontend ENV`** → paste contents into `frontend/.env`
- **`Nuxt/Craft - Backend ENV`** → paste contents into `backend/.env`

### Variable reference

**`frontend/.env`**

| Variable | Description |
|----------|-------------|
| `CRAFT_API_URL` | Craft GraphQL endpoint |
| `CRAFT_API_TOKEN` | GraphQL API token from Craft admin |

**`backend/.env`**

| Variable | Description |
|----------|-------------|
| `APP_KEY` | Laravel application key — generate with `ddev artisan key:generate` |
| `APP_URL` | Backend base URL |
| `DB_*` | Injected automatically by DDEV — only needed outside of `ddev` commands |

### Backend Login

The Craft admin panel is at `https://backend.ddev.site:8443/admin`.

Credentials are stored in 1Password under **`Nuxt Craft - Backend login`**.

To reset your password at any time:

```bash
ddev artisan craft users/set-password --email=your@email.com
```

---

## Database

The development database seed (content entries, admin user, GraphQL tokens) is stored in 1Password under **`Nuxt Craft - Database dump`**.

Database syncing is handled via the 1Password CLI — no manual downloading or uploading required.

### Setup (once per machine)

1. Install the [1Password CLI](https://developer.1password.com/docs/cli/get-started/):
   ```bash
   brew install 1password-cli
   ```
2. Enable CLI integration in the 1Password desktop app: **Settings → Developer → Integrate with 1Password CLI**

   This lets `op` authenticate via biometrics/Touch ID without a separate sign-in step.

### Pull the latest dump

Imports the shared dump from 1Password directly into your local DDEV database:

```bash
bun run db:pull
```

> The backend must be running (`bun run backend:start`) before importing.

After importing, reset your admin password if needed:

```bash
ddev artisan craft users/set-password --email=your@email.com
```

### Push a new dump

When you've made significant content changes and want to update the shared seed, export and upload in one step:

```bash
bun run db:push
```

This exports the current DDEV database and overwrites the `Nuxt Craft - Database dump` document in 1Password.

---

## Adding GraphQL Queries

1. Create a `.gql` file in `frontend/app/queries/`
2. Write your GraphQL query against the Craft schema
3. Run `bun run codegen` to generate TypeScript types
4. Import and use the generated types in your components

---

## Troubleshooting

**DDEV won't start**
- Ensure OrbStack is running
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
