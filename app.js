// Iniciar un proyecto npm init -y
// npm i express

// Crear app.js

// configurar packkage.jason => Agregar app.js
// "main": "app.js",

// npm i nodemon

// configurar el package.jason => con "scripts" : {
// "dev:" : "nodemon app.js",
//  "stars": "node app.js"}

// .env => Tiene todos los usarios y constraseñas

// Crear un .gitignore
// -> node_modules y .env

// Correr app: npm run dev o npm run start

import express from 'express';
const path = require('path');

const app = express(); // Hereda todo lo de express

const PORT = 3000;

// Configurar EJS
app.set('view engine', 'ejs');

// Archico Estaticos
app.use(express.static(path.join.apply(__dirname, 'public')));

// Rutas
app.get('/', (req,res) => {
  res.render('index');
});

app.get('/servicios', (req, res) => {
  res.send('<h1>SERVICIOS<h1>')
});

app.get('/nosotros', (req,res) => {
  res.send('<h1>NOSOTROS<h1>');
});

app.get('/', (req,res) => {
  res.send('<h1>CONTACTO<h1>');
});





app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});