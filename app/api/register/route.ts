import { NextApiResponse, NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";
import db from "../../../util/db";
import bcrypt from 'bcrypt';
export async function POST(req: NextRequest) {
  
  const headers = await req.headers;
  

  const user: FormData = await req.formData();
  const hashed = await bcrypt.hash(user.get("password") as string, 10)
  const promise: Promise<boolean> = new Promise<boolean>((resolve, reject) => {
    db.query(`INSERT INTO usuario (email, name, password) VALUES('${user.get("email")}','${user.get("name")}' ,'${hashed}')`, (b) => {
      if (b){
        console.log(b)
        resolve(false);
      }else{
        resolve(true);
      }
    });

 })
 const result = await promise;
 if(result === true){
  return new NextResponse(user, { status: 201 })
 }else{
  return new NextResponse(user, { status: 406 })
 }
}

