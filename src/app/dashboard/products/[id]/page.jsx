import React from 'react'
import styles from "../../../ui/dashboard/products/singleProduct/singleProduct.module.css"
import Image from 'next/image'
const SingleProduct = () => {
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
          <label >Title</label>
<input type="text" name='title' placeholder='Iphone 15 Pro Max' />
<label> Price</label>
<input type="number" name='price' placeholder='$1200' />
<label> Stock</label>
<input type="number" name='stock' placeholder='10' />
<label> Color</label>
<input type="text" name='color' placeholder='White' />
<label> Size</label>
<input type="number" name='size' placeholder='6.5 Inch' />
<label>Category</label>
<select name="cat" id="cat">

    <option value='kitchen'>Kitchen</option>
    <option value='computer'>Computer</option>
</select>
<label>Description</label>
<textarea name="desc" id="desc" cols="30" rows="10">Description</textarea>


</form>

      </div>
    </div>
  )
}

export default SingleProduct;
