"use server"
import { NextResponse } from "next/server";

import { generateConnection } from "../../app/api/db/handle_user";
import { Cipher } from "crypto";
const conexion = generateConnection();

// Handles GET requests to /api
export async function GET(request: Request) {
  const headers = request.headers;
  if (headers.get("token") == null) {
    return;
  }
  if (
    headers.get("intent") === "creation-status" &&
    clients.find((client) => client.token === headers.get("token"))
  ) {
    const success = clients.find(
      (client) =>
        client.token === headers.get("token") && client.status === "success"
    );
    if (success) {
      return NextResponse.json({ text: "success" });
    }
    return NextResponse.json({ text: "loading" });
  }
}
//TODO USAR BCRYPT PARA CIFRAR https://www.npmjs.com/package/bcrypt
// Handles POST requests to /api

interface ClientStatus {
  token: string;
  status: "success" | "fail";
}
const clients: ClientStatus[] = [];
import { v6 } from "uuid";

export async function POST(request: Request) {
  const resp = await request.json();
  const token = v6();
  conexion.query(
    `INSERT INTO usuario (email, password) VALUES (?, ?);`,
    [resp.email, resp.password],
    function (err: any, results: any, fields: any) {
      if (!err) {
        const aux: ClientStatus = {
          token: token,
          status: "success",
        };
        clients[clients.length] = aux;
        console.log("Ingresado correctamente");
      } else {
        console.error("Error inserting data: ", err);
      }
    }
  );
  return NextResponse.json({ message: "Hello World" });
}
