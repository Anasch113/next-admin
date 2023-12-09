import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Search from '@/app/ui/dashboard/search/search'
import Pagination from '@/app/ui/dashboard/pagination/pagination'
import styles from "../../ui/dashboard/users/users.module.css"
const Products = () => {
  return (
    <div className={styles.container}>
    <div className={styles.top}>
     <Search placeholder={"Search for a product..."}/>
     <Link href={"/dashboard/products/add"}>
     <button className={styles.addButton}> Add New </button>
     </Link>
   
    </div>
    <table className={styles.table}>
 <thead>
   <tr>
 
   <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
   </tr>
 </thead>
 
 <tbody>
   <tr>
     <td>
       <div className={styles.product}>
       <Image src={"/user.png"} alt='image' height={40} width={40} className={styles.productImage}/>
       Iphone 15 pro max
       </div>
     </td>
     <td>Desc...</td>
     <td>1300$</td>
     <td>12.11.23</td>
     <td>50</td>
     <td>
       <div className={styles.buttons}>
       <Link href={"/dashboard/products/test"}>
       <button className={`${styles.button} ${styles.view}`}>View</button>
       </Link>
       <button className={`${styles.button} ${styles.delete}`}>Delete</button>
       </div>
     
     </td>
   </tr>
 </tbody>
 
 
    </table>
    <Pagination/>
     </div>
  )
}

export default Products
