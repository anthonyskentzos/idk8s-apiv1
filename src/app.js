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

app.get('/imagetag', (req, res) => {
  const imageTagValue = process.env.IMAGE_TAG || 'IMAGE_TAG is not set';
  res.json({ imageTag: imageTagValue });
});

app.get('/environment', (req, res) => {
  const environmentValue = process.env.CONFIGMAP_ENV || 'CONFIGMAP_ENV is not set';
  res.json({ environment: environmentValue });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
