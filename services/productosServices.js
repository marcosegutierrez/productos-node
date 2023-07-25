const productosModels = require('../models/productosModels');

const obtenerProductos =  async(filters) => {
    const productos = await productosModels.obtenerProductos(filters);
    return productos;
}

const obtenerUnProducto = async(id) => {
    const producto = await productosModels.obtenerUnProducto(id);
    return producto;
}

const editarProducto = () => {
    // const id = req.params.id;
}

const actualizarProducto = () => {
    // const id = req.params.id;
}

const borrarProducto = async(id) => {
    const producto = await productosModels.borrarProducto(id);
}

const agregarProducto = () => {
}

module.exports = {
    obtenerProductos,
    obtenerUnProducto,
    borrarProducto
};