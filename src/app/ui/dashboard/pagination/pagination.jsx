import React from 'react'
import styles from "./pagination.module.css"
const pagination = () => {
  return (
    <div className={styles.container}>
      <button disabled className={styles.button}>Next</button>
      <button  className={styles.button}>Previous</button>
    </div>
  )
}

export default pagination
