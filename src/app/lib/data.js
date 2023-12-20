import mongoose from "mongoose";
import { User } from "./models";
import { connectionStr } from "@/dbconnection/db";
import { Product } from "./models";


// Function to fetch users from database 
export const fetchUsers = async (q, page)=>{
    console.log(q)
    const regex = new RegExp(q, "i");
    const ITEM_PER_PAGE = 4;
    

    try {
        await mongoose.connect(connectionStr)
        const count = await User.find({username: {$regex: regex}}).count();
       const users = await User.find({username: {$regex: regex}}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page-1)); 
        return {users, count};
    } catch (error) {
       throw new Error("Error fethching users");
    }


}



// Function to fetch products from database 
export const fetchProducts = async (q, page)=>{
    console.log(q)
    const regex = new RegExp(q, "i");
    const ITEM_PER_PAGE = 4;
    

    try {
        await mongoose.connect(connectionStr)
        const count = await Product.find({title: {$regex: regex}}).count();
       const products = await Product.find({title: {$regex: regex}}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page-1)); 
        return {products, count};
    } catch (error) {
       throw new Error("Error fethching users");
    }
}

// Function to fetch the single user by id from database
export const fetchSingleUser = async (id)=>{

    try {
        
        await mongoose.connect(connectionStr);
        const user = await User.findById(id);
        return user;
    } catch (err) {
        console.log(err)
        throw new Error("Error while fetching single user", Error)
    }



}

// Function to fetch the single product by id from database
export const fetchSingleProduct = async (id)=>{

    try {
        
        await mongoose.connect(connectionStr);
        const product = await Product.findById(id);
        return product;
    } catch (err) {
        console.log(err)
        throw new Error("Error while fetching single product", Error)
    }



}