const express = require('express');
const http = require('http');
const app = require('./cliente/app'); // Asegúrate de que este path corresponde a tu archivo app.js

const port = process.env.PORT || 8080; // Asegúrate de usar PORT en mayúsculas

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
