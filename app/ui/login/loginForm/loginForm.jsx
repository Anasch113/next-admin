"use client"
import React, {  useState, useEffect, useRef  } from 'react'
import styles from "./loginForm.module.css"
import { signIn } from 'next-auth/react';

import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';



const LoginForm = () => {
 
 
 
 




const [username, setUserName] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");

const [loading, setLoading] = useState(false);


const router = useRouter()




const handleLogin = async (e) => {
  e.preventDefault();



  try {
    setLoading(true);
   
    const res = await signIn("credentials", {
      username: username,
      password: password,
      redirect: false,
    });
    console.log(res);



   

    if (res.error) {
      setError( res.error);
      toast.error(res.error)
      setLoading(false);

      return
   
    }

    

    const callbackUrl = new URLSearchParams(window.location.search).get('callbackUrl');

    // Redirect based on isAdmin status
    
     
      router.push(callbackUrl || "/shop");
      toast.success("Login")
    
    
  } catch (error) {
    console.log(error);
    setLoading(false);
  }
};




  return (





    <form onSubmit={handleLogin} className={styles.form}>
    <h2>Login</h2>
   <input  required type="text" name='username' placeholder='Username' onChange={(e)=> setUserName(e.target.value)} />
   <input required  type="password" name='password' placeholder='Password' onChange={(e)=> setPassword(e.target.value)} />
   <button disabled = {loading}  type='submit'  >{ loading ? "Logging in..." : "Login"}</button> 
   

  
   {
    error && (
      <p>{error}</p>

    )
   }
  
   </form>
  )
}

export default LoginForm
