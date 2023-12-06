"use client"
import React from 'react'
import styles from "./menuLink.module.css"
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const menuLink = ({item}) => {
    const pathName = usePathname();
  return (
    <Link href={item.path} className= {`${styles.container} ${item.path === pathName && styles.active}`}>
         {item.icon}
        {item.title}
       
      
    </Link>
  )
}

export default menuLink
