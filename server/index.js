const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.static(path.join(__dirname, '..', 'build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/', (req, res) => {
  res.status(200).send('Connected to Strange Mind Designs!');
});

app.get('/werewolf', (req, res) => {
  res.status(301).redirect('https://www.github.com/LikeGunSmoke/werewolf');
});

app.get('/werewolfGame', (req, res) => {
  res.status(301).redirect('http://www.werewolfhunt.com');
});

app.get('/contraptions', (req, res) => {
  res.status(301).redirect('https://www.github.com/LikeGunSmoke/contraptions');
});

app.get('/contraptionsGame', (req, res) => {
  res.status(301).redirect('http://www.classiccontraptions.com/');
});

app.get('/linkedin', (req, res) => {
  res.status(301).redirect('https://www.linkedin.com/in/robert-strange-dev/');
});

app.get('/github', (req, res) => {
  res.status(301).redirect('https://www.github.com/LikeGunSmoke/');
});

app.get('/resume', (req, res) => {
  res.sendFile(path.join(__dirname, './public/Files', 'RobertStrangeResume.pdf'));
});

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${PORT}!`);
});