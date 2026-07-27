require('dotenv').config();
const { runQuery } = require('./database');

(async () => {
  try {
    const sql = process.argv[2] || 'SELECT * AS valor FROM CLIENTES_RESERVA';
    const result = await runQuery(sql);
    console.log(JSON.stringify(result.rows, null, 2));
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
})();
