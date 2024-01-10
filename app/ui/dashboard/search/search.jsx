"use client"

import React from 'react'
import styles from "./search.module.css"
import { MdSearch } from 'react-icons/md'
import { useSearchParams } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
const search = ({placeholder}) => {

 
  const searchParams = useSearchParams();  // usesearchParams hook to create functioan and new url

  const pathname = usePathname(); // usePathname hook to extract the current url 

  const {replace} = useRouter()   // Replace function to replace the url with new url
 





  const handleSearchChange = (e)=>{ // Function to handle onChange functionality


const params = new URLSearchParams(searchParams); // Creating the new url in order to implement search functionality using useSearchParams



params.set("page", "1"); // set the new url for pageination

if(e.target.value){ // Condition
 e.target.value.length > 2 && params.set("q", e.target.value); // Set the new url name and value
} else{
  params.delete("q")
}

replace(`${pathname}? ${params}`) // Replacing/Making new url by combining the previous(pathname) new(params) together

  }




  return (
    <div className={styles.container}>
      <MdSearch/>
      <input type="text" placeholder={placeholder} className={styles.input} onChange={handleSearchChange} />
      
    </div>
  )
}

export default search
