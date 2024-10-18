import getDB from "@/util/db";
import { NextRequest, NextResponse } from "next/server";
const db = getDB();
export async function GET(req, slug) {
    const stmt = db.prepare("SELECT * FROM negocio WHERE id_negocio = ?")
    const id = slug.params.listado[0];
    const result = stmt.get(id);

    return NextResponse.json({ status: "202", result })
}