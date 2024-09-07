import { NextRequest, NextResponse } from "next/server"
import getDB from "@/util/db"
const db = getDB();



export async function POST(req:NextRequest){
    const statement = db.prepare("INSERT INTO negocio (titulo, desc, ubicacion) VALUES(?, ?, ?)")
    const data = await req.formData()
      
    statement.run(data.get("nombre"),data.get("desc"),data.get("ubic"))

    return NextResponse.json({status:200});
}
export function GET(){
    const statement = db.prepare("SELECT * FROM negocio")
    const result = statement.all();
    
    return NextResponse.json({status:200, result})

}