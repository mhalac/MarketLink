import { NextAuthOptions } from "next-auth";
import Github from "next-auth/providers/github";
import getDB from "@/util/db";
import Credentials from "next-auth/providers/credentials";
const bcrypt = require("bcrypt");

const db = getDB();
export const authOptions: NextAuthOptions = {
  providers: [
    Github({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    Credentials({
      name: "Credentials",

      credentials: {
        username: { label: "Usuario", type: "text", placeholder: "usuario" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const stmt = db.prepare("SELECT * FROM usuario WHERE username = ?");
        const check: any = stmt.get(credentials?.username);
        if (!check) {
            return null;
        }

        const valid = await bcrypt.compare(
          credentials?.password,
          check.password
        );

        if (valid) {
          const user = { id: check.id_usuario, name: check.username };
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        // User is available during sign-in
        token.id = user.id;
      }
      return token;
    },
    session({ session, token }) {
      session.user.id = token.id;
      return session;
    },
  },
};

export default authOptions;
