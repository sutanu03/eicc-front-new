"use client"
import React, { useContext, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/Components/Header';
import "./services.css"
import { UserContext } from '@/context/UserContext';
import { useRouter } from "next/navigation";

const Services = () => {

  // validate token
  const { token } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    if(token === null){
      router.push("/");
    }
 }, [token])

  return (
    <>
    <Header />
    <div id='maindiv1' className='flex items-center justify-around mt-5'>


<Link href="/DomesticHelp">
    <div id='card1' className="card">
  <img src="/img/clean.png" className="card__image" alt="brown couch" />
  <div className="card__content">
    <time dateTime="2021-03-30" className="card__date"> <i className='font-bold'> From <strong>₹ 199</strong> </i>
      {/* Brooming |
        Mopping |
        Bathroom Cleaning |
        Dusting |
        Dishwashing */}</time>
    <span className="card__title">
        Domestic Help
        </span>
  </div>
</div>
</Link>

<Link href="/Cooking">
    <div id='card2'  className="card">
  <img  src="/img/cook.png" className="card__image" alt="brown couch" />
  <div className="card__content">
    <time dateTime="2021-03-30" className="card__date">{/* Feels like home... */} <i className='font-bold'>From <strong>₹ 299</strong> (For 6 Hours) </i> </time>
    <div className='flex gap-20'>
    <span className="card__title">
      Cooking
    </span>
    
    </div>
  </div>
</div>
</Link>



    </div>
    </>
  )
}

export default Services
