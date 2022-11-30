import { StarIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { Link } from 'react-router-dom'

import PrimaryButton from '../Button/PrimaryButton'

const HomeCard = ({ home }) => {



  return (
    <div className='lg:w-1/3 md:w-1/2 p-4 w-full'>
      { home?.advertisement === 'Sponsered' ?(
      <>
        <Link
          to={`/service-details/${home?._id}`}
          className='block relative h-48 rounded overflow-hidden'

        >
          <h2 className='text-gray-100 bg-slate-600 title-font text-lg font-medium px-10'>
            {home?.advertisement}
          </h2>
          <img
            alt='home-img'
            className='object-cover object-center w-full h-full block'
            src={home?.image}
          />
        </Link>
        <div className='mt-4'>
          <h3 className='text-gray-500 text-xs tracking-widest title-font mb-1'>
            {home?.location}
          </h3>
          <div className='flex'>
            <h2 className='text-gray-900 title-font text-2xl font-bold  mr-4'>
              {home?.brandName}
            </h2>
            <h2 className='text-gray-100 bg-slate-600 title-font text-lg font-medium px-10'>
              {home?.condition}
            </h2>

          </div>
          <p className='mt-1'>{home?.date}</p>
          <p className='mt-1'>{home?.description}</p>
          <div className='flex my-3'>
            <p className='font-bold mr-3'>Price: $ <span className='text-xl font-bold text-gray-600'>{home?.price}</span></p>
            <p className='font-bold'>Avilable: <span className='text-xl font-bold text-gray-600'>{home?.quantity}</span> Pieces</p>
          </div>
          <div><Link to={`/allproducts/${home._id}`}><PrimaryButton ><span className='px-10'> Book Now</span></PrimaryButton></Link></div>



          <div className='flex mt-1'>
            <StarIcon className='h3 w-3 text-green-500' />
            <StarIcon className='h3 w-3 text-green-500' />
            <StarIcon className='h3 w-3 text-green-500' />
            <StarIcon className='h3 w-3 text-green-500' />
            <StarIcon className='h3 w-3 text-green-500' /> <span>64</span>
          </div>
        </div>



      </>
      ):(
        <>
        </>
      )}


    </div>
  )
}

export default HomeCard
