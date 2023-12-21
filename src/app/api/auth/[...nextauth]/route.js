import { User } from "@/app/lib/models";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import { connectionStr } from "@/dbconnection/db";


export const authOptions = {

    providers : [

CredentialsProvider({
    name: "credentials",
    credentials: {},

    async authorize(credentials){
const {username, password} = credentials;

try {
    await mongoose.connect(connectionStr);
    const user = await User.findOne({username});
    if(!user){
        return null
    }

    const passwordMatch = await bycrypt.compare(password, user.password)

    if(!passwordMatch){
        return null
    }




    return user;

    
} catch (error) {
    console.log("Error while login", error)
}





    }
})


    ],

    session : {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages : {
        signIn: "/login"
    },

    
}

const handler = NextAuth(authOptions);
export {handler as GET, handler as POST}