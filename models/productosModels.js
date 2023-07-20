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

module.exports = {
    obtenerProductos,
    obtenerUnProducto
};
