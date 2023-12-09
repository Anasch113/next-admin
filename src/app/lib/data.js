import mongoose from "mongoose";
import { User } from "./models";
import { connectionStr } from "@/dbconnection/db";


export const fetchUsers = async ()=>{

    try {
        await mongoose.connect(connectionStr)
       const users = await User.find(); 
        return users;
    } catch (error) {
       throw new Error("Error fethching users") 
    }
}