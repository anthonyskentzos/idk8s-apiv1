const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(cors({
  origin: 'http://localhost:8080' // Allow requests from this origin
}));

app.get('/', (req, res) => {
  const currentDate = new Date();
  res.json({ date: currentDate.toISOString() });
});

app.get('/appver', (req, res) => {
  const appVerValue = process.env.APP_VER || 'APP_VER is not set';
  res.json({ sha: shaValue });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
