import getDB from "@/util/db";

export function GetRole(id: string) {
    const db = getDB();
    const stmt = db.prepare("SELECT rol FROM usuario WHERE username = ?");

    try {
        const result = stmt.get(id);

    } catch (error) {
        console.error("Error al obtener el rol:", error);
        throw error;
    }
}
