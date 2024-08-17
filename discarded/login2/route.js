"use server";
import { NextRequest, NextResponse } from "next/server";
import db from "../../util/db";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";

export async function POST(req) {

    const user = await req.formData();
    const stmt = db.prepare("SELECT email FROM usuario WHERE email = ?")
    const busqueda = stmt.get(user.get("email"));

    if (busqueda) {
        try {


            const stmt_pass = db.prepare("SELECT password FROM usuario WHERE email = ?")
            const psswd_db = stmt_pass.get(user.get("password"));
            const bien = await bcrypt.compare(user.get("password"), psswd_db.password)
            if (bien) {

                
                return new NextResponse(user, { status: 200 });


            } else {
                redirect("/signup")
 
            }
        }
        catch (error) {
            redirect("/signup")

        }
    }
    else {
        redirect("/signup")
    }

}
