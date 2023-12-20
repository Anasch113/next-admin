import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "./authconfig";

import { User } from "./lib/models";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import { connectionStr } from "@/dbconnection/db";

const login = async (credentials) => {
  try {
  await mongoose.connect(connectionStr)


  
    const user = await User.findOne({ username: credentials.username });
    
  
    if(!user) throw new Error("Wrong Credentials from user auth")
  
   

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

   if(!isPasswordCorrect) throw new Error("Wrong Credentials from password auth")

    return user;
  } catch (err) {


   

    throw new Error("Failed to login!");
  
  }
};

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (err) {
          return null;
        }
      },
    }),
  ],

callbacks : {
  
  async jwt({token, user}){

    if(user){
      token.username = user.username
      token.img = user.img
    }
    
    return token;
  },
 
    async session({ session, token }) {
      if (token) {
        session.user.username = token.username;
        session.user.img = token.img;
      }
      return session;
    },
},
  
  },
);

