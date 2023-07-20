const productosServices = require('../services/productosServices')

const obtenerProductos =  async(req, res) => {
    const filters = {
        name: req.query.name || '',
        minPrice: parseFloat(req.query.minPrice) || null,
        maxPrice: parseFloat(req.query.maxPrice) || null,
        order: req.query.order || '',
        limit: parseInt(req.query.limit) || 15
    }

    try {
        const productos = await productosServices.obtenerProductos(filters);
        res.json(productos);
    } catch (err) {
        throw err;
    }
}

const obtenerUnProducto = async(req, res) => {
    const id = req.params.id;
    try {
        const producto = await productosServices.obtenerUnProducto(id);
        res.json(producto);
    } catch (err) {
        throw err;
    }
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