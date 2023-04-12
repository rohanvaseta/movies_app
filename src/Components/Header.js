/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <div>
       
       <header className=" bg-black bg-opacity-5 text-purple-800 shadow-lg  text-xl flex flex-wrap flex-row items-center justify-center mb-2 ">
        <div className="container mx-auto flex items-center justify-center flex-wrap flex-row">
          <a href="" className="flex items-center justify-center">
      <span className="ml-4 mr-4 uppercase font-black"><Link to="/">
            <span>HUSTLE MOVIES</span>
            </Link></span>
    </a>
    <nav className="font-semibold text-base lg:text-lg flex flex-wrap flex-row justify-center items-center">
      <ul className=" flex items-center  flex-wrap flex-row">
        <li className="flex p-5 xl:p-8 active">
        <Link to="/">
            <span>Home</span>
            </Link>
        </li>
      
        <li className="p-5 xl:p-8">
       <Link to="/Favourite">
            <span>Favourite</span>
            </Link>
        </li>
      </ul>
    </nav>
    <div className='right-9 '>
    <input type="search" className='rounded bg-white-400 text-purple-800 w-64 text-lg p-1    flex flex-wrap flex-row' placeholder="Serch For Movie..." value={props.searchValue} onChange={(e) => props.setSearchValue(e.target.value)} />
      </div>
      </div>
</header>
    </div>
  )
}

export default Header
