const express = require('express');
const app = express();
const port = 3000;

// Route to return the current date in a JSON object
app.get('/', (req, res) => {
  const currentDate = new Date();
  res.json({ date: currentDate.toISOString() });
});

// Route to return the SHA value from the environment variables
app.get('/sha', (req, res) => {
  const shaValue = process.env.SHA || 'SHA environment variable is not set';
  res.json({ sha: shaValue });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
