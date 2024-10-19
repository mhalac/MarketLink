import { NextRequest, NextResponse } from "next/server"
import getDB from "@/util/db"
import { getServerSession } from "next-auth";
const db = getDB();



export async function POST(req) {
    const session = await getServerSession();
    const user = session?.user.name;

    if (!session || !session.user) {
        return NextResponse.json({ status: "403", message: "Unauthorized" });
    }

    const checkStatement = db.prepare(`
        SELECT COUNT(*) as count 
        FROM negocio 
        WHERE id_usuario = (SELECT u.id_usuario FROM usuario u WHERE u.username = ?);
    `);

    const userExists = checkStatement.get(user);

    if (userExists.count > 0) {
        return NextResponse.json({ status: 400 });
    }

    const statement = db.prepare(`
        INSERT INTO negocio (titulo, desc, ubicacion, id_usuario)
        SELECT ?, ?, ?, u.id_usuario
        FROM usuario u
        WHERE u.username = ?;
    `);
    
    const data = await req.formData();

    statement.run(data.get("nombre"), data.get("desc"), data.get("ubic"), user);
    
    db.prepare("UPDATE usuario SET rol = 2 WHERE username = ?").run(user)

    return NextResponse.json({ status: 200 });
}

export function GET() {
    const statement = db.prepare("SELECT * FROM negocio")
    const result = statement.all();

    return NextResponse.json({ status: 200, result })

}