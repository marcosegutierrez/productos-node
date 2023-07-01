const productosServices = require('../services/productosServices')

const obtenerProductos =  async(req, res) => {
    try {
        const productos = await productosServices.obtenerProductos();
        res.json(productos);
    } catch (err) {
        throw err;
    }
}

const obtenerUnProducto = (req, res) => {
    const id = req.params.id;
    res.send('Obteniendo un producto con el id: ' + id);
}

const editarProducto = (req, res) => {
    const id = req.params.id;
    res.send('Enviando datos a la vista para hacer prellenado');
}

const actualizarProducto = (req, res) => {
    const id = req.params.id;
    res.send('Editando el producto con el id: ' + id);
}

const borrarProducto = (req, res) => {
    const id = req.params.id;
    res.send('Borrando el producto con el id: ' + id);
}

const agregarProducto = (req, res) => {
    res.send('Agregando producto a la DB');
}

module.exports = {
    obtenerProductos,
    obtenerUnProducto,
    editarProducto,
    actualizarProducto,
    borrarProducto,
    agregarProducto
}