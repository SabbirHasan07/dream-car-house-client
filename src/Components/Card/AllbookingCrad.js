
import React, { useState } from 'react'

const AllbookingCrad = ({bk}) => {
    const book =  bk.booking;
    console.log(book);
  
   

    const handleDelete = (id) => {
      console.log(id);
      fetch(`http://localhost:8000/book/${id}`, {
          method: 'DELETE'
      })
          .then(res => res.json())
          .then(data => {
              const productData = data.data.booking
             console.log(productData)
              
          })
  }
    return (
        <div>
             <div className='py-8'>
        <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
          <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
            <table className='min-w-full leading-normal'>
              <thead>
                <tr>
                  <th
                    scope='col'
                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                  >
                    Title
                  </th>
                  <th
                    scope='col'
                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                  >
                    Location
                  </th>
                  <th
                    scope='col'
                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                  >
                    Price
                  </th>
                  <th
                    scope='col'
                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                  >
                    Date
                  </th>
                  
                  <th
                    scope='col'
                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                  >
                    Action
                  </th>
                 
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <div className='flex items-center'>
                      <div className='flex-shrink-0'>
                        <div className='block relative'>
                          <img
                            alt='profile'
                            src={book?.image}
                            className='mx-auto object-cover rounded h-10 w-15 '
                          />
                        </div>
                      </div>
                      <div className='ml-3'>
                        <p className='text-gray-900 whitespace-no-wrap'>
                          {book?.brandName}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <p className='text-gray-900 whitespace-no-wrap'>
                      {book?.location}
                    </p>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <p className='text-gray-900 whitespace-no-wrap'>${book?.price}</p>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <p className='text-gray-900 whitespace-no-wrap'>{book?.date}</p>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <button onClick={()=>handleDelete(book._pid)} className='btn'>Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
        </div>
    );
};

export default AllbookingCrad;