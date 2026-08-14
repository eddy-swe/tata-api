const { Pool } = require('pg');
require('dotenv').config();

// A "pool" manages multiple reusable connections to Postgres,
// so we don't open/close a new connection for every query.
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

module.exports = pool;
