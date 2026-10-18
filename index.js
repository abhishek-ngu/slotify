/**
 * Slotify — Entry point of the Express server.
 * A slot-based booking system REST API (Week 1 internship task).
 *
 * Run: node index.js   (or: npm start)
 * Listens on port 3000.
 */

const express = require("express");
const slotRoutes = require("./routes/slotRoutes");

const app = express();
const PORT = 3000;

/**
 * Middleware: parse incoming JSON request bodies.
 * Required for POST /slots to read req.body.
 */
app.use(express.json());

/**
 * Middleware: simple request logger.
 * Prints the HTTP method and URL of every incoming request.
 */
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

/**
 * GET / — welcome message
 */
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to Slotify — the slot-based booking API!",
    version: "1.0.0",
  });
});

// Mount slot routes under /slots
app.use("/slots", slotRoutes);

/**
 * 404 handler — for any undefined route
 */
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.method} ${req.url} not found`,
  });
});

app.listen(PORT, () => {
  console.log(`Slotify server running on http://localhost:${PORT}`);
});
