const productosModels = require('../models/productosModels');

const obtenerProductos =  async(filters) => {
    const productos = await productosModels.obtenerProductos(filters);
    return productos;
}

const obtenerUnProducto = async(id) => {
    const producto = await productosModels.obtenerUnProducto(id);
    return producto;
}

const editarProducto = async (id) => {
    const producto = await productosModels.editarProducto(id);
    return producto;
}

const actualizarProducto = async (id, updateProducto) => {
    const producto = await productosModels.actualizarProducto(id, updateProducto);
    return producto;
}

const borrarProducto = async (id) => {
    const producto = await productosModels.borrarProducto(id);
}

const agregarProducto = async (newProducto) => {
    const producto = await productosModels.agregarProducto(newProducto);
    return producto;
}

module.exports = {
    obtenerProductos,
    obtenerUnProducto,
    borrarProducto,
    agregarProducto,
    actualizarProducto,
    editarProducto
};