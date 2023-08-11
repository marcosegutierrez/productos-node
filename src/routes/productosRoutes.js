const express = require('express');
const router = express.Router();
const {
    obtenerProductos,
    obtenerUnProducto,
    editarProducto,
    actualizarProducto,
    borrarProducto,
    agregarProducto
} = require('../controllers/productosController')

//Ruta para ver Todos los productos
router.get('/', obtenerProductos);

//Ruta para Obtener un producto
router.get('/:id', obtenerUnProducto);

//Ruta para Editar un producto - Vista prellenado
router.get('/editar/:id', editarProducto);

//Ruta para Editar un producto - Update
router.put('/:id', actualizarProducto);

//Ruta para Borrar un producto
router.delete('/:id', borrarProducto);

//Ruta para Agregar un producto
router.post('/', agregarProducto);

module.exports = router;