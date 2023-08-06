const db = require('../config/db');

const obtenerProductos = async(filters) => {
    let sql = 'SELECT * FROM productos';

    let whereClause = "";
    let values = [];

    if (filters.name) {
        whereClause += 'nombre LIKE ? AND ';
        values.push(`%${filters.name}%`);
    }

    if (filters.maxPrice && filters.minPrice) {
        whereClause += 'precio BETWEEN ? AND ? AND ';
        values.push(filters.maxPrice, filters.minPrice);
    } else if (filters.maxPrice) {
        whereClause += 'precio < ? AND ';
        values.push(filters.maxPrice);
    } else if (filters.minPrice) {
        whereClause += 'precio > ? AND ';
        values.push(filters.minPrice);
    }

    if (whereClause !== "") {
        whereClause = 'WHERE ' + whereClause.slice(0, -5);
        sql += ' ' + whereClause;
    }

    if (filters.order) {
        let order = filters.order === 'desc' ? 'DESC' : 'ASC';
        sql += ` ORDER BY precio ${order}`;
    }

    sql += ` LIMIT ${filters.limit}`;

    try {
        const [rows] = await db.query(sql, values);
        return rows;
    } catch (err) {
        throw new Error('Error al obtener productos desde la base de datos');
    }
};

const obtenerUnProducto = async(id) => {
    let sql = `SELECT * FROM productos WHERE id = ${id}`;
    
    try {
        const [producto] = await db.query(sql);
        return producto;
    } catch (err) {
        throw new Error(`Error al obtener producto con el id ${id} de la base de datos`);
    }
}

const borrarProducto = async(id) => {
    let sql = `DELETE FROM productos WHERE id = ${id}`;

    try {
        await db.query(sql);
    } catch (err) {
        throw new Error(`Error al eliminar producto con el id ${id} de la base de datos`);
    }
}

const agregarProducto = async(newProducto) => {
    let values = [
        newProducto.nombre,
        newProducto.precio,
        newProducto.stock,
        newProducto.descripcion,
        newProducto.imagen
    ]
    let sql = `INSERT INTO productos (
                nombre,
                precio,
                stock,
                descripcion,
                imagen
                ) VALUES (?, ?, ?, ?, ?)`;
    try {
        const [rows] = await db.query(sql, values);
        return rows;
    } catch (err) {
        throw new Error('Error al ingresar nuevo producto a la base de datos');
    }
}

const actualizarProducto = async(id, updateProducto) => {
    let sql = 'UPDATE productos SET ';
    let setClause = "";
    let values = [];

    if (updateProducto.nombre) {
        setClause += 'nombre = ?, ';
        values.push(updateProducto.nombre);
    }
    if (updateProducto.precio) {
        setClause += 'precio = ?, ';
        values.push(updateProducto.precio);
    }
    if (updateProducto.stock) {
        setClause += 'stock = ?, ';
        values.push(updateProducto.stock);
    }
    if (updateProducto.descripcion) {
        setClause += 'descripcion = ?, ';
        values.push(updateProducto.descripcion);
    }
    if (updateProducto.imagen) {
        setClause += 'imagen = ?, ';
        values.push(updateProducto.imagen);
    }
    if (setClause !== "") {
        setClause = setClause.slice(0, -2) + ` WHERE id = ${id}`;
        sql += setClause;
    }

    try {
        const [rows] = await db.query(sql, values);
        return rows;
    } catch (err) {
        throw new Error(`Error al modificar producto con el id ${id} desde la base de datos`);
    }
}

module.exports = {
    obtenerProductos,
    obtenerUnProducto,
    borrarProducto,
    agregarProducto,
    actualizarProducto
};
