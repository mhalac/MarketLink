"use server";
import { NextApiResponse, NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";
import pool from "../../../util/db";
import bcrypt from "bcrypt";
export async function POST(req: NextRequest) {

  const user: FormData = await req.formData();
  return new NextResponse(user, { status: 200 });
}
