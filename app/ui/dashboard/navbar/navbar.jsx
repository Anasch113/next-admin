"use client"
import React from 'react'
import styles from "./navbar.module.css"
import styles2 from "../../../page.module.css"
import { usePathname } from 'next/navigation'


import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";
import AuthStatus from '../../../AuthStatus';
import Logout from '../sidebar/Logout';

import Link from 'next/link';
const navbar = () => {
  const pathname = usePathname();
  const isAuthenticated  =  AuthStatus();



  return (
    <div className={styles.container} >
      <div  className={styles.title}> {pathname.split("/").pop()}</div>
      <div  className={styles.menu}>
<div  className={styles.search}>
<MdSearch/>
<input type="text" placeholder='Search...' className={styles.input} />
</div>

<div className={styles.icons}>
<MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
         <p> {AuthStatus.username}</p> 
</div>
<div>
  {
    isAuthenticated ? <Logout/> : <Link href={'/login'}> <button  className={styles2.btn}>Login</button></Link>
  }
</div>
      
      </div>
     
    </div>
  )
}

export default navbar
