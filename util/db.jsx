import Database from 'better-sqlite3';
const db = new Database('market_db', {});
db.pragma('journal_mode = WAL');
export default db;
