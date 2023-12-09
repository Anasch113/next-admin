import React from 'react'
import styles from "../ui/login/login.module.css"
const Login = () => {
  return (
    <div className={styles.container}>

 <form action="" className={styles.form}>
 <h2>Login</h2>
<input type="text" placeholder='Username'  />
<input type="password" placeholder='Password' />
<button> Login</button>
</form>
    </div>
  )
}

export default Login
