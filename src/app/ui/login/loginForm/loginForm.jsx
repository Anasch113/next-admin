"use client"
import React from 'react'
import styles from "./loginForm.module.css"
import { authenticate } from '@/app/lib/actions'
import { useState } from 'react'
const LoginForm = () => {
const [err, setErr]  = useState()

    const handleLogin = async (formData)=>{


        const data = await authenticate(formData);
        data.error && setErr(data.error)

        
      }
  return (


    <form action={handleLogin} className={styles.form}>
    <h2>Login</h2>
   <input type="text" name='username' placeholder='Username'  />
   <input type="password" name='password' placeholder='Password' />
   <button>Login</button>
   {err && err}
   </form>
  )
}

export default LoginForm
