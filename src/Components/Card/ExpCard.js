import React from 'react'
import { Link } from 'react-router-dom'
import PrimaryButton from '../Button/PrimaryButton'



const ExpCard = () => {

  return (
    <div className='flex flex-wrap gap-6'>
      <div className='lg:w-1/4 md:w-1/2 p-4 w-full'>
        <Link
          to='/sekectCategories/Like New'
          className='block relative h-32 rounded overflow-hidden'
        >
          <img
            alt='e-commerce'
            className='object-cover object-center w-full h-full block'
            src='https://stimg.cardekho.com/images/carexteriorimages/930x620/Bentley/Flying-Spur/7776/1645012163948/front-left-side-47.jpg'

          />
        </Link>
        <div className='mt-4'>

          <h2 className='text-gray-900 title-font text-lg font-medium'>
            Brand New Cars

          </h2>
         

          <div className='mt-6'>
            <Link to='/sekectCategories/Brand New'><PrimaryButton><span className='px-32'>Select</span></PrimaryButton></Link>



          </div>
        </div>
      </div>
      <div className='lg:w-1/4 md:w-1/2 p-4 w-full'>
        <Link
          to='/sekectCategorie/ModifiedCar'
          className='block relative h-32 rounded overflow-hidden'
        >
          <img
            alt='e-commerce'
            className='object-cover object-center w-full h-full block'
            src='https://i.pinimg.com/originals/9c/eb/68/9ceb68af944fb31a1c663ff64bbf0dc0.jpg'

          />
        </Link>
        <div className='mt-4'>

          <h2 className='text-gray-900 title-font text-lg font-medium'>
            Modified Cars

          </h2>
          <h3 className='text-gray-500 text-xs tracking-widest title-font mb-1 mt-3'>
          This is the wellknown car website. Here you found best and trusted products.

          </h3>

          <div className='mt-6'>
          <Link to='/sekectCategorie/Modified'><PrimaryButton><span className='px-32'>Select</span></PrimaryButton></Link>



          </div>
        </div>
      </div>
      <div className='lg:w-1/4 md:w-1/2 p-4 w-full'>
        <Link
          to='/sekectCategories/Recondition Car'
          className='block relative h-32 rounded overflow-hidden'
        >
          <img
            alt='e-commerce'
            className='object-cover object-center w-full h-full block'
            src='https://carclub.mu/wp-content/uploads/2020/05/Post-Covid-19-Learn-How-To-Buy-Reconditioned-Cars-Safely-In-Mauritius.jpg'

          />
        </Link>
        <div className='mt-4'>

          <h2 className='text-gray-900 title-font text-lg font-medium'>
            Recondition Cars

          </h2>
          <h3 className='text-gray-500 text-xs tracking-widest title-font mb-1 mt-3'>
          This is the wellknown car website. Here you found best and trusted products.

          </h3>

          <div className='mt-6'>
          <Link to='/sekectCategories/Reconditions'><PrimaryButton><span className='px-32'>Select</span></PrimaryButton></Link>



          </div>
        </div>
      </div>
    </div>
  )
}

export default ExpCard
