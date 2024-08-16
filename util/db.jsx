const sql = require("mysql2");

const pool = sql.createPool({
    connectionLimit: 1,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DB,
    port: process.env.DB_PORT,
    password: process.env.DB_PASS,
})
export default pool;