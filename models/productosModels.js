const db = require('../config/db');

const obtenerProductos = async() => {
    let sql = 'SELECT * FROM productos';
    try {
        const [rows] = await db.query(sql);
        return rows;
    } catch (err) {
        throw new Error('Error al obtener productos desde la base de datos');
    }
};

module.exports = productosModels;
