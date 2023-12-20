import React from 'react'
import styles from "../../../ui/dashboard/users/singleUser/singleUser.module.css"
import Image from 'next/image'
import { fetchSingleUser } from '@/app/lib/data'
import { updateUser } from '@/app/lib/actions'

const SingleUser = async ({params}) =>  {
const {id} = params;
  const user = await fetchSingleUser(id)
  
  return (
    <div  className={styles.container}>
      <div className={styles.infoContainer}>

<div className={styles.imgContainer}>
<Image  src={user.img || "/user.png"} alt='image' fill  />
{user.username}
</div>
      </div>

      <div className={styles.formContainer}>
        <form action={updateUser}  className={styles.form}>
          <input type="hidden" name='id' value={user.id} />
<input type="text" name='username' placeholder={user.username} />
<label> Email</label>
<input type="email" name='email' placeholder={user.email} />
<label> Password</label>
<input type="password" name='password' placeholder='' />
<label> Phone</label>
<input type="number" name='phone' placeholder={user.phone} />
<label> Address</label>
<textarea type="text" name='address' placeholder={user.address}/>
<label>Is Admin</label>
<select name="isAdmin" id="isAdmin">

    <option value={true} selected = {user.isAdmin}>Yes</option>
    <option value={false} selected = {!user.isAdmin}>No</option>
</select>

<label>Is Active</label>
<select name="isActive" id="isActive">

    <option value={true} selected = {user.isActive}>Yes</option>
    <option value={false} selected = {!user.isActive}>No</option>
</select>
<button type='submit'>Update</button>
</form>

      </div>
    </div>
  )
}

export default SingleUser
