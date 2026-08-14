# Task Tracker API

## Project Overview
Task Tracker API is a lightweight Node.js service for managing task-tracking backend functionality.  
The current repository contains the API server bootstrap, PostgreSQL connection setup, and base schema for users and tasks.

## Stack
- **Runtime:** Node.js
- **Server:** Express
- **Database:** PostgreSQL
- **DB Driver:** `pg`
- **Environment Config:** `dotenv`
- **Dev Tooling:** `nodemon`

## File Organization
- `/home/runner/work/tata-api/tata-api/index.js` — Express app entrypoint and HTTP routes (`/`, `/db-test`)
- `/home/runner/work/tata-api/tata-api/db.js` — PostgreSQL connection pool configuration
- `/home/runner/work/tata-api/tata-api/schema.sql` — SQL schema for `users` and `tasks` tables
- `/home/runner/work/tata-api/tata-api/.env.example` — sample environment variables
- `/home/runner/work/tata-api/tata-api/package.json` — scripts and dependencies

## Run Instructions
1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy and configure environment variables:
   ```bash
   cp .env.example .env
   ```
   Set a valid `DATABASE_URL` in `.env`.
3. Apply schema to your PostgreSQL database:
   ```bash
   psql "$DATABASE_URL" -f schema.sql
   ```
4. Start the API:
   ```bash
   npm run dev
   ```
   or:
   ```bash
   npm start
   ```
5. Verify endpoints:
   - `GET /` → service health message
   - `GET /db-test` → database connectivity check

## Next Steps / Questions
- Add CRUD routes for users and tasks.
- Add validation, auth, and centralized error handling.
- Add migrations and seed data strategy.
- Add automated tests (unit + integration) and CI checks.
- Clarify API contract and versioning strategy.
