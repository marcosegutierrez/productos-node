const productosServices = require('../services/productosServices')

const obtenerProductos = async (req, res) => {
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

const obtenerUnProducto = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await productosServices.obtenerUnProducto(id);
        res.render('product', {producto: producto})
    } catch (err) {
        return res.status(500).json({ message: 'Algo salió mal'});
    }
}

const editarProducto = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await productosServices.editarProducto(id);
        res.json(producto);
    } catch (err) {
        throw err;
    }
}

const actualizarProducto = async (req, res) => {
    const id = req.params.id;
    const updateProducto = {
        nombre: req.body.nombre || '',
        precio: req.body.precio || '',
        stock: req.body.stock || '',
        descripcion: req.body.descripcion || '',
        imagen: req.body.imagen || '',
    }
    try {
        const producto = await productosServices.actualizarProducto(id, updateProducto);
        res.json(`Producto con el id ${id} actualizado correctamente`);
    } catch (err) {
        throw err
    }
}

const borrarProducto = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await productosServices.borrarProducto(id);
        res.json(`Producto con el id ${id} borrado correctamente`);
    } catch (err) {
        throw err;
    }
}

const agregarProducto = async (req, res) => {
    const newProducto = {
        nombre: req.body.nombre,
        precio: req.body.precio,
        stock: req.body.stock,
        descripcion: req.body.descripcion,
        imagen: req.body.imagen
    }

    try {
        const producto = await productosServices.agregarProducto(newProducto);
        res.json(`Producto ingresado correctamente`);
    } catch (error) {
        return res.status(500).json({ message: "Algo salió mal" });
    }
}

module.exports = {
    obtenerProductos,
    obtenerUnProducto,
    editarProducto,
    actualizarProducto,
    borrarProducto,
    agregarProducto
}