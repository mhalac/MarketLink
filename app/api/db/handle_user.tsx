// Get the client
const sql = require("mysql2");

export function generateConnection() {
  return sql.createConnection({
    host: "sql.freedb.tech",
    user: "freedb_capitanperu",
    database: "freedb_superbase",
    port: 3306,
    password: '3r$v$A8XnJ9mRxG'
  });
}
