import React from 'react'
import Sidebar from "../ui/dashboard/sidebar/sidebar"
import Navbar from "../ui/dashboard/navbar/navbar"
import  styles from "../ui/dashboard/dashboard.module.css"
import Footer from "../ui/dashboard/Footer/Footer"
import { AuthProvider } from '../Provider'

const Layout = ({children}) => {
  return (
    <div className={styles.container}>
     <div className={styles.menu}>
      <Sidebar/>
     </div>
     <div className={styles.content}>
      <Navbar/>
<AuthProvider>
      {children}
      </AuthProvider>
      <Footer/>
     </div>
    </div>
  )
}

export default Layout
