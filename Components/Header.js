"use client";
import React from "react";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import "../app/head.css";
import { MdMenu, MdClose } from "react-icons/md";
import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header id="header-container">
        <div id="maindiv">
          <Link href="/HomePage">
            <h1 id="eicc">EICC</h1>
          </Link>

          <nav id="linkdiv">
            <Link href="/AboutUs">About</Link>
            <Link href="/ContactUs">Contact</Link>
            <Link href="/Services">Services</Link>
            <Link href="/Profile">
              <FaUserCircle className="size-6" />
            </Link>
          </nav>

          {/* Hamburger Menu Icon */}
          <div className="menu-icon" onClick={toggleMenu}>
            {menuOpen ? <MdClose size={30} /> : <MdMenu size={30} />}
          </div>
        </div>

        {/* Menu for mobile devices */}
        {menuOpen && (
          <nav className="mobile-menu">
            <Link href="/AboutUs" onClick={toggleMenu}>
              About
            </Link>
            <Link href="/ContactUs" onClick={toggleMenu}>
              Contact
            </Link>
            <Link href="/Services" onClick={toggleMenu}>
              Services
            </Link>
            <Link href="/Profile" onClick={toggleMenu}>
              <FaUserCircle className="size-6" />
            </Link>
          </nav>
        )}
      </header>
    </>
  );
}

export default Header;
