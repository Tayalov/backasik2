require('dotenv').config();
const express = require('express');
const weatherRoutes = require('./routes/weatherRoutes');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static('public'));

app.use('/api', weatherRoutes);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/portfolio.html');
});

app.use((req, res) => {
  res.status(404).send('<h1 style="text-align:center;margin-top:100px;color:red;">404 — Страница не найдена</h1>');
});

app.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${PORT}`);
});
