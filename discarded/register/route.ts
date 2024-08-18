/*
import { NextApiResponse, NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";
import db from "../../../util/db";
import bcrypt from 'bcrypt';
export async function POST(req: NextRequest) {
  
  const headers = await req.headers;
  

  const user: FormData = await req.formData();
  const hashed = await bcrypt.hash(user.get("password") as string, 10)
  const stmt = db.prepare("SELECT email FROM usuario WHERE email = ? ")
  if(stmt.get(user.get("email")))
  {
    console.log("Mail existe!", stmt.get(user.get("email")))
    return new NextResponse(user,{status:405})
  }else{
    console.log("No exsiste! Lo creo....")
  }

  const crear = db.prepare('INSERT INTO usuario (email, name, password) VALUES(?, ?, ?)');
  crear.run(user.get("email"),user.get("name"),hashed);
  

  return new NextResponse(user,{status:200})
}

*/