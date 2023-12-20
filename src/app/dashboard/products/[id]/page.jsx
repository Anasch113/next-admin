import React from 'react'
import styles from "../../../ui/dashboard/products/singleProduct/singleProduct.module.css"
import Image from 'next/image'
import { updateProduct } from '@/app/lib/actions';
import { fetchSingleProduct } from '@/app/lib/data';
const SingleProduct = async ({params}) => {

  const {id} = params;
  const product = await fetchSingleProduct(id)

  return (
    <div  className={styles.container}>
      <div className={styles.infoContainer}>

<div className={styles.imgContainer}>
<Image src={product.img || "/user.png"} alt='image'  fill/>
{product.username}
</div>
      </div>

      <div className={styles.formContainer}>
        <form  action={updateProduct} className={styles.form}>
          <input type="hidden" name='id' value={product.id} />
          <label >Title</label>
<input type="text" name='title' placeholder={product.title} />
<label> Price</label>
<input type="number" name='price' placeholder={product.price} />
<label> Stock</label>
<input type="number" name='stock' placeholder={product.stock} />
<label> Color</label>
<input type="text" name='color' placeholder={product.color} />
<label> Size</label>
<input type="number" name='size' placeholder={product.size} />
<label>Category</label>
<select name="cat" id="cat">

    <option value='kitchen'>Kitchen</option>
    <option value='computer'>Computer</option>
</select>
<label>Description</label>
<textarea name="desc" id="desc" cols="30" rows="10">{product.desc}</textarea>

<button type='submit'>Update</button>


</form>

      </div>
    </div>
  )
}

export default SingleProduct;
