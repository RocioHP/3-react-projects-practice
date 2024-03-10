import React from 'react'
import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { GlobalContext } from '../../context'

const Navbar = () => {
  const {searchParam, setSearchParam, handleSubmit} = useContext(GlobalContext); 

  


  return (
    <div className='flex justify-center items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0 lg:justify-between'>
      <h2 className='text-2xl font-semibold'>
       <NavLink  to={"/"}>Food Recipes</NavLink>
      </h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="search" placeholder='Enter Items...'
        value={searchParam}
        onChange={(event) => setSearchParam(event.target.value)}
        className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200"></input>
      </form>
      <ul className='flex gap-5 text-black '>
        <li>
          <NavLink className="hover:text-gray-500 duration-300" to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink className="hover:text-gray-500 duration-300" to={"/favorites"}>Favorites</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
