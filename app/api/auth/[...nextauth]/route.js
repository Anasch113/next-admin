
import mongoose from 'mongoose'
import NextAuth from 'next-auth/next'

import CredentialsProvider from 'next-auth/providers/credentials'
import { login } from '../../../authUtils'






export const authOptions = {
    pages:{
        signIn: "/login",
    },
providers:[
    CredentialsProvider({
        name: "credentials",
        credentials: {},
        async authorize(credentials){
            try {
                const user = await login(credentials);
                console.log(credentials.callbackUrl);

                if(!user.isAdmin && credentials.callbackUrl === "http://localhost:3000/login?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2Fdashboard"){
                    throw new Error("You are not an admin")
                  
                }
                return user;
                
              }  catch (error) {
               throw new Error(error)
            }
        }
    })
],

callbacks:{
    async jwt({token, user}){
        if(user){
            token.username = user.username,
            token.email = user.email,
            token.id = user.id,
            token.img = user.img,
            token.isAdmin = user.isAdmin
           
        }
       
        return token;
    },
    async session({session, token}){
        if(token){
            session.user.username = token.username,
            session.user.email = token.email,
            session.user.id = token.id,
            session.user.img = token.img,
            session.user.isAdmin = token.isAdmin
            

            
        }
      
        
        return session;
    },
  
}
}
const handler = NextAuth(authOptions)
export {handler as GET, handler as POST}