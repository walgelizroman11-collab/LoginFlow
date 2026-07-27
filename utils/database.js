const oracledb = require('oracledb');
require('dotenv').config();

async function getConnection() {
    const { DB_USER, DB_PASSWORD, DB_CONNECTION_STRING } = process.env;

    if (!DB_USER || !DB_PASSWORD || !DB_CONNECTION_STRING) {
        throw new Error('Faltan variables de entorno para Oracle. Define DB_USER, DB_PASSWORD y DB_CONNECTION_STRING en tu archivo .env');
    }

    try {
        return await oracledb.getConnection({
            user: DB_USER,
            password: DB_PASSWORD,
            connectString: DB_CONNECTION_STRING
        });
    } catch (error) {
        console.error('No se pudo conectar a Oracle:', error.message);
        throw error;
    }
}

async function runQuery(sql, binds = [], options = {}) {
    const connection = await getConnection();

    try {
        return await connection.execute(sql, binds, options);
    } finally {
        await connection.close();
    }
}

module.exports = { getConnection, runQuery };