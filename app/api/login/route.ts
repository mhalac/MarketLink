"use server"
import { NextApiResponse, NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";
import db from "../../../util/db";
import bcrypt from 'bcrypt';
export async function POST(req: NextRequest) {
  

  const user: FormData = await req.formData();
  const promise: Promise<boolean> = new Promise<boolean>((resolve, reject) => {
    db.query(`SELECT * FROM usuario'`, (e,res,resultado) => {
      if(e) resolve(true);
      else reject(false);
      console.log("asdfs",resultado);

    });
 })
 const result = await promise;
 if(result === true){
  return new NextResponse(user, { status: 201 })
 }else{
  return new NextResponse(user, { status: 406 })
 }
}
