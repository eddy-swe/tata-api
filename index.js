const express = require('express');
const pool = require('./db');
const taskRoutes = require('./routes/tasks');
const authRoutes = require('./routes/auth');
const requireAuth = require('./middleware/requireAuth');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware: parses incoming JSON request bodies into req.body
app.use(express.json());

// Auth routes are public — you need them to log in in the first place
app.use('/auth', authRoutes);

// Task routes now require a valid JWT — requireAuth runs before taskRoutes
app.use('/tasks', requireAuth, taskRoutes);

// A "route" tells Express: when a GET request hits "/", run this function
app.get('/', (req, res) => {
  res.json({ message: 'Task Tracker API is running' });
});

// Test route: confirms Express can talk to Postgres
app.get('/db-test', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ dbTime: result.rows[0].now });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database connection failed' });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
