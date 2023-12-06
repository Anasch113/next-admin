import React from 'react'
import styles from "./transactions.module.css"
import Image from 'next/image'
const transactions = () => {
  return (
    <div className={styles.container}>
     <h1>Latest Transactions</h1>
     <table className={styles.table}>
<thead>
<tr>
  <td>Name</td>
  <td>Status</td>
  <td>Date</td>
  <td>Amount</td>
</tr>


</thead>

<tbody>
<tr>
  <td>
    <Image
    src={"/user.png"}
    alt='image'
    height={40}
    width={40}
    className={styles.userImage}
    />

 
  </td>
  <td >
    <span  className={`${styles.status} ${styles.pending}`}> Pending </span>
   </td>
  <td>11.8.23</td>
  <td>$3,200</td>
</tr>

<tr>
  <td>
    <Image
    src={"/user.png"}
    alt='image'
    height={40}
    width={40}
    className={styles.userImage}
    />

 
  </td>
  <td >
    <span  className={`${styles.status} ${styles.done}`}> Done </span>
   </td>
  <td>11.8.23</td>
  <td>$3,200</td>
</tr>

<tr>
  <td>
    <Image
    src={"/user.png"}
    alt='image'
    height={40}
    width={40}
    className={styles.userImage}
    />

 
  </td>
  <td >
    <span  className={`${styles.status} ${styles.pending}`}> Pending </span>
   </td>
  <td>11.8.23</td>
  <td>$3,200</td>
</tr>

<tr>
  <td>
    <Image
    src={"/user.png"}
    alt='image'
    height={40}
    width={40}
    className={styles.userImage}
    />

 
  </td>
  <td >
    <span  className={`${styles.status} ${styles.cancelled}`}> Cancelled </span>
   </td>
  <td>11.8.23</td>
  <td>$3,200</td>
</tr>
</tbody>
     </table>
    </div>
  )
}

export default transactions
