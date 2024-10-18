import getDB from "@/util/db";

export function GetRole(id) {
    const db = getDB();
    const stmt = db.prepare("SELECT rol FROM usuario WHERE username = ?");

    try {
        const result = stmt.get(id);
        return result.rol

    } catch (error) {
        console.error("Error al obtener el rol:", error);
        throw error;
    }
}
