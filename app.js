const express = require('express');
const path = require('path');
const app = express();
const productosRoutes = require('./src/routes/productosRoutes')
require('dotenv').config();

const PORT = process.env.PORT

app.set("view engine", "ejs");
app.set('views', [
    path.join('./src/views')
])

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(`
        <h1>Productos</h1>
        <p>Se han creado los siguientes endpoints</p>
        <ul>
            <li>GET <a href="./productos">/productos</a></li>
            <li>GET <a href="./productos/1">/productos/:id</a></li>
            <li>PUT <a href="">/productos/:id</a></li>
            <li>DELETE <a href="">/productos/:id</a></li>
            <li>POST <a href="">/productos/</a></li>
        </ul>
    `);
})

app.use(express.json());
app.use('/productos', productosRoutes);

// 404
app.use( (req, res, next) => {
    respuesta = {
        error: true,
        codigo: 404,
        mensaje: 'URL no encontrada'
    }
    res.status(404).send(respuesta);
});

app.listen(PORT, () => {
    console.log(`
        Server online corriendo en puerto ${PORT}
        http://localhost:3000
    `)});