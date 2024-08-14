import { NextResponse } from "next/server";

import { generateConnection } from "../db/handle_user";
import { Cipher } from "crypto";

const requestIp = require("request-ip");
const conexion = generateConnection();

// Handles GET requests to /api
export async function GET(request: Request) {
  return NextResponse.json({ text: "Hello Worldffss" });
}
//TODO USAR BCRYPT PARA CIFRAR https://www.npmjs.com/package/bcrypt
// Handles POST requests to /api

interface ClientStatus {
  ip: string;
  status: "success" | "fail";
}
const clients: ClientStatus[] = [];

export async function POST(request: Request) {
  let ip = requestIp.getClientIp(request);
  if (ip == null) ip = "demo-user";

  const resp = await request.json();
  const jodiendo = clients.find((client) => client.ip === ip);
  if (jodiendo) {
    return NextResponse.json({ message: "Please wait" });
  }

  conexion.query(
    `INSERT INTO usuario (email, password) VALUES (?, ?);`,
    [resp.email, resp.password],
    function (err: any, results: any, fields: any) {
      if (!err) {
        const aux: ClientStatus = {
          ip: ip,
          status: 'success'
        }
        clients[clients.length] = aux;
      } else {
        console.error("Error inserting data: ", err);
      }
    }
  );
  return NextResponse.json({ message: "Hello World" });
}
