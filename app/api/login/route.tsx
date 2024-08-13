import { NextResponse } from "next/server";

// Handles GET requests to /api
export async function GET(request: Request) {
    
    return NextResponse.json({ text: "Hello Worldffss" });
}

// Handles POST requests to /api
export async function POST(request: Request) {
  // ...
  const data = await request.json();
  console.log(data)
  return NextResponse.json({ message: "Hello World" });
}
