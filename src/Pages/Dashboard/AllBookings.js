import React, { useEffect, useState } from 'react'
import AllbookingCrad from '../../Components/Card/AllbookingCrad';

const AllBookings = () => {

  const [bookings, setBookings] = useState([])
useEffect(() => {
    fetch(`https://server-nine-mocha.vercel.app/booking`)
      .then(res => res.json())
      .then(data => setBookings(data));
  }, []);

  console.log(bookings)

  return (
    <div className='container mx-auto px-4 sm:px-8'>
      {
        bookings.map(bk=><AllbookingCrad
        key={bk._id}
        bk={bk}
        ></AllbookingCrad>)
      }
     
    </div>
  )
}

export default AllBookings
