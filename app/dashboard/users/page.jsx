
import React from 'react'
import styles from "../../ui/dashboard/users/users.module.css"
import Search from "../../ui/dashboard/search/search"
import Link from 'next/link'
import Image from 'next/image'
import Pagination from "../../ui/dashboard/pagination/pagination"
import { fetchUsers } from '../../lib/data'
import { deleteUser } from '../../lib/actions'


const Users =  async ({searchParams}) => {
  
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
 
  

  const {users, count} = await fetchUsers(q, page);
 
  

  return (  
    <div className={styles.container}>
   <div className={styles.top}>
    <Search placeholder={"Search for a user..."}/>
    <Link href={"/dashboard/users/add"} >
    <button className={styles.addButton}> Add New </button>
    </Link>
  
   </div>
   <table className={styles.table}>
<thead>
  <tr>

    <td>Name</td>
    <td>Email</td>
    <td>Created At</td>
    <td>Role</td>
    <td>Status</td>
    <td>Action</td>
  </tr>
</thead>

<tbody>
  {
    users.map((item)=> (
      <tr key={item.email}>
      <td>
        <div className={styles.user}>
        <Image src={item.img || "/user.png"} alt='image' height={40} width={40}/>
    {item.username}
        </div>
      </td>
      <td>{item.email}</td>
      <td>{item.createdAt?.toString().slice(4, 16)}</td>
      <td>{item.isAdmin ? "Admin" : "Client"}</td>
      <td>{item.isActive ? "Active" : "Passive"}</td>
      <td>
        <div className={styles.buttons}>
        <Link href={`/dashboard/users/${item.id}`}>
        <button className={`${styles.button} ${styles.view}`}>View</button>
        </Link>
        <form action={deleteUser}>
          <input type="hidden"  value={(item.id)} name = "id"/>
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

export default Users
