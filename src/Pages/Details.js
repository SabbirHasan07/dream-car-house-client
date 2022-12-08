import {
  StarIcon,
  HomeIcon,
  CheckBadgeIcon,
  BeakerIcon,
  UserIcon,
} from '@heroicons/react/24/solid'
import { useQuery } from '@tanstack/react-query'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import PrimaryButton from '../Components/Button/PrimaryButton'
import { AuthContext } from '../contexts/AuthProvider'


const Details = () => {
  const { user } = useContext(AuthContext);

  //const [product, setProduct] = useState([]);


  const { id } = useParams();

  const { data: product = [] } = useQuery({
    queryKey: ['allproduc',id],
    queryFn: async () => {
        const res = await fetch(`https://server-nine-mocha.vercel.app/allproducts/${id}`);
        const data = await res.json();
        return data
    }
});
console.log(product)

  // useEffect(() => {
  //   fetch(`https://server-nine-mocha.vercel.app//allproducts/${id}`)
  //     .then(res => res.json())
  //     .then(data => setProduct(data))
  // }, [id]);





  const portfee = parseInt(100);
  const serviceFee = parseInt(21);
  let carCost = parseFloat(product?.price);
  let total = portfee+serviceFee+carCost;

  return (
    <div>
      {/* Header */}
      <div className='flex flex-wrap h-[400px]'>
        <div className='w-1/2 h-full overflow-hidden'>
          <img
            alt='feature'
            className='object-cover object-start h-full w-full'
            src={product?.image}
          />
        </div>
        <div className='w-1/2 h-full overflow-hidden'>
          <p className='mt-6 mr-48 text-end text-xl'>Hello! user</p>
          <img className='ml-72 w-48 mt-3' src={user?.photoURL} alt="" />
          <p className='mr-32 text-end text-2xl font-bold text-gray-500'>{user?.email}</p>
          
        </div>
      </div>

      {/* Main Content */}
      <div className='md:flex justify-between sm:mx-10 md:mx-20 px-4 lg:mx-40 py-12'>
        {/* Details */}
        <div className='flex-1 max-w-lg'>
          <div className='flex justify-between'>
            <div>
              <h2 className='text-gray-900 title-font text-lg font-medium'>
                {product?.brandName}
              </h2>
              <br />
              <h3 className='text-gray-400 text-xs tracking-widest title-font mb-1 mt-1'>
                {product?.location}
              </h3>
              <h3 className='text-gray-400 text-xs tracking-widest title-font mb-1 mt-1'>
                {product?.condition}
              </h3>
              <h3 className='text-gray-400 text-xs tracking-widest title-font mb-1 mt-1'>
                {product?.date}
              </h3>
            </div>
            <div>
              <div className='flex flex-col items-center justify-center'>
                <img
                  alt=''
                  referrerPolicy='no-referrer'
                  className='w-16 h-16 border rounded-full'
                  src={product?.image}
                />
                <p>{product?.brandName}</p>
              </div>
            </div>
          </div>
          <hr />
          <div>
            <div className='flex flex-col items-start pb-4 my-2 mt-8 mx-auto max-w-7xl sm:flex-row'>
              <div className='inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mt-1 text-neutral-600 rounded-full bg-gray-50 sm:mr-3'>
                <HomeIcon />
              </div>
              <div className='flex-grow prose sm:text-left prose-md'>
                <p className='text-gray-500 text-xl'>Band Name</p>
                <p className='text-gray-400'>
                  {product?.brandName}
                </p>
              </div>
            </div>
            <div className='flex flex-col items-start pb-4 mx-auto my-2 max-w-7xl sm:flex-row'>
              <div className='inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mt-1 text-neutral-600 rounded-full bg-gray-50 sm:mr-3'>
                <CheckBadgeIcon />
              </div>
              <div className='flex-grow prose sm:text-left prose-md'>
                <p className='text-gray-500 text-xl'>Condition</p>
                <p className='text-gray-400'>
                 {product?.condition}
                </p>
              </div>
            </div>
            <div className='flex flex-col items-start pb-4 mx-auto my-2 max-w-7xl sm:flex-row'>
              <div className='inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mt-1 text-neutral-600 rounded-full bg-gray-50 sm:mr-3'>
                <BeakerIcon />
              </div>
              <div className='flex-grow prose sm:text-left prose-md'>
                <p className='text-gray-500 text-xl'>Price</p>
                <p className='text-gray-400'>
                 $ {product?.price}
                </p>
              </div>
            </div>
            <div className='flex flex-col items-start pb-4 mx-auto my-2 max-w-7xl sm:flex-row'>
              <div className='inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mt-1 text-neutral-600 rounded-full bg-gray-50 sm:mr-3'>
                <UserIcon />
              </div>
              <div className='flex-grow prose sm:text-left prose-md'>
                <p className='text-gray-500 text-xl'>Seller Information</p>
                
              </div>
            </div>
          </div>
          <hr />
          <div className='mt-4 text-gray-500'>
          {
                  product?.hostemail?(<>
                  <p className='bg-gray-600 text-white w-16 px-16'>Verified</p>
                  </>):(<></>)
                }
          <img className='w-72 mt-2 ' src={product?.hostimage} alt="" />
            <p className='font-bold mt-2'>
              Name: {product?.hostname}
            </p>
            
            <p className='mt-2 font-bold'>
              Email: {product?.hostemail}
            </p>
          </div>
          <br />
          
          <br />
          <div>
            <p className='text-xl text-gray-900'>Reviews</p>
            <div className='flex gap-1 mb-2'>
              <StarIcon className='h4 w-4 text-green-500' />{' '}
              <span>4.8 (10 reviews)</span>
            </div>
          </div>
        </div>

        {/* Cart */}
        <div className='p-4 md:w-1/2 lg:w-1/3 w-full h-full rounded shadow-lg'>
          <h1 className='text-gray-900 text-3xl title-font font-medium mb-2'>
             Total Cost
          </h1>
         

          <p>Dates</p>
          <div className='flex justify-between items-center p-2 border mt-1 mb-2'>
            <div>{product?.date}</div>
          </div>

          
          <div className='flex border-t border-gray-200 py-2'>
            <span className='text-gray-500'>Port Fee</span>
            <span className='ml-auto text-gray-900'>$100</span>
          </div>
          <div className='flex border-t border-gray-200 py-2'>
            <span className='text-gray-500'>Service Fee</span>
            <span className='ml-auto text-gray-900'>$21</span>
          </div>
          <div className='flex border-t border-b mb-6 border-gray-200 py-2'>
            <span className='text-gray-900 font-bold'>Total</span>
            <span className='ml-auto text-gray-900'>${total}</span>
          </div>
          <div className='mt-6 mb-2'>
            <Link to={`/checkout/${product._id}`}>
              <PrimaryButton
                type='submit'
                classes='w-full px-4 py-2 tracking-wide transition-colors duration-300 transform rounded-md'
              >
                Pay Now
              </PrimaryButton>
            </Link>
          </div>
          <p className='text-center text-gray-400 mb-6'>
            You won't be charged yet!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Details
