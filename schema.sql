-- users table: stores accounts
CREATE TABLE users (
  id SERIAL PRIMARY KEY,              -- auto-incrementing unique ID
  email TEXT UNIQUE NOT NULL,         -- no two users can share an email
  password_hash TEXT NOT NULL,        -- we NEVER store plain passwords
  created_at TIMESTAMP DEFAULT NOW()
);

-- tasks table: stores tasks, each owned by a user
CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  completed BOOLEAN DEFAULT FALSE,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT NOW()
);
