// pages/api/session.js (o .ts si usas TypeScript)
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
    const session = await getServerSession();

    if (!session) {
        return NextResponse.json({ user: null });
    }

    return NextResponse.json({ user: session.user });
}
