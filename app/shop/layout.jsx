import React from 'react';
import Navbar from '../ui/dashboard/navbar/navbar'; // Import your Navbar component

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;