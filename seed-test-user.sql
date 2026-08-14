-- Temporary test user, just so tasks have a valid owner before auth exists.
-- We'll replace this flow with real signup in Step 6.
INSERT INTO users (email, password_hash) VALUES ('test@example.com', 'placeholder');
