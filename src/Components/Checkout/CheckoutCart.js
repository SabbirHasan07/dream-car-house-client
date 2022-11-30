import React, { useEffect, useState } from 'react'
import { ArrowRightIcon, StarIcon } from '@heroicons/react/24/solid'
import { Link, useParams } from 'react-router-dom'
const CheckoutCart = () => {
  const [product, setProduct] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:8000/allproducts/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
  }, [id]);

  let carPrice = parseFloat(product.price);
  const ptCharge = 100;
  const serviceCharge = 21;
  let total = carPrice+ptCharge+serviceCharge;

  return (
    <div class='px-6 py-5 md:w-1/2 lg:w-1/3 w-full h-full rounded-md shadow-lg'>
      <div className='flex justify-between'>
        <div class='text-gray-900 text-xl title-font font-medium mb-2 w-1/2'>

          {product?.brandName}
        </div>
        <Link
          to='/service-details'
          className='block relative h-28 rounded overflow-hidden w-1/2'
        >
          <img
            alt='e-commerce'
            className='object-cover object-center w-full h-full block'
            src={product?.image}
          />
        </Link>
      </div>


      <p>Dates</p>
      <div className='flex justify-between items-center p-2 border mt-1 mb-2'>
        <div>{product?.date}</div>
        
      </div>

      <div class='flex border-t border-gray-200 py-2'>
      <span class='text-gray-500'>price</span>

        <span class='ml-auto text-gray-900'>${product.price}</span>
      </div>
      <div class='flex border-t border-gray-200 py-2'>
        <span class='text-gray-500'>port charge</span>
        <span class='ml-auto text-gray-900'>$100</span>
      </div>
      <div class='flex border-t border-gray-200 py-2'>
        <span class='text-gray-500'>Service Fee</span>
        <span class='ml-auto text-gray-900'>$21</span>
      </div>
      <div class='flex border-t border-b mb-6 border-gray-200 py-2'>
        <span class='text-gray-900 font-bold'>Total</span>
        <span class='ml-auto text-gray-900'>${total}</span>
      </div>
    </div>
  )
}

export default CheckoutCart
