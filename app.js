
import express from 'express'

const app = express()

// Rutas => Routes => ROUTER
app.get('/', (req, res) => { // El "/" es el index de la app, ruta
  res.send('Hello World"""')
})

app.get('/contacto', (req, res) => {
    res.send('Pagina de contacto!')
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})