// authUtils.js

import { User } from "./lib/models";
import { connectionStr } from "../dbconnection/db";
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';


export const login = async (credentials) => {
  mongoose.connect(connectionStr);

  const user = await User.findOne({ username: credentials.username });

  if (!user) throw new Error('Wrong Crdentials');
  const isCorrect = await bcrypt.compare(credentials.password, user.password);

  if (!isCorrect) throw new Error('Incorrect credentials');

  
  // Return only necessary user information
  return {
    username: user.username,
    email: user.email,
    id: user.id,
    img: user.img,
    isAdmin: user.isAdmin,
  };
};
