import React from 'react'
import {Link, useNavigate } from 'react-router-dom'
import {IoMdAdd, IoMdSearch} from 'react-icons/io'

const Navbar = ({searchTerm, setSearchTerm, user} ) => {

  const navigate = useNavigate();



  return (
    <div className="flex gap-2 md:gap-5 w-full pb-7">
      <div className="flex justify-start items-center w-full px-2 rounded-md bg-white border-none outline-none focus-within:shadow-sm">
        <IoMdSearch fontSize={21} className="ml-1"/>
        <input 
          type="text"
          onchange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search"
          value={searchTerm}
          onFocus={() => navigate('/search')}
          className="p-2 w-full bg-white outline-none"
        />
      </div>
    </div>
  )
}

export default Navbar