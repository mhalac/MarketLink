import { NextRequest, NextResponse } from "next/server"
import getDB from "@/util/db"
import { getServerSession } from "next-auth";
const db = getDB();



export async function POST(req: NextRequest) {
    const session = await getServerSession();
    const user = session?.user.name;

    if (!session || !session.user) {
        return NextResponse.json({ status: "403", message: "Unauthorized" });
    }
    const statement = db.prepare(`INSERT INTO negocio (titulo, desc, ubicacion, id_usuario)
        SELECT ?, ?, ?, u.id_usuario
        FROM usuario u
        WHERE u.username = ?;
`)
    const data = await req.formData()

    statement.run(data.get("nombre"), data.get("desc"), data.get("ubic"),user)

    return NextResponse.json({ status: 200 });
}
export function GET() {
    const statement = db.prepare("SELECT * FROM negocio")
    const result = statement.all();

    return NextResponse.json({ status: 200, result })

}