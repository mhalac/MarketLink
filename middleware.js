import { getSession } from "next-auth/react";

export { default } from "next-auth/middleware"


async function customAuth(req) {

}

export const config = { matcher: ["/dashboard/:path*"] }