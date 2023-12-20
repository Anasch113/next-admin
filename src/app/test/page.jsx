import React from 'react'

const page = () => {

    const handleSubmit = async (formData)=>{
"use server"
console.log(formData)
const helloUsername = formData.get("username")
console.log("hello", helloUsername)

    }
  return (
    <form action={handleSubmit}>

        <input type="text" name = "username" />
        <button>Submit</button>
    </form>
  )
}

export default page
