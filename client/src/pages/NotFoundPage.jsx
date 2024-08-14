// import React from 'react'

import { NavLink } from "react-router-dom"
import {Button} from "flowbite-react";
import { FaExclamationCircle } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <section className="flex flex-col justify-center
    text-center items-center h-3/4 ">
      <div className="text-4xl mb-2 font-bold "><FaExclamationCircle className="inline text-yellow-300  mb-2"/> 404 Error</div>
      <div className="mb-4">Page not Found</div>
      <Button  className=" bg-gradient-to-r from-red-600 to-yellow-300 via-orange-500 dark:text-black" ><NavLink to='/'>Go Back</NavLink></Button>
    </section>








    // <section className="text-center flex flex-col justify-center items-center h-96">
    //   <i className="fas fa-exclamation-triangle text-yellow-400 fa-4x mb-4"></i>
    //   <h1 className="text-6xl font-bold mb-4">404 Not Found</h1>
    //   <p className="text-xl mb-5">This page does not exist</p>
    //   <NavLink
    //     to="/"
    //     className="text-white bg-indigo-700 hover:bg-indigo-900 rounded-md px-3 py-2 mt-4">
    //     Go Back  
    //     </NavLink>
    // </section>
  )
}

export default NotFoundPage