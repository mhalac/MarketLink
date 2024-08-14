
import { NextResponse } from "next/server";

import {generateConnection} from "../db/handle_user";
import { json } from "stream/consumers";


const conexion = generateConnection();

// Handles GET requests to /api
export async function GET(request: Request) {
    
    return NextResponse.json({ text: "Hello Worldffss" });
}



// Handles POST requests to /api
export async function POST(request: Request) {
  const resp = await request.json()
  conexion.query(`INSERT INTO usuario (email,password) VALUES ( ?,? );`,[resp.email,resp.password],function(err:any,results:any,fields:any){
    if(!err){
      console.log("Data ingresada correctamente");
    }else{
      console.log(err)
    }

    
  });
  return NextResponse.json({ message: "Hello World" });


}
