"use client"
import React, { useState, useEffect } from 'react';

const AuthStatus = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState("");

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/auth/session');
        if (response.ok) {
          const data = await response.json();
           
          setIsAuthenticated(data.user);
          setUser(data.user)  // Set isAuthenticated based on the presence of user data
         



        } else {
          console.error('Failed to fetch session data');
        }
      } catch (error) {
        console.error('Error fetching session data:', error);
      }
    };

    fetchSession();
  }, []);


  
  useEffect(()=>{
console.log(user)
  }, [user])

  return isAuthenticated, user;
};

export default AuthStatus;
