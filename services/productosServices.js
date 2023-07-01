const productosModels = require('../models/productosModels');

const obtenerProductos =  async() => {
    const productos = await productosModels.obtenerProductos();
    return productos;
}

const obtenerUnProducto = () => {
    // const id = req.params.id;
}

const editarProducto = () => {
    // const id = req.params.id;
}

const actualizarProducto = () => {
    // const id = req.params.id;
}

const borrarProducto = () => {
    // const id = req.params.id;
}

const agregarProducto = () => {
}

module.exports = productosServices;