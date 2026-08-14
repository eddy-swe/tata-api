const express = require('express');
const pool = require('./db');
const taskRoutes = require('./routes/tasks');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware: parses incoming JSON request bodies into req.body
app.use(express.json());

// Mount all /tasks routes from routes/tasks.js
app.use('/tasks', taskRoutes);

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
