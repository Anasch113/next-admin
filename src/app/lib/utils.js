import mongoose  from "mongoose";
import { User } from "./models";

export const connectToDB = async ()=>{

   const connection = {};
    try {
        if(connection.isConnected) return;
        
const db =  await mongoose.connect("mongodb+srv://anaschaudry2002:anaschaudry2002@cluster0.m0ekee6.mongodb.net/dashboard?retryWrites=true&w=majority");
connection.isConnected = db.connections[0].readyState;


  
 



    } catch (error) {
      
        throw new Error(error);
       
    }
}