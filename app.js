const express = require('express');
const app = express();
const port = 3000;

// Endpoint GET para prueba
app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`API escuchando en http://localhost:${port}`);
});
