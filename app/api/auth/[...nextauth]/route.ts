import nextAuth from "next-auth";
import Github from "next-auth/providers/github";

import authOptions from "@/lib/authOptions";

const handler = nextAuth(authOptions);
export { handler as GET, handler as POST };
