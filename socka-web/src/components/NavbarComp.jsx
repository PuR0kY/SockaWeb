import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import '../index.css';

const NavbarComp = () => {
  return (
    <div className='header'>
      <nav className='navbar'>
        <div className='hamburger'>
            <FaBars />
        </div>
          <ul className='nav-menu'>
            <li className='nav-item'>
              <a href='/'>Home</a>
            </li>
            <li className='nav-item'>
              <a href='/'>Projects</a>
            </li>
            <li className='nav-item'>
              <a href='/'>About</a>
            </li>
          </ul>
      </nav>
    </div>
  )
}

export default NavbarComp
