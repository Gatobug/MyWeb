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


const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express(); // Hereda todo lo de express

const PORT = process.env.PORT;
console.log(PORT);

const user = process.env.DB_USER;
console.log(user);

// Configurar EJS
app.set('view engine', 'ejs');

// MIDDLEWARES
// Permite leer informacion enviada por formulario
// html
app.use(express.urlencoded({ extended: true}));

// Archico Estaticos
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.get('/', (req,res) => {
  res.render('index');
});

app.get('/servicios', (req, res) => {
  res.render('servicios')
});

app.get('/nosotros', (req,res) => {
  res.render('nosotros');
});

app.get('/contacto', (req,res) => {
  res.render('contacto');
});

app.post('/contacto', (req, res) => {

  const { nombre, correo, asunto, mensaje } = req.body;

  console.log('-------------');
  console.log('Mensaje Falaziento');
  console.log('-------------');
  console.log('Nombre:', nombre);
  console.log('Correo:', correo);
  console.log('Asunto:', asunto);
  console.log('Mensaje:', mensaje);

  rep.render('index');
});



app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});