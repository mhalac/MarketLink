import getDB from "@/util/db";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
const db = getDB();
export async function GET(){
    const session = await getServerSession();
    console.log(session);
    const name = session?.user?.name;
    console.log(name)
    const stmt = db.prepare("SELECT id_usuario FROM usuario WHERE username = ?");
    const get_id = stmt.get(name).id_usuario;
    const stmt_negocio = db.prepare("SELECT * FROM negocio WHERE id_usuario = ?")
    const final_result = stmt_negocio.get(get_id);
    return NextResponse.json({status:"200",final_result})
}