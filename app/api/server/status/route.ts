import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest, NextResponse } from "next/server";



export async function GET(req:NextRequest) {
    
    const status = {texto:"hola peru"}
    return NextResponse.json({text:"holamundo"},{status:200});
}
export async function POST(req:NextRequest) {
    const client = await getKindeServerSession();


    const status = {texto:client}
    return NextResponse.json({text:"holamundo",sex:"asdfasdf"},{status:200,});
}