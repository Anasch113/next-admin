"use client"
import React from 'react'
import styles from "./slidebar.module.css"
import {MdLogout} from "react-icons/md"
import { signOut } from 'next-auth/react';
import toast from 'react-hot-toast';


const Logout = () => {
 
    const handleSignOut = async ()=>{
        await signOut()
        toast.success("Logout Successfully")
          }
  return (
    <button onClick={handleSignOut}  className={styles.logout}>
    <MdLogout  />
    Logout
  </button>
  )
}

export default Logout

