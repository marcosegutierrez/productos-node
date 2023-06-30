const express = require('express');
const app = express();
const db = require('./db');

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

//Ruta para ver Todos los productos
app.get('/productos', (req, res) => {
    res.send('Obteniendo todos los productos');
})

//Ruta para Obtener un producto
app.get('/productos/:id', (req, res) => {
    const id = req.params.id;
    res.send('Obteniendo un producto con el id: ' + id);
})

//Ruta para Editar un producto - Vista prellenado
app.get('/productos/editar/:id', (req, res) => {
    const id = req.params.id;
    res.send('Enviando datos a la vista para hacer prellenado');
})

//Ruta para Editar un producto - Update
app.put('/productos/:id', (req, res) => {
    const id = req.params.id;
    res.send('Editando el producto con el id: ' + id);
})

//Ruta para Borrar un producto
app.delete('/productos/:id', (req, res) => {
    const id = req.params.id;
    res.send('Borrando el producto con el id: ' + id);
})

//Ruta para Agregar un producto
app.post('/productos/', (req, res) => {
    res.send('Agregando producto a la DB');
})


app.listen(3000, () => {
    console.log(`
        Server online corriendo en puerto 3000
        http://localhost:3000
    `)});