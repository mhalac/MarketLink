import getDB from "@/util/db";
import { NextRequest, NextResponse } from "next/server";
const db = getDB();
export async function GET(req, params ) {
    const stmt = db.prepare("SELECT * FROM negocio WHERE id_negocio = ?")
    const result = stmt.get(params.listado[0]);
    console.log(params,"har");
    console.log(result);  

    return NextResponse.json({status:"202",result})
}