import getDB from "@/util/db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
const db = getDB();

export async function GET() {
    const session = await getServerSession();
    const user = session?.user.name;

    if (!session || !session.user) {
        return NextResponse.json({ status: "403", message: "Unauthorized" });
    }
    const stmt_stock = db.prepare(`
        SELECT s.cantidad, p.titulo, p.desc, p.id_producto
        FROM stock s
        JOIN producto p ON p.id_producto = s.id_producto
        WHERE s.id_negocio = (SELECT id_negocio FROM negocio WHERE id_usuario = (SELECT id_usuario FROM usuario WHERE username = ?))
        `);

    const final_result = stmt_stock.all(user);

    return NextResponse.json({ status: "200", final_result });
}
export async function POST(req) {
    const session = await getServerSession();

    if (!session?.user?.name) {
        return NextResponse.json({ status: "403", message: "Forbidden" }, { status: 403 });
    }

    const negocio = db.prepare(`
        SELECT id_negocio 
        FROM negocio 
        WHERE id_usuario = (
            SELECT id_usuario 
            FROM usuario 
            WHERE username = ?
        )
    `).get(session.user.name);

    const data = await req.json();


    const selectStock = db.prepare(`SELECT id_stock FROM stock WHERE id_producto = ? AND id_negocio = ? LIMIT 1`);
    const updateStock = db.prepare(`UPDATE stock SET cantidad = ? WHERE id_stock = ?`);
    const insertStock = db.prepare(`INSERT INTO stock (id_producto, id_negocio, cantidad) VALUES (?, ?, ?)`);

    for (const item of data) {
        console.log(item)
        const { id_producto, cantidad } = item;
        const cantidadNum = Number(cantidad);

        if (isNaN(cantidadNum) || cantidadNum < 0) {
            return NextResponse.json({ status: "400", message: `Cantidad inválida para el producto ID ${id_producto}` }, { status: 400 });
        }

        const stock = selectStock.get(id_producto, negocio.id_negocio);
        if (stock) {
            console.log(cantidadNum, stock.id_stock)
            updateStock.run(cantidadNum, stock.id_stock);
        } else {
            insertStock.run(id_producto, negocio.id_negocio, cantidadNum);
        }
    }

    return NextResponse.json({ status: "200", message: "Stock actualizado correctamente" }, { status: 200 });
}