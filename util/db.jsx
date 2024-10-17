import Database from 'better-sqlite3';

export default function getDB() {
    const db = new Database('market.db', { fileMustExist: true });
    db.pragma('journal_mode = WAL');
    return db;
}