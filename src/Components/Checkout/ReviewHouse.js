import React from 'react'
import {

  FaceSmileIcon,
  FireIcon,
  NoSymbolIcon,
  UserGroupIcon,
} from '@heroicons/react/24/solid'

const ReviewHouse = ({ setSelectedIndex }) => {

  return (
    <>
      <h1 className='text-gray-900 title-font text-4xl font-medium'>
        Review Cars rules
      </h1>
      <br />
      <hr />
      <p className='text-xl font-bold my-4'>Things to keep in mind</p>
      <div>
        <div class='flex flex-col items-center my-2 mt-8 mx-auto max-w-7xl sm:flex-row'>
          <div class='inline-flex p-2 border items-center justify-center flex-shrink-0 mt-1 text-neutral-600 bg-gray-50 sm:mr-3'>
            <UserGroupIcon className=' w-5 h-5' />
          </div>
          <div class='flex-grow prose sm:text-left prose-md'>
            <p className='text-gray-800 text-medium'>
              Our delivary man will deliver product at your home
            </p>
          </div>
        </div>
       
          <div class='flex-grow prose sm:text-left prose-md'>
            <p className='text-gray-800 text-medium'>5 years service warrenty</p>
          </div>
        </div>
        <div class='flex flex-col items-center  my-2 mx-auto max-w-7xl sm:flex-row'>
          <div class='inline-flex p-2 border items-center justify-center flex-shrink-0 mt-1 text-neutral-600 bg-gray-50 sm:mr-3'>
            <NoSymbolIcon className=' w-5 h-5' />
          </div>
          <div class='flex-grow prose sm:text-left prose-md'>
            <p className='text-gray-800 text-medium'>After crashed warrenty is not allowed</p>
          </div>
        </div>
        <div class='flex flex-col items-center  my-2 mx-auto max-w-7xl sm:flex-row'>
          <div class='inline-flex p-2 border items-center justify-center flex-shrink-0 mt-1 text-neutral-600 bg-gray-50 sm:mr-3'>
            <FireIcon className=' w-5 h-5' />
          </div>
          <div class='flex-grow prose sm:text-left prose-md'>
            <p className='text-gray-800 text-medium'>Burn not allowed</p>
          </div>
        </div>
      </div>

      
      <br />

      <button
        className='p-2 rounded-md hover:text-gray-100 bg-gradient-to-r from-emerald-500 to-lime-500 text-white'
        onClick={() => setSelectedIndex(1)}
      >
        Agree and continue
      </button>
    </>
  )
}

export default ReviewHouse
