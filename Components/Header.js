"use client";
import React from "react";
import "../app/head.css";
import Link from "next/link";
/* import { FaUserCircle } from "react-icons/fa"; */

function Header() {


  return (
    <>

<header id="masthead">
  <div className="logo">
    <Link href="/HomePage"><h1 className="text-3xl">EICC</h1></Link>
  </div>
  <nav>
            <Link href="/AboutUs" className="a">About</Link>
            <Link href="/ContactUs" className="a">Contact</Link>
            <Link href="/Services" className="a">Services</Link>
            <Link href="/Profile" className="a">
            Profile
              {/* <FaUserCircle className="size-6" /> */}
            </Link>
  </nav>
  <div className="clr"></div>
</header>

    </>
  );
}

export default Header;
