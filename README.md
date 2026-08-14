## What this is
A small Node.js + Express API that provides the backend for a simple task-tracker: user accounts and tasks stored in Postgres. It’s intended for developers who want a minimal starter API (routes, DB pool, and schema) to build on or integrate with a frontend.

### Stack
- **Language(s):** JavaScript (100%)
- **Framework / runtime:** Node.js with Express 5
- **Notable libraries:** express, pg (node-postgres), dotenv

## How it's organized
```
index.js         - Express server, minimal routes (/, /db-test)
db.js            - Postgres Pool configuration using connection string from env
schema.sql       - SQL DDL: users and tasks tables
.env.example     - example env with DATABASE_URL and PORT
package.json     - scripts (start, dev), dependencies
package-lock.json- lockfile (npm)
```

How it fits together: index.js is the entrypoint — it creates an Express app and exposes routes. db.js exports a pg Pool configured from process.env.DATABASE_URL and is used by routes (for example /db-test runs SELECT NOW()). schema.sql defines the users and tasks tables the app expects. The .env.example shows the Neon/Postgres connection string format and default PORT.

## How to run it
1. Clone and install:
   ```
   git clone https://github.com/eddy-swe/tata-api.git
   cd tata-api
   npm install
   ```
2. Provide environment variables (see .env.example). Example .env:
   ```
   DATABASE_URL="postgresql://username:password@host.region.neon.tech/dbname?sslmode=require"
   PORT=3000
   ```
3. Create the database schema (example using psql with DATABASE_URL):
   ```
   psql "$DATABASE_URL" -f schema.sql
   ```
4. Start the server:
   ```
   npm run start
   # or for development with auto-reload:
   npm run dev
   ```
Notes: The project expects a Postgres-compatible connection string (Neon is suggested in .env.example). There are no tests or migration tooling included — schema.sql is a simple DDL file to apply manually.

## Try asking
- Where should I add the task and user REST endpoints (index.js is minimal now) and can you scaffold CRUD routes for tasks and users?
- Do you want me to add a README.md that documents endpoints, example requests, and how to run schema.sql?
- Would you like migrations and seed scripts (e.g., using node-pg-migrate or knex) instead of the plain schema.sql file?
