import getDB from "@/util/db";

export function GetRole(id:string) {
    const db = getDB()
    const stmt = db.prepare("SELECT rol FROM usuario WHERE username = ?");
    return stmt.get(id).rol;
}