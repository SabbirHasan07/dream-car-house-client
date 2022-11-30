import React from 'react'

const WhosComing = ({
  setSelectedIndex,
  host,
  bookingData,
  setBookingData,
}) => {
  console.log(host)
  return (
    <>
      <h1 className='text-2xl font-bold mb-12'>Review</h1>
      <div className='flex gap-10 flex-wrap-justify-between'>
        
        <div className='flex flex-col items-center justify-center'>
          <img
            alt=''
            className='w-16 h-16 border rounded-full'
            src={host?.image}
          />
          <p>Seller Name: {host?.name}</p>
          <p>Seller Email: {host?.email}</p>
        </div>
      </div>
     
      <button
        className='py-2 px-4 rounded-md mt-44 hover:text-gray-100 bg-gradient-to-r from-emerald-500 to-lime-500 text-white'
        onClick={() => setSelectedIndex(2)}
      >
        Continue
      </button>
    </>
  )
}

export default WhosComing
