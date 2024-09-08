import getDB from "@/util/db";

export function GetRole(id:number) {
    const db = getDB()
    const stmt = db.prepare("SELECT rol FROM usuario WHERE id_usuario = ?");
    console.log(stmt.get(id));
}