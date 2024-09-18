"use client"
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import "./domestic.css";
import Link from 'next/link';
import Header from '@/Components/Header';

const Domestic = () => {

  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedCount, setSelectedCount] = useState(0);

  const toggleSelection = (itemName) => {
    if (selectedItems.includes(itemName)) {
      setSelectedItems(selectedItems.filter(item => item !== itemName));
      setSelectedCount(selectedCount - 1);
    } else {
      setSelectedItems([...selectedItems, itemName]);
      setSelectedCount(selectedCount + 1);
    }
  };

  const handleSelect = () => {
    // Store selected items in localStorage
    localStorage.setItem('selectedItems', JSON.stringify(selectedItems));
  };

  return (
    <>
    <Header />
    <div className='mobile-screen-main'>
      <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 mt-5">
        <div className={`tpn_card ${selectedItems.includes('Brooming') ? 'selected' : ''}`} onClick={() => toggleSelection('Brooming')}>
          <img src="/img/brooming.png" className="w-100 mb-4" />
          
          <i className='font-bold'><strong>₹ 199</strong> (For 1.5 Hours)</i>
          {/* <p><strong>₹ 199 (For 1.5 Hours)</strong></p> */}
        </div>

        <div className={`tpn_card ${selectedItems.includes('Mopping') ? 'selected' : ''}`} onClick={() => toggleSelection('Mopping')}>
          <img src="/img/mopping.png" className="w-100 mb-4" />
          
          <i className='font-bold'><strong>₹ 199</strong> (For 1.5 Hours)</i>
          </div>
        <div className={`tpn_card ${selectedItems.includes('Bathroom Cleaning') ? 'selected' : ''}`} onClick={() => toggleSelection('Bathroom Cleaning')}>
          <img src="/img/bathroom.png" className="w-100 mb-4" />
          
          {/* <p>₹ 399 (For 1.5 Hours)</p> */}
          <i className='font-bold'><strong>₹ 399</strong> (For 1.5 Hours)</i>
          </div>
        <div className={`tpn_card ${selectedItems.includes('Dusting') ? 'selected' : ''}`} onClick={() => toggleSelection('Dusting')}>
          <img src="/img/dusting.png" className="w-100 mb-4" />
          
          <i className='font-bold'><strong>₹ 199</strong> (For 1.5 Hours)</i>
          </div>
        <div className={`tpn_card ${selectedItems.includes('Dishwashing') ? 'selected' : ''}`} onClick={() => toggleSelection('Dishwashing')}>
          <img src="/img/dish.png" className="w-100 mb-4" />
          
          <i className='font-bold'><strong>₹ 199</strong> (For 1.5 Hours)</i>
          </div>
      </div>
      <div className="text-center mt-3">
        <p>Your Selected Items: {selectedCount}</p>
        <Link href="/BookingDomestic">
          <Button
            className='text-[#000] bg-[#94D163] font-semibold'
            variant="primary"
            onClick={handleSelect}
            disabled={selectedCount === 0}
          >
            Confirm Booking
          </Button>
        </Link>
      </div>
    </div>
    </>
  );
};

export default Domestic;


/* except bathroom cleaning(399) everything will be 199 for 1.5hours */

/* cooking 299 6hours */