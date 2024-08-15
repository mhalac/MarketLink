import type { NextAuthOptions } from "next-auth";
export const options: NextAuthOptions = {
    providers :[],
    pages:{
        signIn:"/account/login",
        newUser:"/account/signup"
    }
}