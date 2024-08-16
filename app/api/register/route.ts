import { NextApiResponse, NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";
import pool from "../../../util/db";
import bcrypt from 'bcrypt';
export async function POST(req: NextRequest) {
  
  const headers = await req.headers;
  

  const user: FormData = await req.formData();
  const hashed = await bcrypt.hash(user.get("password") as string, 10)
  const check = await pool.query(`SELECT email FROM usuario WHERE email = '${user.get("email")}'`);
  console.log(check);
  if (check[0] === null){
    console.log("Mail nuevo")
  }else{
    console.log("Mail ya registrado!")
  }
  return new NextResponse();
  await pool.query(`INSERT INTO usuario (email, name, password) VALUES('${user.get("email")}','${user.get("name")}' ,'${hashed}')`)
  return new NextResponse(user,{status:200})
}

