import React from 'react'
import styles from "../../../ui/dashboard/users/singleUser/singleUser.module.css"
import Image from 'next/image'
const SingleUser = () => {
  return (
    <div  className={styles.container}>
      <div className={styles.infoContainer}>

<div className={styles.imgContainer}>
<Image src={'/user.png'} alt='image'  fill/>
John Doe
</div>
      </div>

      <div className={styles.formContainer}>
        <form  className={styles.form}>
<input type="text" name='username' placeholder='John Doe' />
<label> Email</label>
<input type="email" name='email' placeholder='johndoe@gmail.com' />
<label> Password</label>
<input type="password" name='password' placeholder='********' />
<label> Phone</label>
<input type="number" name='phone' placeholder='+923289602109' />
<label> Address</label>
<textarea type="text" name='address' placeholder='New York' />
<label>Is Admin</label>
<select name="isAdmin" id="isAdmin">

    <option value={true}>Yes</option>
    <option value={false}>No</option>
</select>

<label>Is Active</label>
<select name="isActive" id="isActive">

    <option value={true}>Yes</option>
    <option value={false}>No</option>
</select>
</form>

      </div>
    </div>
  )
}

export default SingleUser
