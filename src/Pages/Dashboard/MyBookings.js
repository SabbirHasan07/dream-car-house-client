import { useQuery } from '@tanstack/react-query'
import React, {  useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BookingCart from '../../Components/Card/BookingCart'


import Spinner from '../../Components/Spinner/Spinner'



const MyBookings = () => {
  


  //const [bookings, setBookings] = useState([])


  
  const { email } = useParams();
  console.log(email)

  const { data: bookings = [] } = useQuery({
    queryKey: ['bookings',email],
    queryFn: async () => {
        const res = await fetch(`http://localhost:8000/bookings/${email}`);
        const data = await res.json();
        return data
    }
});

  // useEffect(() => {
  //   fetch(`http://localhost:8000/bookings/${email}`)
  //     .then(res => res.json())
  //     .then(data => setBookings(data));
  // }, [email]);

  console.log(bookings)

  return (
    <div className='container mx-auto px-4 sm:px-8'>
    {
      bookings.map(bk=><BookingCart
      key={bk._id}
      bk={bk}
      ></BookingCart>)
    }
  </div>
  )
}

export default MyBookings
