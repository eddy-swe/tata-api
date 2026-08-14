const jwt = require('jsonwebtoken');

// This middleware runs before any protected route.
// It checks for a valid JWT in the Authorization header and, if valid,
// attaches the user's id to req.user so route handlers can use it.
function requireAuth(req, res, next) {
  const authHeader = req.headers.authorization; // expected format: "Bearer <token>"

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'No token provided' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { id: payload.userId };
    next(); // token is valid — let the request continue to the actual route
  } catch (err) {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
}

module.exports = requireAuth;
