"use client"
import React from 'react';
import Link from 'next/link';
import { FaUserCircle } from "react-icons/fa";
import "../app/head.css"
import { MdMenu, MdClose } from "react-icons/md";
import { useState } from 'react';

function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
    <div id='maindiv' >   
    <Link href="/HomePage"><h1 id='eicc' >EICC</h1></Link>
       
       <div id='linkdiv' >      
             <Link href="/AboutUs">About</Link>
             <Link href="/ContactUs">Contact</Link>
       
             <Link href="/Services">Services</Link>
             <Link href="/Profile"><FaUserCircle className='size-6'/></Link>  
       </div>
       {/* Hamburger Menu Icon */}
       <div className="menu-icon" onClick={toggleMenu}>
              {menuOpen ? <MdClose size={30} /> : <MdMenu size={30} />}
            </div>
       
       {/* Menu for mobile devices */}
       <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} id='mv-middle'>
            <Link href="/AboutUs" onClick={toggleMenu}>About</Link>
            <Link href="/ContactUs" onClick={toggleMenu}>Contact</Link>
            <Link href="/Services" onClick={toggleMenu}>Services</Link>
            <Link href="/Profile" onClick={toggleMenu}><FaUserCircle className='size-6' /></Link>
          </div>
       
       </div>
        </>
    
  );
}

export default Header;