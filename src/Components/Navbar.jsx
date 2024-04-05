import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
import movieLogo from "../assets/moviesImages/movix-logo.png"


const Navbar = () => {
    return (

        <div className='w-full h-16 bg-navbar-color backdrop-blur-sm text-lg text-white flex justify-between items-center py-1 px-20'>

            <NavLink><img src={movieLogo} height={'90%'} /></NavLink>

            <ul className='flex gap-6 justify-center items-center'>

                <li><NavLink to={`/movies`}>Movies</NavLink></li>
                <li><NavLink to={`/tvShows`}>TV Shows</NavLink></li>
                <button><IoSearch /></button>

            </ul>

        </div>
    )
}

export default Navbar;
