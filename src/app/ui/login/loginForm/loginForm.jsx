"use client"
import React, { useState } from 'react'
import styles from "./loginForm.module.css"
import { signIn } from 'next-auth/react';

import { useRouter } from 'next/navigation';


const LoginForm = () => {

const [username, setUserName] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");
const router = useRouter();


const handleLogin = async (e)=>{

e.preventDefault();
  

  try {

    const res = await signIn("credentials", {
      username,
      password,
      redirect: false,
        })


        if(res.error){
          setError("Wrong Credentials")
          return
        }

      router.replace("/dashboard");

  } catch (error) {
   console.log(error)
  }

}
 
  return (


    <form onSubmit={handleLogin} className={styles.form}>
    <h2>Login</h2>
   <input  type="text" name='username' placeholder='Username' onChange={(e)=> setUserName(e.target.value)} />
   <input  type="password" name='password' placeholder='Password' onChange={(e)=> setPassword(e.target.value)} />
  
   <button type='submit'>Login</button>
   {
    error && (
      <p>{error}</p>

    )
   }
   
   </form>
  )
}

export default LoginForm
