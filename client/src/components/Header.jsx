// import React from 'react'
import { Button, TextInput } from "flowbite-react"
import { FaSearch,FaSun } from "react-icons/fa";
import {NavLink} from 'react-router-dom'
const Header = () => {
  return (
    <>
    <header className="flex dark:text-white items-center" >
    <div className="text-2xl font-bold p-2">
    <Button  className="text-black bg-gradient-to-r from-red-500 to-yellow-300 via-orange-500 dark:text-white inline p-0 m-0 " ><div className="text-2xl font-bold p-0 m-0"> Ritik&apos;s</div></Button><span>Blog</span>
    </div>
    <div className="m-auto">

      <TextInput id="search" type='text' rightIcon={FaSearch} className=""/>
    </div>
    <div className="m-auto flex gap-2 ">
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/projects'>Projects</NavLink>
    </div>
    <div>
    <Button>
    <FaSun size={20}/>
    </Button>
    </div>
    </header>
    </>
  )
}

export default Header