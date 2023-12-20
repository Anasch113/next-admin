import React from 'react'
import styles from "./slidebar.module.css"
import MenuLink from './menuLink/menuLink';
import { auth, signOut } from '@/app/auth';
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import Image from 'next/image';
const Sidebar = async () => {
  const session = await auth();
  console.log(session)

  const menuItems = [
    {
      title: "Pages",
      list: [
        {
          title: "Dashboard",
          path: "/dashboard",
          icon: <MdDashboard />,
        },
        {
          title: "Users",
          path: "/dashboard/users",
          icon: <MdSupervisedUserCircle />,
        },
        {
          title: "Products",
          path: "/dashboard/products",
          icon: <MdShoppingBag />,
        },
        {
          title: "Transactions",
          path: "/dashboard/transactions",
          icon: <MdAttachMoney />,
        },
      ],
    },
    {
      title: "Analytics",
      list: [
        {
          title: "Revenue",
          path: "/dashboard/revenue",
          icon: <MdWork />,
        },
        {
          title: "Reports",
          path: "/dashboard/reports",
          icon: <MdAnalytics />,
        },
        {
          title: "Teams",
          path: "/dashboard/teams",
          icon: <MdPeople />,
        },
      ],
    },
    {
      title: "User",
      list: [
        {
          title: "Settings",
          path: "/dashboard/settings",
          icon: <MdOutlineSettings />,
        },
        {
          title: "Help",
          path: "/dashboard/help",
          icon: <MdHelpCenter />,
        },
      ],
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image className={styles.userImage} src={session.user.img || '/user.png'} alt='user' height={50} width={50}/>

        <div className={styles.userDetail}>
          <span  className={styles.username}>{session.user.username}</span>
          <span  className={styles.userTitle}>Adminstrator</span>

        </div>
      </div>
<ul  className={styles.list}>
  {menuItems.map((cat)=>(
    <li key={menuItems}> 
    <span className={styles.cat}>{cat.title}</span>

    {cat.list.map((item)=>(
      <MenuLink key={item.title} item = {item}/>
    ))}
    </li>
  ))}
</ul>
<form action={ async ()=>{
  "use server"
  await signOut();
}}>
<button className={styles.logout}>
          <MdLogout />
          Logout
        </button>

</form>


    </div>
  )
}

export default Sidebar
