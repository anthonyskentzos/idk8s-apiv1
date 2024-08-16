const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(cors({
  origin: '*' // Allow requests from this origin
}));

const pawPatrolCharacters = [
  'Chase',
  'Marshall',
  'Skye',
  'Rubble',
  'Zuma',
  'Rocky',
  'Everest',
  'Tracker',
  'Ryder'
];

app.get('/', (req, res) => {
  res.send('Why are you here?');
});

app.get('/pawpatrol', (req, res) => {
  const randomIndex = Math.floor(Math.random() * pawPatrolCharacters.length);
  const randomCharacter = pawPatrolCharacters[randomIndex];
  res.json({ character: randomCharacter });
});

app.get('/appver', (req, res) => {
  const appVerValue = process.env.APP_VER || 'APP_VER is not set';
  res.json({ appVer: appVerValue });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
