import getDB from "@/util/db";
import { NextRequest, NextResponse } from "next/server";
const db = getDB();

export async function GET(req, slug) {
    const id = slug.params.listado[0];

    const negocio = db.prepare(`SELECT n.* FROM negocio n WHERE n.id_negocio = ?`).get(id);

    const stock = db.prepare(`
        SELECT p.titulo as nombre_producto, p.desc as descripcion_producto, s.cantidad
        FROM stock s
        JOIN producto p ON p.id_producto = s.id_producto
        WHERE s.id_negocio = ?
    `).all(id);

    const result = {
        nombre_negocio: negocio.titulo,
        desc_negocio: negocio.desc,
        ubicacion_negocio: negocio.ubicacion,
        negocio_stock: stock.map(s => ({
            titulo: s.nombre_producto,
            descripcion: s.descripcion_producto,
            cantidad_stock: s.cantidad
        }))
    };
    console.log(result)

    return NextResponse.json({ status: "200", result });
}
