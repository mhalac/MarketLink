// import getDB from "@/util/db";
// import { NextRequest, NextResponse } from "next/server";

// const db = getDB();

// export async function GET(req, slug) {
//     const stmt = db.prepare(`
//         SELECT 
//             n.titulo AS negocio_titulo, 
//             n.desc AS negocio_desc, 
//             n.ubicacion AS negocio_ubi, 
//             p.titulo AS producto_titulo, 
//             p.desc AS producto_desc
//         FROM negocio n
//         LEFT JOIN producto p ON n.id_negocio = p.id_negocio
//         WHERE n.id_negocio = ?
//     `);
//     const id = slug.params.listado[0];
//     const result = stmt.all(id);

//     if (result.length === 0) {
//         return NextResponse.json({ status: "404", message: "Negocio no encontrado" }, { status: 404 });
//     }

//     const tienda = {
//         titulo: result[0].negocio_titulo,
//         descripcion: result[0].negocio_desc,
//         ubicacion: result[0].negocio_ubi,
//         productos: result.map(r => ({
//             titulo: r.producto_titulo,
//             descripcion: r.producto_desc
//         }))
//     };

//     return NextResponse.json({ status: "200", tienda });

// }

import getDB from "@/util/db";
import { NextRequest, NextResponse } from "next/server";

const db = getDB();

export async function GET(req, slug) {
    const stmt = db.prepare(`
        SELECT 
            n.titulo AS negocio_titulo, 
            n.desc AS negocio_desc, 
            n.ubicacion AS negocio_ubi, 
            p.titulo AS producto_titulo, 
            p.desc AS producto_desc
        FROM negocio n
        LEFT JOIN producto p ON n.id_negocio = p.id_negocio
        WHERE n.id_negocio = ?
    `);
    const id = slug.params.listado[0];
    const result = stmt.all(id);

    console.log("Consultando negocio con ID:", id);
    console.log("Resultado de la consulta:", result);

    if (result.length === 0) {
        return NextResponse.json({ status: "404", message: "Negocio no encontrado" }, { status: 404 });
    }

    const tienda = {
        titulo: result[0].negocio_titulo,
        descripcion: result[0].negocio_desc,
        ubicacion: result[0].negocio_ubi,
        productos: result.map(r => ({
            titulo: r.producto_titulo,
            descripcion: r.producto_desc
        }))
    };

    return NextResponse.json({ status: "200", tienda });
}

