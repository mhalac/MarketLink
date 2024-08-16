const sql = require("mysql2/promise");

const pool = await sql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DB,
    port: process.env.DB_PORT,
    password: process.env.DB_PASS,
})
export default pool;