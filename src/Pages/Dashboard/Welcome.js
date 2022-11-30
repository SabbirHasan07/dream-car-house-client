import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthProvider'

const Welcome = () => {
  const { user } = useContext(AuthContext)

  return (
    <div className='h-screen text-gray-700 flex flex-col justify-center items-center pb-16'>
      <div>
        <img
          className='object-cover w-24 h-24 mx-2 rounded-full'
          src={user?.photoURL}
          alt='avatar'
          referrerPolicy='no-referrer'
        />
      </div>
      <div className='flex justify-center items-center'>
        <p className='text-6xl font-bold'>Welc</p>
        <div className='w-9 h-9 border-8 border-dashed rounded-full animate-spin mt-3 border-green-400'></div>
        <p className='text-6xl font-bold mr-2'>me</p>
        
      </div>
      <div className='flex justify-center text-gray-500 items-center mt-4'>
        <p className='text-3xl font-medium'>{user?.email}</p>
        <p className='text-3xl font-medium ml-2'>to stay with us</p>

      </div>
      
    </div>
  )
}

export default Welcome
