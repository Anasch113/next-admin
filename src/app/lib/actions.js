"use server"
import { connectionStr } from "@/dbconnection/db";
import { User } from "./models";
import mongoose from "mongoose";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from 'bcrypt'
import { Product } from "./models";
import { signIn } from "../auth";



// Action (api) to add the user in database

export const addUser = async (formDataHello)=>{



const {username, password, email, address, phone, isAdmin, isActive} = Object.fromEntries(formDataHello);

try{

    await mongoose.connect(connectionStr);
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt)
    const newUser =  new User({
        username, password : hashedPassword, email, address, phone, isAdmin, isActive
    });
    await newUser.save();

}
catch(err){
console.log(err)
throw new Error("Failed to craete new user", Error)
}


revalidatePath("/dashboard/users");
redirect('/dashboard/users');

}


// Action (api) to add the product in database
export const addProduct = async (formDataHello)=>{



    const {title, price, color, stock, size, desc} = Object.fromEntries(formDataHello);
    
    try{
    
        await mongoose.connect(connectionStr);
     
        const newProduct =  new Product({
            title, price, color, stock, size, desc
        });
        await newProduct.save();
    
    }
    catch(err){
    console.log(err)
    throw new Error("Failed to craete new product", Error)
    }
    
    
    revalidatePath("/dashboard/products");
    redirect('/dashboard/products');
    
    }

// Action (api) to delete the product from database

    export const deleteProduct = async (formDataHello)=>{


const {id} = Object.fromEntries(formDataHello);
       
        
        try{
        
            await mongoose.connect(connectionStr);
            await Product.findByIdAndDelete(id);
        
        }
        catch(err){
        console.log(err)
        throw new Error("Failed to delete to product", Error)
        }
        
        
        revalidatePath("/dashboard/products");
      
        
        }

// Action (api) to delete the user from database


        export const deleteUser = async (formDataHello)=>{


            const {id} = Object.fromEntries(formDataHello);
                   
                    
                    try{
                    
                        await mongoose.connect(connectionStr);
                        await User.findByIdAndDelete(id);
                    
                    }
                    catch(err){
                    console.log(err)
                    throw new Error("Failed to delete to user", Error)
                    }
                    
                    
                    revalidatePath("/dashboard/users");
                  
                    
                    }

                    // Action (api) to update the user in database 

                    export const updateUser = async (formDataHello)=>{
             
                        const { id, username, password, email, address, phone, isAdmin, isActive} = Object.fromEntries(formDataHello);


                        // Condition that if fields are empty then donot update them in database
                         const updateFields = {username, password, email, address, phone, isAdmin, isActive};

                         Object.keys(updateFields).forEach((key)=> updateFields[key]=== '' || undefined && delete updateFields[key])
                        
                         await User.findByIdAndUpdate(id, updateFields)

                        try {
                            
                        } catch (err) {
                            
                        throw new Error("Error while upating user");
                        
                        }
                        redirect('/dashboard/users')
                    }




                     // Action (api) to update the Product in database 

                     export const updateProduct = async (formDataHello)=>{
             
                        const { id, title, price, desc, stock, size, } = Object.fromEntries(formDataHello);


                        // Condition that if fields are empty then donot update them in database
                         const updateFields = { title, price, desc, stock, size,};

                         Object.keys(updateFields).forEach((key)=> updateFields[key]=== '' || undefined && delete updateFields[key])
                        
                         await Product.findByIdAndUpdate(id, updateFields)

                        try {
                            
                        } catch (err) {
                            
                        throw new Error("Error while upating use product");
                        
                        }
                        redirect('/dashboard/products')
                    }




                    // Action (api) for login

                    export const authenticate = async ( formDataHello) => {
                        const { username, password } = Object.fromEntries(formDataHello);
                      
                        try {
                          await signIn("credentials", { username, password });
                          
                          
                        } catch (error) {
                        return {error: "Wrong Credentials "}
                        }
                      
                      };