
import Link from "next/link"
import style from "./page.module.css"
import AuthStatus from "./AuthStatus";
import Navbar from "./ui/dashboard/navbar/navbar";
export default function Home() {
 
  

 

  return (
<>
<Navbar/>
    <div className={style.container}>
<div className={style.maincontainer}>
  <h2>Home Page</h2>
 
  <div className={style.buttons}>
  <a href="/login" className={style.btn}>Login</a>
<a href="/dashboard" className={style.btn}>Dashboard</a>
 <a href={"/shop"}><button className={style.btn}>Shop</button> </a> 
  </div>
</div>


    </div>
    </>
  )
}
