import { NextRequest, NextResponse } from "next/server";
import util from "util";
import db from "../../../../util/db";
import bcrypt from 'bcrypt';
export async function POST(req: NextRequest) {
    const user:FormData = await req.formData();
    const hashed = bcrypt.hash(user.get("password") as string,10)
    
    db.query( `INSERT INTO usuario (email, name, password) VALUES('${user.get("email")}','${user.get("name")}' ,'${hashed}')`,(b) => {
        if(!b) console.log("Agregado!");
        else console.log("No agregado", b);
    return new NextResponse(user, { status: 201 })
  })
  return new NextResponse(user, { status: 202 })

}

