import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Search from '@/app/ui/dashboard/search/search'
import Pagination from '@/app/ui/dashboard/pagination/pagination'
import styles from "../../ui/dashboard/users/users.module.css"
import { fetchProducts } from '@/app/lib/data'
import { deleteProduct } from '@/app/lib/actions'
const Products = async ({searchParams}) => {

  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
 
  

  const {products, count} = await fetchProducts(q, page);
 
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
  {
    products.map((item)=>(
      <tr key={item.title}>
      <td>
        <div className={styles.product}>
        <Image src={item.img || "/user.png"} alt='image' height={40} width={40} className={styles.productImage}/>
       {item.title}
        </div>
      </td>
      <td>{item.desc}</td>
      <td>{item.price}</td>
      <td>{item.createdAt.toString().slice(4,16)}</td>
      <td>{item.stock}</td>
      <td>
        <div className={styles.buttons}>
        <Link href={ `/dashboard/products/${item.id}`}>
        <button className={`${styles.button} ${styles.view}`}>View</button>
        </Link>
        <form action={deleteProduct}>
          <input type="hidden" name = "id" value={(item.id)} />
        <button className={`${styles.button} ${styles.delete}`}>Delete</button>
        </form>
        </div>
      
      </td>
    </tr>

    ))
  }
  
 </tbody>
 
 
    </table>
    <Pagination count={count}/>
     </div>
  )
}

export default Products
