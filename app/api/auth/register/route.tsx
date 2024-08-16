import { NextRequest, NextResponse } from "next/server";
import util from "util";
import db from "../../../../util/db";

export async function POST(req: NextRequest) {
    const user:FormData = await req.formData();

    db.query( `INSERT INTO usuarios (email, password) VALUES('${user.get("email")}', '${user.get("password")}')`,(b) => {
    return new NextResponse(user, { status: 201 })
  })
  return new NextResponse(user, { status: 202 })

  //console.log("testeoo");
}
