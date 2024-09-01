import { NextAuthOptions } from "next-auth";
import Github from "next-auth/providers/github";


export const authOptions: NextAuthOptions = {


    providers: [
        Github({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
        })
    ],
    callbacks: {
        jwt({ token, user }) {
            if (user) { // User is available during sign-in
                token.id = user.id
            }
            return token
        },
        session({ session, token }) {
            session.user.id = token.id
            return session
        },
        
    },
}

export default authOptions;