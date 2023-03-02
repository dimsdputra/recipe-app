import React from 'react'
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className='w-full min-h-[10rem] shadow-2xl rounded-lg flex flex-col justify-center items-center border'>
        <p className='font-bold font-Nunito text-2xl text-center mb-4'>Page 404 Not Found</p>
        <Link to={"/"} className='shadow-lg rounded-lg bg-gradient-to-br from-[#acacac] to-[#878585] px-6 py-4 text-white font-Nunito font-semibold hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-700'>Go to Home Page</Link>
    </div>
  )
}

export default NotFound