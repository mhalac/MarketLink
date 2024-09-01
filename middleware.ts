import { getSession } from "next-auth/react";

export { default } from "next-auth/middleware"


async function customAuth(req) {
    const session = await getSession({ req });    
    // If the session is not authenticated, deny access
    if (!session) {
      return new Response("Unauthorized", { status: 401 });
    }
  
    // Add additional logic here if needed
    return null; // Continue processing if authenticated
  }

export const config = { matcher: ["/dashboard/:path*"] }