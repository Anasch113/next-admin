
import Link from "next/link"
import style from "./page.module.css"
export default function Home() {

  return (

    <div className={style.container}>
<div className={style.maincontainer}>
  <h2>Home Page</h2>
  <div className={style.buttons}>
   <Link href={"/login"}><button  className={style.btn}>Login</button></Link> 
 <Link href={"/dashboard"}><button className={style.btn}>Dashboard</button></Link>   
  </div>
</div>


    </div>
  
  )
}
