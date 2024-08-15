import { NextResponse } from "next/server";
import util from 'util';
import db from "../../../../util/db";

const query = util.promisify(db.query).bind(db);

const POST = async (req) => {
    const user = await req.json();
    try{
        const results = await query(`INSERT INTO usuarios (email, password) VALUES('${user.email}', '${user.password}')`)
        if(results) return new NextResponse(user,{status:201});
    }catch(e){
        console.log(e)
        return new NextResponse(error,{status:400})
    }
}