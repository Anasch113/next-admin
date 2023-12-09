import React from 'react'
import styles from "../../../ui/dashboard/products/addProduct/addProduct.module.css"
const page = () => {
  return (
    <div className={styles.container}>
    <form action="" className={styles.form}>
        <input type="text" placeholder='Title' name='title' required />
<select name="cat" id="cat">
<option value="general"> Choose a Category</option>
<option value="kithcen"> Kithcen</option>
<option value="phone"> Phone</option>
<option value="computer">Computer</option>


</select>
<input type="number" name='price' placeholder='price' />
<input type="number" name='stock' placeholder='stock' />
<input type="text" name='color' placeholder='color' />
<input type="text" name='size' placeholder='size' />

<textarea name="desc" id="desc" rows="16"></textarea>

<button type='submit'>Submit</button>


    </form>
    </div>
  )
}

export default page
