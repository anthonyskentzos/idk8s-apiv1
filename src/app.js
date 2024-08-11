const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(cors({
  origin: 'http://localhost:8080' // Allow requests from this origin
}));

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
