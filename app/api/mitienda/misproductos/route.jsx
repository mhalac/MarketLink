import getDB from "@/util/db";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
const db = getDB();

export async function GET() {
    const session = await getServerSession();
    const name = session?.user?.name;
    if (!session || !session.user) {
        return NextResponse.json({ status: "403", message: "Unauthorized" });
    }

    const stmt_negocio = db.prepare(`
        SELECT p.*, n.titulo AS negocio_titulo, n.desc AS negocio_desc, n.ubicacion AS negocio_ubi
        FROM producto p
        JOIN negocio n ON p.id_negocio = n.id_negocio
        JOIN usuario u ON n.id_usuario = u.id_usuario
        WHERE u.username = ?;
        `);


    const final_result = stmt_negocio.all(name);


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

    const exsists = db.prepare("SELECT * FROM producto WHERE titulo = ? AND id_negocio = ?").all(form.get("nombre"),negocio.id_negocio)
    if(exsists.length > 0){
        return NextResponse.json({ status: "405" });
    }


    const stmt = db.prepare("INSERT INTO producto(titulo, `desc`, id_negocio) VALUES(?, ?, ?)");
    stmt.run(form.get("nombre"), form.get("desc"), negocio.id_negocio);

    return NextResponse.json({ status: "200" });
}
