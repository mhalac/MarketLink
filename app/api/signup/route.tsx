import { NextRequest, NextResponse } from "next/server";
import getDB from "@/util/db";
const db = getDB();
const bcrypt = require('bcrypt');
import { v4 as uuidv4 } from 'uuid';
import { redirect } from "next/dist/server/api-utils";

export async function POST(req: NextRequest) {
    const formdata = await req.formData();

    const user = formdata.get("username");
    const hashed = await bcrypt.hash(formdata.get("password"), 10);

    const check_stmt = db.prepare("SELECT username FROM usuario WHERE username = ?")
    const check = check_stmt.all(user)
    
    if (check.length > 0) {
        return NextResponse.json({ status: 405 })

    }

    const stmt = db.prepare("INSERT INTO usuario(id_usuario, rol, username, password) VALUES(?, ?, ?, ?)");
    stmt.run(uuidv4(), 1, user, hashed);

    return NextResponse.json({ status: 200 })

}