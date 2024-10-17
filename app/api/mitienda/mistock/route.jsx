import getDB from "@/util/db";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
const db = getDB();

export async function GET() {
    const session = await getServerSession();
    const user = session?.user.name;

    if (!session || !session.user) {
        return NextResponse.json({ status: "403", message: "Unauthorized" });
    }
    const stmt_stock = db.prepare(`
        SELECT s.cantidad, p.titulo, p.desc
        FROM stock s
        JOIN producto p ON p.id_producto = s.id_producto
        WHERE s.id_negocio = (SELECT id_negocio FROM negocio WHERE id_usuario = (SELECT id_usuario FROM usuario WHERE username = ?))
        `);

    const final_result = stmt_stock.all(user);

    return NextResponse.json({ status: "200", final_result });
}
export async function POST(req) {
    const session = await getServerSession();

    if (!session || !session.user) {
        return NextResponse.json({ status: "403" });
    }

    const form = await req.formData();

    const usuarioStmt = db.prepare("SELECT id_usuario FROM usuario WHERE username = ?");
    const usuario = usuarioStmt.get(session.user.name);

    const negocioStmt = db.prepare("SELECT id_negocio FROM negocio WHERE id_usuario = ?");
    const negocio = negocioStmt.get(usuario.id_usuario);


    const stmt = db.prepare("INSERT INTO producto(titulo, `desc`, id_negocio) VALUES(?, ?, ?)");
    stmt.run(form.get("nombre"), form.get("desc"), negocio.id_negocio);

    return NextResponse.json({ status: "200" });
}
