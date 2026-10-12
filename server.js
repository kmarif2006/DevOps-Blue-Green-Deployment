const express=require('express');
const app = express();

const version = process.env.APP_VERSION || 'v1';

app.get('/', (req, res) => {
  res.send(`Node.js Blue-Green Application - ${version}`);
});

app.get('/status', (req, res) => {
  res.json({ status: 'running', version });
});

app.listen(3000, '0.0.0.0', () => {
  console.log(`App running on port 3000, version ${version}`);
});