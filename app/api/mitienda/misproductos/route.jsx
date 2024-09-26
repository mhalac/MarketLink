import getDB from "@/util/db";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
const db = getDB();

export async function GET() {
    const session = await getServerSession();
    const name = session?.user?.name;

    const stmt_negocio = db.prepare(`
    SELECT s.*, p.*, n.titulo AS negocio_titulo, n.desc AS negocio_desc, n.ubicacion AS negocio_ubi
    FROM stock s
    JOIN negocio n ON s.id_negocio = n.id_negocio
    JOIN usuario u ON n.id_usuario = u.id_usuario
    JOIN producto p ON s.id_producto = p.id_producto
    WHERE u.username = ?;
    `);

    const final_result = stmt_negocio.get(name);

    console.log(final_result);

    return NextResponse.json({ status: "200", final_result });
}
